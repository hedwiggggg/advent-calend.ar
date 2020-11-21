import preval from 'preval.macro';

import { Day } from "../types";
import { loadImage } from "../helper";

import qrCode from './qr-code.png';

import HJSsgoNdoKIoYKCcQkGcpK from 'src/assets/day_22/frame_00_delay-0.04s.gif';
import bWoUNAiEvdAHLwEyGrsLNtb from 'src/assets/day_22/frame_01_delay-0.04s.gif';
import ccRLfvMWqmwbJeMdWOfJIcY from 'src/assets/day_22/frame_02_delay-0.04s.gif';
import dDfMScUmwMXfFTGTyKsckTL from 'src/assets/day_22/frame_03_delay-0.04s.gif';
import cnBWrAJWyuBfIoISiGMVQTt from 'src/assets/day_22/frame_04_delay-0.04s.gif';
import fDivRcTNmzqgpduXnENhczS from 'src/assets/day_22/frame_05_delay-0.04s.gif';
import eBOqXuTehzhllRGBxgoKumx from 'src/assets/day_22/frame_06_delay-0.04s.gif';
import bAXYCazdpNFenWYeQiEIGEN from 'src/assets/day_22/frame_07_delay-0.04s.gif';
import eTjmKlykGwOChUzpnJKpTBF from 'src/assets/day_22/frame_08_delay-0.04s.gif';
import cRiCmvlKLCEENwYFdUzPAke from 'src/assets/day_22/frame_09_delay-0.04s.gif';
import eVolbIriIIrvPHwKICJgmbM from 'src/assets/day_22/frame_10_delay-0.04s.gif';
import diKQaJkMWvPPJPTPdVEmvSO from 'src/assets/day_22/frame_11_delay-0.04s.gif';
import aszLXzgEZcBeozYHoxUyqzX from 'src/assets/day_22/frame_12_delay-0.04s.gif';
import dDPiwjZxrnveSuJPTDYRivx from 'src/assets/day_22/frame_13_delay-0.04s.gif';
import afmDvJjFlsfDCmCrVGsfcTm from 'src/assets/day_22/frame_14_delay-0.04s.gif';
import JwqUdWoVptDPhalBvCwehX from 'src/assets/day_22/frame_15_delay-0.04s.gif';
import bAHWxZxaGlpCcBHQwtSqNvj from 'src/assets/day_22/frame_16_delay-0.04s.gif';
import fsvOzpWLaLyIreulWcHPXtp from 'src/assets/day_22/frame_17_delay-0.04s.gif';
import dXTvlpWypCozGUNsGWMNxKd from 'src/assets/day_22/frame_18_delay-0.04s.gif';
import dfeaThSuapvJRAgIPmefhjB from 'src/assets/day_22/frame_19_delay-0.04s.gif';
import baqAlDBhaTKFnsARmCPcMeV from 'src/assets/day_22/frame_20_delay-0.04s.gif';
import dVlNbuaLXbnrFPgtPXuqeHu from 'src/assets/day_22/frame_21_delay-0.04s.gif';
import fDUKUfGNOUQUYfNQerdrMMb from 'src/assets/day_22/frame_22_delay-0.04s.gif';
import crgNPwjdlRQtnpgwiVzVROC from 'src/assets/day_22/frame_23_delay-0.04s.gif';
import fOscJZbvhfiRczuQMghQwXj from 'src/assets/day_22/frame_24_delay-0.04s.gif';
import bZchaTqpWKtpUPnwiAlslAM from 'src/assets/day_22/frame_25_delay-0.04s.gif';
import WLQRlHqdZkaGbsoBRqvOIH from 'src/assets/day_22/frame_26_delay-0.04s.gif';
import elEGZyNAQnmwGRkVgyXbLUS from 'src/assets/day_22/frame_27_delay-0.04s.gif';
import QCgJeJHPpPRtHepMsNSLfx from 'src/assets/day_22/frame_28_delay-0.04s.gif';
import eXJhyIlXpLmWEcAUuWmyGkI from 'src/assets/day_22/frame_29_delay-0.04s.gif';
import cqEpLrEBAAXSxUyqMgJyxbn from 'src/assets/day_22/frame_30_delay-0.04s.gif';
import fXmMDvFTusoDIiCaiyrDwQr from 'src/assets/day_22/frame_31_delay-0.04s.gif';
import duRlLZYDkwMgDMvfrdqVOWa from 'src/assets/day_22/frame_32_delay-0.04s.gif';
import dopIXWlgsFsSkZgIGvHPEDi from 'src/assets/day_22/frame_33_delay-0.04s.gif';
import clhFIGOndNUYEJmLPiasNRK from 'src/assets/day_22/frame_34_delay-0.04s.gif';
import brpyFQyVincloGdyTFuCrpw from 'src/assets/day_22/frame_35_delay-0.04s.gif';
import fPiIhnLbqrCVgKqBKbQKlws from 'src/assets/day_22/frame_36_delay-0.04s.gif';

export default class Day22 extends Day {
  public static hash = "arnPcOYZoBlcnPvwMxyaWAB";
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
    loadImage(HJSsgoNdoKIoYKCcQkGcpK),
    loadImage(bWoUNAiEvdAHLwEyGrsLNtb),
    loadImage(ccRLfvMWqmwbJeMdWOfJIcY),
    loadImage(dDfMScUmwMXfFTGTyKsckTL),
    loadImage(cnBWrAJWyuBfIoISiGMVQTt),
    loadImage(fDivRcTNmzqgpduXnENhczS),
    loadImage(eBOqXuTehzhllRGBxgoKumx),
    loadImage(bAXYCazdpNFenWYeQiEIGEN),
    loadImage(eTjmKlykGwOChUzpnJKpTBF),
    loadImage(cRiCmvlKLCEENwYFdUzPAke),
    loadImage(eVolbIriIIrvPHwKICJgmbM),
    loadImage(diKQaJkMWvPPJPTPdVEmvSO),
    loadImage(aszLXzgEZcBeozYHoxUyqzX),
    loadImage(dDPiwjZxrnveSuJPTDYRivx),
    loadImage(afmDvJjFlsfDCmCrVGsfcTm),
    loadImage(JwqUdWoVptDPhalBvCwehX),
    loadImage(bAHWxZxaGlpCcBHQwtSqNvj),
    loadImage(fsvOzpWLaLyIreulWcHPXtp),
    loadImage(dXTvlpWypCozGUNsGWMNxKd),
    loadImage(dfeaThSuapvJRAgIPmefhjB),
    loadImage(baqAlDBhaTKFnsARmCPcMeV),
    loadImage(dVlNbuaLXbnrFPgtPXuqeHu),
    loadImage(fDUKUfGNOUQUYfNQerdrMMb),
    loadImage(crgNPwjdlRQtnpgwiVzVROC),
    loadImage(fOscJZbvhfiRczuQMghQwXj),
    loadImage(bZchaTqpWKtpUPnwiAlslAM),
    loadImage(WLQRlHqdZkaGbsoBRqvOIH),
    loadImage(elEGZyNAQnmwGRkVgyXbLUS),
    loadImage(QCgJeJHPpPRtHepMsNSLfx),
    loadImage(eXJhyIlXpLmWEcAUuWmyGkI),
    loadImage(cqEpLrEBAAXSxUyqMgJyxbn),
    loadImage(fXmMDvFTusoDIiCaiyrDwQr),
    loadImage(duRlLZYDkwMgDMvfrdqVOWa),
    loadImage(dopIXWlgsFsSkZgIGvHPEDi),
    loadImage(clhFIGOndNUYEJmLPiasNRK),
    loadImage(brpyFQyVincloGdyTFuCrpw),
    loadImage(fPiIhnLbqrCVgKqBKbQKlws),
  ];

  private static frames: Array<HTMLImageElement> = [];
  private static currentFrame: number = 0;

  private static fps = 1000 / 20;
  private static last = 0;

  public static async init() {
    if (Day22.frames.length === 0) {
      await Day22.loadFrames();
    }
  }

  private static async loadFrames() {
    Day22.frames = await Promise.all(Day22.framesPromises);
  }

  public static getFrame(): HTMLImageElement {
    const now = Date.now();
    const elapsed = now - Day22.last;

    if (elapsed < Day22.fps) return Day22.frames[Day22.currentFrame];

    Day22.last = now;
    Day22.currentFrame = (Day22.currentFrame + 1) % Day22.frames.length;

    return Day22.frames[Day22.currentFrame];
  }
}
