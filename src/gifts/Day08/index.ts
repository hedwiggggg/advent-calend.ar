import preval from 'preval.macro';

import { Gift } from "../types";
import { loadImage } from "../helper";

import qrCode from './qr-code.png';

import yQeCSPUvvgghfQQYZVhCxS from 'src/assets/day_08/frame_00_delay-0.07s.gif';
import fmaKQqbsZIebUkPpJCIFtUg from 'src/assets/day_08/frame_01_delay-0.06s.gif';
import bcLUVXTJwvwZzuWRPerWERN from 'src/assets/day_08/frame_02_delay-0.07s.gif';
import SuGDPVUViedyeRvIwXePgp from 'src/assets/day_08/frame_03_delay-0.07s.gif';
import bPRodCvcFVYpSUADXFYGhAj from 'src/assets/day_08/frame_04_delay-0.06s.gif';
import fXnCBlIvaGakRaZstKoIOax from 'src/assets/day_08/frame_05_delay-0.07s.gif';
import bWFzIQOrcOUSKmndPrVtLYH from 'src/assets/day_08/frame_06_delay-0.07s.gif';
import fzsjYdKwmVpmiGKKzNTNLmO from 'src/assets/day_08/frame_07_delay-0.06s.gif';
import bSiEdBIihItyEiVDRntpDas from 'src/assets/day_08/frame_08_delay-0.07s.gif';
import dEbPgvdWrgxQFfJMLGObsSn from 'src/assets/day_08/frame_09_delay-0.07s.gif';
import ekisGhcuoIeVLnezJDocWxH from 'src/assets/day_08/frame_10_delay-0.06s.gif';
import brsbCPyPPdNTYBxixvwlMBX from 'src/assets/day_08/frame_11_delay-0.07s.gif';
import fRqeDnxcwiZWmewAyybHpgl from 'src/assets/day_08/frame_12_delay-0.07s.gif';
import dMhmjIRlceMigWVXSyzxUCd from 'src/assets/day_08/frame_13_delay-0.06s.gif';
import ecLjspcRAKDPzUuPzgpTCRN from 'src/assets/day_08/frame_14_delay-0.07s.gif';
import dEiiuzwaPAmbnJOUPWUORYu from 'src/assets/day_08/frame_15_delay-0.07s.gif';
import bRUMoYcikdFjhatnjrWRTWd from 'src/assets/day_08/frame_16_delay-0.06s.gif';
import eepPwXFUJGtKlHoNZvXuRIC from 'src/assets/day_08/frame_17_delay-0.07s.gif';
import eUmCdQTNKKhymlWFcrDIrSP from 'src/assets/day_08/frame_18_delay-0.07s.gif';
import beMfrpDOkTBsRyTIRCMgmdZ from 'src/assets/day_08/frame_19_delay-0.06s.gif';
import erYjNrBoibWoNyHAXOPANUf from 'src/assets/day_08/frame_20_delay-0.07s.gif';
import ZZAbCsttcJwzqRrbJmYUAT from 'src/assets/day_08/frame_21_delay-0.07s.gif';
import fFgXvxKaQBJwCQMBJoEMnBV from 'src/assets/day_08/frame_22_delay-0.06s.gif';
import bVdXvgRNNjMHHXicgLPYvfj from 'src/assets/day_08/frame_23_delay-0.07s.gif';
import ekeuuuoAzflEqUoCdHKTzkp from 'src/assets/day_08/frame_24_delay-0.07s.gif';
import fBkuRassfMTGdjcdEgDQndV from 'src/assets/day_08/frame_25_delay-0.06s.gif';
import dTKLTBNLzKwbSNWinSabNqA from 'src/assets/day_08/frame_26_delay-0.07s.gif';
import dfulgBJLLINfmovfajEnQEN from 'src/assets/day_08/frame_27_delay-0.07s.gif';
import cTcNyAKssHShsChtcXvgxbW from 'src/assets/day_08/frame_28_delay-0.06s.gif';
import bMbBBstlrIjzSwiQJbEwSTZ from 'src/assets/day_08/frame_29_delay-0.07s.gif';
import dwUEZLwNTZGZGehzYxSsSvy from 'src/assets/day_08/frame_30_delay-0.07s.gif';
import dKcFGkjjcGdyVyQIgiZxMFU from 'src/assets/day_08/frame_31_delay-0.06s.gif';
import eyeCSpXFHAhWoWQoXOlTIPR from 'src/assets/day_08/frame_32_delay-0.07s.gif';
import cOdNFbquAKCEQFSpVsbQpLt from 'src/assets/day_08/frame_33_delay-0.07s.gif';

export default class Day08 implements Gift {
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
    loadImage(yQeCSPUvvgghfQQYZVhCxS),
    loadImage(fmaKQqbsZIebUkPpJCIFtUg),
    loadImage(bcLUVXTJwvwZzuWRPerWERN),
    loadImage(SuGDPVUViedyeRvIwXePgp),
    loadImage(bPRodCvcFVYpSUADXFYGhAj),
    loadImage(fXnCBlIvaGakRaZstKoIOax),
    loadImage(bWFzIQOrcOUSKmndPrVtLYH),
    loadImage(fzsjYdKwmVpmiGKKzNTNLmO),
    loadImage(bSiEdBIihItyEiVDRntpDas),
    loadImage(dEbPgvdWrgxQFfJMLGObsSn),
    loadImage(ekisGhcuoIeVLnezJDocWxH),
    loadImage(brsbCPyPPdNTYBxixvwlMBX),
    loadImage(fRqeDnxcwiZWmewAyybHpgl),
    loadImage(dMhmjIRlceMigWVXSyzxUCd),
    loadImage(ecLjspcRAKDPzUuPzgpTCRN),
    loadImage(dEiiuzwaPAmbnJOUPWUORYu),
    loadImage(bRUMoYcikdFjhatnjrWRTWd),
    loadImage(eepPwXFUJGtKlHoNZvXuRIC),
    loadImage(eUmCdQTNKKhymlWFcrDIrSP),
    loadImage(beMfrpDOkTBsRyTIRCMgmdZ),
    loadImage(erYjNrBoibWoNyHAXOPANUf),
    loadImage(ZZAbCsttcJwzqRrbJmYUAT),
    loadImage(fFgXvxKaQBJwCQMBJoEMnBV),
    loadImage(bVdXvgRNNjMHHXicgLPYvfj),
    loadImage(ekeuuuoAzflEqUoCdHKTzkp),
    loadImage(fBkuRassfMTGdjcdEgDQndV),
    loadImage(dTKLTBNLzKwbSNWinSabNqA),
    loadImage(dfulgBJLLINfmovfajEnQEN),
    loadImage(cTcNyAKssHShsChtcXvgxbW),
    loadImage(bMbBBstlrIjzSwiQJbEwSTZ),
    loadImage(dwUEZLwNTZGZGehzYxSsSvy),
    loadImage(dKcFGkjjcGdyVyQIgiZxMFU),
    loadImage(eyeCSpXFHAhWoWQoXOlTIPR),
    loadImage(cOdNFbquAKCEQFSpVsbQpLt),
  ];

  private static frames: Array<HTMLImageElement> = [];
  private static currentFrame: number = 0;

  private static fps = 1000 / 20;
  private static last = 0;

  public static async init() {
    if (Day08.frames.length === 0) {
      await Day08.loadFrames();
    }
  }

  private static async loadFrames() {
    Day08.frames = await Promise.all(Day08.framesPromises);
  }

  public static getFrame(): HTMLImageElement {
    const now = Date.now();
    const elapsed = now - Day08.last;

    if (elapsed < Day08.fps) return Day08.frames[Day08.currentFrame];

    Day08.last = now;
    Day08.currentFrame = (Day08.currentFrame + 1) % Day08.frames.length;

    return Day08.frames[Day08.currentFrame];
  }
}
