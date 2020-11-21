import preval from 'preval.macro';

import { Gift } from "../types";
import { loadImage } from "../helper";

import qrCode from './qr-code.png';

import eJuyjPLeMkwJmtaJeyTSBzB from 'src/assets/day_10/frame_00_delay-0.1s.gif';
import eaqkyITPCmOxrUCrBStxQbL from 'src/assets/day_10/frame_01_delay-0.1s.gif';
import booefBeVKDkCWYyOudYSvGy from 'src/assets/day_10/frame_02_delay-0.1s.gif';
import fXSPfbrrSgamMiGKvqtiNDu from 'src/assets/day_10/frame_03_delay-0.1s.gif';
import AuGAsuWNJgjGwGMFJoDiFE from 'src/assets/day_10/frame_04_delay-0.1s.gif';
import eDtoYCtbSxecntJcVKlMPIk from 'src/assets/day_10/frame_05_delay-0.1s.gif';
import dLDgwQutTNPwkfTPwMRcejp from 'src/assets/day_10/frame_06_delay-0.1s.gif';
import boIWCQuyyhBiehrPEgTxxan from 'src/assets/day_10/frame_07_delay-0.1s.gif';
import dmevSFmWpfcFIhZPPZdstHA from 'src/assets/day_10/frame_08_delay-0.1s.gif';
import fkjgmFxEgvlYaccVXikQQtY from 'src/assets/day_10/frame_09_delay-0.1s.gif';
import dUiiaTJSBYKkZiJOfRBTGGt from 'src/assets/day_10/frame_10_delay-0.1s.gif';
import comIytyIyuZGImRqwjlCCWY from 'src/assets/day_10/frame_11_delay-0.1s.gif';
import MbBARBkfHXpvRDKrPcgYsM from 'src/assets/day_10/frame_12_delay-0.1s.gif';
import cAPaVMAMEcPQFAKbGGDCOEX from 'src/assets/day_10/frame_13_delay-0.1s.gif';
import bxfAdxnippAOSIwPhSjrezg from 'src/assets/day_10/frame_14_delay-0.1s.gif';
import fmkxVWgxfyptSFYUKYfFxrB from 'src/assets/day_10/frame_15_delay-0.1s.gif';
import bDWCzNnhiaoKEjFVpDfSvjN from 'src/assets/day_10/frame_16_delay-0.1s.gif';
import dbLjuLQSotpLzKNvyONdxwY from 'src/assets/day_10/frame_17_delay-0.1s.gif';
import fqXURCtiqKgSRldWeNGnqyt from 'src/assets/day_10/frame_18_delay-0.1s.gif';
import bkjlaqmZyfhyqRnzragMHDJ from 'src/assets/day_10/frame_19_delay-0.1s.gif';
import eRoREVxLcUCoYVGTOpYVyKE from 'src/assets/day_10/frame_20_delay-0.1s.gif';
import egktbMGlfxlSANHwYrraByC from 'src/assets/day_10/frame_21_delay-0.1s.gif';
import bRImOXUkVmxxeaQOruuNlUj from 'src/assets/day_10/frame_22_delay-0.1s.gif';

export default class Day10 extends Gift {
  public static hash = "fgJUESWuWJGueeIUKeBPIHw";
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
    loadImage(eJuyjPLeMkwJmtaJeyTSBzB),
    loadImage(eaqkyITPCmOxrUCrBStxQbL),
    loadImage(booefBeVKDkCWYyOudYSvGy),
    loadImage(fXSPfbrrSgamMiGKvqtiNDu),
    loadImage(AuGAsuWNJgjGwGMFJoDiFE),
    loadImage(eDtoYCtbSxecntJcVKlMPIk),
    loadImage(dLDgwQutTNPwkfTPwMRcejp),
    loadImage(boIWCQuyyhBiehrPEgTxxan),
    loadImage(dmevSFmWpfcFIhZPPZdstHA),
    loadImage(fkjgmFxEgvlYaccVXikQQtY),
    loadImage(dUiiaTJSBYKkZiJOfRBTGGt),
    loadImage(comIytyIyuZGImRqwjlCCWY),
    loadImage(MbBARBkfHXpvRDKrPcgYsM),
    loadImage(cAPaVMAMEcPQFAKbGGDCOEX),
    loadImage(bxfAdxnippAOSIwPhSjrezg),
    loadImage(fmkxVWgxfyptSFYUKYfFxrB),
    loadImage(bDWCzNnhiaoKEjFVpDfSvjN),
    loadImage(dbLjuLQSotpLzKNvyONdxwY),
    loadImage(fqXURCtiqKgSRldWeNGnqyt),
    loadImage(bkjlaqmZyfhyqRnzragMHDJ),
    loadImage(eRoREVxLcUCoYVGTOpYVyKE),
    loadImage(egktbMGlfxlSANHwYrraByC),
    loadImage(bRImOXUkVmxxeaQOruuNlUj),
  ];

  private static frames: Array<HTMLImageElement> = [];
  private static currentFrame: number = 0;

  private static fps = 1000 / 20;
  private static last = 0;

  public static async init() {
    if (Day10.frames.length === 0) {
      await Day10.loadFrames();
    }
  }

  private static async loadFrames() {
    Day10.frames = await Promise.all(Day10.framesPromises);
  }

  public static getFrame(): HTMLImageElement {
    const now = Date.now();
    const elapsed = now - Day10.last;

    if (elapsed < Day10.fps) return Day10.frames[Day10.currentFrame];

    Day10.last = now;
    Day10.currentFrame = (Day10.currentFrame + 1) % Day10.frames.length;

    return Day10.frames[Day10.currentFrame];
  }
}
