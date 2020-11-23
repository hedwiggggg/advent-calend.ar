---
to: src/days/<%= name %>/index.ts
sh: "cat > /dev/null && yarn qrcode -w 1024 -e L -o src/days/<%= name %>/qr-code.png \"<%= h.hash(name) %>\""
---
import { Day } from "../types";
import { loadImage } from "../helper";

import qrCode from './qr-code.png';

<%- h.generateSpriteImport(name, imagesPath) %>

<%if (typeof dev !== 'undefined') { %>
import marked from 'marked';
import twemoji from 'twemoji';
import contentMdUrl from './content.md';
<% } else { %>
import preval from 'preval.macro';
<% } %>

export default class <%= Name %> extends Day {
  public static __hash = "<%= h.hash(name) %>";
  public static __name = "<%= name %>";

  public static __qrCode = qrCode;

  <%if (typeof dev !== 'undefined') { %>
  public static __content = async () => {
    const contentRes = await fetch(contentMdUrl);
    const content = await contentRes.text();
    const _html = marked(content);
    const html = twemoji.parse(_html);

    return html;
  };
  <% } else { %>
  public static __content = async () => preval`
    const marked = require('marked');
    const twemoji = require('twemoji');
    const path = require('path');
    const fs = require('fs');

    const markdownPath = path.join(__dirname, 'content.md');
    const markdown = fs.readFileSync(markdownPath, 'utf-8')

    const _html = marked(markdown);
    const html = twemoji.parse(_html);

    module.exports = html;
  `;
  <% } %>

  private static framesSpritePromise = loadImage(sprites);
  private static framesSprite: HTMLImageElement;
  private static framesCanvas = document.createElement('canvas');
  private static framesContext = <%= name %>.framesCanvas.getContext('2d');

  private static currentFrame: number = 0;

  private static fps = 1000 / 20;
  private static last = 0;

  public static async init() {
    if (<%= name %>.framesSprite === undefined) {
      await <%= name %>.loadFrames();
    }
  }

  private static async loadFrames() {
    <%= name %>.framesSprite = await <%= name %>.framesSpritePromise;
  }

  public static getFrame(): HTMLCanvasElement {
    if (<%= name %>.framesContext === null) throw new Error("<%= name %>.framesContext === null");
    
    const now = Date.now();
    const elapsed = now - <%= name %>.last;

    if (elapsed >= <%= name %>.fps) {
      <%= name %>.last = now;
      <%= name %>.currentFrame = (<%= name %>.currentFrame + 1) % spritesData.length;

      const { x, y, width, height } = spritesData[<%= name %>.currentFrame];

      <%= name %>.framesCanvas.width = width;
      <%= name %>.framesCanvas.height = height;

      <%= name %>.framesContext.drawImage(
        <%= name %>.framesSprite,
        x, y, width, height,
        0, 0, width, height,
      )
    }

    return <%= name %>.framesCanvas;
  }
}
