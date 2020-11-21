import preval from 'preval.macro';

import { Gift } from "../types";
import { loadImage } from "../helper";

import qrCode from './qr-code.png';

import erBnpLNAjNnSjSaNsbEqnxB from 'src/assets/day_12/frame_00_delay-0.07s.gif';
import bdIEngOisufdzYrQYCRexVh from 'src/assets/day_12/frame_01_delay-0.06s.gif';
import eaMyBcaBYdLCuhOsLQqBbxB from 'src/assets/day_12/frame_02_delay-0.07s.gif';
import evCnSgvSQoNNKkAAULwFOgC from 'src/assets/day_12/frame_03_delay-0.07s.gif';
import dcStXPyJlZKFQVBxpZuNeuz from 'src/assets/day_12/frame_04_delay-0.06s.gif';
import bjzvnuKkMAJMsUpZsDJvQoP from 'src/assets/day_12/frame_05_delay-0.07s.gif';
import RBEmeblPZhVJrUhloDSsUD from 'src/assets/day_12/frame_06_delay-0.07s.gif';
import ftDYQkqdDHgRXvRPrIeZfet from 'src/assets/day_12/frame_07_delay-0.06s.gif';
import FOxiyNIAuEDvIKhWhmsIMM from 'src/assets/day_12/frame_08_delay-0.07s.gif';
import doydBNstjEzDXvgDeMdgQdL from 'src/assets/day_12/frame_09_delay-0.07s.gif';
import cJMywPTGOBoWRNxzrihgHpf from 'src/assets/day_12/frame_10_delay-0.06s.gif';
import cVHZmODDRsMmgvYsrnXXrhQ from 'src/assets/day_12/frame_11_delay-0.07s.gif';
import gaRUChmycHYzglpBCXSfeUV from 'src/assets/day_12/frame_12_delay-0.07s.gif';
import dipcTgmwzchcoQQRJQIDErx from 'src/assets/day_12/frame_13_delay-0.06s.gif';
import bNbtzNFMjHTEPHJRHKxWCYM from 'src/assets/day_12/frame_14_delay-0.07s.gif';
import exrVIIXXNKdizcXcZsWKVQM from 'src/assets/day_12/frame_15_delay-0.07s.gif';
import cQEdHDCzJUSWyXQkwJZPVyq from 'src/assets/day_12/frame_16_delay-0.06s.gif';
import MmObQlBNBlSgdlOLZMBIce from 'src/assets/day_12/frame_17_delay-0.07s.gif';
import deAHSKbHskucUjMFMpkgIjV from 'src/assets/day_12/frame_18_delay-0.07s.gif';
import acHKHXowufloanGceyoiuRn from 'src/assets/day_12/frame_19_delay-0.06s.gif';
import bsdPtnFEXHwdQQyXYqDEEYB from 'src/assets/day_12/frame_20_delay-0.07s.gif';
import dFAIWAIqBsVZGWduonhZFsC from 'src/assets/day_12/frame_21_delay-0.07s.gif';
import amsgGgKPhjRpYODvMlHCGKz from 'src/assets/day_12/frame_22_delay-0.06s.gif';
import cpJLuyblaPJsnzSICpqzAMR from 'src/assets/day_12/frame_23_delay-0.07s.gif';
import fjufvWsLulXKPvjoUzlaqiS from 'src/assets/day_12/frame_24_delay-0.07s.gif';
import elzUwGzdtZBuldbEPxdjfEL from 'src/assets/day_12/frame_25_delay-0.06s.gif';
import cNrEXdXiksSVVrGlIcuQVDT from 'src/assets/day_12/frame_26_delay-0.07s.gif';
import bPFGfpsQPnYvHKdmczPaEar from 'src/assets/day_12/frame_27_delay-0.07s.gif';
import dEenkymoeHfNpuMPwtcAKpn from 'src/assets/day_12/frame_28_delay-0.06s.gif';
import NqNJpULohoLCoZeVVEbsDB from 'src/assets/day_12/frame_29_delay-0.06s.gif';

export default class Day12 implements Gift {
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
    loadImage(erBnpLNAjNnSjSaNsbEqnxB),
    loadImage(bdIEngOisufdzYrQYCRexVh),
    loadImage(eaMyBcaBYdLCuhOsLQqBbxB),
    loadImage(evCnSgvSQoNNKkAAULwFOgC),
    loadImage(dcStXPyJlZKFQVBxpZuNeuz),
    loadImage(bjzvnuKkMAJMsUpZsDJvQoP),
    loadImage(RBEmeblPZhVJrUhloDSsUD),
    loadImage(ftDYQkqdDHgRXvRPrIeZfet),
    loadImage(FOxiyNIAuEDvIKhWhmsIMM),
    loadImage(doydBNstjEzDXvgDeMdgQdL),
    loadImage(cJMywPTGOBoWRNxzrihgHpf),
    loadImage(cVHZmODDRsMmgvYsrnXXrhQ),
    loadImage(gaRUChmycHYzglpBCXSfeUV),
    loadImage(dipcTgmwzchcoQQRJQIDErx),
    loadImage(bNbtzNFMjHTEPHJRHKxWCYM),
    loadImage(exrVIIXXNKdizcXcZsWKVQM),
    loadImage(cQEdHDCzJUSWyXQkwJZPVyq),
    loadImage(MmObQlBNBlSgdlOLZMBIce),
    loadImage(deAHSKbHskucUjMFMpkgIjV),
    loadImage(acHKHXowufloanGceyoiuRn),
    loadImage(bsdPtnFEXHwdQQyXYqDEEYB),
    loadImage(dFAIWAIqBsVZGWduonhZFsC),
    loadImage(amsgGgKPhjRpYODvMlHCGKz),
    loadImage(cpJLuyblaPJsnzSICpqzAMR),
    loadImage(fjufvWsLulXKPvjoUzlaqiS),
    loadImage(elzUwGzdtZBuldbEPxdjfEL),
    loadImage(cNrEXdXiksSVVrGlIcuQVDT),
    loadImage(bPFGfpsQPnYvHKdmczPaEar),
    loadImage(dEenkymoeHfNpuMPwtcAKpn),
    loadImage(NqNJpULohoLCoZeVVEbsDB),
  ];

  private static frames: Array<HTMLImageElement> = [];
  private static currentFrame: number = 0;

  private static fps = 1000 / 20;
  private static last = 0;

  public static async init() {
    if (Day12.frames.length === 0) {
      await Day12.loadFrames();
    }
  }

  private static async loadFrames() {
    Day12.frames = await Promise.all(Day12.framesPromises);
  }

  public static getFrame(): HTMLImageElement {
    const now = Date.now();
    const elapsed = now - Day12.last;

    if (elapsed < Day12.fps) return Day12.frames[Day12.currentFrame];

    Day12.last = now;
    Day12.currentFrame = (Day12.currentFrame + 1) % Day12.frames.length;

    return Day12.frames[Day12.currentFrame];
  }
}
