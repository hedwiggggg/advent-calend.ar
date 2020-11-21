
export type FitObject = { w: number; h: number; x: number; y: number }
type Fit = (dw: number, dh: number, sw: number, sh: number) => FitObject;

const cache = new Map<string, number>();

let cf_childRatio: number;
let cf_parentRatio: number;

let cf_width: number;
let cf_height: number;

let cf_x: number;
let cf_y: number;

export const coverFit: Fit = (
  (dw, dh, sw, sh) => {
    cf_childRatio = (
      cache.get(`${dw}/${dh}`)
        ?? cache.set(`${dw}/${dh}`, dw / dh).get(`${dw}/${dh}`)
        ?? 0
    );

    cf_parentRatio = (
      cache.get(`${sw}/${sh}`)
        ?? cache.set(`${sw}/${sh}`, sw / sh).get(`${sw}/${sh}`)
        ?? 0
    );
  
    cf_width = sw;
    cf_height = sh;
  
    if (cf_childRatio < cf_parentRatio) {
      cf_height = (
        cache.get(`${cf_width}/${cf_childRatio}`)
          ?? cache.set(`${cf_width}/${cf_childRatio}`, cf_width / cf_childRatio).get(`${cf_width}/${cf_childRatio}`)
          ?? 0
      );
    } else {
      cf_width = (
        cache.get(`${cf_height}*${cf_childRatio}`)
          ?? cache.set(`${cf_height}*${cf_childRatio}`, cf_height * cf_childRatio).get(`${cf_height}*${cf_childRatio}`)
          ?? 0
      );
    }

    cf_x = (
      cache.get(`${sw}-${cf_width}/2`)
        ?? cache.set(`${sw}-${cf_width}/2`, (sw - cf_width) / 2).get(`${sw}-${cf_width}/2`)
        ?? 0
    );

    cf_y = (
      cache.get(`${sh}-${cf_height}/2`)
        ?? cache.set(`${sh}-${cf_height}/2`, (sh - cf_height) / 2).get(`${sh}-${cf_height}/2`)
        ?? 0
    );    
  
    return {
      w: cf_width,
      h: cf_height,
      x: cf_x,
      y: cf_y,
    };
  }
);

type RRProps = { x: number; y: number; w: number; h: number; r: number }
type RoundedRectangle = (ctx: CanvasRenderingContext2D, props: RRProps) => void;

const rr_halfRadians = (2 * Math.PI) / 2;
const rr_quarterRadians = (2 * Math.PI) / 4;  

export const roundedRectangle: RoundedRectangle = (
  (ctx: CanvasRenderingContext2D, { x, y, w, h, r }) => {    
    ctx.arc(r + x, r + y, r, -rr_quarterRadians, rr_halfRadians, true);
    ctx.lineTo(x, y + h - r);
    ctx.arc(r + x, h - r + y, r, rr_halfRadians, rr_quarterRadians, true);
    ctx.lineTo(x + w - r, y + h);
    ctx.arc(x + w - r, y + h - r, r, rr_quarterRadians, 0, true);
    ctx.lineTo(x + w, y + r);
    ctx.arc(x + w - r, y + r, r, 0, -rr_quarterRadians, true);
    ctx.lineTo(x + r, y);
  }
)
