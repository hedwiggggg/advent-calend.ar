// ! DO NOT EDIT !
// file generated by `hygen day new` command
// 
// generation timestamp: 1606057455729

import { Day } from "../types";
import { loadImage } from "../helper";

import qrCode from './qr-code.png';

import eJuyjPLeMkwJmtaJeyTSBzB from 'src/assets/day_10/frame_00_delay-0.1s.gif';
import eaqkyITPCmOxrUCrBStxQbL from 'src/assets/day_10/frame_01_delay-0.1s.gif';
import booefBeVKDkCWYyOudYSvGy from 'src/assets/day_10/frame_02_delay-0.1s.gif';
import fXSPfbrrSgamMiGKvqtiNDu from 'src/assets/day_10/frame_03_delay-0.1s.gif';
import AuGAsuWNJgjGwGMFJoDiFE0 from 'src/assets/day_10/frame_04_delay-0.1s.gif';
import eDtoYCtbSxecntJcVKlMPIk from 'src/assets/day_10/frame_05_delay-0.1s.gif';
import dLDgwQutTNPwkfTPwMRcejp from 'src/assets/day_10/frame_06_delay-0.1s.gif';
import boIWCQuyyhBiehrPEgTxxan from 'src/assets/day_10/frame_07_delay-0.1s.gif';
import dmevSFmWpfcFIhZPPZdstHA from 'src/assets/day_10/frame_08_delay-0.1s.gif';
import fkjgmFxEgvlYaccVXikQQtY from 'src/assets/day_10/frame_09_delay-0.1s.gif';
import dUiiaTJSBYKkZiJOfRBTGGt from 'src/assets/day_10/frame_10_delay-0.1s.gif';
import comIytyIyuZGImRqwjlCCWY from 'src/assets/day_10/frame_11_delay-0.1s.gif';
import MbBARBkfHXpvRDKrPcgYsM0 from 'src/assets/day_10/frame_12_delay-0.1s.gif';
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



export default class Day10 extends Day {
  public static hash = "fgJUESWuWJGueeIUKeBPIHw";
  public static qrCode = qrCode;

  
  public static content = async () => {
    const marked = (await import('marked')).default;
    const twemoji = (await import('twemoji')).default;
    const contentUrl = (await import('./content.md')).default;

    const contentRes = await fetch(contentUrl);
    const content = await contentRes.text();
    const _html = marked(content);
    const html = twemoji.parse(_html);

    return html;
  };
  

  private static framesPromises = [
    loadImage(eJuyjPLeMkwJmtaJeyTSBzB),
    loadImage(eaqkyITPCmOxrUCrBStxQbL),
    loadImage(booefBeVKDkCWYyOudYSvGy),
    loadImage(fXSPfbrrSgamMiGKvqtiNDu),
    loadImage(AuGAsuWNJgjGwGMFJoDiFE0),
    loadImage(eDtoYCtbSxecntJcVKlMPIk),
    loadImage(dLDgwQutTNPwkfTPwMRcejp),
    loadImage(boIWCQuyyhBiehrPEgTxxan),
    loadImage(dmevSFmWpfcFIhZPPZdstHA),
    loadImage(fkjgmFxEgvlYaccVXikQQtY),
    loadImage(dUiiaTJSBYKkZiJOfRBTGGt),
    loadImage(comIytyIyuZGImRqwjlCCWY),
    loadImage(MbBARBkfHXpvRDKrPcgYsM0),
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
