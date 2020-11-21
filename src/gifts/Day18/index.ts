import preval from 'preval.macro';

import { Gift } from "../types";
import { loadImage } from "../helper";

import qrCode from './qr-code.png';

import MFsJDMdYmSfIumjgdODalI from 'src/assets/day_18/frame_00_delay-0.07s.gif';
import xiJZcCMBkCaabefOrJtMYe from 'src/assets/day_18/frame_01_delay-0.06s.gif';
import dqTmxSyQGqBwwQhXwUUFRHw from 'src/assets/day_18/frame_02_delay-0.07s.gif';
import fyjwtZOfHwXXFEMPkHWPyJV from 'src/assets/day_18/frame_03_delay-0.07s.gif';
import eteWzyqKfYpUQVGvqfmDhuw from 'src/assets/day_18/frame_04_delay-0.06s.gif';
import fwxiTbkVgOLxrLKpxEZaRbz from 'src/assets/day_18/frame_05_delay-0.07s.gif';
import cTEdQHJykHrRTLiUPwUVUrl from 'src/assets/day_18/frame_06_delay-0.07s.gif';
import eICToROeONNVLidXubLfvpu from 'src/assets/day_18/frame_07_delay-0.06s.gif';
import dAxfcyMuRyQDPEXOgHUaFar from 'src/assets/day_18/frame_08_delay-0.07s.gif';
import bqBFRKvrsiNBoXOjCGigVuq from 'src/assets/day_18/frame_09_delay-0.07s.gif';
import ekczoNkbaKSJQoxoDWyhyMP from 'src/assets/day_18/frame_10_delay-0.06s.gif';
import agfiEVDVQHxVFboDxdikOJq from 'src/assets/day_18/frame_11_delay-0.07s.gif';
import ahvQFaiMhkirizSMJPhckGL from 'src/assets/day_18/frame_12_delay-0.07s.gif';
import dvvveAWfpzRdziAqdJeMWor from 'src/assets/day_18/frame_13_delay-0.06s.gif';
import dTmNuHkFsnZPTNXXCmevDYz from 'src/assets/day_18/frame_14_delay-0.07s.gif';
import fjyYmESsEwMUqJaBZdsUpab from 'src/assets/day_18/frame_15_delay-0.07s.gif';
import cZlFkhFczSdjxwuAhGsVaox from 'src/assets/day_18/frame_16_delay-0.06s.gif';
import KEQzpLbpZFlXopaTVpxHrD from 'src/assets/day_18/frame_17_delay-0.07s.gif';
import cpWLDxWmxravWGCYZkHdJcR from 'src/assets/day_18/frame_18_delay-0.07s.gif';
import QUlkNMrMsFZeZnjpJYXwhN from 'src/assets/day_18/frame_19_delay-0.06s.gif';
import cQHWnJPFzAJBmUxveXskaIL from 'src/assets/day_18/frame_20_delay-0.07s.gif';
import dAgGvERzgOUZCgVOtBscfsn from 'src/assets/day_18/frame_21_delay-0.07s.gif';
import fsfqyZTioLcQaEwjOrobdEC from 'src/assets/day_18/frame_22_delay-0.06s.gif';
import fSwvudySWdIRZMnJUGPyzXB from 'src/assets/day_18/frame_23_delay-0.07s.gif';
import yaVZXaZHoyWTBKxTKBysGs from 'src/assets/day_18/frame_24_delay-0.07s.gif';
import fVFyzLBcKhexVMDVQDvPgQd from 'src/assets/day_18/frame_25_delay-0.06s.gif';
import croUkHbhYaBMmgexqLKuojc from 'src/assets/day_18/frame_26_delay-0.07s.gif';
import dYyuYYNskTQVysDESRUQIju from 'src/assets/day_18/frame_27_delay-0.07s.gif';
import etxUOTrQoeiqNxlsndHfyoZ from 'src/assets/day_18/frame_28_delay-0.06s.gif';
import fFZFQNNLNHtipsQfUTWXkfy from 'src/assets/day_18/frame_29_delay-0.07s.gif';
import enficHWvYpnydBoTWdwThYY from 'src/assets/day_18/frame_30_delay-0.07s.gif';
import bgeWtRgBfVnlqBJqdNkNJqY from 'src/assets/day_18/frame_31_delay-0.06s.gif';
import asioPreSAxYhBjSIJpqSDpq from 'src/assets/day_18/frame_32_delay-0.07s.gif';
import fLEvQtUYYYWIgdJpGDkHBtU from 'src/assets/day_18/frame_33_delay-0.07s.gif';
import eeDkRtDcRHlaakseAcBGgrY from 'src/assets/day_18/frame_34_delay-0.06s.gif';
import bVZnNJAsgztRdLTtQBsVvnU from 'src/assets/day_18/frame_35_delay-0.07s.gif';
import bySzivByvjjrzTvfBcjqKuK from 'src/assets/day_18/frame_36_delay-0.07s.gif';
import SbgNLvtKoQmNXODNtduodb from 'src/assets/day_18/frame_37_delay-0.06s.gif';
import efiUygqRokGWXFOKawFLCTU from 'src/assets/day_18/frame_38_delay-0.07s.gif';
import fRtsOUKqbqaELaGgCezaKWM from 'src/assets/day_18/frame_39_delay-0.07s.gif';
import dLpjaOQuqMPTfzNNyxlvPkR from 'src/assets/day_18/frame_40_delay-0.06s.gif';
import cPUeDiJipuRdFyVYfixkLVV from 'src/assets/day_18/frame_41_delay-0.07s.gif';
import OdhpLiRmysRNkJtknoGZhH from 'src/assets/day_18/frame_42_delay-0.07s.gif';
import emhxrEAMExdsTyQJdmOboLB from 'src/assets/day_18/frame_43_delay-0.06s.gif';
import amzxtELNUcdlytRfVFljuQI from 'src/assets/day_18/frame_44_delay-0.07s.gif';
import ffgTjElOhYUXBpZlxhoPZUm from 'src/assets/day_18/frame_45_delay-0.07s.gif';
import dwAyhNKeMXyQImVJJXYNNwh from 'src/assets/day_18/frame_46_delay-0.06s.gif';
import eJLKGOcKzWMSCndCKbUcjJC from 'src/assets/day_18/frame_47_delay-0.07s.gif';
import eWwflRrRxUnagfDfYekxBrQ from 'src/assets/day_18/frame_48_delay-0.07s.gif';
import dvpoDZmrCuyybuLfrXOgSWt from 'src/assets/day_18/frame_49_delay-0.06s.gif';
import dieNYcsDgivsGDTGSIHYKoE from 'src/assets/day_18/frame_50_delay-0.07s.gif';
import dLXGBBzTRCZfPlqPmevXibb from 'src/assets/day_18/frame_51_delay-0.07s.gif';
import ahOIgJYzrOOvQDwEDGsJpqS from 'src/assets/day_18/frame_52_delay-0.06s.gif';
import aotZLfQEtDfulLxdrClTTwt from 'src/assets/day_18/frame_53_delay-0.07s.gif';
import yYTygxKuMMkKVQxLmLIlLS from 'src/assets/day_18/frame_54_delay-0.07s.gif';
import cSkpHlVvklfbPKUSfWCelaU from 'src/assets/day_18/frame_55_delay-0.06s.gif';
import YTtzYCCszHWIygPAcixqPN from 'src/assets/day_18/frame_56_delay-0.07s.gif';
import bvwETfkUrqkhFrqtjxJARoU from 'src/assets/day_18/frame_57_delay-0.07s.gif';
import fyEDsUaEfVtJKQrrMwwPKgN from 'src/assets/day_18/frame_58_delay-0.06s.gif';
import bVIoSilImGviaejbGUDFzlG from 'src/assets/day_18/frame_59_delay-0.07s.gif';
import bmawcsgtNshUMVormbbZrLr from 'src/assets/day_18/frame_60_delay-0.07s.gif';

export default class Day18 implements Gift {
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
    loadImage(MFsJDMdYmSfIumjgdODalI),
    loadImage(xiJZcCMBkCaabefOrJtMYe),
    loadImage(dqTmxSyQGqBwwQhXwUUFRHw),
    loadImage(fyjwtZOfHwXXFEMPkHWPyJV),
    loadImage(eteWzyqKfYpUQVGvqfmDhuw),
    loadImage(fwxiTbkVgOLxrLKpxEZaRbz),
    loadImage(cTEdQHJykHrRTLiUPwUVUrl),
    loadImage(eICToROeONNVLidXubLfvpu),
    loadImage(dAxfcyMuRyQDPEXOgHUaFar),
    loadImage(bqBFRKvrsiNBoXOjCGigVuq),
    loadImage(ekczoNkbaKSJQoxoDWyhyMP),
    loadImage(agfiEVDVQHxVFboDxdikOJq),
    loadImage(ahvQFaiMhkirizSMJPhckGL),
    loadImage(dvvveAWfpzRdziAqdJeMWor),
    loadImage(dTmNuHkFsnZPTNXXCmevDYz),
    loadImage(fjyYmESsEwMUqJaBZdsUpab),
    loadImage(cZlFkhFczSdjxwuAhGsVaox),
    loadImage(KEQzpLbpZFlXopaTVpxHrD),
    loadImage(cpWLDxWmxravWGCYZkHdJcR),
    loadImage(QUlkNMrMsFZeZnjpJYXwhN),
    loadImage(cQHWnJPFzAJBmUxveXskaIL),
    loadImage(dAgGvERzgOUZCgVOtBscfsn),
    loadImage(fsfqyZTioLcQaEwjOrobdEC),
    loadImage(fSwvudySWdIRZMnJUGPyzXB),
    loadImage(yaVZXaZHoyWTBKxTKBysGs),
    loadImage(fVFyzLBcKhexVMDVQDvPgQd),
    loadImage(croUkHbhYaBMmgexqLKuojc),
    loadImage(dYyuYYNskTQVysDESRUQIju),
    loadImage(etxUOTrQoeiqNxlsndHfyoZ),
    loadImage(fFZFQNNLNHtipsQfUTWXkfy),
    loadImage(enficHWvYpnydBoTWdwThYY),
    loadImage(bgeWtRgBfVnlqBJqdNkNJqY),
    loadImage(asioPreSAxYhBjSIJpqSDpq),
    loadImage(fLEvQtUYYYWIgdJpGDkHBtU),
    loadImage(eeDkRtDcRHlaakseAcBGgrY),
    loadImage(bVZnNJAsgztRdLTtQBsVvnU),
    loadImage(bySzivByvjjrzTvfBcjqKuK),
    loadImage(SbgNLvtKoQmNXODNtduodb),
    loadImage(efiUygqRokGWXFOKawFLCTU),
    loadImage(fRtsOUKqbqaELaGgCezaKWM),
    loadImage(dLpjaOQuqMPTfzNNyxlvPkR),
    loadImage(cPUeDiJipuRdFyVYfixkLVV),
    loadImage(OdhpLiRmysRNkJtknoGZhH),
    loadImage(emhxrEAMExdsTyQJdmOboLB),
    loadImage(amzxtELNUcdlytRfVFljuQI),
    loadImage(ffgTjElOhYUXBpZlxhoPZUm),
    loadImage(dwAyhNKeMXyQImVJJXYNNwh),
    loadImage(eJLKGOcKzWMSCndCKbUcjJC),
    loadImage(eWwflRrRxUnagfDfYekxBrQ),
    loadImage(dvpoDZmrCuyybuLfrXOgSWt),
    loadImage(dieNYcsDgivsGDTGSIHYKoE),
    loadImage(dLXGBBzTRCZfPlqPmevXibb),
    loadImage(ahOIgJYzrOOvQDwEDGsJpqS),
    loadImage(aotZLfQEtDfulLxdrClTTwt),
    loadImage(yYTygxKuMMkKVQxLmLIlLS),
    loadImage(cSkpHlVvklfbPKUSfWCelaU),
    loadImage(YTtzYCCszHWIygPAcixqPN),
    loadImage(bvwETfkUrqkhFrqtjxJARoU),
    loadImage(fyEDsUaEfVtJKQrrMwwPKgN),
    loadImage(bVIoSilImGviaejbGUDFzlG),
    loadImage(bmawcsgtNshUMVormbbZrLr),
  ];

  private static frames: Array<HTMLImageElement> = [];
  private static currentFrame: number = 0;

  private static fps = 1000 / 20;
  private static last = 0;

  public static async init() {
    if (Day18.frames.length === 0) {
      await Day18.loadFrames();
    }
  }

  private static async loadFrames() {
    Day18.frames = await Promise.all(Day18.framesPromises);
  }

  public static getFrame(): HTMLImageElement {
    const now = Date.now();
    const elapsed = now - Day18.last;

    if (elapsed < Day18.fps) return Day18.frames[Day18.currentFrame];

    Day18.last = now;
    Day18.currentFrame = (Day18.currentFrame + 1) % Day18.frames.length;

    return Day18.frames[Day18.currentFrame];
  }
}
