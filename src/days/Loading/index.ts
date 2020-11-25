import { Day } from "../types";
import { loadImage } from "../helper";

import eJsKUTRcYSEFfABxBJrzKKe from './frames/frame_000.jpg';
import fjDvshmAAVOOTRvytkckAkN from './frames/frame_001.jpg';
import dyTQucXIPtHdBvmOnYBiKIY from './frames/frame_002.jpg';
import fyygFoXLlHJQreuoXZuNDhe from './frames/frame_003.jpg';
import vcTESVVbbPgeVyPxyEdnaA0 from './frames/frame_004.jpg';
import eSccGUyFGTpwJpNPfQUBnUL from './frames/frame_005.jpg';
import cbRUgnbjsZINRtRKOheHqOZ from './frames/frame_006.jpg';
import dLZzKoXJhsWJSUYjRVVGaYr from './frames/frame_007.jpg';
import dPnajTNsSFWYIZPtpwSbWnG from './frames/frame_008.jpg';

export default class Loading extends Day {
  public static framesPromises = [
    loadImage(eJsKUTRcYSEFfABxBJrzKKe),
    loadImage(fjDvshmAAVOOTRvytkckAkN),
    loadImage(dyTQucXIPtHdBvmOnYBiKIY),
    loadImage(fyygFoXLlHJQreuoXZuNDhe),
    loadImage(vcTESVVbbPgeVyPxyEdnaA0),
    loadImage(eSccGUyFGTpwJpNPfQUBnUL),
    loadImage(cbRUgnbjsZINRtRKOheHqOZ),
    loadImage(dLZzKoXJhsWJSUYjRVVGaYr),
    loadImage(dPnajTNsSFWYIZPtpwSbWnG),
  ];

  private static frames: HTMLImageElement[];
  private static currentFrame: number = 0;

  private static fps = 1000 / 20;
  private static last = 0;

  public static async init() {
    if (Loading.frames === undefined) {
      await Loading.loadFrames();
    }
  }

  private static async loadFrames() {
    Loading.frames = await Promise.all(Loading.framesPromises);
  }

  public static getFrame() {    
    const now = Date.now();
    const elapsed = now - Loading.last;

    if (elapsed >= Loading.fps) {
      Loading.last = now;
      Loading.currentFrame = (Loading.currentFrame + 1) % Loading.frames.length;
    }

    return Loading.frames[Loading.currentFrame];
  }
}
