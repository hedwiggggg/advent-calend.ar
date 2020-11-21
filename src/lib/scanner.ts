import { RefObject, useEffect, useState } from "react";
import EventEmitter from "eventemitter3";

import { coverFit, roundedRectangle } from "./helper";
import { transform2d } from "./matrix";

import gifts from 'src/gifts';
import Loading from 'src/gifts/Loading'
import { Gift, GiftImport } from 'src/gifts/types';

// eslint-disable-next-line import/no-webpack-loader-syntax
import createScanWorker from "workerize-loader!./scan.worker";
import type * as ScanWorker from "./scan.worker";
import type { Symbol } from "zbar.wasm";

import "webrtc-adapter";

export enum Errors {
  ScanStopped,
  ScanTimeout,
}

type BindProps = {
  canvasVideo: HTMLCanvasElement;
  canvasOverlay: HTMLCanvasElement;
  setGift: React.Dispatch<React.SetStateAction<typeof Gift | null>>;
};

class Scanner extends EventEmitter {
  private static scanWorker = createScanWorker<typeof ScanWorker>();
  private static video = document.createElement("video");

  private static getStream?: Promise<MediaStream>;
  private static stream?: MediaStream;

  private static contextVideo?: CanvasRenderingContext2D;
  private static contextOverlay?: CanvasRenderingContext2D;

  private static fpsVideo = 1000 / 30;
  private static fpsScanner = 1000 / 10;

  private static thenVideo = Date.now();
  private static thenScanner = Date.now();

  private static stopped = true;
  private static symbol?: Symbol;

  private static currentGift?: typeof Gift;
  private static currentGiftImport?: () => GiftImport;
  private static setGift?: React.Dispatch<React.SetStateAction<typeof Gift | null>>;

  static async start() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (context === null) return;

    await Loading.init();

    Scanner.stopped = false;    
    Scanner.getStream = navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: "environment" } },
      audio: false
    });

    Scanner.stream = await Scanner.getStream;
    Scanner.video.srcObject = Scanner.stream;
    Scanner.video.play();

    window.addEventListener("resize", Scanner.resize);

    Scanner.drawVideo();
    Scanner.scan();
  }

  static async stop() {
    window.removeEventListener("resize", Scanner.resize);
    Scanner.stopped = true;    

    await Scanner.getStream;
    Scanner.stream?.getTracks().forEach((t) => t.stop());
  }

  private static drawVideo() {
    if (Scanner.stopped) return;

    const now = Date.now();
    const elapsed = now - Scanner.thenVideo;

    requestAnimationFrame(Scanner.drawVideo);
    if (elapsed < Scanner.fpsVideo) return;
    if (Scanner.contextVideo === undefined) return;
    if (Scanner.contextOverlay === undefined) return;

    Scanner.thenVideo = Date.now();

    {
      const { x, y, w, h } = coverFit(
        Scanner.video.videoWidth,
        Scanner.video.videoHeight,
        Scanner.contextVideo.canvas.width,
        Scanner.contextVideo.canvas.height,
      );
  
      Scanner.contextVideo.drawImage(Scanner.video, x, y, w, h);
    }

    const scanX = (Scanner.contextVideo.canvas.width - 300) / 2;
    const scanY = (Scanner.contextVideo.canvas.height - 300) / 2;

    Scanner.contextVideo.strokeStyle = "#ffffff";
    Scanner.contextVideo.lineWidth = 3;
    Scanner.contextVideo.beginPath();

    roundedRectangle(
      Scanner.contextVideo, {
      h: 300,
      w: 300,
      r: 15,
      x: scanX,
      y: scanY,
    });

    Scanner.contextVideo.stroke();

    if (Scanner.symbol) {
      const [a, b, c, d] = [...Scanner.symbol.points].map(
        (p) => ({
          x: p.x + scanX,
          y: p.y + scanY
        })
      );

      const caW = Scanner.contextOverlay.canvas.width;
      const caH = Scanner.contextOverlay.canvas.height;

      const matrix = transform2d(
        caW, caH,
        a.x, a.y,
        d.x, d.y,
        b.x, b.y,
        c.x, c.y,
      );
  
      Scanner.contextOverlay.canvas.style.opacity = '1';
      Scanner.contextOverlay.canvas.style.transform = `matrix3d(${matrix.join(', ')})`;

      if (Scanner.currentGift) {
        const frame = Scanner.currentGift.getFrame();
        const { x, y, w, h } = coverFit(
          frame.width,
          frame.height,
          Scanner.contextOverlay.canvas.width,
          Scanner.contextOverlay.canvas.height,
        );      
    
        Scanner.contextOverlay.drawImage(frame, x, y, w, h);  
      }
    } else {
      Scanner.contextOverlay.canvas.style.opacity = '0';
    }
  }

  private static resize() {
    if (Scanner.contextVideo === undefined) return;
    if (Scanner.contextOverlay === undefined) return;

    Scanner.contextVideo.canvas.width = window.innerWidth;
    Scanner.contextVideo.canvas.height = window.innerHeight;
    Scanner.contextOverlay.canvas.width = 300;
    Scanner.contextOverlay.canvas.height = 300;
  }

  public static bind(props: BindProps) {
    const contextVideo = props.canvasVideo.getContext("2d");
    const contextOverlay = props.canvasOverlay.getContext("2d");
    if (contextVideo === null) throw new Error("contextVideo is null");
    if (contextOverlay === null) throw new Error("contextOverlay is null");

    Scanner.setGift = props.setGift;
    Scanner.contextVideo = contextVideo;
    Scanner.contextOverlay = contextOverlay;
    Scanner.resize();
  }

  public static scan = (
    () => new Promise<string>(
      (resolve, reject) => {  
        let failCounter = 0;

        const decoder = new TextDecoder();
        const updateGift = (symbol: Symbol) => {
          const dataString = decoder.decode(symbol.data);
          const newGiftImport = gifts[dataString];

          const isNewGift = (
            typeof newGiftImport !== "undefined"
            && Scanner.currentGiftImport !== newGiftImport
            && Scanner.currentGift !== Loading
          );

          Scanner.symbol = symbol;

          if (isNewGift) {
            Scanner.currentGift = Loading;
            Scanner.currentGiftImport = newGiftImport;

            newGiftImport()
              .then((gift) => gift)
              .then(
                async (giftImport) => {
                  const NewGift = giftImport.default;

                  await NewGift.init();
                  await sleep(500); 

                  if (Scanner.setGift) {
                    Scanner.currentGift = NewGift;
                    Scanner.setGift(() => NewGift);
                  }
                }
              );
          }

          failCounter = 0;
        }

        const resetGift = () => {
          if (failCounter >= 5) {
            if (Scanner.setGift) {
              Scanner.currentGiftImport = undefined;
              Scanner.currentGift = undefined;
              Scanner.setGift(null);
            }
            
            Scanner.symbol = undefined;
          }

          failCounter++;
        }

        const doScan = async () => {
          if (Scanner.stopped) return reject(Errors.ScanStopped);

          const now = Date.now();
          const elapsed = now - Scanner.thenScanner;
        
          if (elapsed < Scanner.fpsScanner) return requestAnimationFrame(doScan);
          if (Scanner.contextVideo === undefined) return requestAnimationFrame(doScan);

          Scanner.thenScanner = Date.now();

          const canvas = Scanner.contextVideo.canvas;

          const scanX = (canvas.width - 300) / 2;
          const scanY = (canvas.height - 300) / 2;
          const scanImage = Scanner.contextVideo.getImageData(scanX, scanY, 300, 300);
          const symbols = await Scanner.scanWorker.scan(scanImage);

          if (symbols.length === 1) {
            const [symbol] = symbols;
            updateGift(symbol);
          } else {
            resetGift();
          }

          requestAnimationFrame(doScan);
        }

        doScan();
      }
    )
  );
}

const sleep = (ms: number): Promise<void> => (
  new Promise((resolve) => setTimeout(resolve, ms))
);

type CanvasRef = RefObject<HTMLCanvasElement>;

export default (
  function useScanner(canvasVideo: CanvasRef, canvasOverlay: CanvasRef) {
    const [gift, setGift] = useState<typeof Gift | null>(null);

    useEffect(() => {
      if (canvasVideo.current === null) return;
      if (canvasOverlay.current === null) return;
  
      Scanner.start();
      Scanner.bind({
        canvasVideo: canvasVideo.current,
        canvasOverlay: canvasOverlay.current,
        setGift: setGift,
      });
  
      return () => {
        Scanner.stop();
      }
    }, [canvasVideo, canvasOverlay]);
  
    return gift;
  }
);
