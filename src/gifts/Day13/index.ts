import preval from 'preval.macro';

import { Gift } from "../types";
import { loadImage } from "../helper";

import qrCode from './qr-code.png';

import dMaZpioqPlANvVarEqNFvAz from 'src/assets/day_13/frame_000_delay-0.05s.gif';
import egjowBfAzFacYxslilvqHyZ from 'src/assets/day_13/frame_001_delay-0.04s.gif';
import foWszIXyCsZugWeFdSDtSlW from 'src/assets/day_13/frame_002_delay-0.05s.gif';
import eajlqOGpgjwJoUxQVwrGSNb from 'src/assets/day_13/frame_003_delay-0.04s.gif';
import dmherejsKcfHdFtsozJEhet from 'src/assets/day_13/frame_004_delay-0.05s.gif';
import cNlDhhftZpauYskboWrXuVz from 'src/assets/day_13/frame_005_delay-0.04s.gif';
import eYolBrGqLOHheYctrHgbkrW from 'src/assets/day_13/frame_006_delay-0.05s.gif';
import bgxhgkFKXGaeJXfeTmWcIsj from 'src/assets/day_13/frame_007_delay-0.04s.gif';
import cvclSmzjbDetUUJvOphTwlo from 'src/assets/day_13/frame_008_delay-0.05s.gif';
import VBTGcqgIsWqyMSJJjEjBph from 'src/assets/day_13/frame_009_delay-0.04s.gif';
import cOMKsVsnAeIkzpTKDRqmZIf from 'src/assets/day_13/frame_010_delay-0.05s.gif';
import fjFKTxKDBbExgjjhRERBRuH from 'src/assets/day_13/frame_011_delay-0.05s.gif';
import CdfDnJwiSLiGcuGJTbSNgL from 'src/assets/day_13/frame_012_delay-0.04s.gif';
import YyZTXmrlQcYQPiwkjdDdjj from 'src/assets/day_13/frame_013_delay-0.05s.gif';
import exftlDNGzjYFcLyQqJYLDUG from 'src/assets/day_13/frame_014_delay-0.04s.gif';
import ePNEXUpEzBkcgZwJwlKGmqT from 'src/assets/day_13/frame_015_delay-0.05s.gif';
import cKXZSOSkIpEMCgGzVoxFrFb from 'src/assets/day_13/frame_016_delay-0.04s.gif';
import crWIKsEmKcSGIxqoXFCSMeE from 'src/assets/day_13/frame_017_delay-0.05s.gif';
import endtEkoZCzgKnvqvCUmdIwk from 'src/assets/day_13/frame_018_delay-0.04s.gif';
import dliowpZvgfdnqoUTmsaxZux from 'src/assets/day_13/frame_019_delay-0.05s.gif';
import dydlDFMMtSUGXqEAnOBUCUk from 'src/assets/day_13/frame_020_delay-0.04s.gif';
import diQZZCfdEHTXuhvWJNTyHQu from 'src/assets/day_13/frame_021_delay-0.05s.gif';
import bBvvBujyHVLkHQbLgOjDsmX from 'src/assets/day_13/frame_022_delay-0.05s.gif';
import fntLaghaEaQZlTHfVQDxpxQ from 'src/assets/day_13/frame_023_delay-0.04s.gif';
import eYLnpGmbuZfACtMkxKXCRAB from 'src/assets/day_13/frame_024_delay-0.05s.gif';
import eETqJxwTEZSuqXUlDewridD from 'src/assets/day_13/frame_025_delay-0.04s.gif';
import ZhYICAvpsimGllHMWowhfK from 'src/assets/day_13/frame_026_delay-0.05s.gif';
import fIfOSGkydxmwsKIMICqjRbf from 'src/assets/day_13/frame_027_delay-0.04s.gif';
import dUByiXZYZQihxthrdzTKrMV from 'src/assets/day_13/frame_028_delay-0.05s.gif';
import TcErFHOhLZWwWnnJqSOGhz from 'src/assets/day_13/frame_029_delay-0.04s.gif';
import KVbIeCALusxsFAYSuUhRuk from 'src/assets/day_13/frame_030_delay-0.05s.gif';
import GSAnlYhVyEiiuPLDIgnaqF from 'src/assets/day_13/frame_031_delay-0.04s.gif';
import crayfpcxciMFIURbGNFCPuG from 'src/assets/day_13/frame_032_delay-0.05s.gif';
import eZsJHYpwUsKrCOyjocLUGZF from 'src/assets/day_13/frame_033_delay-0.05s.gif';
import dMbLfTsjfwiAesbNUOLxkJy from 'src/assets/day_13/frame_034_delay-0.04s.gif';
import bJqPCsXOpjniQmQXFnJVkhr from 'src/assets/day_13/frame_035_delay-0.05s.gif';
import eIuKDQrQBZtWsOjlsgIfcwk from 'src/assets/day_13/frame_036_delay-0.04s.gif';
import cQppxyJhaXVjxoCvtIbsDFc from 'src/assets/day_13/frame_037_delay-0.05s.gif';
import bSdikbKWsyaRPSwJTIqnoPV from 'src/assets/day_13/frame_038_delay-0.04s.gif';
import csNNffgbPIZmEitasYxdCzj from 'src/assets/day_13/frame_039_delay-0.05s.gif';
import foKJWshenDTAxYZyzfwrDSV from 'src/assets/day_13/frame_040_delay-0.04s.gif';
import dXxrKdbENZLbersHmjGHPcX from 'src/assets/day_13/frame_041_delay-0.05s.gif';
import fpEwQKnkFTChgxQgADxYQzR from 'src/assets/day_13/frame_042_delay-0.04s.gif';
import bPhYBNWvwEYwOvRjrCzlahg from 'src/assets/day_13/frame_043_delay-0.05s.gif';
import emcylASWhtANoMcICNOZhUs from 'src/assets/day_13/frame_044_delay-0.05s.gif';
import UBmVYByZkWkpXAReCcnMEu from 'src/assets/day_13/frame_045_delay-0.04s.gif';
import fepCsGzIqEWVvIpXZpcGYqK from 'src/assets/day_13/frame_046_delay-0.05s.gif';
import cKhYzzCGMKfryJstbGhivCj from 'src/assets/day_13/frame_047_delay-0.04s.gif';
import bOwyvOqwxlxTkkfibyLrGKA from 'src/assets/day_13/frame_048_delay-0.05s.gif';
import acvwxZkdEHoVpMTwFWnKKTc from 'src/assets/day_13/frame_049_delay-0.04s.gif';
import ckpVudZAludrdlcMuHyCjWu from 'src/assets/day_13/frame_050_delay-0.05s.gif';
import eJJwxXzcyIwAcwaFoYulcsM from 'src/assets/day_13/frame_051_delay-0.04s.gif';
import eTXRzCQdUtXNiRTjOshJwNb from 'src/assets/day_13/frame_052_delay-0.05s.gif';
import arenkWvITCtwBcjYTWVoNuU from 'src/assets/day_13/frame_053_delay-0.04s.gif';
import csmMaMJfhaLlBaQONTuqDYS from 'src/assets/day_13/frame_054_delay-0.05s.gif';
import dHnnYRgcrKyPMuLtAaPmeDn from 'src/assets/day_13/frame_055_delay-0.05s.gif';
import dcRvQpWtmtLtXnUxLyFImXO from 'src/assets/day_13/frame_056_delay-0.04s.gif';
import cmOXibDkRlFMffDKbntXZef from 'src/assets/day_13/frame_057_delay-0.05s.gif';
import eaRuxIRnEOZQWTWIAluBYjZ from 'src/assets/day_13/frame_058_delay-0.04s.gif';
import doZXMBvjtnyXlcqXpHwjtvj from 'src/assets/day_13/frame_059_delay-0.05s.gif';
import bxPHtXmohJPhyJsnwsvMgIP from 'src/assets/day_13/frame_060_delay-0.04s.gif';
import asOWSgjGfNXWzglJYhSEbBI from 'src/assets/day_13/frame_061_delay-0.05s.gif';
import crLqCErmeJPWSufQqlmLMQn from 'src/assets/day_13/frame_062_delay-0.04s.gif';
import fHrBplAwPWgxKdaSOkzjBZH from 'src/assets/day_13/frame_063_delay-0.05s.gif';
import efRdhQDhJOCzLKvvEiszUhU from 'src/assets/day_13/frame_064_delay-0.04s.gif';
import dUzjnsBjiyJrqZEglyvMDDg from 'src/assets/day_13/frame_065_delay-0.05s.gif';
import dCeskAZpxpyhqypjRIaHDhN from 'src/assets/day_13/frame_066_delay-0.05s.gif';
import fwJGtWqvxqOzpMNssBIjzAR from 'src/assets/day_13/frame_067_delay-0.04s.gif';
import fIFuphJyGPQlHzVzJdaDCZp from 'src/assets/day_13/frame_068_delay-0.05s.gif';
import aehWDWOqMthPdDSLaKxubFI from 'src/assets/day_13/frame_069_delay-0.04s.gif';
import cYNFwfPRRNNrGtlgRATpfnE from 'src/assets/day_13/frame_070_delay-0.05s.gif';
import eOXJuubrLloVNVqIyFbKeJE from 'src/assets/day_13/frame_071_delay-0.04s.gif';
import erTkoeDJAvQyDfFccZkiAPM from 'src/assets/day_13/frame_072_delay-0.05s.gif';
import exCzUDAfhROkqumLdXBcAwN from 'src/assets/day_13/frame_073_delay-0.04s.gif';
import TnTZyTUGPrTvCKDoWoAvfn from 'src/assets/day_13/frame_074_delay-0.05s.gif';
import fhEdFJdCUHcFqHIfefSRNJS from 'src/assets/day_13/frame_075_delay-0.04s.gif';
import ZTzvlUjvNdHDnbCUCtolvW from 'src/assets/day_13/frame_076_delay-0.05s.gif';
import alqYvtUgWTRNKvbvIxrlyTf from 'src/assets/day_13/frame_077_delay-0.05s.gif';
import aabjlMRwJysMUxsxwSUvWOFw from 'src/assets/day_13/frame_078_delay-0.04s.gif';
import uGsDEUvRIDdMrIjTLRAZgl from 'src/assets/day_13/frame_079_delay-0.05s.gif';
import cxacOnKuszzdtFqmjfqUBjg from 'src/assets/day_13/frame_080_delay-0.04s.gif';
import fLKnIrfoLZgxViEHSvPQYlq from 'src/assets/day_13/frame_081_delay-0.05s.gif';
import dxywamDNTCuwzxsvhqtugZr from 'src/assets/day_13/frame_082_delay-0.04s.gif';
import aqLAYixbHSucVpbKXOqRxRC from 'src/assets/day_13/frame_083_delay-0.05s.gif';
import apAuKLbGZtklQqKjyDRztQO from 'src/assets/day_13/frame_084_delay-0.04s.gif';
import UmSMmJYGaAIjZDnpmEDQha from 'src/assets/day_13/frame_085_delay-0.05s.gif';
import bNVgPiLczAQFFicFhyKEBsN from 'src/assets/day_13/frame_086_delay-0.04s.gif';
import bFGEoXFrnLzcOukqnqtGZRA from 'src/assets/day_13/frame_087_delay-0.05s.gif';
import fjOOfRFRChdiflxpoKEcFpb from 'src/assets/day_13/frame_088_delay-0.05s.gif';
import fKRkQXNWrqPOVESzYriggaY from 'src/assets/day_13/frame_089_delay-0.04s.gif';
import eWLlPTTAAZkvADITxZNBhkk from 'src/assets/day_13/frame_090_delay-0.05s.gif';
import dpLgollrnNwjveLcJdSHxOx from 'src/assets/day_13/frame_091_delay-0.04s.gif';
import VbKLMKhkrFZwLoRlhggbQK from 'src/assets/day_13/frame_092_delay-0.05s.gif';
import fSiOPaiOGLQlnOBDJUIUlWY from 'src/assets/day_13/frame_093_delay-0.04s.gif';
import cyMlyOwLVRHLbEfakGaEtFM from 'src/assets/day_13/frame_094_delay-0.05s.gif';
import bqNwsuQhLnyZQYLGBEaSLYL from 'src/assets/day_13/frame_095_delay-0.04s.gif';
import STbdMpagZgligVTGyOYoou from 'src/assets/day_13/frame_096_delay-0.05s.gif';
import danYMItRSZYOtIOMuPAUnxu from 'src/assets/day_13/frame_097_delay-0.04s.gif';
import fkJmTUZamKdjljpNkxxRsUR from 'src/assets/day_13/frame_098_delay-0.05s.gif';
import eALZaVXwyIwDJWFxWQrRhbZ from 'src/assets/day_13/frame_099_delay-0.05s.gif';
import fXOVPQsNIKwZoGVHPNQmsKX from 'src/assets/day_13/frame_100_delay-0.04s.gif';
import dMwerwNYkZLYdYtEhwBTZOh from 'src/assets/day_13/frame_101_delay-0.05s.gif';
import fVRnLUGaVxlJzyBkJNoGROJ from 'src/assets/day_13/frame_102_delay-0.04s.gif';
import enchmIDpvLBFmRbmCKCwMyN from 'src/assets/day_13/frame_103_delay-0.05s.gif';
import bghQvLGjghbixLYARHywpRa from 'src/assets/day_13/frame_104_delay-0.04s.gif';
import fXVinAqqeFtnLSacLAiMcnz from 'src/assets/day_13/frame_105_delay-0.05s.gif';
import fZwtXHrarMAqwpnYnshEENL from 'src/assets/day_13/frame_106_delay-0.04s.gif';
import dlzuHZubnXUkZdZYaamfwFK from 'src/assets/day_13/frame_107_delay-0.05s.gif';
import cKfqSMZqsEkzsDmfqgdTAOM from 'src/assets/day_13/frame_108_delay-0.04s.gif';
import EQzMYXBlGbnFZgzgSuyEEj from 'src/assets/day_13/frame_109_delay-0.05s.gif';
import TmOTxkZmTSkZhiVORtGnSn from 'src/assets/day_13/frame_110_delay-0.05s.gif';

export default class Day13 extends Gift {
  public static hash = "fDzejmzXQGYVITUknsduQzs";
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
    loadImage(dMaZpioqPlANvVarEqNFvAz),
    loadImage(egjowBfAzFacYxslilvqHyZ),
    loadImage(foWszIXyCsZugWeFdSDtSlW),
    loadImage(eajlqOGpgjwJoUxQVwrGSNb),
    loadImage(dmherejsKcfHdFtsozJEhet),
    loadImage(cNlDhhftZpauYskboWrXuVz),
    loadImage(eYolBrGqLOHheYctrHgbkrW),
    loadImage(bgxhgkFKXGaeJXfeTmWcIsj),
    loadImage(cvclSmzjbDetUUJvOphTwlo),
    loadImage(VBTGcqgIsWqyMSJJjEjBph),
    loadImage(cOMKsVsnAeIkzpTKDRqmZIf),
    loadImage(fjFKTxKDBbExgjjhRERBRuH),
    loadImage(CdfDnJwiSLiGcuGJTbSNgL),
    loadImage(YyZTXmrlQcYQPiwkjdDdjj),
    loadImage(exftlDNGzjYFcLyQqJYLDUG),
    loadImage(ePNEXUpEzBkcgZwJwlKGmqT),
    loadImage(cKXZSOSkIpEMCgGzVoxFrFb),
    loadImage(crWIKsEmKcSGIxqoXFCSMeE),
    loadImage(endtEkoZCzgKnvqvCUmdIwk),
    loadImage(dliowpZvgfdnqoUTmsaxZux),
    loadImage(dydlDFMMtSUGXqEAnOBUCUk),
    loadImage(diQZZCfdEHTXuhvWJNTyHQu),
    loadImage(bBvvBujyHVLkHQbLgOjDsmX),
    loadImage(fntLaghaEaQZlTHfVQDxpxQ),
    loadImage(eYLnpGmbuZfACtMkxKXCRAB),
    loadImage(eETqJxwTEZSuqXUlDewridD),
    loadImage(ZhYICAvpsimGllHMWowhfK),
    loadImage(fIfOSGkydxmwsKIMICqjRbf),
    loadImage(dUByiXZYZQihxthrdzTKrMV),
    loadImage(TcErFHOhLZWwWnnJqSOGhz),
    loadImage(KVbIeCALusxsFAYSuUhRuk),
    loadImage(GSAnlYhVyEiiuPLDIgnaqF),
    loadImage(crayfpcxciMFIURbGNFCPuG),
    loadImage(eZsJHYpwUsKrCOyjocLUGZF),
    loadImage(dMbLfTsjfwiAesbNUOLxkJy),
    loadImage(bJqPCsXOpjniQmQXFnJVkhr),
    loadImage(eIuKDQrQBZtWsOjlsgIfcwk),
    loadImage(cQppxyJhaXVjxoCvtIbsDFc),
    loadImage(bSdikbKWsyaRPSwJTIqnoPV),
    loadImage(csNNffgbPIZmEitasYxdCzj),
    loadImage(foKJWshenDTAxYZyzfwrDSV),
    loadImage(dXxrKdbENZLbersHmjGHPcX),
    loadImage(fpEwQKnkFTChgxQgADxYQzR),
    loadImage(bPhYBNWvwEYwOvRjrCzlahg),
    loadImage(emcylASWhtANoMcICNOZhUs),
    loadImage(UBmVYByZkWkpXAReCcnMEu),
    loadImage(fepCsGzIqEWVvIpXZpcGYqK),
    loadImage(cKhYzzCGMKfryJstbGhivCj),
    loadImage(bOwyvOqwxlxTkkfibyLrGKA),
    loadImage(acvwxZkdEHoVpMTwFWnKKTc),
    loadImage(ckpVudZAludrdlcMuHyCjWu),
    loadImage(eJJwxXzcyIwAcwaFoYulcsM),
    loadImage(eTXRzCQdUtXNiRTjOshJwNb),
    loadImage(arenkWvITCtwBcjYTWVoNuU),
    loadImage(csmMaMJfhaLlBaQONTuqDYS),
    loadImage(dHnnYRgcrKyPMuLtAaPmeDn),
    loadImage(dcRvQpWtmtLtXnUxLyFImXO),
    loadImage(cmOXibDkRlFMffDKbntXZef),
    loadImage(eaRuxIRnEOZQWTWIAluBYjZ),
    loadImage(doZXMBvjtnyXlcqXpHwjtvj),
    loadImage(bxPHtXmohJPhyJsnwsvMgIP),
    loadImage(asOWSgjGfNXWzglJYhSEbBI),
    loadImage(crLqCErmeJPWSufQqlmLMQn),
    loadImage(fHrBplAwPWgxKdaSOkzjBZH),
    loadImage(efRdhQDhJOCzLKvvEiszUhU),
    loadImage(dUzjnsBjiyJrqZEglyvMDDg),
    loadImage(dCeskAZpxpyhqypjRIaHDhN),
    loadImage(fwJGtWqvxqOzpMNssBIjzAR),
    loadImage(fIFuphJyGPQlHzVzJdaDCZp),
    loadImage(aehWDWOqMthPdDSLaKxubFI),
    loadImage(cYNFwfPRRNNrGtlgRATpfnE),
    loadImage(eOXJuubrLloVNVqIyFbKeJE),
    loadImage(erTkoeDJAvQyDfFccZkiAPM),
    loadImage(exCzUDAfhROkqumLdXBcAwN),
    loadImage(TnTZyTUGPrTvCKDoWoAvfn),
    loadImage(fhEdFJdCUHcFqHIfefSRNJS),
    loadImage(ZTzvlUjvNdHDnbCUCtolvW),
    loadImage(alqYvtUgWTRNKvbvIxrlyTf),
    loadImage(aabjlMRwJysMUxsxwSUvWOFw),
    loadImage(uGsDEUvRIDdMrIjTLRAZgl),
    loadImage(cxacOnKuszzdtFqmjfqUBjg),
    loadImage(fLKnIrfoLZgxViEHSvPQYlq),
    loadImage(dxywamDNTCuwzxsvhqtugZr),
    loadImage(aqLAYixbHSucVpbKXOqRxRC),
    loadImage(apAuKLbGZtklQqKjyDRztQO),
    loadImage(UmSMmJYGaAIjZDnpmEDQha),
    loadImage(bNVgPiLczAQFFicFhyKEBsN),
    loadImage(bFGEoXFrnLzcOukqnqtGZRA),
    loadImage(fjOOfRFRChdiflxpoKEcFpb),
    loadImage(fKRkQXNWrqPOVESzYriggaY),
    loadImage(eWLlPTTAAZkvADITxZNBhkk),
    loadImage(dpLgollrnNwjveLcJdSHxOx),
    loadImage(VbKLMKhkrFZwLoRlhggbQK),
    loadImage(fSiOPaiOGLQlnOBDJUIUlWY),
    loadImage(cyMlyOwLVRHLbEfakGaEtFM),
    loadImage(bqNwsuQhLnyZQYLGBEaSLYL),
    loadImage(STbdMpagZgligVTGyOYoou),
    loadImage(danYMItRSZYOtIOMuPAUnxu),
    loadImage(fkJmTUZamKdjljpNkxxRsUR),
    loadImage(eALZaVXwyIwDJWFxWQrRhbZ),
    loadImage(fXOVPQsNIKwZoGVHPNQmsKX),
    loadImage(dMwerwNYkZLYdYtEhwBTZOh),
    loadImage(fVRnLUGaVxlJzyBkJNoGROJ),
    loadImage(enchmIDpvLBFmRbmCKCwMyN),
    loadImage(bghQvLGjghbixLYARHywpRa),
    loadImage(fXVinAqqeFtnLSacLAiMcnz),
    loadImage(fZwtXHrarMAqwpnYnshEENL),
    loadImage(dlzuHZubnXUkZdZYaamfwFK),
    loadImage(cKfqSMZqsEkzsDmfqgdTAOM),
    loadImage(EQzMYXBlGbnFZgzgSuyEEj),
    loadImage(TmOTxkZmTSkZhiVORtGnSn),
  ];

  private static frames: Array<HTMLImageElement> = [];
  private static currentFrame: number = 0;

  private static fps = 1000 / 20;
  private static last = 0;

  public static async init() {
    if (Day13.frames.length === 0) {
      await Day13.loadFrames();
    }
  }

  private static async loadFrames() {
    Day13.frames = await Promise.all(Day13.framesPromises);
  }

  public static getFrame(): HTMLImageElement {
    const now = Date.now();
    const elapsed = now - Day13.last;

    if (elapsed < Day13.fps) return Day13.frames[Day13.currentFrame];

    Day13.last = now;
    Day13.currentFrame = (Day13.currentFrame + 1) % Day13.frames.length;

    return Day13.frames[Day13.currentFrame];
  }
}
