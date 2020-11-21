import preval from 'preval.macro';

import { Gift } from "../types";
import { loadImage } from "../helper";

import qrCode from './qr-code.png';

import eaQFelAbAbRoWmiwVnzIPoY from 'src/assets/day_17/frame_02_delay-0.066s.png';
import dnMcUZBcxCEGuIEcLsLAnPF from 'src/assets/day_17/frame_03_delay-0.067s.png';
import dlmmbIBVBXrFbJCaLnHnLCK from 'src/assets/day_17/frame_04_delay-0.067s.png';
import eiaxQNOlFwpmkaRWGDoxQuF from 'src/assets/day_17/frame_05_delay-0.066s.png';
import yWLAvoHZRRRYRadRVOBhWk from 'src/assets/day_17/frame_06_delay-0.067s.png';
import fpIBnCWuihDDwrgXIeNzSIM from 'src/assets/day_17/frame_07_delay-0.067s.png';
import dIZBxplFMJGlaHtFthpSxJb from 'src/assets/day_17/frame_08_delay-0.066s.png';
import fWEUYyGGQhVAwQagemCjiCM from 'src/assets/day_17/frame_09_delay-0.067s.png';
import citJoZwYOzgjLjWGeqlhaRr from 'src/assets/day_17/frame_10_delay-0.067s.png';
import fxSuYyyPWKuoLuVRTlumrev from 'src/assets/day_17/frame_11_delay-0.066s.png';
import enHOqWsqdbmlEBdQiuOEmzr from 'src/assets/day_17/frame_12_delay-0.067s.png';
import bvuBbCUVzJYvRnjyPwZSneU from 'src/assets/day_17/frame_13_delay-0.067s.png';
import fZlMnAxLELGlxBHmaZLbxeN from 'src/assets/day_17/frame_14_delay-0.066s.png';
import cqhxoHzKMTajvBqjQaBNAlx from 'src/assets/day_17/frame_15_delay-0.067s.png';
import fmPrDCbvYAaoRPXfRazRVRm from 'src/assets/day_17/frame_16_delay-0.067s.png';
import clyzumfcOXrowsJhGnxaWny from 'src/assets/day_17/frame_17_delay-0.066s.png';
import bAWzoNFkumxsmZmQNndLrAf from 'src/assets/day_17/frame_18_delay-0.067s.png';
import dnGyKDxzyNqJvdVMTSeZseD from 'src/assets/day_17/frame_19_delay-0.067s.png';
import dNiBjvnblEeDZpFPfXBnpLt from 'src/assets/day_17/frame_20_delay-0.066s.png';
import fcWDgUSrLbSLEwGIQhEMNmC from 'src/assets/day_17/frame_21_delay-0.067s.png';
import eZIIUAGKkzKxUrZBzdxaDeM from 'src/assets/day_17/frame_22_delay-0.067s.png';
import fylSZAdfEedtPmSfmNGeRaW from 'src/assets/day_17/frame_23_delay-0.066s.png';
import eVZZSOWizeHTZAyupAlMmQg from 'src/assets/day_17/frame_24_delay-0.067s.png';
import bDtWHYmOKzYWjyhPztqXRNi from 'src/assets/day_17/frame_25_delay-0.067s.png';
import bOilewAEosWqaofmFqXVXWB from 'src/assets/day_17/frame_26_delay-0.066s.png';
import dUYjfxYyBjHqyNEwWYatvet from 'src/assets/day_17/frame_27_delay-0.067s.png';
import cWdsVxalLqmFQPaUgUPDxpZ from 'src/assets/day_17/frame_28_delay-0.066s.png';

export default class Day17 extends Gift {
  public static hash = "boBGBeTyndHXQtqmuhSkaqT";
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
    loadImage(eaQFelAbAbRoWmiwVnzIPoY),
    loadImage(dnMcUZBcxCEGuIEcLsLAnPF),
    loadImage(dlmmbIBVBXrFbJCaLnHnLCK),
    loadImage(eiaxQNOlFwpmkaRWGDoxQuF),
    loadImage(yWLAvoHZRRRYRadRVOBhWk),
    loadImage(fpIBnCWuihDDwrgXIeNzSIM),
    loadImage(dIZBxplFMJGlaHtFthpSxJb),
    loadImage(fWEUYyGGQhVAwQagemCjiCM),
    loadImage(citJoZwYOzgjLjWGeqlhaRr),
    loadImage(fxSuYyyPWKuoLuVRTlumrev),
    loadImage(enHOqWsqdbmlEBdQiuOEmzr),
    loadImage(bvuBbCUVzJYvRnjyPwZSneU),
    loadImage(fZlMnAxLELGlxBHmaZLbxeN),
    loadImage(cqhxoHzKMTajvBqjQaBNAlx),
    loadImage(fmPrDCbvYAaoRPXfRazRVRm),
    loadImage(clyzumfcOXrowsJhGnxaWny),
    loadImage(bAWzoNFkumxsmZmQNndLrAf),
    loadImage(dnGyKDxzyNqJvdVMTSeZseD),
    loadImage(dNiBjvnblEeDZpFPfXBnpLt),
    loadImage(fcWDgUSrLbSLEwGIQhEMNmC),
    loadImage(eZIIUAGKkzKxUrZBzdxaDeM),
    loadImage(fylSZAdfEedtPmSfmNGeRaW),
    loadImage(eVZZSOWizeHTZAyupAlMmQg),
    loadImage(bDtWHYmOKzYWjyhPztqXRNi),
    loadImage(bOilewAEosWqaofmFqXVXWB),
    loadImage(dUYjfxYyBjHqyNEwWYatvet),
    loadImage(cWdsVxalLqmFQPaUgUPDxpZ),
  ];

  private static frames: Array<HTMLImageElement> = [];
  private static currentFrame: number = 0;

  private static fps = 1000 / 20;
  private static last = 0;

  public static async init() {
    if (Day17.frames.length === 0) {
      await Day17.loadFrames();
    }
  }

  private static async loadFrames() {
    Day17.frames = await Promise.all(Day17.framesPromises);
  }

  public static getFrame(): HTMLImageElement {
    const now = Date.now();
    const elapsed = now - Day17.last;

    if (elapsed < Day17.fps) return Day17.frames[Day17.currentFrame];

    Day17.last = now;
    Day17.currentFrame = (Day17.currentFrame + 1) % Day17.frames.length;

    return Day17.frames[Day17.currentFrame];
  }
}
