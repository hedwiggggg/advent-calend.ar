import preval from 'preval.macro';

import { Gift } from "../types";
import { loadImage } from "../helper";

import qrCode from './qr-code.png';

import GmRVRLdDUwGOxOWjTuWlHq from 'src/assets/day_09/frame_00_delay-0.04s.gif';
import dCQopZDkjiypjxUqixirisE from 'src/assets/day_09/frame_01_delay-0.04s.gif';
import bovfHoPexvDAowhkOoPXqtw from 'src/assets/day_09/frame_02_delay-0.04s.gif';
import cKeBgRnmmHCAVWltNDsrhFT from 'src/assets/day_09/frame_03_delay-0.04s.gif';
import gasfvvgTvJDmTGLWjLjDnIB from 'src/assets/day_09/frame_04_delay-0.04s.gif';
import bAMPNBxiJnAmNmQzAOwjLBs from 'src/assets/day_09/frame_05_delay-0.04s.gif';
import ezLDuXiBZGxvtECiREgSvCI from 'src/assets/day_09/frame_06_delay-0.04s.gif';
import ceboKlOLhfjAOuzLifWkZeN from 'src/assets/day_09/frame_07_delay-0.04s.gif';
import freTUbaabKrwEDvfWmoIgAm from 'src/assets/day_09/frame_08_delay-0.04s.gif';
import bLoRtqvLoDpVETdhvFhTLLv from 'src/assets/day_09/frame_09_delay-0.04s.gif';
import dfKZvOiyalpVfUptVhUgNIl from 'src/assets/day_09/frame_10_delay-0.04s.gif';
import bwYWZtPKzKVzKfMflknRKso from 'src/assets/day_09/frame_11_delay-0.04s.gif';
import boeygpqxIkkrkxRqfpWDpZy from 'src/assets/day_09/frame_12_delay-0.04s.gif';
import RcxtoBNwmsUkXuykakOrQW from 'src/assets/day_09/frame_13_delay-0.04s.gif';
import fClMLrvFnrfuhtSBjBFmNzV from 'src/assets/day_09/frame_14_delay-0.04s.gif';
import eBOzaJflfKTbcqlIVZihZmb from 'src/assets/day_09/frame_15_delay-0.04s.gif';
import cvGQluZMCCICoSUcOZjyeVa from 'src/assets/day_09/frame_16_delay-0.04s.gif';
import dXXdzSRJBsRUgFgbMRlwaHe from 'src/assets/day_09/frame_17_delay-0.04s.gif';
import csyxIsvJsIjxnIFEhmEPfeZ from 'src/assets/day_09/frame_18_delay-0.04s.gif';
import yOfrdYuPBPJYKzhKilACAi from 'src/assets/day_09/frame_19_delay-0.08s.gif';
import QFKOTGGumzhxhvokZVvszT from 'src/assets/day_09/frame_20_delay-0.04s.gif';
import cmkPJhVClkSvEFXaBAioHJJ from 'src/assets/day_09/frame_21_delay-0.04s.gif';
import dsVIWHPdPXdvVBNUjTTSymp from 'src/assets/day_09/frame_22_delay-0.04s.gif';
import dESujMnxWkIQphWNZWURMrs from 'src/assets/day_09/frame_23_delay-0.04s.gif';
import ergLkvSRXsXgRJztebAysqC from 'src/assets/day_09/frame_24_delay-0.04s.gif';
import aiQGTMNADUATKlIegVkVljQ from 'src/assets/day_09/frame_25_delay-0.04s.gif';
import epMMAudaNfkSiyfkemgvVfS from 'src/assets/day_09/frame_26_delay-0.04s.gif';
import eMcMPQJNXEAbRRxDGiGVpQZ from 'src/assets/day_09/frame_27_delay-0.04s.gif';
import bFyKFZvpBmhsIfYdmTgofNd from 'src/assets/day_09/frame_28_delay-0.04s.gif';
import atamAmqQGwBIrAzszAVvjSi from 'src/assets/day_09/frame_29_delay-0.04s.gif';
import bSGoMbnqoGPCukcbuvMMiDQ from 'src/assets/day_09/frame_30_delay-0.04s.gif';
import bAkeOsrYGZOapYUDDrbqwTd from 'src/assets/day_09/frame_31_delay-0.04s.gif';
import dsSTWzAqLbIovXAgZXjDZoR from 'src/assets/day_09/frame_32_delay-0.04s.gif';
import atgJPFEtbNFAaXloBKtjHLM from 'src/assets/day_09/frame_33_delay-0.08s.gif';
import dNmlqdzbtWqWTVCxLXYNxiw from 'src/assets/day_09/frame_34_delay-0.04s.gif';
import dEeWAglEUAaFnQJSOcqFwIa from 'src/assets/day_09/frame_35_delay-0.04s.gif';
import brMDbTRssbNnbTyLAzGXEhz from 'src/assets/day_09/frame_36_delay-0.04s.gif';
import dpGAzSCuIDzyaOkESnwEwDH from 'src/assets/day_09/frame_37_delay-0.04s.gif';
import fdAUSkkBYuNxkWiOgTUIHRW from 'src/assets/day_09/frame_38_delay-0.04s.gif';
import cnmIzFzvTmjOTDkSYzCeLvk from 'src/assets/day_09/frame_39_delay-0.04s.gif';
import cjPAOEPchyORvSdWvFWmFLp from 'src/assets/day_09/frame_40_delay-0.04s.gif';
import CMsCKblHnyGfQXOSGJwehf from 'src/assets/day_09/frame_41_delay-0.04s.gif';

export default class Day09 implements Gift {
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
    loadImage(GmRVRLdDUwGOxOWjTuWlHq),
    loadImage(dCQopZDkjiypjxUqixirisE),
    loadImage(bovfHoPexvDAowhkOoPXqtw),
    loadImage(cKeBgRnmmHCAVWltNDsrhFT),
    loadImage(gasfvvgTvJDmTGLWjLjDnIB),
    loadImage(bAMPNBxiJnAmNmQzAOwjLBs),
    loadImage(ezLDuXiBZGxvtECiREgSvCI),
    loadImage(ceboKlOLhfjAOuzLifWkZeN),
    loadImage(freTUbaabKrwEDvfWmoIgAm),
    loadImage(bLoRtqvLoDpVETdhvFhTLLv),
    loadImage(dfKZvOiyalpVfUptVhUgNIl),
    loadImage(bwYWZtPKzKVzKfMflknRKso),
    loadImage(boeygpqxIkkrkxRqfpWDpZy),
    loadImage(RcxtoBNwmsUkXuykakOrQW),
    loadImage(fClMLrvFnrfuhtSBjBFmNzV),
    loadImage(eBOzaJflfKTbcqlIVZihZmb),
    loadImage(cvGQluZMCCICoSUcOZjyeVa),
    loadImage(dXXdzSRJBsRUgFgbMRlwaHe),
    loadImage(csyxIsvJsIjxnIFEhmEPfeZ),
    loadImage(yOfrdYuPBPJYKzhKilACAi),
    loadImage(QFKOTGGumzhxhvokZVvszT),
    loadImage(cmkPJhVClkSvEFXaBAioHJJ),
    loadImage(dsVIWHPdPXdvVBNUjTTSymp),
    loadImage(dESujMnxWkIQphWNZWURMrs),
    loadImage(ergLkvSRXsXgRJztebAysqC),
    loadImage(aiQGTMNADUATKlIegVkVljQ),
    loadImage(epMMAudaNfkSiyfkemgvVfS),
    loadImage(eMcMPQJNXEAbRRxDGiGVpQZ),
    loadImage(bFyKFZvpBmhsIfYdmTgofNd),
    loadImage(atamAmqQGwBIrAzszAVvjSi),
    loadImage(bSGoMbnqoGPCukcbuvMMiDQ),
    loadImage(bAkeOsrYGZOapYUDDrbqwTd),
    loadImage(dsSTWzAqLbIovXAgZXjDZoR),
    loadImage(atgJPFEtbNFAaXloBKtjHLM),
    loadImage(dNmlqdzbtWqWTVCxLXYNxiw),
    loadImage(dEeWAglEUAaFnQJSOcqFwIa),
    loadImage(brMDbTRssbNnbTyLAzGXEhz),
    loadImage(dpGAzSCuIDzyaOkESnwEwDH),
    loadImage(fdAUSkkBYuNxkWiOgTUIHRW),
    loadImage(cnmIzFzvTmjOTDkSYzCeLvk),
    loadImage(cjPAOEPchyORvSdWvFWmFLp),
    loadImage(CMsCKblHnyGfQXOSGJwehf),
  ];

  private static frames: Array<HTMLImageElement> = [];
  private static currentFrame: number = 0;

  private static fps = 1000 / 20;
  private static last = 0;

  public static async init() {
    if (Day09.frames.length === 0) {
      await Day09.loadFrames();
    }
  }

  private static async loadFrames() {
    Day09.frames = await Promise.all(Day09.framesPromises);
  }

  public static getFrame(): HTMLImageElement {
    const now = Date.now();
    const elapsed = now - Day09.last;

    if (elapsed < Day09.fps) return Day09.frames[Day09.currentFrame];

    Day09.last = now;
    Day09.currentFrame = (Day09.currentFrame + 1) % Day09.frames.length;

    return Day09.frames[Day09.currentFrame];
  }
}
