import Bottleneck from 'bottleneck';

const limiter = new Bottleneck({
  maxConcurrent: 5,
});

const $loadImage = (path: string) => (
  new Promise<HTMLImageElement>((resolve) => {
    const image = new Image();

    image.onload = () => resolve(image);
    image.src = path;
  })
);

export const loadImage = limiter.wrap($loadImage);
