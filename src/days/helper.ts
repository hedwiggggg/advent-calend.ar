export const loadImage = (
  (path: string) => (
    new Promise<HTMLImageElement>(async (resolve) => {
      const image = new Image();

      image.onload = () => resolve(image);
      image.src = path;
    })
  )
);