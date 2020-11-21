import preval from 'preval.macro';

import { Gift } from "../types";
import { loadImage } from "../helper";

import qrCode from './qr-code.png';

import bKjEYiQvyHgtXrZayTYVZuG from 'src/assets/day_23/frame_00_delay-0.03s.gif';
import czNswSXmLSerecbCMllEvtu from 'src/assets/day_23/frame_01_delay-0.04s.gif';
import bwtUFjlHNtjXCBLfSMuQZxa from 'src/assets/day_23/frame_02_delay-0.03s.gif';
import fIpEimOpgpUUEhqyihheXnz from 'src/assets/day_23/frame_03_delay-0.03s.gif';
import bLZQduDEswUyyvcvAyvKEWL from 'src/assets/day_23/frame_04_delay-0.04s.gif';
import boryPIRckfRfOLXHzcpQkNO from 'src/assets/day_23/frame_05_delay-0.03s.gif';
import cODqEiQcfTkOaWQesCycfqU from 'src/assets/day_23/frame_06_delay-0.03s.gif';
import ecxIYgfZxwmZdNKTlXsnPrg from 'src/assets/day_23/frame_07_delay-0.04s.gif';
import cGjQXsXXfptbaFcDPQkqvKP from 'src/assets/day_23/frame_08_delay-0.03s.gif';
import biwpymtJuKgNIxKNrNFlLqi from 'src/assets/day_23/frame_09_delay-0.03s.gif';
import ditkHvamTSaJPWYnSVbZPUh from 'src/assets/day_23/frame_10_delay-0.04s.gif';
import eygiPIlEPqlwUNjSpCVpGlo from 'src/assets/day_23/frame_11_delay-0.03s.gif';
import dLPPSeFTyAKcnJkreZIlOsH from 'src/assets/day_23/frame_12_delay-0.03s.gif';
import bekBhHYdtHwRvEbbKCuXAay from 'src/assets/day_23/frame_13_delay-0.04s.gif';
import fFvokURcevTZXPXeHgEMPjT from 'src/assets/day_23/frame_14_delay-0.03s.gif';
import PXmiWmCAYQzLWNtTNknNcI from 'src/assets/day_23/frame_15_delay-0.03s.gif';
import btbWlktboZTERPNljzsRMOd from 'src/assets/day_23/frame_16_delay-0.04s.gif';
import fLJbOxtnDvCxCNHeVpMPMJF from 'src/assets/day_23/frame_17_delay-0.03s.gif';
import zxZedQnsQboIIRoyIfliNa from 'src/assets/day_23/frame_18_delay-0.03s.gif';
import ezgrSBoywrfYUAqkAJUtxyd from 'src/assets/day_23/frame_19_delay-0.04s.gif';
import cKSCanOxJmUSAdTTiNTRCkk from 'src/assets/day_23/frame_20_delay-0.03s.gif';
import bFnNxMzdfciIHGXgIbGWIfU from 'src/assets/day_23/frame_21_delay-0.03s.gif';
import OQRxaWbcnYteJOhELvFJqs from 'src/assets/day_23/frame_22_delay-0.04s.gif';
import dNYhUWZrEFNkjQVAODDuCYt from 'src/assets/day_23/frame_23_delay-0.03s.gif';
import FwJCceRYZQlxobHCyHLLYi from 'src/assets/day_23/frame_24_delay-0.03s.gif';
import UxyWCwNxhGDwgyHHbUVcxu from 'src/assets/day_23/frame_25_delay-0.04s.gif';
import dJdaHyPlcTDhEzQXsnwdKsj from 'src/assets/day_23/frame_26_delay-0.03s.gif';
import brxrkWlRhSbpPtjeutrHzag from 'src/assets/day_23/frame_27_delay-0.03s.gif';
import dmUixlsdFXumUiAedbdSpIX from 'src/assets/day_23/frame_28_delay-0.04s.gif';
import cfFCApWwxZJtwYuGtfgkFsU from 'src/assets/day_23/frame_29_delay-0.03s.gif';
import frugzrYAGfmnAdWOLdsULUb from 'src/assets/day_23/frame_30_delay-0.03s.gif';
import cZZWSSFTxtCeVYZffgjkBrn from 'src/assets/day_23/frame_31_delay-0.04s.gif';
import DhCSKfNbETfKHjKwPOXjOV from 'src/assets/day_23/frame_32_delay-0.03s.gif';
import ufDEhUrqKMfzFbnhZKKRXw from 'src/assets/day_23/frame_33_delay-0.03s.gif';
import caOsvnZZGekkeTTDJUTjNiy from 'src/assets/day_23/frame_34_delay-0.04s.gif';
import crCIhLTixbQdHYyrGqTrhpV from 'src/assets/day_23/frame_35_delay-0.03s.gif';
import esAjDRNlyrFvxoWSUWhiiWX from 'src/assets/day_23/frame_36_delay-0.03s.gif';
import btcrGEsWXDRSpertrnHGxFn from 'src/assets/day_23/frame_37_delay-0.04s.gif';
import fFZcQChwvIZhSICnagzoPnM from 'src/assets/day_23/frame_38_delay-0.03s.gif';
import bdtfvipSACUdTpPpnqfAkEj from 'src/assets/day_23/frame_39_delay-0.03s.gif';
import czjGWoxfKAnaaVxUAkCktcV from 'src/assets/day_23/frame_40_delay-0.04s.gif';
import bwOhpCnRLSBCxfpAExNMOPJ from 'src/assets/day_23/frame_41_delay-0.03s.gif';
import erknLgtlDdAUQZCELaYcVsL from 'src/assets/day_23/frame_42_delay-0.03s.gif';
import dhqRiZIaFqdzKFISHRpHktR from 'src/assets/day_23/frame_43_delay-0.04s.gif';
import fXsjgZvmXqPYGABjcySGEhx from 'src/assets/day_23/frame_44_delay-0.03s.gif';
import dphIDEGdytzIwTmwuetyAPQ from 'src/assets/day_23/frame_45_delay-0.03s.gif';
import bXhKVyxBWEPKAkVjXBgzkzn from 'src/assets/day_23/frame_46_delay-0.04s.gif';
import fPNDDfGjMtLBqMUIkGyUEAQ from 'src/assets/day_23/frame_47_delay-0.03s.gif';
import dbgOllJcpVOuAgWiNPtjeVo from 'src/assets/day_23/frame_48_delay-0.03s.gif';
import dlpEZSbnONtEBHKNEVqSeMZ from 'src/assets/day_23/frame_49_delay-0.04s.gif';
import bNGrHNyeycTtoVcqvHfAxeF from 'src/assets/day_23/frame_50_delay-0.03s.gif';
import GGwUTkqtvsIdIMcpdLOfoK from 'src/assets/day_23/frame_51_delay-0.03s.gif';
import dNswzTnmiisovkEPiIvGlgh from 'src/assets/day_23/frame_52_delay-0.04s.gif';
import bnYtNOhazanxvKtyxOTMdUd from 'src/assets/day_23/frame_53_delay-0.03s.gif';
import dHOeGREiFzMTpmwGVrJzDDv from 'src/assets/day_23/frame_54_delay-0.03s.gif';
import dCQvFuZkDtNPEWnxbAzRaTz from 'src/assets/day_23/frame_55_delay-0.04s.gif';
import elRTwoVOwObRPvRCLrwbBew from 'src/assets/day_23/frame_56_delay-0.03s.gif';
import fyMaqwnMsffrTQBgwVCZRcY from 'src/assets/day_23/frame_57_delay-0.03s.gif';

export default class Day23 extends Gift {
  public static hash = "egbwEnoMPzhhXBJVFtbPRPf";
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
    loadImage(bKjEYiQvyHgtXrZayTYVZuG),
    loadImage(czNswSXmLSerecbCMllEvtu),
    loadImage(bwtUFjlHNtjXCBLfSMuQZxa),
    loadImage(fIpEimOpgpUUEhqyihheXnz),
    loadImage(bLZQduDEswUyyvcvAyvKEWL),
    loadImage(boryPIRckfRfOLXHzcpQkNO),
    loadImage(cODqEiQcfTkOaWQesCycfqU),
    loadImage(ecxIYgfZxwmZdNKTlXsnPrg),
    loadImage(cGjQXsXXfptbaFcDPQkqvKP),
    loadImage(biwpymtJuKgNIxKNrNFlLqi),
    loadImage(ditkHvamTSaJPWYnSVbZPUh),
    loadImage(eygiPIlEPqlwUNjSpCVpGlo),
    loadImage(dLPPSeFTyAKcnJkreZIlOsH),
    loadImage(bekBhHYdtHwRvEbbKCuXAay),
    loadImage(fFvokURcevTZXPXeHgEMPjT),
    loadImage(PXmiWmCAYQzLWNtTNknNcI),
    loadImage(btbWlktboZTERPNljzsRMOd),
    loadImage(fLJbOxtnDvCxCNHeVpMPMJF),
    loadImage(zxZedQnsQboIIRoyIfliNa),
    loadImage(ezgrSBoywrfYUAqkAJUtxyd),
    loadImage(cKSCanOxJmUSAdTTiNTRCkk),
    loadImage(bFnNxMzdfciIHGXgIbGWIfU),
    loadImage(OQRxaWbcnYteJOhELvFJqs),
    loadImage(dNYhUWZrEFNkjQVAODDuCYt),
    loadImage(FwJCceRYZQlxobHCyHLLYi),
    loadImage(UxyWCwNxhGDwgyHHbUVcxu),
    loadImage(dJdaHyPlcTDhEzQXsnwdKsj),
    loadImage(brxrkWlRhSbpPtjeutrHzag),
    loadImage(dmUixlsdFXumUiAedbdSpIX),
    loadImage(cfFCApWwxZJtwYuGtfgkFsU),
    loadImage(frugzrYAGfmnAdWOLdsULUb),
    loadImage(cZZWSSFTxtCeVYZffgjkBrn),
    loadImage(DhCSKfNbETfKHjKwPOXjOV),
    loadImage(ufDEhUrqKMfzFbnhZKKRXw),
    loadImage(caOsvnZZGekkeTTDJUTjNiy),
    loadImage(crCIhLTixbQdHYyrGqTrhpV),
    loadImage(esAjDRNlyrFvxoWSUWhiiWX),
    loadImage(btcrGEsWXDRSpertrnHGxFn),
    loadImage(fFZcQChwvIZhSICnagzoPnM),
    loadImage(bdtfvipSACUdTpPpnqfAkEj),
    loadImage(czjGWoxfKAnaaVxUAkCktcV),
    loadImage(bwOhpCnRLSBCxfpAExNMOPJ),
    loadImage(erknLgtlDdAUQZCELaYcVsL),
    loadImage(dhqRiZIaFqdzKFISHRpHktR),
    loadImage(fXsjgZvmXqPYGABjcySGEhx),
    loadImage(dphIDEGdytzIwTmwuetyAPQ),
    loadImage(bXhKVyxBWEPKAkVjXBgzkzn),
    loadImage(fPNDDfGjMtLBqMUIkGyUEAQ),
    loadImage(dbgOllJcpVOuAgWiNPtjeVo),
    loadImage(dlpEZSbnONtEBHKNEVqSeMZ),
    loadImage(bNGrHNyeycTtoVcqvHfAxeF),
    loadImage(GGwUTkqtvsIdIMcpdLOfoK),
    loadImage(dNswzTnmiisovkEPiIvGlgh),
    loadImage(bnYtNOhazanxvKtyxOTMdUd),
    loadImage(dHOeGREiFzMTpmwGVrJzDDv),
    loadImage(dCQvFuZkDtNPEWnxbAzRaTz),
    loadImage(elRTwoVOwObRPvRCLrwbBew),
    loadImage(fyMaqwnMsffrTQBgwVCZRcY),
  ];

  private static frames: Array<HTMLImageElement> = [];
  private static currentFrame: number = 0;

  private static fps = 1000 / 20;
  private static last = 0;

  public static async init() {
    if (Day23.frames.length === 0) {
      await Day23.loadFrames();
    }
  }

  private static async loadFrames() {
    Day23.frames = await Promise.all(Day23.framesPromises);
  }

  public static getFrame(): HTMLImageElement {
    const now = Date.now();
    const elapsed = now - Day23.last;

    if (elapsed < Day23.fps) return Day23.frames[Day23.currentFrame];

    Day23.last = now;
    Day23.currentFrame = (Day23.currentFrame + 1) % Day23.frames.length;

    return Day23.frames[Day23.currentFrame];
  }
}
