---
to: src/days/<%= name %>/index.ts
sh: "cat > /dev/null && yarn qrcode -w 1024 -e L -o src/days/<%= name %>/qr-code.png \"<%= hashedName %>\""
---
import { Day } from "../types";
import { loadImage } from "../helper";

import qrCode from './qr-code.png';

<%- framesImport %>

<%- contentImport %>

export default class <%= Name %> extends Day {
  public static __hash = "<%= hashedName %>";
  public static __name = "<%= name %>";

  public static __qrCode = qrCode;

  public static framesPromises = [
    <%- framesPromises %>
  ];

  public static __content = <%- contentFunction %>

  private static frames: HTMLImageElement[];
  private static currentFrame: number = 0;

  private static fps = 1000 / 20;
  private static last = 0;

  public static async init() {
    if (<%= name %>.frames === undefined) {
      await <%= name %>.loadFrames();
    }
  }

  private static async loadFrames() {
    <%= name %>.frames = await Promise.all(<%= name %>.framesPromises);
  }

  public static getFrame() {    
    const now = Date.now();
    const elapsed = now - <%= name %>.last;

    if (elapsed >= <%= name %>.fps) {
      <%= name %>.last = now;
      <%= name %>.currentFrame = (<%= name %>.currentFrame + 1) % <%= name %>.frames.length;
    }

    return <%= name %>.frames[<%= name %>.currentFrame];
  }
}
