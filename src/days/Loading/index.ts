import { Day } from "../types";
import { loadImage } from "../helper";

import sprites from './sprites.jpg';
import spritesData from './sprites_data.json';

export default class Loading extends Day {
  public static __hash = "BReGMADCfQjVzBOyywjpgC0";
  public static __name = "Loading";

  private static framesSpritePromise = loadImage(sprites);
  private static framesSprite: HTMLImageElement;
  private static framesCanvas = document.createElement('canvas');
  private static framesContext = Loading.framesCanvas.getContext('2d');

  private static currentFrame: number = 0;

  private static fps = 1000 / 20;
  private static last = 0;

  public static async init() {
    if (Loading.framesSprite === undefined) {
      await Loading.loadFrames();
    }
  }

  private static async loadFrames() {
    Loading.framesSprite = await Loading.framesSpritePromise;
  }

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
}
