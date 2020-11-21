import preval from 'preval.macro';

import { Gift } from "../types";
import { loadImage } from "../helper";

import qrCode from './qr-code.png';

import fFwuAwyYDJvrQyZMTxQCenE from 'src/assets/day_14/frame_00_delay-0.07s.gif';
import bJOpUyQykfRakPdhHkwLdTr from 'src/assets/day_14/frame_01_delay-0.06s.gif';
import eSdaBkLRpksdqeHgxhCTsdu from 'src/assets/day_14/frame_02_delay-0.07s.gif';
import diTwkJACDINxdiltkqdxoNK from 'src/assets/day_14/frame_03_delay-0.07s.gif';
import bWDyeMaGovkxClrLXhGMWnH from 'src/assets/day_14/frame_04_delay-0.06s.gif';
import dBLfooLAsPrnxTfKCoTvDal from 'src/assets/day_14/frame_05_delay-0.07s.gif';
import dRfnSpPZerCwIjFCDjjxohr from 'src/assets/day_14/frame_06_delay-0.07s.gif';
import fPbQsNHttDPQOujgTUXDset from 'src/assets/day_14/frame_07_delay-0.06s.gif';
import euIQnMjIDLteklDmrwbgPag from 'src/assets/day_14/frame_08_delay-0.07s.gif';
import dhhWTvtcruesfRNqPCzoHWu from 'src/assets/day_14/frame_09_delay-0.07s.gif';
import GmpcWuGSxbVxeshdiepsAK from 'src/assets/day_14/frame_10_delay-0.06s.gif';
import fBVAvPXOwuOrNxSNiSsQLSS from 'src/assets/day_14/frame_11_delay-0.07s.gif';
import gaETmsgdmvwZlbCrQuxYUaL from 'src/assets/day_14/frame_12_delay-0.07s.gif';
import eFIvaupzMinUHPqMOeDvIxa from 'src/assets/day_14/frame_13_delay-0.06s.gif';
import bhLQircwStVpDzgZmkqkudy from 'src/assets/day_14/frame_14_delay-0.07s.gif';
import bvdhTRnQPLpyfGeNaqpyQYZ from 'src/assets/day_14/frame_15_delay-0.07s.gif';
import bnBeVdszdszYjpRixgsQMSd from 'src/assets/day_14/frame_16_delay-0.06s.gif';
import dKvvkcbadeEGHjgodlAGhGh from 'src/assets/day_14/frame_17_delay-0.07s.gif';
import czYuRIdvdfJilYpOdjLKaLb from 'src/assets/day_14/frame_18_delay-0.07s.gif';
import dJcKHEVEpTjZRWzvfnpdaHv from 'src/assets/day_14/frame_19_delay-0.06s.gif';
import fUSBFccTqgyuTVpYCvNFQoP from 'src/assets/day_14/frame_20_delay-0.07s.gif';
import eugsqwlUqBmJrGrxlZNsgiO from 'src/assets/day_14/frame_21_delay-0.07s.gif';
import eqLWjXMllUHbYAHhLaaITho from 'src/assets/day_14/frame_22_delay-0.06s.gif';
import fcRYUXzrvwuPZoNyvCeEdDy from 'src/assets/day_14/frame_23_delay-0.07s.gif';
import dMHVsGUrOZRRwCbYfZDIoFs from 'src/assets/day_14/frame_24_delay-0.07s.gif';
import eMDidFWdCxZBfnPetQXayWW from 'src/assets/day_14/frame_25_delay-0.06s.gif';
import DAIjvlVXSHRmlLFTKDJAkK from 'src/assets/day_14/frame_26_delay-0.07s.gif';
import cvcEuxWGYJySjjLIFOuYUKc from 'src/assets/day_14/frame_27_delay-0.07s.gif';
import cqsYVmjheWERJNvcWVGkfnX from 'src/assets/day_14/frame_28_delay-0.06s.gif';
import acetTxLDgpjYrkJuIOQdUvF from 'src/assets/day_14/frame_29_delay-0.07s.gif';
import beRMGeRIrHOuOAVPbgpwPYj from 'src/assets/day_14/frame_30_delay-0.07s.gif';
import fGaMxDSPgHhexGLQKVZmzwA from 'src/assets/day_14/frame_31_delay-0.06s.gif';
import wYIpXYPKSEpxNfiiBbbSRP from 'src/assets/day_14/frame_32_delay-0.07s.gif';
import caIDShfTVkaUsBCACOuqoXo from 'src/assets/day_14/frame_33_delay-0.07s.gif';
import aaqyQFXjGKWUlbaCQPSDQbG from 'src/assets/day_14/frame_34_delay-0.06s.gif';
import fLBCdPQgxWsWRwJPSCUrOnE from 'src/assets/day_14/frame_35_delay-0.07s.gif';
import bWAgvqkgTxIjJRLfKkZyGUv from 'src/assets/day_14/frame_36_delay-0.07s.gif';
import bEdEGrouBKDzBsIWxRQaFYX from 'src/assets/day_14/frame_37_delay-0.06s.gif';
import dJykZbsyucuuztXBbMYbuRg from 'src/assets/day_14/frame_38_delay-0.07s.gif';
import dLbfzgetUrljPUqMDztesKr from 'src/assets/day_14/frame_39_delay-0.07s.gif';

export default class Day14 extends Gift {
  public static hash = "dRWZcRmwTJmgLMYywqziEyO";
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
    loadImage(fFwuAwyYDJvrQyZMTxQCenE),
    loadImage(bJOpUyQykfRakPdhHkwLdTr),
    loadImage(eSdaBkLRpksdqeHgxhCTsdu),
    loadImage(diTwkJACDINxdiltkqdxoNK),
    loadImage(bWDyeMaGovkxClrLXhGMWnH),
    loadImage(dBLfooLAsPrnxTfKCoTvDal),
    loadImage(dRfnSpPZerCwIjFCDjjxohr),
    loadImage(fPbQsNHttDPQOujgTUXDset),
    loadImage(euIQnMjIDLteklDmrwbgPag),
    loadImage(dhhWTvtcruesfRNqPCzoHWu),
    loadImage(GmpcWuGSxbVxeshdiepsAK),
    loadImage(fBVAvPXOwuOrNxSNiSsQLSS),
    loadImage(gaETmsgdmvwZlbCrQuxYUaL),
    loadImage(eFIvaupzMinUHPqMOeDvIxa),
    loadImage(bhLQircwStVpDzgZmkqkudy),
    loadImage(bvdhTRnQPLpyfGeNaqpyQYZ),
    loadImage(bnBeVdszdszYjpRixgsQMSd),
    loadImage(dKvvkcbadeEGHjgodlAGhGh),
    loadImage(czYuRIdvdfJilYpOdjLKaLb),
    loadImage(dJcKHEVEpTjZRWzvfnpdaHv),
    loadImage(fUSBFccTqgyuTVpYCvNFQoP),
    loadImage(eugsqwlUqBmJrGrxlZNsgiO),
    loadImage(eqLWjXMllUHbYAHhLaaITho),
    loadImage(fcRYUXzrvwuPZoNyvCeEdDy),
    loadImage(dMHVsGUrOZRRwCbYfZDIoFs),
    loadImage(eMDidFWdCxZBfnPetQXayWW),
    loadImage(DAIjvlVXSHRmlLFTKDJAkK),
    loadImage(cvcEuxWGYJySjjLIFOuYUKc),
    loadImage(cqsYVmjheWERJNvcWVGkfnX),
    loadImage(acetTxLDgpjYrkJuIOQdUvF),
    loadImage(beRMGeRIrHOuOAVPbgpwPYj),
    loadImage(fGaMxDSPgHhexGLQKVZmzwA),
    loadImage(wYIpXYPKSEpxNfiiBbbSRP),
    loadImage(caIDShfTVkaUsBCACOuqoXo),
    loadImage(aaqyQFXjGKWUlbaCQPSDQbG),
    loadImage(fLBCdPQgxWsWRwJPSCUrOnE),
    loadImage(bWAgvqkgTxIjJRLfKkZyGUv),
    loadImage(bEdEGrouBKDzBsIWxRQaFYX),
    loadImage(dJykZbsyucuuztXBbMYbuRg),
    loadImage(dLbfzgetUrljPUqMDztesKr),
  ];

  private static frames: Array<HTMLImageElement> = [];
  private static currentFrame: number = 0;

  private static fps = 1000 / 20;
  private static last = 0;

  public static async init() {
    if (Day14.frames.length === 0) {
      await Day14.loadFrames();
    }
  }

  private static async loadFrames() {
    Day14.frames = await Promise.all(Day14.framesPromises);
  }

  public static getFrame(): HTMLImageElement {
    const now = Date.now();
    const elapsed = now - Day14.last;

    if (elapsed < Day14.fps) return Day14.frames[Day14.currentFrame];

    Day14.last = now;
    Day14.currentFrame = (Day14.currentFrame + 1) % Day14.frames.length;

    return Day14.frames[Day14.currentFrame];
  }
}
