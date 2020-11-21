import preval from 'preval.macro';

import { Gift } from "../types";
import { loadImage } from "../helper";

import qrCode from './qr-code.png';

import cTLBVqjjgQjkwvyliYKYqMO from 'src/assets/day_01/frame_02_delay-0.07s.png';
import eZgOoespmYcTIvBuUIrJaCw from 'src/assets/day_01/frame_03_delay-0.07s.png';
import cbTrdENKLNtRblzlyQPnwFL from 'src/assets/day_01/frame_04_delay-0.07s.png';
import blinoqgjmNrBAhCUtFqpLml from 'src/assets/day_01/frame_05_delay-0.07s.png';
import uBhVDsGdfcvDMWaQLXARJq from 'src/assets/day_01/frame_06_delay-0.07s.png';
import cryuUfteHVLpJBcSXazlNSC from 'src/assets/day_01/frame_07_delay-0.07s.png';
import bCjtYnZlhspKwPVPrGbFaHa from 'src/assets/day_01/frame_08_delay-0.07s.png';
import NTOaBQLbHOtnwKskrlhZbl from 'src/assets/day_01/frame_09_delay-0.07s.png';
import dgyrbITWBJnsumAOtOXgFwd from 'src/assets/day_01/frame_10_delay-0.07s.png';
import cCiZrnRfKsnLuvkTCPJruJS from 'src/assets/day_01/frame_11_delay-0.07s.png';
import cCXcyXgdRWfWeawYNTHiCCv from 'src/assets/day_01/frame_12_delay-0.07s.png';
import bEOVYbLcfUQPKKhnQMQaNOM from 'src/assets/day_01/frame_13_delay-0.07s.png';
import dXvveqiJdwOgKmlovZflcnz from 'src/assets/day_01/frame_14_delay-0.07s.png';
import dioHUNbWZBTzarRmncztUvt from 'src/assets/day_01/frame_15_delay-0.07s.png';
import asLQNteZSCOevTVjqMcFatH from 'src/assets/day_01/frame_16_delay-0.07s.png';
import fTvAbpNuoqFuhIdwboHiSho from 'src/assets/day_01/frame_17_delay-0.07s.png';
import eXfblnChtRDQAcnDqopYhql from 'src/assets/day_01/frame_18_delay-0.07s.png';
import caHoexdmogEGrgFqrqsrwEE from 'src/assets/day_01/frame_19_delay-0.07s.png';
import dJKzLpirhGqtdAxhQMFzAfF from 'src/assets/day_01/frame_20_delay-0.07s.png';
import afQZSIpOQJOLmNcMIrAwCqR from 'src/assets/day_01/frame_21_delay-0.07s.png';
import dQtzCaujAkSlARPowyoABBV from 'src/assets/day_01/frame_22_delay-0.07s.png';
import FdbWEZDGBzwgbrWKYIQLDX from 'src/assets/day_01/frame_23_delay-0.07s.png';
import bWlkyZZAZbLlOzgwcBnJVTH from 'src/assets/day_01/frame_24_delay-0.07s.png';

export default class Day01 implements Gift {
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
    loadImage(cTLBVqjjgQjkwvyliYKYqMO),
    loadImage(eZgOoespmYcTIvBuUIrJaCw),
    loadImage(cbTrdENKLNtRblzlyQPnwFL),
    loadImage(blinoqgjmNrBAhCUtFqpLml),
    loadImage(uBhVDsGdfcvDMWaQLXARJq),
    loadImage(cryuUfteHVLpJBcSXazlNSC),
    loadImage(bCjtYnZlhspKwPVPrGbFaHa),
    loadImage(NTOaBQLbHOtnwKskrlhZbl),
    loadImage(dgyrbITWBJnsumAOtOXgFwd),
    loadImage(cCiZrnRfKsnLuvkTCPJruJS),
    loadImage(cCXcyXgdRWfWeawYNTHiCCv),
    loadImage(bEOVYbLcfUQPKKhnQMQaNOM),
    loadImage(dXvveqiJdwOgKmlovZflcnz),
    loadImage(dioHUNbWZBTzarRmncztUvt),
    loadImage(asLQNteZSCOevTVjqMcFatH),
    loadImage(fTvAbpNuoqFuhIdwboHiSho),
    loadImage(eXfblnChtRDQAcnDqopYhql),
    loadImage(caHoexdmogEGrgFqrqsrwEE),
    loadImage(dJKzLpirhGqtdAxhQMFzAfF),
    loadImage(afQZSIpOQJOLmNcMIrAwCqR),
    loadImage(dQtzCaujAkSlARPowyoABBV),
    loadImage(FdbWEZDGBzwgbrWKYIQLDX),
    loadImage(bWlkyZZAZbLlOzgwcBnJVTH),
  ];

  private static frames: Array<HTMLImageElement> = [];
  private static currentFrame: number = 0;

  private static fps = 1000 / 20;
  private static last = 0;

  public static async init() {
    if (Day01.frames.length === 0) {
      await Day01.loadFrames();
    }
  }

  private static async loadFrames() {
    Day01.frames = await Promise.all(Day01.framesPromises);
  }

  public static getFrame(): HTMLImageElement {
    const now = Date.now();
    const elapsed = now - Day01.last;

    if (elapsed < Day01.fps) return Day01.frames[Day01.currentFrame];

    Day01.last = now;
    Day01.currentFrame = (Day01.currentFrame + 1) % Day01.frames.length;

    return Day01.frames[Day01.currentFrame];
  }
}
