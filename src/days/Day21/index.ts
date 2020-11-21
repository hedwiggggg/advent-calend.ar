import preval from 'preval.macro';

import { Day } from "../types";
import { loadImage } from "../helper";

import qrCode from './qr-code.png';

import doYKKeMXCXApSppUNbVOYaZ from 'src/assets/day_21/frame_00_delay-0.03s.gif';
import TYpMFAXjmKcTKhrhRhpjXd from 'src/assets/day_21/frame_01_delay-0.04s.gif';
import dauGMOFhTyscbMCnjQxWtvm from 'src/assets/day_21/frame_02_delay-0.03s.gif';
import euzvCvpCePBXjAziavTKtXw from 'src/assets/day_21/frame_03_delay-0.03s.gif';
import biTRNpSlhcwWddCRxElgDVU from 'src/assets/day_21/frame_04_delay-0.04s.gif';
import biHfZmbOJJmlTYmyJBtgSFI from 'src/assets/day_21/frame_05_delay-0.03s.gif';
import abpjaDqsGwNfaiULynZinZw from 'src/assets/day_21/frame_06_delay-0.03s.gif';
import zeupDoGiNqZStAOhIyKMAD from 'src/assets/day_21/frame_07_delay-0.04s.gif';
import dFtdrnrfvQUtIQIyDWBcAHL from 'src/assets/day_21/frame_08_delay-0.03s.gif';
import JQXsRkhmgJjBdBTUDzNVmU from 'src/assets/day_21/frame_09_delay-0.03s.gif';
import eLvFYEtjwANfmBdVyFXnyPW from 'src/assets/day_21/frame_10_delay-0.04s.gif';
import eykcZimsGkUzPGrkSHqOmaW from 'src/assets/day_21/frame_11_delay-0.03s.gif';
import edAyGxPAsrSQgzqpNawdohT from 'src/assets/day_21/frame_12_delay-0.03s.gif';
import agLrCWhswtikbKeTovoDREl from 'src/assets/day_21/frame_13_delay-0.04s.gif';
import fNiWrJAuKAQYuxpXAtDfgNn from 'src/assets/day_21/frame_14_delay-0.03s.gif';
import dIbmetXgUOCEJRhZFldCHaI from 'src/assets/day_21/frame_15_delay-0.03s.gif';
import cTqyllCBJIOwurSPhBGTrcl from 'src/assets/day_21/frame_16_delay-0.04s.gif';
import dnvpRbqyeMbeqMpepiReKQg from 'src/assets/day_21/frame_17_delay-0.03s.gif';
import ekxkPFsGzKZLKifphGEtARf from 'src/assets/day_21/frame_18_delay-0.03s.gif';
import alUMcDHVrVekunBSdLfRQHy from 'src/assets/day_21/frame_19_delay-0.04s.gif';
import bhwxdgrSKCIZMPKqggTTdEq from 'src/assets/day_21/frame_20_delay-0.03s.gif';
import edzNWQNcDlTwMRAyeewUfGY from 'src/assets/day_21/frame_21_delay-0.03s.gif';
import vTcQshBNtqSRqqoBAvadrN from 'src/assets/day_21/frame_22_delay-0.04s.gif';
import crOWXRXlonnARUgKKwTtIxO from 'src/assets/day_21/frame_23_delay-0.03s.gif';
import dABwaajejgyyStBUWcATEwL from 'src/assets/day_21/frame_24_delay-0.03s.gif';
import bsNRmWlcAKAMbhfuxDORRtd from 'src/assets/day_21/frame_25_delay-0.04s.gif';
import KhQTJBoNIGEioEonRjsLVO from 'src/assets/day_21/frame_26_delay-0.03s.gif';
import dqrnNOGxzMQmDKvoJJYjEpn from 'src/assets/day_21/frame_27_delay-0.03s.gif';
import clAdVLEXdjWEBQZhxRziKmb from 'src/assets/day_21/frame_28_delay-0.04s.gif';
import fdiXryYPqQCcRZZvDwexVqC from 'src/assets/day_21/frame_29_delay-0.03s.gif';
import fvnzuuiMVCTlGQWzfuMfmWW from 'src/assets/day_21/frame_30_delay-0.03s.gif';
import dQIjMjSlMwXBeLTfJkXIckJ from 'src/assets/day_21/frame_31_delay-0.04s.gif';
import cOfoQiSxFxYcHCJapQxbbyg from 'src/assets/day_21/frame_32_delay-0.03s.gif';
import cIkAwmVStkRuvfeniHYDZCV from 'src/assets/day_21/frame_33_delay-0.03s.gif';
import LfDeqNAnQQlFILddPyKVat from 'src/assets/day_21/frame_34_delay-0.04s.gif';
import bYDNPizMryzzpgFbSfANyrU from 'src/assets/day_21/frame_35_delay-0.03s.gif';
import dRwOCKtJFrBSlfpjbRZdOTb from 'src/assets/day_21/frame_36_delay-0.03s.gif';
import drTzlgivpLJhRSIVZCXFEuN from 'src/assets/day_21/frame_37_delay-0.04s.gif';
import fnFCopuXoHGRarJIRUiVglh from 'src/assets/day_21/frame_38_delay-0.03s.gif';
import bWSlIgQRFRKGPngYRYGvrPX from 'src/assets/day_21/frame_39_delay-0.03s.gif';
import dSmGUWMNOBsdbBcDAcNCCht from 'src/assets/day_21/frame_40_delay-0.04s.gif';
import fapjZSpCdgDHQDpxuzLmSbV from 'src/assets/day_21/frame_41_delay-0.03s.gif';
import cGYjvHupmmVrKyUzvfvMCWP from 'src/assets/day_21/frame_42_delay-0.03s.gif';
import cpqNWfQFyahNmarUWsLtpNa from 'src/assets/day_21/frame_43_delay-0.04s.gif';
import cikojyxMNdUMWRnVBKjjoOq from 'src/assets/day_21/frame_44_delay-0.03s.gif';
import fonnBwSsXYsjIXPALEiaePZ from 'src/assets/day_21/frame_45_delay-0.03s.gif';
import ZTOUqgQvSqfleBFsInrPGP from 'src/assets/day_21/frame_46_delay-0.04s.gif';
import FHVJUQVOyGrCwznkgvjitg from 'src/assets/day_21/frame_47_delay-0.03s.gif';
import ganZDxtwLsHEbjfXltluKfP from 'src/assets/day_21/frame_48_delay-0.03s.gif';
import dVhsIJdQWcmIBgPywjLxDnJ from 'src/assets/day_21/frame_49_delay-0.04s.gif';
import fLWmMuIvZytHckeQrdnrkxP from 'src/assets/day_21/frame_50_delay-0.03s.gif';
import fbwGjbXQtNkAPAdJbnsGzkK from 'src/assets/day_21/frame_51_delay-0.03s.gif';
import byTgWyayPHKMcfroDiPDnLT from 'src/assets/day_21/frame_52_delay-0.04s.gif';
import bkSKWnAzHvWCwyZurXpAYVF from 'src/assets/day_21/frame_53_delay-0.03s.gif';
import eGOaoBZFrDEzgbOSQKfIxpJ from 'src/assets/day_21/frame_54_delay-0.03s.gif';
import eTqJOtiGLxxtpbTunwBHLWe from 'src/assets/day_21/frame_55_delay-0.04s.gif';
import bicnvWREuIXqYyKyMONsWPc from 'src/assets/day_21/frame_56_delay-0.03s.gif';
import adyUotHnmlIvXVMPYnglomv from 'src/assets/day_21/frame_57_delay-0.03s.gif';
import bxetqsrLIFzcMqdCuNAEqsz from 'src/assets/day_21/frame_58_delay-0.04s.gif';
import bsRfuqUOUdQdxUXNCsnNrao from 'src/assets/day_21/frame_59_delay-0.03s.gif';
import eaSYxmItpzXXdxqIPgxilkG from 'src/assets/day_21/frame_60_delay-0.03s.gif';
import fzVWuGOqDIxWIGWunpLXlVm from 'src/assets/day_21/frame_61_delay-0.04s.gif';
import cDOfwmtKQLqakrbOCtJoKBA from 'src/assets/day_21/frame_62_delay-0.03s.gif';
import FtSefQCsAVsuwRhhsMBhmi from 'src/assets/day_21/frame_63_delay-0.03s.gif';
import cgXxdrLjuZFskrwdawiZGec from 'src/assets/day_21/frame_64_delay-0.04s.gif';
import bDJxWWydfAvqQXtaJcmoXRc from 'src/assets/day_21/frame_65_delay-0.03s.gif';
import eplcsQerqEVSlavntgHehah from 'src/assets/day_21/frame_66_delay-0.03s.gif';
import YDBfCBvYvdtzjsGoxpRHkK from 'src/assets/day_21/frame_67_delay-0.04s.gif';
import deEhhoitDHVcxFcZWFBGjTv from 'src/assets/day_21/frame_68_delay-0.03s.gif';
import bFkBpBTpIglpAotkreNPNMq from 'src/assets/day_21/frame_69_delay-0.03s.gif';
import ezRDvvAtlxUlxZQHGQsOQRv from 'src/assets/day_21/frame_70_delay-0.04s.gif';
import bKdcfpQpfdMmTJTiozFhgzN from 'src/assets/day_21/frame_71_delay-0.03s.gif';
import dakMDHLtcFbWHGVXmqNExDh from 'src/assets/day_21/frame_72_delay-0.03s.gif';
import OPhdViJmQZfnprAvPxfwWW from 'src/assets/day_21/frame_73_delay-0.04s.gif';
import edeAGsIVAlNApqmalKCHvfw from 'src/assets/day_21/frame_74_delay-0.03s.gif';
import euuKZIEuvZpdBTrvLpUEbqa from 'src/assets/day_21/frame_75_delay-0.03s.gif';
import cmxordWVSfCUkxJWqtobSic from 'src/assets/day_21/frame_76_delay-0.04s.gif';
import cDpNSgtaYQzXuzsYGyfEjni from 'src/assets/day_21/frame_77_delay-0.03s.gif';
import cbQOfOzyzUZsmikXmZjlJuw from 'src/assets/day_21/frame_78_delay-0.03s.gif';
import canxBhUVsdfJbjbNKezmWxE from 'src/assets/day_21/frame_79_delay-0.04s.gif';
import cMGeOxBYPeUHWhJAwzSVKpx from 'src/assets/day_21/frame_80_delay-0.03s.gif';
import dxtoMwHwlJHoASMcYnEdXPS from 'src/assets/day_21/frame_81_delay-0.03s.gif';
import cvbbknXMtwNgdcFSuhWabhl from 'src/assets/day_21/frame_82_delay-0.04s.gif';
import cDmfSsLBIQlybmsCSjFmrQg from 'src/assets/day_21/frame_83_delay-0.03s.gif';
import anAfJGHpODipDsHQWGgVxXB from 'src/assets/day_21/frame_84_delay-0.03s.gif';
import eNcguNqPCHGzsgxHRYcAsxe from 'src/assets/day_21/frame_85_delay-0.04s.gif';
import cdIAKvrxxoaRqXJwhLArYbH from 'src/assets/day_21/frame_86_delay-0.03s.gif';
import TZFJXpYteVhQWwceutuvJK from 'src/assets/day_21/frame_87_delay-0.03s.gif';
import delqSRMqFhsisHVhWqNdoOk from 'src/assets/day_21/frame_88_delay-0.04s.gif';
import fTCwxqYxqQJmbkQszdENExp from 'src/assets/day_21/frame_89_delay-0.04s.gif';

export default class Day21 extends Day {
  public static hash = "cNZiZqMzbruoGEaLdZukHRE";
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
    loadImage(doYKKeMXCXApSppUNbVOYaZ),
    loadImage(TYpMFAXjmKcTKhrhRhpjXd),
    loadImage(dauGMOFhTyscbMCnjQxWtvm),
    loadImage(euzvCvpCePBXjAziavTKtXw),
    loadImage(biTRNpSlhcwWddCRxElgDVU),
    loadImage(biHfZmbOJJmlTYmyJBtgSFI),
    loadImage(abpjaDqsGwNfaiULynZinZw),
    loadImage(zeupDoGiNqZStAOhIyKMAD),
    loadImage(dFtdrnrfvQUtIQIyDWBcAHL),
    loadImage(JQXsRkhmgJjBdBTUDzNVmU),
    loadImage(eLvFYEtjwANfmBdVyFXnyPW),
    loadImage(eykcZimsGkUzPGrkSHqOmaW),
    loadImage(edAyGxPAsrSQgzqpNawdohT),
    loadImage(agLrCWhswtikbKeTovoDREl),
    loadImage(fNiWrJAuKAQYuxpXAtDfgNn),
    loadImage(dIbmetXgUOCEJRhZFldCHaI),
    loadImage(cTqyllCBJIOwurSPhBGTrcl),
    loadImage(dnvpRbqyeMbeqMpepiReKQg),
    loadImage(ekxkPFsGzKZLKifphGEtARf),
    loadImage(alUMcDHVrVekunBSdLfRQHy),
    loadImage(bhwxdgrSKCIZMPKqggTTdEq),
    loadImage(edzNWQNcDlTwMRAyeewUfGY),
    loadImage(vTcQshBNtqSRqqoBAvadrN),
    loadImage(crOWXRXlonnARUgKKwTtIxO),
    loadImage(dABwaajejgyyStBUWcATEwL),
    loadImage(bsNRmWlcAKAMbhfuxDORRtd),
    loadImage(KhQTJBoNIGEioEonRjsLVO),
    loadImage(dqrnNOGxzMQmDKvoJJYjEpn),
    loadImage(clAdVLEXdjWEBQZhxRziKmb),
    loadImage(fdiXryYPqQCcRZZvDwexVqC),
    loadImage(fvnzuuiMVCTlGQWzfuMfmWW),
    loadImage(dQIjMjSlMwXBeLTfJkXIckJ),
    loadImage(cOfoQiSxFxYcHCJapQxbbyg),
    loadImage(cIkAwmVStkRuvfeniHYDZCV),
    loadImage(LfDeqNAnQQlFILddPyKVat),
    loadImage(bYDNPizMryzzpgFbSfANyrU),
    loadImage(dRwOCKtJFrBSlfpjbRZdOTb),
    loadImage(drTzlgivpLJhRSIVZCXFEuN),
    loadImage(fnFCopuXoHGRarJIRUiVglh),
    loadImage(bWSlIgQRFRKGPngYRYGvrPX),
    loadImage(dSmGUWMNOBsdbBcDAcNCCht),
    loadImage(fapjZSpCdgDHQDpxuzLmSbV),
    loadImage(cGYjvHupmmVrKyUzvfvMCWP),
    loadImage(cpqNWfQFyahNmarUWsLtpNa),
    loadImage(cikojyxMNdUMWRnVBKjjoOq),
    loadImage(fonnBwSsXYsjIXPALEiaePZ),
    loadImage(ZTOUqgQvSqfleBFsInrPGP),
    loadImage(FHVJUQVOyGrCwznkgvjitg),
    loadImage(ganZDxtwLsHEbjfXltluKfP),
    loadImage(dVhsIJdQWcmIBgPywjLxDnJ),
    loadImage(fLWmMuIvZytHckeQrdnrkxP),
    loadImage(fbwGjbXQtNkAPAdJbnsGzkK),
    loadImage(byTgWyayPHKMcfroDiPDnLT),
    loadImage(bkSKWnAzHvWCwyZurXpAYVF),
    loadImage(eGOaoBZFrDEzgbOSQKfIxpJ),
    loadImage(eTqJOtiGLxxtpbTunwBHLWe),
    loadImage(bicnvWREuIXqYyKyMONsWPc),
    loadImage(adyUotHnmlIvXVMPYnglomv),
    loadImage(bxetqsrLIFzcMqdCuNAEqsz),
    loadImage(bsRfuqUOUdQdxUXNCsnNrao),
    loadImage(eaSYxmItpzXXdxqIPgxilkG),
    loadImage(fzVWuGOqDIxWIGWunpLXlVm),
    loadImage(cDOfwmtKQLqakrbOCtJoKBA),
    loadImage(FtSefQCsAVsuwRhhsMBhmi),
    loadImage(cgXxdrLjuZFskrwdawiZGec),
    loadImage(bDJxWWydfAvqQXtaJcmoXRc),
    loadImage(eplcsQerqEVSlavntgHehah),
    loadImage(YDBfCBvYvdtzjsGoxpRHkK),
    loadImage(deEhhoitDHVcxFcZWFBGjTv),
    loadImage(bFkBpBTpIglpAotkreNPNMq),
    loadImage(ezRDvvAtlxUlxZQHGQsOQRv),
    loadImage(bKdcfpQpfdMmTJTiozFhgzN),
    loadImage(dakMDHLtcFbWHGVXmqNExDh),
    loadImage(OPhdViJmQZfnprAvPxfwWW),
    loadImage(edeAGsIVAlNApqmalKCHvfw),
    loadImage(euuKZIEuvZpdBTrvLpUEbqa),
    loadImage(cmxordWVSfCUkxJWqtobSic),
    loadImage(cDpNSgtaYQzXuzsYGyfEjni),
    loadImage(cbQOfOzyzUZsmikXmZjlJuw),
    loadImage(canxBhUVsdfJbjbNKezmWxE),
    loadImage(cMGeOxBYPeUHWhJAwzSVKpx),
    loadImage(dxtoMwHwlJHoASMcYnEdXPS),
    loadImage(cvbbknXMtwNgdcFSuhWabhl),
    loadImage(cDmfSsLBIQlybmsCSjFmrQg),
    loadImage(anAfJGHpODipDsHQWGgVxXB),
    loadImage(eNcguNqPCHGzsgxHRYcAsxe),
    loadImage(cdIAKvrxxoaRqXJwhLArYbH),
    loadImage(TZFJXpYteVhQWwceutuvJK),
    loadImage(delqSRMqFhsisHVhWqNdoOk),
    loadImage(fTCwxqYxqQJmbkQszdENExp),
  ];

  private static frames: Array<HTMLImageElement> = [];
  private static currentFrame: number = 0;

  private static fps = 1000 / 20;
  private static last = 0;

  public static async init() {
    if (Day21.frames.length === 0) {
      await Day21.loadFrames();
    }
  }

  private static async loadFrames() {
    Day21.frames = await Promise.all(Day21.framesPromises);
  }

  public static getFrame(): HTMLImageElement {
    const now = Date.now();
    const elapsed = now - Day21.last;

    if (elapsed < Day21.fps) return Day21.frames[Day21.currentFrame];

    Day21.last = now;
    Day21.currentFrame = (Day21.currentFrame + 1) % Day21.frames.length;

    return Day21.frames[Day21.currentFrame];
  }
}