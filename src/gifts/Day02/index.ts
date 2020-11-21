import preval from 'preval.macro';

import { Gift } from "../types";
import { loadImage } from "../helper";

import qrCode from './qr-code.png';

import cWJgomMpRyOyZBJVLwowEOp from 'src/assets/day_02/frame_02_delay-0.069s.png';
import CdlVwjaawiEbFCGZQeRHiM from 'src/assets/day_02/frame_03_delay-0.07s.png';
import bjwuQIYnYXcWzsQSKrSRMXI from 'src/assets/day_02/frame_04_delay-0.07s.png';
import dWllwtHTtIBPEoRAPJxzatA from 'src/assets/day_02/frame_05_delay-0.07s.png';
import attwjQEkhDDAqRtRZYJpnBZ from 'src/assets/day_02/frame_06_delay-0.07s.png';
import eQkmGIbGGfWFThDhegauyqm from 'src/assets/day_02/frame_07_delay-0.07s.png';
import fIWWUHkEqXheadLvPoMseYs from 'src/assets/day_02/frame_08_delay-0.07s.png';
import bXNsDtfWgRZhqtrkzcGkQZJ from 'src/assets/day_02/frame_09_delay-0.07s.png';
import eDOmPxVMPhzWWmuTAnKSiGj from 'src/assets/day_02/frame_10_delay-0.07s.png';
import fvbxjQBpwpJHNeewayTSxBk from 'src/assets/day_02/frame_11_delay-0.07s.png';
import STBPvjoBwtmkSqDQJbLEjZ from 'src/assets/day_02/frame_12_delay-0.07s.png';
import aaTCYhkSZGimFSuiHEwTpWW from 'src/assets/day_02/frame_13_delay-0.07s.png';
import ddmAVBthuLGpTvQOamcwSDR from 'src/assets/day_02/frame_14_delay-0.07s.png';
import fQZgQGalkGyjhZpWtGHSzgm from 'src/assets/day_02/frame_15_delay-0.07s.png';
import eEzWIPacMznilViJcDsTEaY from 'src/assets/day_02/frame_16_delay-0.069s.png';

export default class Day02 implements Gift {
  public static qrCode = qrCode;
  public static content = preval`
    const marked = require('marked');
    const twemoji = require('twemoji');
    const path = require('path');
    const fs = require('fs');

    const markdownPath = path.join(__dirname, 'content.md');
    const markdown = fs.readFileSync(markdownPath, 'utf-8')

    const $html = marked(markdown);
    const html = twemoji.parse($html);

    module.exports = html;
  `;

  private static framesPromises = [
    loadImage(cWJgomMpRyOyZBJVLwowEOp),
    loadImage(CdlVwjaawiEbFCGZQeRHiM),
    loadImage(bjwuQIYnYXcWzsQSKrSRMXI),
    loadImage(dWllwtHTtIBPEoRAPJxzatA),
    loadImage(attwjQEkhDDAqRtRZYJpnBZ),
    loadImage(eQkmGIbGGfWFThDhegauyqm),
    loadImage(fIWWUHkEqXheadLvPoMseYs),
    loadImage(bXNsDtfWgRZhqtrkzcGkQZJ),
    loadImage(eDOmPxVMPhzWWmuTAnKSiGj),
    loadImage(fvbxjQBpwpJHNeewayTSxBk),
    loadImage(STBPvjoBwtmkSqDQJbLEjZ),
    loadImage(aaTCYhkSZGimFSuiHEwTpWW),
    loadImage(ddmAVBthuLGpTvQOamcwSDR),
    loadImage(fQZgQGalkGyjhZpWtGHSzgm),
    loadImage(eEzWIPacMznilViJcDsTEaY),
  ];

  private static frames: Array<HTMLImageElement> = [];
  private static currentFrame: number = 0;

  private static fps = 1000 / 20;
  private static last = 0;

  public static async init() {
    if (Day02.frames.length === 0) {
      await Day02.loadFrames();
    }
  }

  private static async loadFrames() {
    Day02.frames = await Promise.all(Day02.framesPromises);
  }

  public static getFrame(): HTMLImageElement {
    const now = Date.now();
    const elapsed = now - Day02.last;

    if (elapsed < Day02.fps) return Day02.frames[Day02.currentFrame];

    Day02.last = now;
    Day02.currentFrame = (Day02.currentFrame + 1) % Day02.frames.length;

    return Day02.frames[Day02.currentFrame];
  }
}
