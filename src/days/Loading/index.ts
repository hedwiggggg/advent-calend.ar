import { Day } from "../types";
import { loadImage } from "../helper";

import bNgqbpqOShoQqXtmncgWNLN from './frames/frame_0000.jpg';
import UipcnGQXTkwPXOgLAZMCDo0 from './frames/frame_0001.jpg';
import fXnMPlxtoyTUncCMfuXsIxy from './frames/frame_0002.jpg';
import cWLCGgySQbWThOAaPnlRuhM from './frames/frame_0003.jpg';
import dBfWiqWcyLzYObtFQqrDkMH from './frames/frame_0004.jpg';
import eYSaeAtZwJwkPqVGGzTdLFz from './frames/frame_0005.jpg';
import dabqteZdpmNATyrWQfqGOnf from './frames/frame_0006.jpg';
import cyRkIFEbUnjpJlSqQzuJtSo from './frames/frame_0007.jpg';
import dxfMkqgYPVVrHbZqyzAkRGa from './frames/frame_0008.jpg';

export default class Loading extends Day {
  public static __hash = "BReGMADCfQjVzBOyywjpgC0";
  public static __name = "Loading";

  public static framesPromises = [
    loadImage(bNgqbpqOShoQqXtmncgWNLN),
    loadImage(UipcnGQXTkwPXOgLAZMCDo0),
    loadImage(fXnMPlxtoyTUncCMfuXsIxy),
    loadImage(cWLCGgySQbWThOAaPnlRuhM),
    loadImage(dBfWiqWcyLzYObtFQqrDkMH),
    loadImage(eYSaeAtZwJwkPqVGGzTdLFz),
    loadImage(dabqteZdpmNATyrWQfqGOnf),
    loadImage(cyRkIFEbUnjpJlSqQzuJtSo),
    loadImage(dxfMkqgYPVVrHbZqyzAkRGa),
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
