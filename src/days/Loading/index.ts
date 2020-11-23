import { Day } from "../types";
import { loadImage } from "../helper";

import qrCode from './qr-code.png';

/*
import dXiqzMYQexvSEjjXcffVzUQ from 'src/assets/loading/frame_0.png';
import dalmAsbEPWwhjAWppwnEsdB from 'src/assets/loading/frame_1.png';
import vAjZJzeSReyylpriMAACXB0 from 'src/assets/loading/frame_2.png';
import dGCnMtTeLsnfBJGnNUsUtjI from 'src/assets/loading/frame_3.png';
import cbUlzFMbEoBRVwAySDFpSgB from 'src/assets/loading/frame_4.png';
import dkOipVyhINaRzOYEWsmNzzl from 'src/assets/loading/frame_5.png';
import cIyiDPXaYvilxWLWaNVGXfJ from 'src/assets/loading/frame_6.png';
import dnynaYVExCRHReIKXJTTwve from 'src/assets/loading/frame_7.png';
import cmLKNBeYZjJGrgLzGVLHitJ from 'src/assets/loading/frame_8.png';
*/

import sprites from './sprites.png';
import spritesData from './sprites_data.json';


import marked from 'marked';
import twemoji from 'twemoji';
import contentMdUrl from './content.md';


export default class Loading extends Day {
  public static __hash = "BReGMADCfQjVzBOyywjpgC0";
  public static __name = "Loading";

  public static __qrCode = qrCode;

  
  public static __content = async () => {
    const contentRes = await fetch(contentMdUrl);
    const content = await contentRes.text();
    const _html = marked(content);
    const html = twemoji.parse(_html);

    return html;
  };
  

  /*
  private static framesSprite = loadImage(sprites);

  private static framesPromises = [
    loadImage(dXiqzMYQexvSEjjXcffVzUQ),
    loadImage(dalmAsbEPWwhjAWppwnEsdB),
    loadImage(vAjZJzeSReyylpriMAACXB0),
    loadImage(dGCnMtTeLsnfBJGnNUsUtjI),
    loadImage(cbUlzFMbEoBRVwAySDFpSgB),
    loadImage(dkOipVyhINaRzOYEWsmNzzl),
    loadImage(cIyiDPXaYvilxWLWaNVGXfJ),
    loadImage(dnynaYVExCRHReIKXJTTwve),
    loadImage(cmLKNBeYZjJGrgLzGVLHitJ),
  ];

  private static frames: Array<HTMLImageElement> = [];
  private static currentFrame: number = 0;
  */

  private static framesSpritePromise = loadImage(sprites);
  private static framesSprite: HTMLImageElement;
  private static framesCanvas = document.createElement('canvas');
  private static framesContext = Loading.framesCanvas.getContext('2d');

  private static currentFrame: number = 0;

  private static fps = 1000 / 20;
  private static last = 0;

  /*
  public static async init() {
    if (Loading.frames.length === 0) {
      await Loading.loadFrames();
    }
  }
  */

  public static async init() {
    if (Loading.framesSprite === undefined) {
      await Loading.loadFrames();
    }
  }

  private static async loadFrames() {
    Loading.framesSprite = await Loading.framesSpritePromise;
  }

  /*
  private static async loadFrames() {
    Loading.frames = await Promise.all(Loading.framesPromises);
  }
  */

  public static getFrame(): HTMLCanvasElement {
    if (Loading.framesContext === null) throw new Error("Loading.framesContext === null");
    
    const now = Date.now();
    const elapsed = now - Loading.last;

    if (elapsed >= Loading.fps) {
      Loading.last = now;
      Loading.currentFrame = (Loading.currentFrame + 1) % spritesData.length;

      const { x, y, width, height } = spritesData[Loading.currentFrame];

      Loading.framesCanvas.width = width;
      Loading.framesCanvas.height = height;

      Loading.framesContext.drawImage(
        Loading.framesSprite,
        x, y, width, height,
        0, 0, width, height,
      )
    }

    return Loading.framesCanvas;
  }

  /*
  public static getFrame(): HTMLImageElement {
    const now = Date.now();
    const elapsed = now - Loading.last;

    if (elapsed < Loading.fps) return Loading.frames[Loading.currentFrame];

    Loading.last = now;
    Loading.currentFrame = (Loading.currentFrame + 1) % Loading.frames.length;

    return Loading.frames[Loading.currentFrame];
  }
  */
}
