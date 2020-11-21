import preval from 'preval.macro';

import { Gift } from "../types";
import { loadImage } from "../helper";

import qrCode from './qr-code.png';

import dovzpiZNTWXREWVpJJwuuoa from 'src/assets/day_16/frame_00_delay-0.08s.gif';
import bryIdpDMDnRlArYxGbEwiZN from 'src/assets/day_16/frame_01_delay-0.08s.gif';
import epXadjfMmHXBmWaGvtttIIG from 'src/assets/day_16/frame_02_delay-0.08s.gif';
import fYTNVCCMhLmahDGdYCPlFBf from 'src/assets/day_16/frame_03_delay-0.08s.gif';
import bWxWkWrrtQSpcQDAKyOIeTx from 'src/assets/day_16/frame_04_delay-0.08s.gif';
import bBLdvMzZqByTzezakrmKNTy from 'src/assets/day_16/frame_05_delay-0.08s.gif';
import bseIjHZyVFEenzPCRdUeyMy from 'src/assets/day_16/frame_06_delay-0.08s.gif';
import flYVArKFsnKjGZQzffyiMgU from 'src/assets/day_16/frame_07_delay-0.08s.gif';
import ePjsftfJhMoQXVxHoSTpYnb from 'src/assets/day_16/frame_08_delay-0.08s.gif';
import PdtPljUdsCsoFyRCxqrrix from 'src/assets/day_16/frame_09_delay-0.08s.gif';
import dyWLvTWuiedeyFVJJRlOEJy from 'src/assets/day_16/frame_10_delay-0.08s.gif';
import fWEYVDilrHmBHixLaeaZZhq from 'src/assets/day_16/frame_11_delay-0.08s.gif';
import cLurdwkFLFGvJwNOcbPDTrB from 'src/assets/day_16/frame_12_delay-0.08s.gif';
import cvClgoAJpdZFogYNnJSgkfB from 'src/assets/day_16/frame_13_delay-0.08s.gif';
import fQuwFtsiUUtVVezxfJxbZrm from 'src/assets/day_16/frame_14_delay-0.08s.gif';
import brjgzxorrygrcxTfvbvHeZz from 'src/assets/day_16/frame_15_delay-0.08s.gif';
import ezsqyUJBYQpOjxtnQpPVbde from 'src/assets/day_16/frame_16_delay-0.08s.gif';
import eNxTWKYjLveCJLZDhlrCMps from 'src/assets/day_16/frame_17_delay-0.08s.gif';
import bmsYtshbVLKCJmiWnTodPrO from 'src/assets/day_16/frame_18_delay-0.08s.gif';
import vcmRlJmQbLxyajWeoNsPGg from 'src/assets/day_16/frame_19_delay-0.08s.gif';
import bSrNCXgjGgwKzpXEMPUtCxi from 'src/assets/day_16/frame_20_delay-0.08s.gif';
import bhbKjKsHXVGKHwgARkKefgh from 'src/assets/day_16/frame_21_delay-0.08s.gif';
import cMyQgOpPGMkEFtjCLHxlsPI from 'src/assets/day_16/frame_22_delay-0.08s.gif';
import fMRrwBMMXXSFrXhyYBDnrZZ from 'src/assets/day_16/frame_23_delay-0.08s.gif';
import dGGeGCQCkpYqKRtbdmlgciX from 'src/assets/day_16/frame_24_delay-0.08s.gif';
import fxgLoqAtJBOBFUsfoFXtZNP from 'src/assets/day_16/frame_25_delay-0.08s.gif';
import fgjcydLPEFLLljekINvgLSL from 'src/assets/day_16/frame_26_delay-0.08s.gif';
import evtvlsQQNcdEyoqyIlPReIo from 'src/assets/day_16/frame_27_delay-0.08s.gif';
import cqrFnIDPfbCUOORpusjHXVU from 'src/assets/day_16/frame_28_delay-0.08s.gif';
import fzWZebkSAiwSFrbjRvtpebp from 'src/assets/day_16/frame_29_delay-0.08s.gif';
import cgWkuqKjSvqELlsYHMcfjtf from 'src/assets/day_16/frame_30_delay-0.08s.gif';
import eDabGXZzGPQJnliDRaZsArS from 'src/assets/day_16/frame_31_delay-0.08s.gif';
import dRYXLcaEFSImIdqEbkitzvy from 'src/assets/day_16/frame_32_delay-0.08s.gif';
import fxpjVQRSAXPmZcsGVktewpv from 'src/assets/day_16/frame_33_delay-0.08s.gif';
import eQjwIRAxivNXTcSJMjNQpZs from 'src/assets/day_16/frame_34_delay-0.08s.gif';
import fQOouolQblDZkAohxcdttKo from 'src/assets/day_16/frame_35_delay-0.08s.gif';
import XBJcjAsYOfJtIoHCxdJAbF from 'src/assets/day_16/frame_36_delay-0.08s.gif';
import dBSmeecwCwilTulPhWDYTgD from 'src/assets/day_16/frame_37_delay-0.08s.gif';
import aeZrWoeTCqBnAGgpVRtNrmk from 'src/assets/day_16/frame_38_delay-0.08s.gif';
import aslbUytaBdRkSnYigWazAvj from 'src/assets/day_16/frame_39_delay-0.08s.gif';
import cXwLdfvERbxBrFgvwYSVORK from 'src/assets/day_16/frame_40_delay-0.08s.gif';
import cinWoXJBtjmDLIPnMKfAGYQ from 'src/assets/day_16/frame_41_delay-0.08s.gif';
import cXUNmCXviToyJTwKAkdYIKV from 'src/assets/day_16/frame_42_delay-0.08s.gif';
import bVyJXvBOTiNZHfHhamFClLq from 'src/assets/day_16/frame_43_delay-0.08s.gif';
import LXDXEjyFjJSeVdGNNWywCu from 'src/assets/day_16/frame_44_delay-0.08s.gif';
import fIRUQgOCQNDHawpBriOHxSB from 'src/assets/day_16/frame_45_delay-0.08s.gif';
import cuJBumMqcdHQwzzPzVVDDVM from 'src/assets/day_16/frame_46_delay-0.08s.gif';
import flcRZwIuOddmASUKeoHUNUI from 'src/assets/day_16/frame_47_delay-0.08s.gif';
import brsuzScjGuYaTGLWwZihcPl from 'src/assets/day_16/frame_48_delay-0.08s.gif';
import abDzYBiiPztOekLYwIUArpN from 'src/assets/day_16/frame_49_delay-0.08s.gif';
import dmoxIqHZGfuzICnTlGauCwM from 'src/assets/day_16/frame_50_delay-0.08s.gif';
import fkMNUlVqgOciJABYKtjLkNb from 'src/assets/day_16/frame_51_delay-0.08s.gif';
import cIWECVaHQbbarHSpnPMrZwY from 'src/assets/day_16/frame_52_delay-0.08s.gif';
import fJpKLEGbYiRzWBPxayoNSZd from 'src/assets/day_16/frame_53_delay-0.08s.gif';
import bbtbZpZlFwoPcIJCYKfdxjL from 'src/assets/day_16/frame_54_delay-0.08s.gif';
import eWMtnUPLTEIQncKWMHPCZwV from 'src/assets/day_16/frame_55_delay-0.08s.gif';
import cRCpWMaSoTjIypIVFVrCKCJ from 'src/assets/day_16/frame_56_delay-0.08s.gif';
import MyktfLRJunPvCWaACVjReV from 'src/assets/day_16/frame_57_delay-0.08s.gif';
import fmoRPpycLeGQAbmGGOnZNNq from 'src/assets/day_16/frame_58_delay-0.08s.gif';
import dQqoUVnhMJeHHvPUEKSUvSt from 'src/assets/day_16/frame_59_delay-0.08s.gif';
import bZXkpOWfNEinYmEqEzQDoRZ from 'src/assets/day_16/frame_60_delay-0.08s.gif';
import faiQBRFsmzXoHjHtXuVerJu from 'src/assets/day_16/frame_61_delay-0.08s.gif';
import ezvGWrlvxRsPCoBwaEtBCpO from 'src/assets/day_16/frame_62_delay-0.08s.gif';
import ejZsUeuiTbOcNRqKTjnTXiL from 'src/assets/day_16/frame_63_delay-0.08s.gif';
import eybbhxQzwlTBvMNWMJmUgaf from 'src/assets/day_16/frame_64_delay-0.08s.gif';
import dXNZHsdPQiXGndQXcaSMItt from 'src/assets/day_16/frame_65_delay-0.08s.gif';

export default class Day16 implements Gift {
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
    loadImage(dovzpiZNTWXREWVpJJwuuoa),
    loadImage(bryIdpDMDnRlArYxGbEwiZN),
    loadImage(epXadjfMmHXBmWaGvtttIIG),
    loadImage(fYTNVCCMhLmahDGdYCPlFBf),
    loadImage(bWxWkWrrtQSpcQDAKyOIeTx),
    loadImage(bBLdvMzZqByTzezakrmKNTy),
    loadImage(bseIjHZyVFEenzPCRdUeyMy),
    loadImage(flYVArKFsnKjGZQzffyiMgU),
    loadImage(ePjsftfJhMoQXVxHoSTpYnb),
    loadImage(PdtPljUdsCsoFyRCxqrrix),
    loadImage(dyWLvTWuiedeyFVJJRlOEJy),
    loadImage(fWEYVDilrHmBHixLaeaZZhq),
    loadImage(cLurdwkFLFGvJwNOcbPDTrB),
    loadImage(cvClgoAJpdZFogYNnJSgkfB),
    loadImage(fQuwFtsiUUtVVezxfJxbZrm),
    loadImage(brjgzxorrygrcxTfvbvHeZz),
    loadImage(ezsqyUJBYQpOjxtnQpPVbde),
    loadImage(eNxTWKYjLveCJLZDhlrCMps),
    loadImage(bmsYtshbVLKCJmiWnTodPrO),
    loadImage(vcmRlJmQbLxyajWeoNsPGg),
    loadImage(bSrNCXgjGgwKzpXEMPUtCxi),
    loadImage(bhbKjKsHXVGKHwgARkKefgh),
    loadImage(cMyQgOpPGMkEFtjCLHxlsPI),
    loadImage(fMRrwBMMXXSFrXhyYBDnrZZ),
    loadImage(dGGeGCQCkpYqKRtbdmlgciX),
    loadImage(fxgLoqAtJBOBFUsfoFXtZNP),
    loadImage(fgjcydLPEFLLljekINvgLSL),
    loadImage(evtvlsQQNcdEyoqyIlPReIo),
    loadImage(cqrFnIDPfbCUOORpusjHXVU),
    loadImage(fzWZebkSAiwSFrbjRvtpebp),
    loadImage(cgWkuqKjSvqELlsYHMcfjtf),
    loadImage(eDabGXZzGPQJnliDRaZsArS),
    loadImage(dRYXLcaEFSImIdqEbkitzvy),
    loadImage(fxpjVQRSAXPmZcsGVktewpv),
    loadImage(eQjwIRAxivNXTcSJMjNQpZs),
    loadImage(fQOouolQblDZkAohxcdttKo),
    loadImage(XBJcjAsYOfJtIoHCxdJAbF),
    loadImage(dBSmeecwCwilTulPhWDYTgD),
    loadImage(aeZrWoeTCqBnAGgpVRtNrmk),
    loadImage(aslbUytaBdRkSnYigWazAvj),
    loadImage(cXwLdfvERbxBrFgvwYSVORK),
    loadImage(cinWoXJBtjmDLIPnMKfAGYQ),
    loadImage(cXUNmCXviToyJTwKAkdYIKV),
    loadImage(bVyJXvBOTiNZHfHhamFClLq),
    loadImage(LXDXEjyFjJSeVdGNNWywCu),
    loadImage(fIRUQgOCQNDHawpBriOHxSB),
    loadImage(cuJBumMqcdHQwzzPzVVDDVM),
    loadImage(flcRZwIuOddmASUKeoHUNUI),
    loadImage(brsuzScjGuYaTGLWwZihcPl),
    loadImage(abDzYBiiPztOekLYwIUArpN),
    loadImage(dmoxIqHZGfuzICnTlGauCwM),
    loadImage(fkMNUlVqgOciJABYKtjLkNb),
    loadImage(cIWECVaHQbbarHSpnPMrZwY),
    loadImage(fJpKLEGbYiRzWBPxayoNSZd),
    loadImage(bbtbZpZlFwoPcIJCYKfdxjL),
    loadImage(eWMtnUPLTEIQncKWMHPCZwV),
    loadImage(cRCpWMaSoTjIypIVFVrCKCJ),
    loadImage(MyktfLRJunPvCWaACVjReV),
    loadImage(fmoRPpycLeGQAbmGGOnZNNq),
    loadImage(dQqoUVnhMJeHHvPUEKSUvSt),
    loadImage(bZXkpOWfNEinYmEqEzQDoRZ),
    loadImage(faiQBRFsmzXoHjHtXuVerJu),
    loadImage(ezvGWrlvxRsPCoBwaEtBCpO),
    loadImage(ejZsUeuiTbOcNRqKTjnTXiL),
    loadImage(eybbhxQzwlTBvMNWMJmUgaf),
    loadImage(dXNZHsdPQiXGndQXcaSMItt),
  ];

  private static frames: Array<HTMLImageElement> = [];
  private static currentFrame: number = 0;

  private static fps = 1000 / 20;
  private static last = 0;

  public static async init() {
    if (Day16.frames.length === 0) {
      await Day16.loadFrames();
    }
  }

  private static async loadFrames() {
    Day16.frames = await Promise.all(Day16.framesPromises);
  }

  public static getFrame(): HTMLImageElement {
    const now = Date.now();
    const elapsed = now - Day16.last;

    if (elapsed < Day16.fps) return Day16.frames[Day16.currentFrame];

    Day16.last = now;
    Day16.currentFrame = (Day16.currentFrame + 1) % Day16.frames.length;

    return Day16.frames[Day16.currentFrame];
  }
}
