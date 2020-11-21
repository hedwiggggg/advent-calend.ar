import preval from 'preval.macro';

import { Gift } from "../types";
import { loadImage } from "../helper";

import qrCode from './qr-code.png';

import asduRzAGvGeYybkXgthIBoe from 'src/assets/day_03/frame_00_delay-0.05s.gif';
import dUQKRMmanGkBDFskFuYGLNp from 'src/assets/day_03/frame_01_delay-0.05s.gif';
import cJiKJWByuhgsrgdMZRKWcck from 'src/assets/day_03/frame_02_delay-0.05s.gif';
import deaPEtCfFogbEDoVmbTCpPp from 'src/assets/day_03/frame_03_delay-0.05s.gif';
import fcOQvXPuEwFthDvVPsNYPcf from 'src/assets/day_03/frame_04_delay-0.05s.gif';
import fgeIkWVuZxaUUrSHRVIXuHs from 'src/assets/day_03/frame_05_delay-0.05s.gif';
import bAkhRcqjypeRSEBswakENin from 'src/assets/day_03/frame_06_delay-0.05s.gif';
import dQbZtKCheovDwZUkKWIJhKn from 'src/assets/day_03/frame_07_delay-0.05s.gif';
import ciPEZDIKvBGdrVHGNmblplb from 'src/assets/day_03/frame_08_delay-0.05s.gif';
import betIGJgCjWUBQAyUHglmWcd from 'src/assets/day_03/frame_09_delay-0.05s.gif';
import dzcbdEAKngaPlTbHKDcCrxw from 'src/assets/day_03/frame_10_delay-0.05s.gif';
import cPACZBlAcUydkgUECVlhROx from 'src/assets/day_03/frame_11_delay-0.05s.gif';
import essQElvMGqTmFVEzUjMDTcr from 'src/assets/day_03/frame_12_delay-0.05s.gif';
import fiWYuAlfIcwtpUQRasfkzye from 'src/assets/day_03/frame_13_delay-0.05s.gif';
import eulLVdXLBoGIZEpJNuwUgTa from 'src/assets/day_03/frame_14_delay-0.05s.gif';
import cKYdBjNWIKkFdwLVLwfeAXN from 'src/assets/day_03/frame_15_delay-0.05s.gif';
import eInjEwbxDlrHedJqJdQvRwP from 'src/assets/day_03/frame_16_delay-0.05s.gif';
import bkdTaqSyguHWxKQCIDmFmXz from 'src/assets/day_03/frame_17_delay-0.05s.gif';
import fiipJzTeAyQAGpPGlXpPeHj from 'src/assets/day_03/frame_18_delay-0.05s.gif';
import zvUShyBURhZPTKPnVIQHRE from 'src/assets/day_03/frame_19_delay-0.05s.gif';
import HgQVmmsZdQrWUEvYhgEXzJ from 'src/assets/day_03/frame_20_delay-0.05s.gif';
import DFLdhYmwUbmbxVGvzUXQsQ from 'src/assets/day_03/frame_21_delay-0.05s.gif';
import bXVJcGuXVynmtwfjmWZkBWY from 'src/assets/day_03/frame_22_delay-0.05s.gif';
import YfgVqBVnAfcIqYyeBDRBEo from 'src/assets/day_03/frame_23_delay-0.05s.gif';
import bcscOhGScMpQYNWruEROLte from 'src/assets/day_03/frame_24_delay-0.05s.gif';
import WImDQweGwgeataooraahUq from 'src/assets/day_03/frame_25_delay-0.05s.gif';
import eMYescPNKDHkSVDBIswDKAN from 'src/assets/day_03/frame_26_delay-0.05s.gif';
import KmBFhvKKUHoXeqUvklfsSG from 'src/assets/day_03/frame_27_delay-0.05s.gif';
import dlfAmeBwavjynyFhiZwpmOl from 'src/assets/day_03/frame_28_delay-0.05s.gif';
import bPRWMMwDalRbYtQZxXYjogx from 'src/assets/day_03/frame_29_delay-0.05s.gif';
import ehhDtJnneaXiBhzVCnaMpJq from 'src/assets/day_03/frame_30_delay-0.05s.gif';
import aqpDXxCyWbXNSlzvuSPqGHd from 'src/assets/day_03/frame_31_delay-0.05s.gif';
import dFAWTczSIPmxUmSggymDbxw from 'src/assets/day_03/frame_32_delay-0.05s.gif';
import dBWVwWqihCuVwbeFXYJXApN from 'src/assets/day_03/frame_33_delay-0.05s.gif';
import CLkJCLwsgPLiKIuSjRvPcT from 'src/assets/day_03/frame_34_delay-0.05s.gif';
import fdjuzHLrHAvlFhDrDJAXGQA from 'src/assets/day_03/frame_35_delay-0.05s.gif';
import ahUhQzwABrhmbwfUZIRvXGa from 'src/assets/day_03/frame_36_delay-0.05s.gif';
import eiRmCCxwSrrerYfmzigetKG from 'src/assets/day_03/frame_37_delay-0.05s.gif';
import bpcfQDLdbklprWDypsGqWwV from 'src/assets/day_03/frame_38_delay-0.05s.gif';
import abtzMISNQICXDHKuSrOPkVB from 'src/assets/day_03/frame_39_delay-0.05s.gif';
import TUUXIPUfwOnhyWXbWjGowA from 'src/assets/day_03/frame_40_delay-0.05s.gif';
import fqNULYQACGaAubcoFiGzhHv from 'src/assets/day_03/frame_41_delay-0.05s.gif';
import vYYWXVYnuSKVQyRVGWawBo from 'src/assets/day_03/frame_42_delay-0.05s.gif';
import bKdOJWpbhTwdBlkVXdJIXEQ from 'src/assets/day_03/frame_43_delay-0.05s.gif';
import aeppUmzYDOLMECzzjWVmNAw from 'src/assets/day_03/frame_44_delay-0.05s.gif';
import cSZAxuPLZTCMMZPzKhCknXC from 'src/assets/day_03/frame_45_delay-0.05s.gif';
import eDnhJMYPvagpgTbUhXSVgZh from 'src/assets/day_03/frame_46_delay-0.05s.gif';
import ecDEKZFbrYCRTYaMLNZBIhm from 'src/assets/day_03/frame_47_delay-0.05s.gif';
import cOKxTZUJAHDKTXFIhuHhPHt from 'src/assets/day_03/frame_48_delay-0.05s.gif';
import bhbmSAaCyfcyWIOwJFFNzQi from 'src/assets/day_03/frame_49_delay-0.05s.gif';
import cEJOhlwFwxdwRUiXGHeXLsM from 'src/assets/day_03/frame_50_delay-0.05s.gif';
import eXmjqtUIhDlawzWBEDPBNLY from 'src/assets/day_03/frame_51_delay-0.05s.gif';
import ddgESjnmxrbZBZeDYuWkZcn from 'src/assets/day_03/frame_52_delay-0.05s.gif';
import fslbvrxkgoBSMUKrbqfUBYY from 'src/assets/day_03/frame_53_delay-0.05s.gif';
import eYtAaJEGuNpILnVXvNoMgiT from 'src/assets/day_03/frame_54_delay-0.05s.gif';
import cgudsfUitAnUnRBpVNasJvv from 'src/assets/day_03/frame_55_delay-0.05s.gif';
import vOrSBmrMuNMzhbcWZYcanF from 'src/assets/day_03/frame_56_delay-0.05s.gif';

export default class Day03 extends Gift {
  public static hash = "cbrPCzAJhpEyFTnobdsNCaq";
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
    loadImage(asduRzAGvGeYybkXgthIBoe),
    loadImage(dUQKRMmanGkBDFskFuYGLNp),
    loadImage(cJiKJWByuhgsrgdMZRKWcck),
    loadImage(deaPEtCfFogbEDoVmbTCpPp),
    loadImage(fcOQvXPuEwFthDvVPsNYPcf),
    loadImage(fgeIkWVuZxaUUrSHRVIXuHs),
    loadImage(bAkhRcqjypeRSEBswakENin),
    loadImage(dQbZtKCheovDwZUkKWIJhKn),
    loadImage(ciPEZDIKvBGdrVHGNmblplb),
    loadImage(betIGJgCjWUBQAyUHglmWcd),
    loadImage(dzcbdEAKngaPlTbHKDcCrxw),
    loadImage(cPACZBlAcUydkgUECVlhROx),
    loadImage(essQElvMGqTmFVEzUjMDTcr),
    loadImage(fiWYuAlfIcwtpUQRasfkzye),
    loadImage(eulLVdXLBoGIZEpJNuwUgTa),
    loadImage(cKYdBjNWIKkFdwLVLwfeAXN),
    loadImage(eInjEwbxDlrHedJqJdQvRwP),
    loadImage(bkdTaqSyguHWxKQCIDmFmXz),
    loadImage(fiipJzTeAyQAGpPGlXpPeHj),
    loadImage(zvUShyBURhZPTKPnVIQHRE),
    loadImage(HgQVmmsZdQrWUEvYhgEXzJ),
    loadImage(DFLdhYmwUbmbxVGvzUXQsQ),
    loadImage(bXVJcGuXVynmtwfjmWZkBWY),
    loadImage(YfgVqBVnAfcIqYyeBDRBEo),
    loadImage(bcscOhGScMpQYNWruEROLte),
    loadImage(WImDQweGwgeataooraahUq),
    loadImage(eMYescPNKDHkSVDBIswDKAN),
    loadImage(KmBFhvKKUHoXeqUvklfsSG),
    loadImage(dlfAmeBwavjynyFhiZwpmOl),
    loadImage(bPRWMMwDalRbYtQZxXYjogx),
    loadImage(ehhDtJnneaXiBhzVCnaMpJq),
    loadImage(aqpDXxCyWbXNSlzvuSPqGHd),
    loadImage(dFAWTczSIPmxUmSggymDbxw),
    loadImage(dBWVwWqihCuVwbeFXYJXApN),
    loadImage(CLkJCLwsgPLiKIuSjRvPcT),
    loadImage(fdjuzHLrHAvlFhDrDJAXGQA),
    loadImage(ahUhQzwABrhmbwfUZIRvXGa),
    loadImage(eiRmCCxwSrrerYfmzigetKG),
    loadImage(bpcfQDLdbklprWDypsGqWwV),
    loadImage(abtzMISNQICXDHKuSrOPkVB),
    loadImage(TUUXIPUfwOnhyWXbWjGowA),
    loadImage(fqNULYQACGaAubcoFiGzhHv),
    loadImage(vYYWXVYnuSKVQyRVGWawBo),
    loadImage(bKdOJWpbhTwdBlkVXdJIXEQ),
    loadImage(aeppUmzYDOLMECzzjWVmNAw),
    loadImage(cSZAxuPLZTCMMZPzKhCknXC),
    loadImage(eDnhJMYPvagpgTbUhXSVgZh),
    loadImage(ecDEKZFbrYCRTYaMLNZBIhm),
    loadImage(cOKxTZUJAHDKTXFIhuHhPHt),
    loadImage(bhbmSAaCyfcyWIOwJFFNzQi),
    loadImage(cEJOhlwFwxdwRUiXGHeXLsM),
    loadImage(eXmjqtUIhDlawzWBEDPBNLY),
    loadImage(ddgESjnmxrbZBZeDYuWkZcn),
    loadImage(fslbvrxkgoBSMUKrbqfUBYY),
    loadImage(eYtAaJEGuNpILnVXvNoMgiT),
    loadImage(cgudsfUitAnUnRBpVNasJvv),
    loadImage(vOrSBmrMuNMzhbcWZYcanF),
  ];

  private static frames: Array<HTMLImageElement> = [];
  private static currentFrame: number = 0;

  private static fps = 1000 / 20;
  private static last = 0;

  public static async init() {
    if (Day03.frames.length === 0) {
      await Day03.loadFrames();
    }
  }

  private static async loadFrames() {
    Day03.frames = await Promise.all(Day03.framesPromises);
  }

  public static getFrame(): HTMLImageElement {
    const now = Date.now();
    const elapsed = now - Day03.last;

    if (elapsed < Day03.fps) return Day03.frames[Day03.currentFrame];

    Day03.last = now;
    Day03.currentFrame = (Day03.currentFrame + 1) % Day03.frames.length;

    return Day03.frames[Day03.currentFrame];
  }
}
