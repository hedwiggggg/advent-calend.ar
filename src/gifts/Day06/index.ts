import preval from 'preval.macro';

import { Gift } from "../types";
import { loadImage } from "../helper";

import qrCode from './qr-code.png';

import ckishzUSPVxUajhqNSJLuXT from 'src/assets/day_06/frame_00_delay-0.07s.gif';
import ejxqJSVzJLZtHHrgfjVuKFK from 'src/assets/day_06/frame_01_delay-0.06s.gif';
import PYuDejWBJdNfUkwPsdVWxu from 'src/assets/day_06/frame_02_delay-0.07s.gif';
import bvBzoOAEriAAeCTvFDefXei from 'src/assets/day_06/frame_03_delay-0.07s.gif';
import QvxnypPNeQGLGYwBmhpOQk from 'src/assets/day_06/frame_04_delay-0.06s.gif';
import eIjfinPhChzqdTTBpNvqUgO from 'src/assets/day_06/frame_05_delay-0.07s.gif';
import gaYweVnrgoNBkYHpiUMCOSn from 'src/assets/day_06/frame_06_delay-0.07s.gif';
import edejWrziplwKtCEyjuyJjow from 'src/assets/day_06/frame_07_delay-0.06s.gif';
import YDtxvGwXTYATdSeWkPNXRJ from 'src/assets/day_06/frame_08_delay-0.07s.gif';
import dcOxzzhkCXjYHxjIODNRwCd from 'src/assets/day_06/frame_09_delay-0.07s.gif';
import ITUAccWUNzQUeAIVxyUncF from 'src/assets/day_06/frame_10_delay-0.06s.gif';
import UuEyZcyRxhRhoQdeuusJYs from 'src/assets/day_06/frame_11_delay-0.07s.gif';
import HErytAVFgATXJJdmCtcdnt from 'src/assets/day_06/frame_12_delay-0.07s.gif';
import cVyRcbBcRXoBSusTsbhRwpP from 'src/assets/day_06/frame_13_delay-0.06s.gif';
import cvFPZbsZIluyFMiYqjaYSyB from 'src/assets/day_06/frame_14_delay-0.07s.gif';
import dgitlprcHgedAgSOqOvUbKX from 'src/assets/day_06/frame_15_delay-0.07s.gif';
import eNerjUfyzDvTCcLVkVvraco from 'src/assets/day_06/frame_16_delay-0.06s.gif';
import fBHodkvBpojBdOSqvtRwlQO from 'src/assets/day_06/frame_17_delay-0.07s.gif';
import cUQVglJlSifrjuteVukJWwz from 'src/assets/day_06/frame_18_delay-0.07s.gif';
import dKHMmEiPJZldDsyLWItrnNk from 'src/assets/day_06/frame_19_delay-0.06s.gif';
import cZzaHjgmwJbaVcEaDNcBZZN from 'src/assets/day_06/frame_20_delay-0.07s.gif';
import bpBcAcUOdcpuSVDZFFfgQTt from 'src/assets/day_06/frame_21_delay-0.07s.gif';
import diPCDvEZnOZVizCdkOzPOIT from 'src/assets/day_06/frame_22_delay-0.06s.gif';
import dZIzfHEkdZegbMIKyJWmAwT from 'src/assets/day_06/frame_23_delay-0.07s.gif';
import bhQsJMQjialtYLTiYybpALI from 'src/assets/day_06/frame_24_delay-0.07s.gif';
import dbAOKmwDhwuKttiRoVgFgpl from 'src/assets/day_06/frame_25_delay-0.06s.gif';
import euRWWYlcwkDUIlCOVHmSYuZ from 'src/assets/day_06/frame_26_delay-0.07s.gif';
import bGiOShpujpPvswHudWimQBl from 'src/assets/day_06/frame_27_delay-0.07s.gif';
import CanPlGXpHSuPIVVJVsVuJu from 'src/assets/day_06/frame_28_delay-0.06s.gif';
import cXJRVuphxnEUzKsKAeDSfZh from 'src/assets/day_06/frame_29_delay-0.07s.gif';
import dMipULIEenZsOEdybjbZraL from 'src/assets/day_06/frame_30_delay-0.07s.gif';
import MUFezMIWTyGLxYPqkRYCKH from 'src/assets/day_06/frame_31_delay-0.06s.gif';
import dfDIpHsEvDoTWDUapRiARia from 'src/assets/day_06/frame_32_delay-0.07s.gif';
import djuixqaYcrOkewVNHNKAfFi from 'src/assets/day_06/frame_33_delay-0.07s.gif';
import bTZXxcaAIYCLLkjqjZKpbFf from 'src/assets/day_06/frame_34_delay-0.06s.gif';
import bZaekkPwuNKultwLAzLURQs from 'src/assets/day_06/frame_35_delay-0.07s.gif';
import eNjJTiaYljgJSgeLkjKAsMe from 'src/assets/day_06/frame_36_delay-0.07s.gif';
import MynTBFJhbeKXYMckhNeEmu from 'src/assets/day_06/frame_37_delay-0.06s.gif';
import atiReQquUIaTgMYLMoosVQe from 'src/assets/day_06/frame_38_delay-0.07s.gif';
import fNfJWOeejUwJStHDubfLlsN from 'src/assets/day_06/frame_39_delay-0.07s.gif';
import dilCXVUlGiRJijUqKeOwMPZ from 'src/assets/day_06/frame_40_delay-0.06s.gif';
import cGwFTYkyHhwrsbiEjTcMasN from 'src/assets/day_06/frame_41_delay-0.07s.gif';
import dQQePCHMqwRgBKersIXhWuJ from 'src/assets/day_06/frame_42_delay-0.07s.gif';
import dTBMyIPfjLzWtFzWGGTDwBm from 'src/assets/day_06/frame_43_delay-0.06s.gif';
import dKoQdQjDhlPJhaBflfkNxmt from 'src/assets/day_06/frame_44_delay-0.07s.gif';
import dTuxyoypDRqKitMMXrlyryt from 'src/assets/day_06/frame_45_delay-0.07s.gif';

export default class Day06 implements Gift {
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
    loadImage(ckishzUSPVxUajhqNSJLuXT),
    loadImage(ejxqJSVzJLZtHHrgfjVuKFK),
    loadImage(PYuDejWBJdNfUkwPsdVWxu),
    loadImage(bvBzoOAEriAAeCTvFDefXei),
    loadImage(QvxnypPNeQGLGYwBmhpOQk),
    loadImage(eIjfinPhChzqdTTBpNvqUgO),
    loadImage(gaYweVnrgoNBkYHpiUMCOSn),
    loadImage(edejWrziplwKtCEyjuyJjow),
    loadImage(YDtxvGwXTYATdSeWkPNXRJ),
    loadImage(dcOxzzhkCXjYHxjIODNRwCd),
    loadImage(ITUAccWUNzQUeAIVxyUncF),
    loadImage(UuEyZcyRxhRhoQdeuusJYs),
    loadImage(HErytAVFgATXJJdmCtcdnt),
    loadImage(cVyRcbBcRXoBSusTsbhRwpP),
    loadImage(cvFPZbsZIluyFMiYqjaYSyB),
    loadImage(dgitlprcHgedAgSOqOvUbKX),
    loadImage(eNerjUfyzDvTCcLVkVvraco),
    loadImage(fBHodkvBpojBdOSqvtRwlQO),
    loadImage(cUQVglJlSifrjuteVukJWwz),
    loadImage(dKHMmEiPJZldDsyLWItrnNk),
    loadImage(cZzaHjgmwJbaVcEaDNcBZZN),
    loadImage(bpBcAcUOdcpuSVDZFFfgQTt),
    loadImage(diPCDvEZnOZVizCdkOzPOIT),
    loadImage(dZIzfHEkdZegbMIKyJWmAwT),
    loadImage(bhQsJMQjialtYLTiYybpALI),
    loadImage(dbAOKmwDhwuKttiRoVgFgpl),
    loadImage(euRWWYlcwkDUIlCOVHmSYuZ),
    loadImage(bGiOShpujpPvswHudWimQBl),
    loadImage(CanPlGXpHSuPIVVJVsVuJu),
    loadImage(cXJRVuphxnEUzKsKAeDSfZh),
    loadImage(dMipULIEenZsOEdybjbZraL),
    loadImage(MUFezMIWTyGLxYPqkRYCKH),
    loadImage(dfDIpHsEvDoTWDUapRiARia),
    loadImage(djuixqaYcrOkewVNHNKAfFi),
    loadImage(bTZXxcaAIYCLLkjqjZKpbFf),
    loadImage(bZaekkPwuNKultwLAzLURQs),
    loadImage(eNjJTiaYljgJSgeLkjKAsMe),
    loadImage(MynTBFJhbeKXYMckhNeEmu),
    loadImage(atiReQquUIaTgMYLMoosVQe),
    loadImage(fNfJWOeejUwJStHDubfLlsN),
    loadImage(dilCXVUlGiRJijUqKeOwMPZ),
    loadImage(cGwFTYkyHhwrsbiEjTcMasN),
    loadImage(dQQePCHMqwRgBKersIXhWuJ),
    loadImage(dTBMyIPfjLzWtFzWGGTDwBm),
    loadImage(dKoQdQjDhlPJhaBflfkNxmt),
    loadImage(dTuxyoypDRqKitMMXrlyryt),
  ];

  private static frames: Array<HTMLImageElement> = [];
  private static currentFrame: number = 0;

  private static fps = 1000 / 20;
  private static last = 0;

  public static async init() {
    if (Day06.frames.length === 0) {
      await Day06.loadFrames();
    }
  }

  private static async loadFrames() {
    Day06.frames = await Promise.all(Day06.framesPromises);
  }

  public static getFrame(): HTMLImageElement {
    const now = Date.now();
    const elapsed = now - Day06.last;

    if (elapsed < Day06.fps) return Day06.frames[Day06.currentFrame];

    Day06.last = now;
    Day06.currentFrame = (Day06.currentFrame + 1) % Day06.frames.length;

    return Day06.frames[Day06.currentFrame];
  }
}
