import preval from 'preval.macro';

import { Day } from "../types";
import { loadImage } from "../helper";

import qrCode from './qr-code.png';

import eYtujvnOHPvvLfuecSChFBq from 'src/assets/day_11/frame_00_delay-0.13s.gif';
import eCEABiBgBwDnFxEXCLRwBQM from 'src/assets/day_11/frame_01_delay-0.13s.gif';
import bJKXnnZvuKDUhcUEsBylrsO from 'src/assets/day_11/frame_02_delay-0.13s.gif';
import ampAqFTLQzbsGStfSfGSgNq from 'src/assets/day_11/frame_03_delay-0.13s.gif';
import xXfWXKAIpMkTOwfbvRZwOS from 'src/assets/day_11/frame_04_delay-0.13s.gif';
import fXElesYALuxNZKDBWWRTjjY from 'src/assets/day_11/frame_05_delay-0.13s.gif';
import KElNdLunQcuNUpNwXoVnmh from 'src/assets/day_11/frame_06_delay-0.13s.gif';
import fQqTALYYgXcCsZrkfBRbqrZ from 'src/assets/day_11/frame_07_delay-0.13s.gif';
import RvMNMoLrSKeSnwtEnyLJET from 'src/assets/day_11/frame_08_delay-0.13s.gif';
import eQyfXLqKjtAxuPPovcxIWJE from 'src/assets/day_11/frame_09_delay-0.13s.gif';
import dDnQOHtMcliTzWzduwiFlak from 'src/assets/day_11/frame_10_delay-0.13s.gif';
import croGQwVDEAUfolciJWlGLEd from 'src/assets/day_11/frame_11_delay-0.13s.gif';
import afLAcXGcHwInHUwllNSksoE from 'src/assets/day_11/frame_12_delay-0.13s.gif';
import eDOFsWanjUqMzlSADCAtjOi from 'src/assets/day_11/frame_13_delay-0.13s.gif';
import dDylOvVlzTpDZMYVhqVmvsf from 'src/assets/day_11/frame_14_delay-0.13s.gif';
import frtbTASrJSELyswbRSmbqpW from 'src/assets/day_11/frame_15_delay-0.13s.gif';
import bzzEFbxojArssCakiEpQMyO from 'src/assets/day_11/frame_16_delay-0.13s.gif';
import bBTVcAVjJFXlBypNxKWhRwh from 'src/assets/day_11/frame_17_delay-0.13s.gif';
import fLLQAdHxkGneugttuPkJWHQ from 'src/assets/day_11/frame_18_delay-0.13s.gif';
import dRxHkhqtAwLXEdHdtSnDxoz from 'src/assets/day_11/frame_19_delay-0.13s.gif';
import bwVtPZvEepbkTewLcWlPavg from 'src/assets/day_11/frame_20_delay-0.13s.gif';
import coodntPtuBkeKJNPrRXkBYk from 'src/assets/day_11/frame_21_delay-0.13s.gif';
import DqelOGejTvvWfDJCAXHCFM from 'src/assets/day_11/frame_22_delay-0.13s.gif';
import cnPeVnqikOLTVKRETgXfFrm from 'src/assets/day_11/frame_23_delay-0.13s.gif';
import euvxOCelDPghCCZzxRQLbKE from 'src/assets/day_11/frame_24_delay-0.13s.gif';
import fttPTaMmTgqeZQSDKasHdgJ from 'src/assets/day_11/frame_25_delay-0.13s.gif';
import fHONsqdHMmHRKHRmMRhwcbi from 'src/assets/day_11/frame_26_delay-0.13s.gif';
import cojNnHlQzkBJrtcswmAgByc from 'src/assets/day_11/frame_27_delay-0.13s.gif';
import fkUcReOKmzAVaOocyarNJmR from 'src/assets/day_11/frame_28_delay-0.13s.gif';
import HNpanoilrXgRsJQVKluwSB from 'src/assets/day_11/frame_29_delay-0.13s.gif';
import cGwNBjrfjixfBqwzUwtFnnB from 'src/assets/day_11/frame_30_delay-0.13s.gif';
import bVSUtXTfHHpFsZmhYbqQLhk from 'src/assets/day_11/frame_31_delay-0.13s.gif';
import czuvSjZWiUwmNahAJZiJbIj from 'src/assets/day_11/frame_32_delay-0.13s.gif';
import cRWEcRMofMfbdmXvwELXExf from 'src/assets/day_11/frame_33_delay-0.13s.gif';
import cReLrRoJtoPIdQKVtJOMJsN from 'src/assets/day_11/frame_34_delay-0.13s.gif';
import cskiYHPNBWnqyPoggxqwQsk from 'src/assets/day_11/frame_35_delay-0.13s.gif';
import eRXlQZrYRVQPfYYHyvSxDIp from 'src/assets/day_11/frame_36_delay-0.13s.gif';
import fPtsHxDNINCOIEWPTuKQVFX from 'src/assets/day_11/frame_37_delay-0.13s.gif';
import atCMsKKnOEtrdGgOMUEPHiU from 'src/assets/day_11/frame_38_delay-0.13s.gif';
import dBihLkGpnYDQZzOOoEjXZeF from 'src/assets/day_11/frame_39_delay-0.13s.gif';
import ddtWHeuqiSBgkKnxkgcilhv from 'src/assets/day_11/frame_40_delay-0.13s.gif';

export default class Day11 extends Day {
  public static hash = "bCHmiuiffKmgjtuEFYXzfSo";
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
    loadImage(eYtujvnOHPvvLfuecSChFBq),
    loadImage(eCEABiBgBwDnFxEXCLRwBQM),
    loadImage(bJKXnnZvuKDUhcUEsBylrsO),
    loadImage(ampAqFTLQzbsGStfSfGSgNq),
    loadImage(xXfWXKAIpMkTOwfbvRZwOS),
    loadImage(fXElesYALuxNZKDBWWRTjjY),
    loadImage(KElNdLunQcuNUpNwXoVnmh),
    loadImage(fQqTALYYgXcCsZrkfBRbqrZ),
    loadImage(RvMNMoLrSKeSnwtEnyLJET),
    loadImage(eQyfXLqKjtAxuPPovcxIWJE),
    loadImage(dDnQOHtMcliTzWzduwiFlak),
    loadImage(croGQwVDEAUfolciJWlGLEd),
    loadImage(afLAcXGcHwInHUwllNSksoE),
    loadImage(eDOFsWanjUqMzlSADCAtjOi),
    loadImage(dDylOvVlzTpDZMYVhqVmvsf),
    loadImage(frtbTASrJSELyswbRSmbqpW),
    loadImage(bzzEFbxojArssCakiEpQMyO),
    loadImage(bBTVcAVjJFXlBypNxKWhRwh),
    loadImage(fLLQAdHxkGneugttuPkJWHQ),
    loadImage(dRxHkhqtAwLXEdHdtSnDxoz),
    loadImage(bwVtPZvEepbkTewLcWlPavg),
    loadImage(coodntPtuBkeKJNPrRXkBYk),
    loadImage(DqelOGejTvvWfDJCAXHCFM),
    loadImage(cnPeVnqikOLTVKRETgXfFrm),
    loadImage(euvxOCelDPghCCZzxRQLbKE),
    loadImage(fttPTaMmTgqeZQSDKasHdgJ),
    loadImage(fHONsqdHMmHRKHRmMRhwcbi),
    loadImage(cojNnHlQzkBJrtcswmAgByc),
    loadImage(fkUcReOKmzAVaOocyarNJmR),
    loadImage(HNpanoilrXgRsJQVKluwSB),
    loadImage(cGwNBjrfjixfBqwzUwtFnnB),
    loadImage(bVSUtXTfHHpFsZmhYbqQLhk),
    loadImage(czuvSjZWiUwmNahAJZiJbIj),
    loadImage(cRWEcRMofMfbdmXvwELXExf),
    loadImage(cReLrRoJtoPIdQKVtJOMJsN),
    loadImage(cskiYHPNBWnqyPoggxqwQsk),
    loadImage(eRXlQZrYRVQPfYYHyvSxDIp),
    loadImage(fPtsHxDNINCOIEWPTuKQVFX),
    loadImage(atCMsKKnOEtrdGgOMUEPHiU),
    loadImage(dBihLkGpnYDQZzOOoEjXZeF),
    loadImage(ddtWHeuqiSBgkKnxkgcilhv),
  ];

  private static frames: Array<HTMLImageElement> = [];
  private static currentFrame: number = 0;

  private static fps = 1000 / 20;
  private static last = 0;

  public static async init() {
    if (Day11.frames.length === 0) {
      await Day11.loadFrames();
    }
  }

  private static async loadFrames() {
    Day11.frames = await Promise.all(Day11.framesPromises);
  }

  public static getFrame(): HTMLImageElement {
    const now = Date.now();
    const elapsed = now - Day11.last;

    if (elapsed < Day11.fps) return Day11.frames[Day11.currentFrame];

    Day11.last = now;
    Day11.currentFrame = (Day11.currentFrame + 1) % Day11.frames.length;

    return Day11.frames[Day11.currentFrame];
  }
}
