import preval from 'preval.macro';

import { Gift } from "../types";
import { loadImage } from "../helper";

import qrCode from './qr-code.png';

import drxdvfAFhwraxJCBfiGaOyg from 'src/assets/day_07/frame_00_delay-0.04s.gif';
import dvnbRFYicKAYkTLyEAaUihW from 'src/assets/day_07/frame_01_delay-0.04s.gif';
import ewcZVgowYDgUstSWoeTDQAQ from 'src/assets/day_07/frame_02_delay-0.04s.gif';
import buRCkzvXOmhKVQQbBZqcynH from 'src/assets/day_07/frame_03_delay-0.04s.gif';
import eyDgPJPURlhHCCDMzIyiGBv from 'src/assets/day_07/frame_04_delay-0.04s.gif';
import cRbcNjMtwbbMJIGdlXVuneh from 'src/assets/day_07/frame_05_delay-0.04s.gif';
import dhaQKanNcIaJkCERSnNRYcu from 'src/assets/day_07/frame_06_delay-0.04s.gif';
import dzUNhUPcsmcuBCjUUZpdINx from 'src/assets/day_07/frame_07_delay-0.04s.gif';
import emsncXaYeRgeCgBznnMOwwC from 'src/assets/day_07/frame_08_delay-0.04s.gif';
import fMIsOBqGILhUUGopsDfASwL from 'src/assets/day_07/frame_09_delay-0.04s.gif';
import BQxpjyVJMrzhIYJjtRxnmS from 'src/assets/day_07/frame_10_delay-0.04s.gif';
import eHtmZrhojnBJPBcXIvSSLjr from 'src/assets/day_07/frame_11_delay-0.04s.gif';
import dfVqJkeEpxhosZVBTrtERCX from 'src/assets/day_07/frame_12_delay-0.04s.gif';
import aofviFzofORxlCCaiRZaAsS from 'src/assets/day_07/frame_13_delay-0.04s.gif';
import cEwPKaFtHWcXeLLkVINuvko from 'src/assets/day_07/frame_14_delay-0.04s.gif';
import bHCYeodKCDCIKGrhYqrEMIu from 'src/assets/day_07/frame_15_delay-0.04s.gif';
import dWHofDtJbRAQBVVUadYemOn from 'src/assets/day_07/frame_16_delay-0.04s.gif';
import bfBheECiVUXGAlGuJDAvOMA from 'src/assets/day_07/frame_17_delay-0.04s.gif';
import cnDYNJISCtLRDaJgZbGuwbo from 'src/assets/day_07/frame_18_delay-0.04s.gif';
import cuHKCOjfssKryqSeRtFYKmd from 'src/assets/day_07/frame_19_delay-0.04s.gif';
import cVCakcYrLmXzVNTHeAdrtmu from 'src/assets/day_07/frame_20_delay-0.04s.gif';
import fNxwIdqPxyYDgOJlbgBVWSn from 'src/assets/day_07/frame_21_delay-0.04s.gif';
import agaPdJDHrvaQZUyMRkaUWlV from 'src/assets/day_07/frame_22_delay-0.04s.gif';
import dfKaxFLXuTbTHDHVQFzVvfL from 'src/assets/day_07/frame_23_delay-0.04s.gif';
import fvflmQSjmxChGuPQwYTinhe from 'src/assets/day_07/frame_24_delay-0.04s.gif';
import frXWOzkqXdjWnoXZVaAkhfV from 'src/assets/day_07/frame_25_delay-0.04s.gif';
import dszjCoaoKXlWWBrMiwBjGAt from 'src/assets/day_07/frame_26_delay-0.04s.gif';
import fSRmWPTYMbODuNAmpkIWoyB from 'src/assets/day_07/frame_27_delay-0.04s.gif';
import VMMQxaGSUJIQLfwbxdBNsr from 'src/assets/day_07/frame_28_delay-0.04s.gif';
import fXldUYGBhFApDDASamJRLKn from 'src/assets/day_07/frame_29_delay-0.04s.gif';
import eQwshPGOKtEiEquMZzhHoPl from 'src/assets/day_07/frame_30_delay-0.04s.gif';
import fqAoEtXYgNIKkFgWWxkovcA from 'src/assets/day_07/frame_31_delay-0.04s.gif';
import edsoPOcpFIdEaSzXDfgjOhq from 'src/assets/day_07/frame_32_delay-0.04s.gif';
import cRssXOfAjQYDILZBTPutpyJ from 'src/assets/day_07/frame_33_delay-0.04s.gif';
import ahpREnJZrYjdsXsAtuIEEDW from 'src/assets/day_07/frame_34_delay-0.04s.gif';
import dMTiThYRijhxXxDPzSwoUGF from 'src/assets/day_07/frame_35_delay-0.04s.gif';
import dxHCBtDxgwcrMujgDPMpDAM from 'src/assets/day_07/frame_36_delay-0.04s.gif';
import aoDVVeBOlssJMILULzUafUF from 'src/assets/day_07/frame_37_delay-0.04s.gif';
import cQswNLvyAfLrPRBaEbEMAou from 'src/assets/day_07/frame_38_delay-0.04s.gif';
import cjTvPgNyIxZgqzKcBKFXTQN from 'src/assets/day_07/frame_39_delay-0.04s.gif';
import csGNjrwWVTdwbHAtRHuUYMZ from 'src/assets/day_07/frame_40_delay-0.04s.gif';
import dWjoecAIkDcRryaEJfVSgkV from 'src/assets/day_07/frame_41_delay-0.04s.gif';
import apSgTXgjyIfiPbhFAdCdkBV from 'src/assets/day_07/frame_42_delay-0.04s.gif';
import eXIyByGJSdAljNZOxOvwYeA from 'src/assets/day_07/frame_43_delay-0.04s.gif';
import eyKFNKNgwaCbQGrVsWqEiUU from 'src/assets/day_07/frame_44_delay-0.04s.gif';
import fCCEebEJydQDTaLOyGjApQA from 'src/assets/day_07/frame_45_delay-0.04s.gif';
import fbYbTVChreDGdPurkaJjdkK from 'src/assets/day_07/frame_46_delay-0.04s.gif';
import cXtsvYzQhhBJRildXIYcJyZ from 'src/assets/day_07/frame_47_delay-0.04s.gif';
import bReuyjIjoeVjvoyfNSZGUcd from 'src/assets/day_07/frame_48_delay-0.04s.gif';
import ajGKIuaCSKOFfujcSNFIDZp from 'src/assets/day_07/frame_49_delay-0.04s.gif';
import bgBdEOKrXxCywYPWpmtYlAN from 'src/assets/day_07/frame_50_delay-0.04s.gif';
import eLGDgyxEMCoaRJqoKINnUaK from 'src/assets/day_07/frame_51_delay-0.04s.gif';

export default class Day07 extends Gift {
  public static hash = "flfqPRivgpFRSRMlBlbPUqT";
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
    loadImage(drxdvfAFhwraxJCBfiGaOyg),
    loadImage(dvnbRFYicKAYkTLyEAaUihW),
    loadImage(ewcZVgowYDgUstSWoeTDQAQ),
    loadImage(buRCkzvXOmhKVQQbBZqcynH),
    loadImage(eyDgPJPURlhHCCDMzIyiGBv),
    loadImage(cRbcNjMtwbbMJIGdlXVuneh),
    loadImage(dhaQKanNcIaJkCERSnNRYcu),
    loadImage(dzUNhUPcsmcuBCjUUZpdINx),
    loadImage(emsncXaYeRgeCgBznnMOwwC),
    loadImage(fMIsOBqGILhUUGopsDfASwL),
    loadImage(BQxpjyVJMrzhIYJjtRxnmS),
    loadImage(eHtmZrhojnBJPBcXIvSSLjr),
    loadImage(dfVqJkeEpxhosZVBTrtERCX),
    loadImage(aofviFzofORxlCCaiRZaAsS),
    loadImage(cEwPKaFtHWcXeLLkVINuvko),
    loadImage(bHCYeodKCDCIKGrhYqrEMIu),
    loadImage(dWHofDtJbRAQBVVUadYemOn),
    loadImage(bfBheECiVUXGAlGuJDAvOMA),
    loadImage(cnDYNJISCtLRDaJgZbGuwbo),
    loadImage(cuHKCOjfssKryqSeRtFYKmd),
    loadImage(cVCakcYrLmXzVNTHeAdrtmu),
    loadImage(fNxwIdqPxyYDgOJlbgBVWSn),
    loadImage(agaPdJDHrvaQZUyMRkaUWlV),
    loadImage(dfKaxFLXuTbTHDHVQFzVvfL),
    loadImage(fvflmQSjmxChGuPQwYTinhe),
    loadImage(frXWOzkqXdjWnoXZVaAkhfV),
    loadImage(dszjCoaoKXlWWBrMiwBjGAt),
    loadImage(fSRmWPTYMbODuNAmpkIWoyB),
    loadImage(VMMQxaGSUJIQLfwbxdBNsr),
    loadImage(fXldUYGBhFApDDASamJRLKn),
    loadImage(eQwshPGOKtEiEquMZzhHoPl),
    loadImage(fqAoEtXYgNIKkFgWWxkovcA),
    loadImage(edsoPOcpFIdEaSzXDfgjOhq),
    loadImage(cRssXOfAjQYDILZBTPutpyJ),
    loadImage(ahpREnJZrYjdsXsAtuIEEDW),
    loadImage(dMTiThYRijhxXxDPzSwoUGF),
    loadImage(dxHCBtDxgwcrMujgDPMpDAM),
    loadImage(aoDVVeBOlssJMILULzUafUF),
    loadImage(cQswNLvyAfLrPRBaEbEMAou),
    loadImage(cjTvPgNyIxZgqzKcBKFXTQN),
    loadImage(csGNjrwWVTdwbHAtRHuUYMZ),
    loadImage(dWjoecAIkDcRryaEJfVSgkV),
    loadImage(apSgTXgjyIfiPbhFAdCdkBV),
    loadImage(eXIyByGJSdAljNZOxOvwYeA),
    loadImage(eyKFNKNgwaCbQGrVsWqEiUU),
    loadImage(fCCEebEJydQDTaLOyGjApQA),
    loadImage(fbYbTVChreDGdPurkaJjdkK),
    loadImage(cXtsvYzQhhBJRildXIYcJyZ),
    loadImage(bReuyjIjoeVjvoyfNSZGUcd),
    loadImage(ajGKIuaCSKOFfujcSNFIDZp),
    loadImage(bgBdEOKrXxCywYPWpmtYlAN),
    loadImage(eLGDgyxEMCoaRJqoKINnUaK),
  ];

  private static frames: Array<HTMLImageElement> = [];
  private static currentFrame: number = 0;

  private static fps = 1000 / 20;
  private static last = 0;

  public static async init() {
    if (Day07.frames.length === 0) {
      await Day07.loadFrames();
    }
  }

  private static async loadFrames() {
    Day07.frames = await Promise.all(Day07.framesPromises);
  }

  public static getFrame(): HTMLImageElement {
    const now = Date.now();
    const elapsed = now - Day07.last;

    if (elapsed < Day07.fps) return Day07.frames[Day07.currentFrame];

    Day07.last = now;
    Day07.currentFrame = (Day07.currentFrame + 1) % Day07.frames.length;

    return Day07.frames[Day07.currentFrame];
  }
}
