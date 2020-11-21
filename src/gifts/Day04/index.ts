import preval from 'preval.macro';

import { Gift } from "../types";
import { loadImage } from "../helper";

import qrCode from './qr-code.png';

import eoAfPHsduAxvsYpebuXDgct from 'src/assets/day_04/frame_02_delay-0.04s.png';
import bypCoocJFfPebAtPoWMMpdA from 'src/assets/day_04/frame_03_delay-0.04s.png';
import ZhbEVomUgcTQtyhCnqWYJU from 'src/assets/day_04/frame_04_delay-0.04s.png';
import dkfOkPoQKYbROjsjqORMstq from 'src/assets/day_04/frame_05_delay-0.04s.png';
import bmBdLItoaJELnCdwtRamDiE from 'src/assets/day_04/frame_06_delay-0.04s.png';
import bMIVjXFEIcKsphaEzrmbGjn from 'src/assets/day_04/frame_07_delay-0.04s.png';
import feYxJjuRPAxxSfuarnkvtvK from 'src/assets/day_04/frame_08_delay-0.04s.png';
import byKaiBeFjaPraaZXRHbcHfl from 'src/assets/day_04/frame_09_delay-0.04s.png';
import cnIwqnrEnSytaPjAPMoVFAf from 'src/assets/day_04/frame_10_delay-0.04s.png';
import cjMdBZKDagJTHsoYYaqgAhB from 'src/assets/day_04/frame_11_delay-0.04s.png';
import dBMOyIymDXAwdErNmhNbaqO from 'src/assets/day_04/frame_12_delay-0.04s.png';
import ePZSlchoaHZoNCkDUIRJbeR from 'src/assets/day_04/frame_13_delay-0.08s.png';
import dOEESeWxovsvHRYzKWLHbvb from 'src/assets/day_04/frame_14_delay-0.04s.png';
import YZKxHCsThkRwbVErmjUYht from 'src/assets/day_04/frame_15_delay-0.04s.png';
import epueAurTTsSDBYlOxljdWaq from 'src/assets/day_04/frame_16_delay-0.04s.png';
import bFcYXbMpOxtxSGFxQeUaNiG from 'src/assets/day_04/frame_17_delay-0.04s.png';
import dGySlbPTpMIptLwAcXjhWUZ from 'src/assets/day_04/frame_18_delay-0.04s.png';
import cIMiSWZKgBlENOXEwhccGll from 'src/assets/day_04/frame_19_delay-0.04s.png';
import cjiSrlfahPYnDQIgGovobjJ from 'src/assets/day_04/frame_20_delay-0.04s.png';
import fRayWtvmtiIWMMiyNliYgXn from 'src/assets/day_04/frame_21_delay-0.04s.png';
import cHeSlVplfjEnLlVnNQbnZOh from 'src/assets/day_04/frame_22_delay-0.04s.png';
import dXSBHOHLkBkxtOomkCVDWCk from 'src/assets/day_04/frame_23_delay-0.04s.png';
import AgUumBnIVKxbZEjytCDZJO from 'src/assets/day_04/frame_24_delay-0.04s.png';
import fsJGgvbNpWXtafHgRGHcVkS from 'src/assets/day_04/frame_25_delay-0.04s.png';
import eUWBbgdbOlMSMBxHRhArJOo from 'src/assets/day_04/frame_26_delay-0.04s.png';
import dYwLVvamONefLYUpsGkENay from 'src/assets/day_04/frame_27_delay-0.04s.png';
import dqVZeGOilWOScmGaxLKdQFI from 'src/assets/day_04/frame_28_delay-0.04s.png';
import cZhXOXxoGSLPulrLsdDzBzB from 'src/assets/day_04/frame_29_delay-0.04s.png';
import eTStHqNQTNzboJzgdbKreiW from 'src/assets/day_04/frame_30_delay-0.04s.png';
import cMsdoOVFcIZZYgufHArlWdl from 'src/assets/day_04/frame_31_delay-0.04s.png';
import ePgfKEtIubseBLHQYnMsZhG from 'src/assets/day_04/frame_32_delay-0.04s.png';
import dkhWOkCaHWFDwEmuzAAoXcx from 'src/assets/day_04/frame_33_delay-0.04s.png';
import cQEYmZzxQqndYfFwBnfdZEY from 'src/assets/day_04/frame_34_delay-0.04s.png';
import eCNFDSvOdBuxWFkGdErGQcB from 'src/assets/day_04/frame_35_delay-0.04s.png';
import eyyFLhlOmGpVduSwKoBpIjQ from 'src/assets/day_04/frame_36_delay-0.04s.png';
import dZrqfMfYiyQYNSAlXlMPGFR from 'src/assets/day_04/frame_37_delay-0.08s.png';
import fzzQgxdhOtuUYOQBiSCTfEU from 'src/assets/day_04/frame_38_delay-0.04s.png';
import eUSEcjvhJGGNSeZcFrsKGNH from 'src/assets/day_04/frame_39_delay-0.04s.png';
import anCDtakznXyGmPUgVCOgJxb from 'src/assets/day_04/frame_40_delay-0.04s.png';
import ewBTVOaXzThSwIWxhHDddLy from 'src/assets/day_04/frame_41_delay-0.04s.png';
import dJvXPMlOuWiOyQrzVIaPNzD from 'src/assets/day_04/frame_42_delay-0.04s.png';
import eMffDmjLYNGjhUVSabFdxJn from 'src/assets/day_04/frame_43_delay-0.04s.png';
import chZLtDhRdNWgdsxmtaSmVpk from 'src/assets/day_04/frame_44_delay-0.04s.png';
import atqvEaZOkmCfCKmhuotpzYo from 'src/assets/day_04/frame_45_delay-0.04s.png';
import ajFiwiMwnOLajALFAmXqgbu from 'src/assets/day_04/frame_46_delay-0.04s.png';
import fXBvpQYRMnfWkLxPDUUZJRy from 'src/assets/day_04/frame_47_delay-0.04s.png';
import YgtUuYhloIiaEHnmNCKojh from 'src/assets/day_04/frame_48_delay-0.04s.png';
import eFhjWPgUsWjbCSElnINzXko from 'src/assets/day_04/frame_49_delay-0.04s.png';
import agunKMyKraTFIKrcgQBousR from 'src/assets/day_04/frame_50_delay-0.04s.png';
import dXdJrBvgHuHmiIIOlwRBzie from 'src/assets/day_04/frame_51_delay-0.04s.png';
import dtGFXLmsmvacWIxJrxrtZOz from 'src/assets/day_04/frame_52_delay-0.04s.png';
import eRuvhqwuhRfWkkWivNaHVSx from 'src/assets/day_04/frame_53_delay-0.04s.png';
import cSROdkggqtyKYHYscnGvTBi from 'src/assets/day_04/frame_54_delay-0.04s.png';
import cCrLKPLPfRdcEyeXzgGAKLr from 'src/assets/day_04/frame_55_delay-0.04s.png';
import uvbsWEOXeOicKSpfWdzMAn from 'src/assets/day_04/frame_56_delay-0.04s.png';
import cseBheBaqvLWprtaiukTEkg from 'src/assets/day_04/frame_57_delay-0.04s.png';
import apLTYeRgArdxKOvPzRZWBXa from 'src/assets/day_04/frame_58_delay-0.04s.png';
import bbAiVXuSSGCBMBpOxSclzQr from 'src/assets/day_04/frame_59_delay-0.04s.png';
import fZPEsbtdhTirIdHbcPaSCpH from 'src/assets/day_04/frame_60_delay-0.04s.png';
import eYUWjdvwXkWazYKwAANpxvE from 'src/assets/day_04/frame_61_delay-0.08s.png';
import duiULjyMmVcTUyWMWYDIUxs from 'src/assets/day_04/frame_62_delay-0.04s.png';
import fqWdRlPyTplsxRGQCXXBGuo from 'src/assets/day_04/frame_63_delay-0.04s.png';
import dSORsCtAsHSFkTUdiDXwcJT from 'src/assets/day_04/frame_64_delay-0.04s.png';
import fICAYhxwLqVLCfUFaLkGJhB from 'src/assets/day_04/frame_65_delay-0.04s.png';
import eqADdHfhJGGVWQttnKJTsPt from 'src/assets/day_04/frame_66_delay-0.04s.png';
import bMiAoowNDWsDiddvuFFVFvz from 'src/assets/day_04/frame_67_delay-0.04s.png';
import dFPUCyXhIrVANPwhcyMncUU from 'src/assets/day_04/frame_68_delay-0.04s.png';
import coYlQYYBRFBasYxByrUAejM from 'src/assets/day_04/frame_69_delay-0.04s.png';
import agdoGejhqaNnpVJYuvYJGJt from 'src/assets/day_04/frame_70_delay-0.04s.png';
import czkEQTjVjhnvnZPTiCLGKdd from 'src/assets/day_04/frame_71_delay-0.04s.png';
import ewhBIFYEqEpwSyDQuHdhCdF from 'src/assets/day_04/frame_72_delay-0.04s.png';
import eaFVOeAOtdkVmtYePXLuUzQ from 'src/assets/day_04/frame_73_delay-0.04s.png';

export default class Day04 extends Gift {
  public static hash = "caIoyQpUbcGNdXQYCjTdOLP";
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
    loadImage(eoAfPHsduAxvsYpebuXDgct),
    loadImage(bypCoocJFfPebAtPoWMMpdA),
    loadImage(ZhbEVomUgcTQtyhCnqWYJU),
    loadImage(dkfOkPoQKYbROjsjqORMstq),
    loadImage(bmBdLItoaJELnCdwtRamDiE),
    loadImage(bMIVjXFEIcKsphaEzrmbGjn),
    loadImage(feYxJjuRPAxxSfuarnkvtvK),
    loadImage(byKaiBeFjaPraaZXRHbcHfl),
    loadImage(cnIwqnrEnSytaPjAPMoVFAf),
    loadImage(cjMdBZKDagJTHsoYYaqgAhB),
    loadImage(dBMOyIymDXAwdErNmhNbaqO),
    loadImage(ePZSlchoaHZoNCkDUIRJbeR),
    loadImage(dOEESeWxovsvHRYzKWLHbvb),
    loadImage(YZKxHCsThkRwbVErmjUYht),
    loadImage(epueAurTTsSDBYlOxljdWaq),
    loadImage(bFcYXbMpOxtxSGFxQeUaNiG),
    loadImage(dGySlbPTpMIptLwAcXjhWUZ),
    loadImage(cIMiSWZKgBlENOXEwhccGll),
    loadImage(cjiSrlfahPYnDQIgGovobjJ),
    loadImage(fRayWtvmtiIWMMiyNliYgXn),
    loadImage(cHeSlVplfjEnLlVnNQbnZOh),
    loadImage(dXSBHOHLkBkxtOomkCVDWCk),
    loadImage(AgUumBnIVKxbZEjytCDZJO),
    loadImage(fsJGgvbNpWXtafHgRGHcVkS),
    loadImage(eUWBbgdbOlMSMBxHRhArJOo),
    loadImage(dYwLVvamONefLYUpsGkENay),
    loadImage(dqVZeGOilWOScmGaxLKdQFI),
    loadImage(cZhXOXxoGSLPulrLsdDzBzB),
    loadImage(eTStHqNQTNzboJzgdbKreiW),
    loadImage(cMsdoOVFcIZZYgufHArlWdl),
    loadImage(ePgfKEtIubseBLHQYnMsZhG),
    loadImage(dkhWOkCaHWFDwEmuzAAoXcx),
    loadImage(cQEYmZzxQqndYfFwBnfdZEY),
    loadImage(eCNFDSvOdBuxWFkGdErGQcB),
    loadImage(eyyFLhlOmGpVduSwKoBpIjQ),
    loadImage(dZrqfMfYiyQYNSAlXlMPGFR),
    loadImage(fzzQgxdhOtuUYOQBiSCTfEU),
    loadImage(eUSEcjvhJGGNSeZcFrsKGNH),
    loadImage(anCDtakznXyGmPUgVCOgJxb),
    loadImage(ewBTVOaXzThSwIWxhHDddLy),
    loadImage(dJvXPMlOuWiOyQrzVIaPNzD),
    loadImage(eMffDmjLYNGjhUVSabFdxJn),
    loadImage(chZLtDhRdNWgdsxmtaSmVpk),
    loadImage(atqvEaZOkmCfCKmhuotpzYo),
    loadImage(ajFiwiMwnOLajALFAmXqgbu),
    loadImage(fXBvpQYRMnfWkLxPDUUZJRy),
    loadImage(YgtUuYhloIiaEHnmNCKojh),
    loadImage(eFhjWPgUsWjbCSElnINzXko),
    loadImage(agunKMyKraTFIKrcgQBousR),
    loadImage(dXdJrBvgHuHmiIIOlwRBzie),
    loadImage(dtGFXLmsmvacWIxJrxrtZOz),
    loadImage(eRuvhqwuhRfWkkWivNaHVSx),
    loadImage(cSROdkggqtyKYHYscnGvTBi),
    loadImage(cCrLKPLPfRdcEyeXzgGAKLr),
    loadImage(uvbsWEOXeOicKSpfWdzMAn),
    loadImage(cseBheBaqvLWprtaiukTEkg),
    loadImage(apLTYeRgArdxKOvPzRZWBXa),
    loadImage(bbAiVXuSSGCBMBpOxSclzQr),
    loadImage(fZPEsbtdhTirIdHbcPaSCpH),
    loadImage(eYUWjdvwXkWazYKwAANpxvE),
    loadImage(duiULjyMmVcTUyWMWYDIUxs),
    loadImage(fqWdRlPyTplsxRGQCXXBGuo),
    loadImage(dSORsCtAsHSFkTUdiDXwcJT),
    loadImage(fICAYhxwLqVLCfUFaLkGJhB),
    loadImage(eqADdHfhJGGVWQttnKJTsPt),
    loadImage(bMiAoowNDWsDiddvuFFVFvz),
    loadImage(dFPUCyXhIrVANPwhcyMncUU),
    loadImage(coYlQYYBRFBasYxByrUAejM),
    loadImage(agdoGejhqaNnpVJYuvYJGJt),
    loadImage(czkEQTjVjhnvnZPTiCLGKdd),
    loadImage(ewhBIFYEqEpwSyDQuHdhCdF),
    loadImage(eaFVOeAOtdkVmtYePXLuUzQ),
  ];

  private static frames: Array<HTMLImageElement> = [];
  private static currentFrame: number = 0;

  private static fps = 1000 / 20;
  private static last = 0;

  public static async init() {
    if (Day04.frames.length === 0) {
      await Day04.loadFrames();
    }
  }

  private static async loadFrames() {
    Day04.frames = await Promise.all(Day04.framesPromises);
  }

  public static getFrame(): HTMLImageElement {
    const now = Date.now();
    const elapsed = now - Day04.last;

    if (elapsed < Day04.fps) return Day04.frames[Day04.currentFrame];

    Day04.last = now;
    Day04.currentFrame = (Day04.currentFrame + 1) % Day04.frames.length;

    return Day04.frames[Day04.currentFrame];
  }
}
