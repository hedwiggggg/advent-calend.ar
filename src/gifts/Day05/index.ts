import preval from 'preval.macro';

import { Gift } from "../types";
import { loadImage } from "../helper";

import qrCode from './qr-code.png';

import adBrMGzcfxrNGqrVKOuqzPS from 'src/assets/day_05/frame_00_delay-0.08s.gif';
import cnFQAfnxYCReunaJVXuDjIp from 'src/assets/day_05/frame_01_delay-0.08s.gif';
import cvqTTuENQoQaufksvpSeQHL from 'src/assets/day_05/frame_02_delay-0.08s.gif';
import bFserPBbUuixLWozBsAXIrA from 'src/assets/day_05/frame_03_delay-0.08s.gif';
import bjtfNoIhPFRfjbeeTevSYCd from 'src/assets/day_05/frame_04_delay-0.08s.gif';
import fnaHcUaFpVNAJoheQTYmCYX from 'src/assets/day_05/frame_05_delay-0.08s.gif';
import fnVNSXjiQqKMIorLXAymmIw from 'src/assets/day_05/frame_06_delay-0.08s.gif';
import bYqeJpoifakuganSYafQZRS from 'src/assets/day_05/frame_07_delay-0.08s.gif';
import fGzAbIpMODcEOaUHECiVhnT from 'src/assets/day_05/frame_08_delay-0.08s.gif';
import cJzsuzewwCHJClAVeEfPfBM from 'src/assets/day_05/frame_09_delay-0.08s.gif';
import euuMDGotkUSobdLyJBNUEIR from 'src/assets/day_05/frame_10_delay-0.08s.gif';
import eEqjeLTijMbJYLActsFxrAi from 'src/assets/day_05/frame_11_delay-0.08s.gif';
import cOzMrqvPgeFnNtosoPdFofl from 'src/assets/day_05/frame_12_delay-0.08s.gif';
import dVhHKaxREKtdBixOZtXVolC from 'src/assets/day_05/frame_13_delay-0.08s.gif';
import fCXPWhhDMHqMbhosuHKWYCg from 'src/assets/day_05/frame_14_delay-0.08s.gif';
import dmZpFKmCKLLHBKxNNFPuyUw from 'src/assets/day_05/frame_15_delay-0.08s.gif';
import ccCBmTUbrTtkzalcCgJwjdi from 'src/assets/day_05/frame_16_delay-0.08s.gif';
import wmKHgwOIOEnhTzpYEYbSlo from 'src/assets/day_05/frame_17_delay-0.08s.gif';
import cBUMcLjlsTtEMMxDYAkcWVS from 'src/assets/day_05/frame_18_delay-0.08s.gif';
import bnerXIlQNCQKIRkirJZErkG from 'src/assets/day_05/frame_19_delay-0.08s.gif';
import eqCHcfmCpZsqoxglkgsUvsr from 'src/assets/day_05/frame_20_delay-0.08s.gif';
import ctAKWqfcDGDKduvbddVYgQs from 'src/assets/day_05/frame_21_delay-0.08s.gif';
import SgotKotcXHwzWWXlJkqJyR from 'src/assets/day_05/frame_22_delay-0.08s.gif';
import eesdqiPfPNPPcHBBbHelABM from 'src/assets/day_05/frame_23_delay-0.08s.gif';
import fQRRMQEyFVSaNiTGZqcUpmS from 'src/assets/day_05/frame_24_delay-0.08s.gif';
import bYuDuWtmiUYoIXSDUkUnIig from 'src/assets/day_05/frame_25_delay-0.08s.gif';
import efXTUfAhNgqtgpTGzuMptTr from 'src/assets/day_05/frame_26_delay-0.08s.gif';
import cYFrLHPGpsuZFYHsKwiNFWt from 'src/assets/day_05/frame_27_delay-0.08s.gif';
import cfaAVlrLxPMEUljxoyDQSYd from 'src/assets/day_05/frame_28_delay-0.08s.gif';
import fALRJXKGuhrOCVxQUGNGdCI from 'src/assets/day_05/frame_29_delay-0.08s.gif';
import epWsGVszOlaaAdorIXnkQTN from 'src/assets/day_05/frame_30_delay-0.08s.gif';
import EDhlGqzlKMfyZceqNmXHUc from 'src/assets/day_05/frame_31_delay-0.08s.gif';

export default class Day05 implements Gift {
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
    loadImage(adBrMGzcfxrNGqrVKOuqzPS),
    loadImage(cnFQAfnxYCReunaJVXuDjIp),
    loadImage(cvqTTuENQoQaufksvpSeQHL),
    loadImage(bFserPBbUuixLWozBsAXIrA),
    loadImage(bjtfNoIhPFRfjbeeTevSYCd),
    loadImage(fnaHcUaFpVNAJoheQTYmCYX),
    loadImage(fnVNSXjiQqKMIorLXAymmIw),
    loadImage(bYqeJpoifakuganSYafQZRS),
    loadImage(fGzAbIpMODcEOaUHECiVhnT),
    loadImage(cJzsuzewwCHJClAVeEfPfBM),
    loadImage(euuMDGotkUSobdLyJBNUEIR),
    loadImage(eEqjeLTijMbJYLActsFxrAi),
    loadImage(cOzMrqvPgeFnNtosoPdFofl),
    loadImage(dVhHKaxREKtdBixOZtXVolC),
    loadImage(fCXPWhhDMHqMbhosuHKWYCg),
    loadImage(dmZpFKmCKLLHBKxNNFPuyUw),
    loadImage(ccCBmTUbrTtkzalcCgJwjdi),
    loadImage(wmKHgwOIOEnhTzpYEYbSlo),
    loadImage(cBUMcLjlsTtEMMxDYAkcWVS),
    loadImage(bnerXIlQNCQKIRkirJZErkG),
    loadImage(eqCHcfmCpZsqoxglkgsUvsr),
    loadImage(ctAKWqfcDGDKduvbddVYgQs),
    loadImage(SgotKotcXHwzWWXlJkqJyR),
    loadImage(eesdqiPfPNPPcHBBbHelABM),
    loadImage(fQRRMQEyFVSaNiTGZqcUpmS),
    loadImage(bYuDuWtmiUYoIXSDUkUnIig),
    loadImage(efXTUfAhNgqtgpTGzuMptTr),
    loadImage(cYFrLHPGpsuZFYHsKwiNFWt),
    loadImage(cfaAVlrLxPMEUljxoyDQSYd),
    loadImage(fALRJXKGuhrOCVxQUGNGdCI),
    loadImage(epWsGVszOlaaAdorIXnkQTN),
    loadImage(EDhlGqzlKMfyZceqNmXHUc),
  ];

  private static frames: Array<HTMLImageElement> = [];
  private static currentFrame: number = 0;

  private static fps = 1000 / 20;
  private static last = 0;

  public static async init() {
    if (Day05.frames.length === 0) {
      await Day05.loadFrames();
    }
  }

  private static async loadFrames() {
    Day05.frames = await Promise.all(Day05.framesPromises);
  }

  public static getFrame(): HTMLImageElement {
    const now = Date.now();
    const elapsed = now - Day05.last;

    if (elapsed < Day05.fps) return Day05.frames[Day05.currentFrame];

    Day05.last = now;
    Day05.currentFrame = (Day05.currentFrame + 1) % Day05.frames.length;

    return Day05.frames[Day05.currentFrame];
  }
}
