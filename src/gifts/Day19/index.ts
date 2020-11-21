import preval from 'preval.macro';

import { Gift } from "../types";
import { loadImage } from "../helper";

import qrCode from './qr-code.png';

import SwCOxlvDXdtrpTwmBCAmJU from 'src/assets/day_19/frame_00_delay-0.03s.gif';
import bOtxGEuLwkBeLlCzMXPxsgX from 'src/assets/day_19/frame_01_delay-0.03s.gif';
import dMdmMEtGvAnzkiNDltoPCnH from 'src/assets/day_19/frame_02_delay-0.03s.gif';
import binDbeEMcrPSLwwFTMFlLaV from 'src/assets/day_19/frame_03_delay-0.03s.gif';
import dYxdiwoLrvOyCJWNuOvkZhm from 'src/assets/day_19/frame_04_delay-0.03s.gif';
import adlDTqSJNmlcQVYMJaqaXLx from 'src/assets/day_19/frame_05_delay-0.03s.gif';
import HLcwOfmUDCLYOtTsmidihB from 'src/assets/day_19/frame_06_delay-0.03s.gif';
import cqaDfGUraTOcqmqEzKvoIWE from 'src/assets/day_19/frame_07_delay-0.03s.gif';
import chsBLfwhwtuLPlyNvYSwnLQ from 'src/assets/day_19/frame_08_delay-0.03s.gif';
import dQylaplhwtLzqxeBQlqSWTL from 'src/assets/day_19/frame_09_delay-0.03s.gif';
import EZPtHFoSAkSVmMDzVfpwwc from 'src/assets/day_19/frame_10_delay-0.03s.gif';
import ctDxKqimTyLRIlxLvFjWKGN from 'src/assets/day_19/frame_11_delay-0.03s.gif';
import eKjQPSXXTQRQwsMXPblFhuQ from 'src/assets/day_19/frame_12_delay-0.03s.gif';
import eKzPdjjQQpLdMJQrOEGDddA from 'src/assets/day_19/frame_13_delay-0.03s.gif';
import dgtXfICgVUzpEbOrnmUXwfQ from 'src/assets/day_19/frame_14_delay-0.03s.gif';
import dcpLSUeSHBYlhTrmSXbKKcT from 'src/assets/day_19/frame_15_delay-0.03s.gif';
import bJcPMnUehfqnPuWiVyKydAb from 'src/assets/day_19/frame_16_delay-0.03s.gif';
import fjlChVXZiJRBetZkINTByIR from 'src/assets/day_19/frame_17_delay-0.03s.gif';
import cwNKmivJSlKndxRDGfYjkHz from 'src/assets/day_19/frame_18_delay-0.03s.gif';
import cbIsqKSJYOTqeNbcrtpTzVe from 'src/assets/day_19/frame_19_delay-0.03s.gif';
import ftkpbjNaIpUmyyKJpVeqWKc from 'src/assets/day_19/frame_20_delay-0.03s.gif';
import esXKjUKukcbqYBiFARCEidh from 'src/assets/day_19/frame_21_delay-0.03s.gif';
import cIwJGqrUonVCkkKGZPdjiCG from 'src/assets/day_19/frame_22_delay-0.03s.gif';
import dffmZjgZMkhhlvFkqsAPojl from 'src/assets/day_19/frame_23_delay-0.03s.gif';
import cctChlocJVOOaIXjvitHLSU from 'src/assets/day_19/frame_24_delay-0.03s.gif';
import cHtrBFVKNEhkwbbPmjnwPAB from 'src/assets/day_19/frame_25_delay-0.03s.gif';
import eCbFOxPaglBOiDSHniowuCK from 'src/assets/day_19/frame_26_delay-0.03s.gif';
import eeJGFKlmOymJIwdbaqOwWtG from 'src/assets/day_19/frame_27_delay-0.03s.gif';
import bpiMhDjqPGkFmkCUoYiFOnB from 'src/assets/day_19/frame_28_delay-0.03s.gif';
import ffxxlJKBVedhkcbmwNuoBFu from 'src/assets/day_19/frame_29_delay-0.03s.gif';
import dZjGKRTHeiqdeynlQVmhqTm from 'src/assets/day_19/frame_30_delay-0.03s.gif';
import bUOThxPVfrAulGHdnEAjwSW from 'src/assets/day_19/frame_31_delay-0.03s.gif';
import cyJvuhcGRbGFXTPbZagcxVA from 'src/assets/day_19/frame_32_delay-0.03s.gif';
import coalqKMxJTcCJMtJvQvxNUm from 'src/assets/day_19/frame_33_delay-0.03s.gif';
import eWHGXXwLAEioUizLwWNnGAU from 'src/assets/day_19/frame_34_delay-0.03s.gif';
import bdWUloKivnJzIfLVtiuCnVJ from 'src/assets/day_19/frame_35_delay-0.03s.gif';
import ajfolsljbdVrdlOqMRpMKMF from 'src/assets/day_19/frame_36_delay-0.03s.gif';
import cLxolNRByoITMHWRRfCMFAG from 'src/assets/day_19/frame_37_delay-0.03s.gif';
import euRlGwTmyJVEHWOPHqZLPXS from 'src/assets/day_19/frame_38_delay-0.03s.gif';
import eOkvAXmtIhMjCXTmvDfGKuk from 'src/assets/day_19/frame_39_delay-0.03s.gif';
import bGreRmQZzZwvJmTuNPvrYIk from 'src/assets/day_19/frame_40_delay-0.03s.gif';
import bkavIIrSlekbFVewJnpUJhj from 'src/assets/day_19/frame_41_delay-0.03s.gif';
import anNkDiSvwSdVbbhOqPOcfdy from 'src/assets/day_19/frame_42_delay-0.03s.gif';
import cXhxhSyQQhHRXQmeGbqjRnj from 'src/assets/day_19/frame_43_delay-0.03s.gif';
import bccWEaigsLXEyFapvEpAnFP from 'src/assets/day_19/frame_44_delay-0.03s.gif';
import byuVyYNEqHDkGKkZhRGfttR from 'src/assets/day_19/frame_45_delay-0.03s.gif';
import bYYLVQuMzUqowqpYoRvmbxL from 'src/assets/day_19/frame_46_delay-0.03s.gif';
import WisuhVfAgzcPGTLUYKmleG from 'src/assets/day_19/frame_47_delay-0.03s.gif';
import dvmCbhiYtWRzKNORhGOoJdY from 'src/assets/day_19/frame_48_delay-0.03s.gif';
import fSvbZUeXIQSfZgxoFGaEcnt from 'src/assets/day_19/frame_49_delay-0.03s.gif';
import evRXYGJXVzKvcpQPQeUiJgW from 'src/assets/day_19/frame_50_delay-0.03s.gif';
import fePFPcLBxJGPLLedUWwlPus from 'src/assets/day_19/frame_51_delay-0.03s.gif';
import adjcJqqTQInfztSdATRFUXf from 'src/assets/day_19/frame_52_delay-0.03s.gif';
import eiMkFClgBkodpkmWoGzfhPQ from 'src/assets/day_19/frame_53_delay-0.03s.gif';
import dSQkgWvEdebbKlJgsSvJpom from 'src/assets/day_19/frame_54_delay-0.03s.gif';
import dLExQlkLvrqWZaUWDnfwAsH from 'src/assets/day_19/frame_55_delay-0.03s.gif';

export default class Day19 extends Gift {
  public static hash = "dRxyCvcYSEHGLzYbaoroBkR";
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
    loadImage(SwCOxlvDXdtrpTwmBCAmJU),
    loadImage(bOtxGEuLwkBeLlCzMXPxsgX),
    loadImage(dMdmMEtGvAnzkiNDltoPCnH),
    loadImage(binDbeEMcrPSLwwFTMFlLaV),
    loadImage(dYxdiwoLrvOyCJWNuOvkZhm),
    loadImage(adlDTqSJNmlcQVYMJaqaXLx),
    loadImage(HLcwOfmUDCLYOtTsmidihB),
    loadImage(cqaDfGUraTOcqmqEzKvoIWE),
    loadImage(chsBLfwhwtuLPlyNvYSwnLQ),
    loadImage(dQylaplhwtLzqxeBQlqSWTL),
    loadImage(EZPtHFoSAkSVmMDzVfpwwc),
    loadImage(ctDxKqimTyLRIlxLvFjWKGN),
    loadImage(eKjQPSXXTQRQwsMXPblFhuQ),
    loadImage(eKzPdjjQQpLdMJQrOEGDddA),
    loadImage(dgtXfICgVUzpEbOrnmUXwfQ),
    loadImage(dcpLSUeSHBYlhTrmSXbKKcT),
    loadImage(bJcPMnUehfqnPuWiVyKydAb),
    loadImage(fjlChVXZiJRBetZkINTByIR),
    loadImage(cwNKmivJSlKndxRDGfYjkHz),
    loadImage(cbIsqKSJYOTqeNbcrtpTzVe),
    loadImage(ftkpbjNaIpUmyyKJpVeqWKc),
    loadImage(esXKjUKukcbqYBiFARCEidh),
    loadImage(cIwJGqrUonVCkkKGZPdjiCG),
    loadImage(dffmZjgZMkhhlvFkqsAPojl),
    loadImage(cctChlocJVOOaIXjvitHLSU),
    loadImage(cHtrBFVKNEhkwbbPmjnwPAB),
    loadImage(eCbFOxPaglBOiDSHniowuCK),
    loadImage(eeJGFKlmOymJIwdbaqOwWtG),
    loadImage(bpiMhDjqPGkFmkCUoYiFOnB),
    loadImage(ffxxlJKBVedhkcbmwNuoBFu),
    loadImage(dZjGKRTHeiqdeynlQVmhqTm),
    loadImage(bUOThxPVfrAulGHdnEAjwSW),
    loadImage(cyJvuhcGRbGFXTPbZagcxVA),
    loadImage(coalqKMxJTcCJMtJvQvxNUm),
    loadImage(eWHGXXwLAEioUizLwWNnGAU),
    loadImage(bdWUloKivnJzIfLVtiuCnVJ),
    loadImage(ajfolsljbdVrdlOqMRpMKMF),
    loadImage(cLxolNRByoITMHWRRfCMFAG),
    loadImage(euRlGwTmyJVEHWOPHqZLPXS),
    loadImage(eOkvAXmtIhMjCXTmvDfGKuk),
    loadImage(bGreRmQZzZwvJmTuNPvrYIk),
    loadImage(bkavIIrSlekbFVewJnpUJhj),
    loadImage(anNkDiSvwSdVbbhOqPOcfdy),
    loadImage(cXhxhSyQQhHRXQmeGbqjRnj),
    loadImage(bccWEaigsLXEyFapvEpAnFP),
    loadImage(byuVyYNEqHDkGKkZhRGfttR),
    loadImage(bYYLVQuMzUqowqpYoRvmbxL),
    loadImage(WisuhVfAgzcPGTLUYKmleG),
    loadImage(dvmCbhiYtWRzKNORhGOoJdY),
    loadImage(fSvbZUeXIQSfZgxoFGaEcnt),
    loadImage(evRXYGJXVzKvcpQPQeUiJgW),
    loadImage(fePFPcLBxJGPLLedUWwlPus),
    loadImage(adjcJqqTQInfztSdATRFUXf),
    loadImage(eiMkFClgBkodpkmWoGzfhPQ),
    loadImage(dSQkgWvEdebbKlJgsSvJpom),
    loadImage(dLExQlkLvrqWZaUWDnfwAsH),
  ];

  private static frames: Array<HTMLImageElement> = [];
  private static currentFrame: number = 0;

  private static fps = 1000 / 20;
  private static last = 0;

  public static async init() {
    if (Day19.frames.length === 0) {
      await Day19.loadFrames();
    }
  }

  private static async loadFrames() {
    Day19.frames = await Promise.all(Day19.framesPromises);
  }

  public static getFrame(): HTMLImageElement {
    const now = Date.now();
    const elapsed = now - Day19.last;

    if (elapsed < Day19.fps) return Day19.frames[Day19.currentFrame];

    Day19.last = now;
    Day19.currentFrame = (Day19.currentFrame + 1) % Day19.frames.length;

    return Day19.frames[Day19.currentFrame];
  }
}
