import preval from 'preval.macro';

import { Gift } from "../types";
import { loadImage } from "../helper";

import qrCode from './qr-code.png';

import fnaSrIxkAqWskSboIVlpWav from 'src/assets/day_24/frame_00_delay-0.1s.gif';
import bVtqsIaqsxtVJkXCLUiAHWk from 'src/assets/day_24/frame_01_delay-0.1s.gif';
import MVlcNeEJeFMGkuZQaxWRfV from 'src/assets/day_24/frame_02_delay-0.1s.gif';
import chkbvSkJGNswuVpinhJYBwc from 'src/assets/day_24/frame_03_delay-0.1s.gif';
import blqopFiKUnGqyEfoTdUGBJs from 'src/assets/day_24/frame_04_delay-0.1s.gif';
import fCLoAzQCYxFvcqAWqrFXQbk from 'src/assets/day_24/frame_05_delay-0.1s.gif';
import cePqpvIjvJusEbvCzIUTkVO from 'src/assets/day_24/frame_06_delay-0.1s.gif';
import bSvDZYKGiaFpMgQCPCycpIl from 'src/assets/day_24/frame_07_delay-0.1s.gif';
import cekwcchjXLktwsOxvKlqbnJ from 'src/assets/day_24/frame_08_delay-0.1s.gif';
import fHVkjVYboiKwgUElcdudZdj from 'src/assets/day_24/frame_09_delay-0.1s.gif';
import dkYUUrkCWKzaUKLHSTEuwjj from 'src/assets/day_24/frame_10_delay-0.1s.gif';
import eLBqabqwYjTQUYfkwxcIfyy from 'src/assets/day_24/frame_11_delay-0.1s.gif';
import bmPJIyfRenygwMBEyOGNxrJ from 'src/assets/day_24/frame_12_delay-0.1s.gif';
import cgNTPzECJLRazmgPbxjkAgQ from 'src/assets/day_24/frame_13_delay-0.1s.gif';
import cezflhqDWOgCfvXYnPNVzNU from 'src/assets/day_24/frame_14_delay-0.1s.gif';
import bSCgBTnodrLsftiAofWfFeq from 'src/assets/day_24/frame_15_delay-0.1s.gif';
import eQtwEaHtvhpQVAvIUzZeZqk from 'src/assets/day_24/frame_16_delay-0.1s.gif';
import fpzpKPyxwXoFsNMsbKKwemP from 'src/assets/day_24/frame_17_delay-0.1s.gif';
import fAYYiaeQBqzYBupsJEqGEWP from 'src/assets/day_24/frame_18_delay-0.1s.gif';
import dzzfJryEDkCLpzFFKPQHeoX from 'src/assets/day_24/frame_19_delay-0.1s.gif';
import emHSGtSCxzeGkitxtKjpjlo from 'src/assets/day_24/frame_20_delay-0.1s.gif';
import fkMIPaLcbbPWzcFTffNYYeT from 'src/assets/day_24/frame_21_delay-0.1s.gif';
import RYAZdKBnGaGIVfvKHCQyIY from 'src/assets/day_24/frame_22_delay-0.1s.gif';
import ZVPLRylJDwJcskoUPiiUZa from 'src/assets/day_24/frame_23_delay-0.1s.gif';
import fRESCLJQXVAEJwvjzKERPpJ from 'src/assets/day_24/frame_24_delay-0.1s.gif';
import eqKDvBEafvsOeAdEPkkUTXq from 'src/assets/day_24/frame_25_delay-0.1s.gif';
import ahSvqKhHMaIqIYUQGNNUXxV from 'src/assets/day_24/frame_26_delay-0.1s.gif';
import eYJjKWYbEwlmgoxGATRIFPN from 'src/assets/day_24/frame_27_delay-0.1s.gif';
import dUJSeOLEvLKUoEAnrJVvicq from 'src/assets/day_24/frame_28_delay-0.1s.gif';
import ezeBxxLbZopIKQmzDfejLNf from 'src/assets/day_24/frame_29_delay-0.1s.gif';
import dAgUsmsNMdXdXmCkELhFvMo from 'src/assets/day_24/frame_30_delay-0.1s.gif';
import buTxbvbMRGOVnqgwBVHwfAv from 'src/assets/day_24/frame_31_delay-0.1s.gif';
import dGLmsoubkSlfZhZwWQZRSWd from 'src/assets/day_24/frame_32_delay-0.1s.gif';
import dRXyVTCGWoVNhxkcGFAMkQZ from 'src/assets/day_24/frame_33_delay-0.1s.gif';
import fjUXUksvtUCKMlTRnoFJHMR from 'src/assets/day_24/frame_34_delay-0.1s.gif';
import ccggcFxMsPdRirlyzZCNVWh from 'src/assets/day_24/frame_35_delay-0.1s.gif';
import dYfZfWyEIvWfZtfzEyuIyIV from 'src/assets/day_24/frame_36_delay-0.1s.gif';
import fnWvBCZHGoyZuNVEtCixfmb from 'src/assets/day_24/frame_37_delay-0.1s.gif';
import aprojLXpHIGukVRAibTAUuE from 'src/assets/day_24/frame_38_delay-0.1s.gif';
import fveQJNRykRpgaazeBKafLNn from 'src/assets/day_24/frame_39_delay-0.1s.gif';

export default class Day24 implements Gift {
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
    loadImage(fnaSrIxkAqWskSboIVlpWav),
    loadImage(bVtqsIaqsxtVJkXCLUiAHWk),
    loadImage(MVlcNeEJeFMGkuZQaxWRfV),
    loadImage(chkbvSkJGNswuVpinhJYBwc),
    loadImage(blqopFiKUnGqyEfoTdUGBJs),
    loadImage(fCLoAzQCYxFvcqAWqrFXQbk),
    loadImage(cePqpvIjvJusEbvCzIUTkVO),
    loadImage(bSvDZYKGiaFpMgQCPCycpIl),
    loadImage(cekwcchjXLktwsOxvKlqbnJ),
    loadImage(fHVkjVYboiKwgUElcdudZdj),
    loadImage(dkYUUrkCWKzaUKLHSTEuwjj),
    loadImage(eLBqabqwYjTQUYfkwxcIfyy),
    loadImage(bmPJIyfRenygwMBEyOGNxrJ),
    loadImage(cgNTPzECJLRazmgPbxjkAgQ),
    loadImage(cezflhqDWOgCfvXYnPNVzNU),
    loadImage(bSCgBTnodrLsftiAofWfFeq),
    loadImage(eQtwEaHtvhpQVAvIUzZeZqk),
    loadImage(fpzpKPyxwXoFsNMsbKKwemP),
    loadImage(fAYYiaeQBqzYBupsJEqGEWP),
    loadImage(dzzfJryEDkCLpzFFKPQHeoX),
    loadImage(emHSGtSCxzeGkitxtKjpjlo),
    loadImage(fkMIPaLcbbPWzcFTffNYYeT),
    loadImage(RYAZdKBnGaGIVfvKHCQyIY),
    loadImage(ZVPLRylJDwJcskoUPiiUZa),
    loadImage(fRESCLJQXVAEJwvjzKERPpJ),
    loadImage(eqKDvBEafvsOeAdEPkkUTXq),
    loadImage(ahSvqKhHMaIqIYUQGNNUXxV),
    loadImage(eYJjKWYbEwlmgoxGATRIFPN),
    loadImage(dUJSeOLEvLKUoEAnrJVvicq),
    loadImage(ezeBxxLbZopIKQmzDfejLNf),
    loadImage(dAgUsmsNMdXdXmCkELhFvMo),
    loadImage(buTxbvbMRGOVnqgwBVHwfAv),
    loadImage(dGLmsoubkSlfZhZwWQZRSWd),
    loadImage(dRXyVTCGWoVNhxkcGFAMkQZ),
    loadImage(fjUXUksvtUCKMlTRnoFJHMR),
    loadImage(ccggcFxMsPdRirlyzZCNVWh),
    loadImage(dYfZfWyEIvWfZtfzEyuIyIV),
    loadImage(fnWvBCZHGoyZuNVEtCixfmb),
    loadImage(aprojLXpHIGukVRAibTAUuE),
    loadImage(fveQJNRykRpgaazeBKafLNn),
  ];

  private static frames: Array<HTMLImageElement> = [];
  private static currentFrame: number = 0;

  private static fps = 1000 / 20;
  private static last = 0;

  public static async init() {
    if (Day24.frames.length === 0) {
      await Day24.loadFrames();
    }
  }

  private static async loadFrames() {
    Day24.frames = await Promise.all(Day24.framesPromises);
  }

  public static getFrame(): HTMLImageElement {
    const now = Date.now();
    const elapsed = now - Day24.last;

    if (elapsed < Day24.fps) return Day24.frames[Day24.currentFrame];

    Day24.last = now;
    Day24.currentFrame = (Day24.currentFrame + 1) % Day24.frames.length;

    return Day24.frames[Day24.currentFrame];
  }
}
