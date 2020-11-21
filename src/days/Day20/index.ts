import preval from 'preval.macro';

import { Day } from "../types";
import { loadImage } from "../helper";

import qrCode from './qr-code.png';

import fvOISWBEFCqZCOXDNKHWQdy from 'src/assets/day_20/frame_00_delay-0.05s.gif';
import bNKbAzQiHoVNyGxonGsXDDx from 'src/assets/day_20/frame_01_delay-0.05s.gif';
import QmOlXgMFsAbDgurMGzlIYq from 'src/assets/day_20/frame_02_delay-0.05s.gif';
import dNSdHrlvULigHCkSCyMSqzp from 'src/assets/day_20/frame_03_delay-0.05s.gif';
import aenBsxtuMZdfophtFSCuGhb from 'src/assets/day_20/frame_04_delay-0.05s.gif';
import dRCnvnFMksKljjVNNMQcWbB from 'src/assets/day_20/frame_05_delay-0.05s.gif';
import dWQMkCFARMqYTzkLRdgyTDp from 'src/assets/day_20/frame_06_delay-0.05s.gif';
import blpWIDTIwaoAXefbnMrYbNF from 'src/assets/day_20/frame_07_delay-0.05s.gif';
import dsoWARiHEuXofffSwPWXZSg from 'src/assets/day_20/frame_08_delay-0.05s.gif';
import cQfUjjKbuswDHzDJnHvDoiw from 'src/assets/day_20/frame_09_delay-0.05s.gif';
import abrMPMpKOQELKsHSzlCDEdV from 'src/assets/day_20/frame_10_delay-0.05s.gif';
import eKYqPoYcTpXiXYHVlSuvHKQ from 'src/assets/day_20/frame_11_delay-0.05s.gif';
import aglPnTzxfOfzlkkpsXrIBft from 'src/assets/day_20/frame_12_delay-0.05s.gif';
import dmOqpoScqvSiOtjKDhujiKx from 'src/assets/day_20/frame_13_delay-0.05s.gif';
import bxEhADiwIXNUcLeeupLbuor from 'src/assets/day_20/frame_14_delay-0.05s.gif';
import cODjSoNaKnJfRWklZJuMBJq from 'src/assets/day_20/frame_15_delay-0.05s.gif';
import HvaGhaZubTmDAnsntwqTWd from 'src/assets/day_20/frame_16_delay-0.05s.gif';
import bRPOjtvGoFYkpjsWrCzGSsp from 'src/assets/day_20/frame_17_delay-0.05s.gif';
import fSCGJwKGHCvTljStbHRWTdA from 'src/assets/day_20/frame_18_delay-0.05s.gif';
import dmPYJwOiRnTRjPqnDkBPEFI from 'src/assets/day_20/frame_19_delay-0.05s.gif';
import bbIVQAHXbrRSFBwHEQAzBGz from 'src/assets/day_20/frame_20_delay-0.05s.gif';
import akNRgMEYGeEsmSzcpLKgSPZ from 'src/assets/day_20/frame_21_delay-0.05s.gif';

export default class Day20 extends Day {
  public static hash = "fkTkryMTucrSfMJgAMgoKyy";
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
    loadImage(fvOISWBEFCqZCOXDNKHWQdy),
    loadImage(bNKbAzQiHoVNyGxonGsXDDx),
    loadImage(QmOlXgMFsAbDgurMGzlIYq),
    loadImage(dNSdHrlvULigHCkSCyMSqzp),
    loadImage(aenBsxtuMZdfophtFSCuGhb),
    loadImage(dRCnvnFMksKljjVNNMQcWbB),
    loadImage(dWQMkCFARMqYTzkLRdgyTDp),
    loadImage(blpWIDTIwaoAXefbnMrYbNF),
    loadImage(dsoWARiHEuXofffSwPWXZSg),
    loadImage(cQfUjjKbuswDHzDJnHvDoiw),
    loadImage(abrMPMpKOQELKsHSzlCDEdV),
    loadImage(eKYqPoYcTpXiXYHVlSuvHKQ),
    loadImage(aglPnTzxfOfzlkkpsXrIBft),
    loadImage(dmOqpoScqvSiOtjKDhujiKx),
    loadImage(bxEhADiwIXNUcLeeupLbuor),
    loadImage(cODjSoNaKnJfRWklZJuMBJq),
    loadImage(HvaGhaZubTmDAnsntwqTWd),
    loadImage(bRPOjtvGoFYkpjsWrCzGSsp),
    loadImage(fSCGJwKGHCvTljStbHRWTdA),
    loadImage(dmPYJwOiRnTRjPqnDkBPEFI),
    loadImage(bbIVQAHXbrRSFBwHEQAzBGz),
    loadImage(akNRgMEYGeEsmSzcpLKgSPZ),
  ];

  private static frames: Array<HTMLImageElement> = [];
  private static currentFrame: number = 0;

  private static fps = 1000 / 20;
  private static last = 0;

  public static async init() {
    if (Day20.frames.length === 0) {
      await Day20.loadFrames();
    }
  }

  private static async loadFrames() {
    Day20.frames = await Promise.all(Day20.framesPromises);
  }

  public static getFrame(): HTMLImageElement {
    const now = Date.now();
    const elapsed = now - Day20.last;

    if (elapsed < Day20.fps) return Day20.frames[Day20.currentFrame];

    Day20.last = now;
    Day20.currentFrame = (Day20.currentFrame + 1) % Day20.frames.length;

    return Day20.frames[Day20.currentFrame];
  }
}
