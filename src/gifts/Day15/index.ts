import preval from 'preval.macro';

import { Gift } from "../types";
import { loadImage } from "../helper";

import qrCode from './qr-code.png';

import cHNaKkyyFqHRvqIfBKWMJZT from 'src/assets/day_15/frame_00_delay-0.07s.gif';
import dkAhZhiyaWmJdnEBtwkjvqN from 'src/assets/day_15/frame_01_delay-0.07s.gif';
import ceLILdljRwElwqSlpiCTCLL from 'src/assets/day_15/frame_02_delay-0.06s.gif';
import buowiGNmazAduhBfvJMckhU from 'src/assets/day_15/frame_03_delay-0.07s.gif';
import etXCQBdPUxlJYeoDEgJillg from 'src/assets/day_15/frame_04_delay-0.07s.gif';
import fTtyCidVgDwTiDtjKJYxGHa from 'src/assets/day_15/frame_05_delay-0.06s.gif';
import dRiJOqPoYPpwXwpoonENDby from 'src/assets/day_15/frame_06_delay-0.07s.gif';
import egkZfqbeHjHAbLUjjATeoEr from 'src/assets/day_15/frame_07_delay-0.07s.gif';
import evjtBJEmzAwUNfsbJTGYuRl from 'src/assets/day_15/frame_08_delay-0.06s.gif';
import cWNyBChJpwkIYKgOTtzdZKc from 'src/assets/day_15/frame_09_delay-0.07s.gif';
import buFBNXorpSFFQqrDOBQGHzH from 'src/assets/day_15/frame_10_delay-0.07s.gif';
import bcXymBnwpEYjWfZmjqhozxP from 'src/assets/day_15/frame_11_delay-0.06s.gif';
import fPpdEKUnvnQsjTNwfyvhtQC from 'src/assets/day_15/frame_12_delay-0.07s.gif';
import bsHXKSwBBTSYhyGpsMQRnlR from 'src/assets/day_15/frame_13_delay-0.07s.gif';
import bFdQgirOyuYxrhblacmasAR from 'src/assets/day_15/frame_14_delay-0.06s.gif';
import bKXMULSljvkBCLHtbIpdhda from 'src/assets/day_15/frame_15_delay-0.07s.gif';
import eUKKNWWpqDbMpehiPmVYGiH from 'src/assets/day_15/frame_16_delay-0.07s.gif';
import assvBzsCKWsxdHbCbfEsvim from 'src/assets/day_15/frame_17_delay-0.06s.gif';
import edXMlEsxLTjaaPRxWXBJrGP from 'src/assets/day_15/frame_18_delay-0.07s.gif';
import fGBeJnocaFBeXVXOvKlwxli from 'src/assets/day_15/frame_19_delay-0.07s.gif';
import ePgBQsfpCbUiGdUwXNtzGth from 'src/assets/day_15/frame_20_delay-0.06s.gif';
import feAGMzQbxwdNjIoGJTrWHgf from 'src/assets/day_15/frame_21_delay-0.07s.gif';
import coHykmoNlKoThFQCdJsVSxw from 'src/assets/day_15/frame_22_delay-0.07s.gif';
import dhmQEsfeYlhNEUIJYarzZkw from 'src/assets/day_15/frame_23_delay-0.06s.gif';
import crxjQeVJIsHuwJqnfCxqlEo from 'src/assets/day_15/frame_24_delay-0.07s.gif';
import fZfhdveylAiDuMIbtHDXWmR from 'src/assets/day_15/frame_25_delay-0.07s.gif';
import dnZMMcJbeIKIBGamwBZCIQv from 'src/assets/day_15/frame_26_delay-0.06s.gif';
import dzCeCDoaZXyBNkqcdiUIkix from 'src/assets/day_15/frame_27_delay-0.07s.gif';
import fKvNnfuXlMdvyTMdfzdfYfh from 'src/assets/day_15/frame_28_delay-0.07s.gif';
import DgYLaywmrkRYbLfSDjivpl from 'src/assets/day_15/frame_29_delay-0.06s.gif';
import dvXOIzZeKctlZlpRcuqnGfU from 'src/assets/day_15/frame_30_delay-0.06s.gif';

export default class Day15 extends Gift {
  public static hash = "cSgBdyDTqhDlDaZlrCLCOTU";
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
    loadImage(cHNaKkyyFqHRvqIfBKWMJZT),
    loadImage(dkAhZhiyaWmJdnEBtwkjvqN),
    loadImage(ceLILdljRwElwqSlpiCTCLL),
    loadImage(buowiGNmazAduhBfvJMckhU),
    loadImage(etXCQBdPUxlJYeoDEgJillg),
    loadImage(fTtyCidVgDwTiDtjKJYxGHa),
    loadImage(dRiJOqPoYPpwXwpoonENDby),
    loadImage(egkZfqbeHjHAbLUjjATeoEr),
    loadImage(evjtBJEmzAwUNfsbJTGYuRl),
    loadImage(cWNyBChJpwkIYKgOTtzdZKc),
    loadImage(buFBNXorpSFFQqrDOBQGHzH),
    loadImage(bcXymBnwpEYjWfZmjqhozxP),
    loadImage(fPpdEKUnvnQsjTNwfyvhtQC),
    loadImage(bsHXKSwBBTSYhyGpsMQRnlR),
    loadImage(bFdQgirOyuYxrhblacmasAR),
    loadImage(bKXMULSljvkBCLHtbIpdhda),
    loadImage(eUKKNWWpqDbMpehiPmVYGiH),
    loadImage(assvBzsCKWsxdHbCbfEsvim),
    loadImage(edXMlEsxLTjaaPRxWXBJrGP),
    loadImage(fGBeJnocaFBeXVXOvKlwxli),
    loadImage(ePgBQsfpCbUiGdUwXNtzGth),
    loadImage(feAGMzQbxwdNjIoGJTrWHgf),
    loadImage(coHykmoNlKoThFQCdJsVSxw),
    loadImage(dhmQEsfeYlhNEUIJYarzZkw),
    loadImage(crxjQeVJIsHuwJqnfCxqlEo),
    loadImage(fZfhdveylAiDuMIbtHDXWmR),
    loadImage(dnZMMcJbeIKIBGamwBZCIQv),
    loadImage(dzCeCDoaZXyBNkqcdiUIkix),
    loadImage(fKvNnfuXlMdvyTMdfzdfYfh),
    loadImage(DgYLaywmrkRYbLfSDjivpl),
    loadImage(dvXOIzZeKctlZlpRcuqnGfU),
  ];

  private static frames: Array<HTMLImageElement> = [];
  private static currentFrame: number = 0;

  private static fps = 1000 / 20;
  private static last = 0;

  public static async init() {
    if (Day15.frames.length === 0) {
      await Day15.loadFrames();
    }
  }

  private static async loadFrames() {
    Day15.frames = await Promise.all(Day15.framesPromises);
  }

  public static getFrame(): HTMLImageElement {
    const now = Date.now();
    const elapsed = now - Day15.last;

    if (elapsed < Day15.fps) return Day15.frames[Day15.currentFrame];

    Day15.last = now;
    Day15.currentFrame = (Day15.currentFrame + 1) % Day15.frames.length;

    return Day15.frames[Day15.currentFrame];
  }
}
