---
to: src/days/<%= name %>/index.ts
sh: "cat > /dev/null && yarn qrcode -w 1024 -e L -o src/days/<%= name %>/qr-code.png \"<%= h.hash(name) %>\""
---
import preval from 'preval.macro';

import { Day } from "../types";
import { loadImage } from "../helper";

import qrCode from './qr-code.png';

<%- h.importsFromPath(imagesPath) %>

export default class <%= Name %> extends Day {
  public static hash = "<%= h.hash(name) %>";
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
    <%- h.imagesFromPath(imagesPath) %>
  ];

  private static frames: Array<HTMLImageElement> = [];
  private static currentFrame: number = 0;

  private static fps = <%= fps %>;
  private static last = 0;

  public static async init() {
    if (<%= name %>.frames.length === 0) {
      await <%= name %>.loadFrames();
    }
  }

  private static async loadFrames() {
    <%= name %>.frames = await Promise.all(<%= name %>.framesPromises);
  }

  public static getFrame(): HTMLImageElement {
    const now = Date.now();
    const elapsed = now - <%= name %>.last;

    if (elapsed < <%= name %>.fps) return <%= name %>.frames[<%= name %>.currentFrame];

    <%= name %>.last = now;
    <%= name %>.currentFrame = (<%= name %>.currentFrame + 1) % <%= name %>.frames.length;

    return <%= name %>.frames[<%= name %>.currentFrame];
  }
}
