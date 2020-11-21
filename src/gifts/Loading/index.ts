import { Gift } from "../types";
import { loadImage } from "../helper";

import dXiqzMYQexvSEjjXcffVzUQ from 'src/assets/loading/frame_0.png';
import dalmAsbEPWwhjAWppwnEsdB from 'src/assets/loading/frame_1.png';
import vAjZJzeSReyylpriMAACXB from 'src/assets/loading/frame_2.png';
import dGCnMtTeLsnfBJGnNUsUtjI from 'src/assets/loading/frame_3.png';
import cbUlzFMbEoBRVwAySDFpSgB from 'src/assets/loading/frame_4.png';
import dkOipVyhINaRzOYEWsmNzzl from 'src/assets/loading/frame_5.png';
import cIyiDPXaYvilxWLWaNVGXfJ from 'src/assets/loading/frame_6.png';
import dnynaYVExCRHReIKXJTTwve from 'src/assets/loading/frame_7.png';
import cmLKNBeYZjJGrgLzGVLHitJ from 'src/assets/loading/frame_8.png';

export default class Loading extends Gift {
  private static framesPromises = [
    loadImage(dXiqzMYQexvSEjjXcffVzUQ),
    loadImage(dalmAsbEPWwhjAWppwnEsdB),
    loadImage(vAjZJzeSReyylpriMAACXB),
    loadImage(dGCnMtTeLsnfBJGnNUsUtjI),
    loadImage(cbUlzFMbEoBRVwAySDFpSgB),
    loadImage(dkOipVyhINaRzOYEWsmNzzl),
    loadImage(cIyiDPXaYvilxWLWaNVGXfJ),
    loadImage(dnynaYVExCRHReIKXJTTwve),
    loadImage(cmLKNBeYZjJGrgLzGVLHitJ),
  ];

  private static frames: Array<HTMLImageElement> = [];
  private static currentFrame: number = 0;

  private static fps = 1000 / 20;
  private static last = 0;

  public static async init() {
    if (Loading.frames.length === 0) {
      await Loading.loadFrames();
    }
  }

  private static async loadFrames() {
    Loading.frames = await Promise.all(Loading.framesPromises);
  }

  public static getFrame(): HTMLImageElement {
    const now = Date.now();
    const elapsed = now - Loading.last;

    if (elapsed < Loading.fps) return Loading.frames[Loading.currentFrame];

    Loading.last = now;
    Loading.currentFrame = (Loading.currentFrame + 1) % Loading.frames.length;

    return Loading.frames[Loading.currentFrame];
  }
}
