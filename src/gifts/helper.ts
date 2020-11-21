export const loadImage = (
  (path: string) => (
    new Promise<HTMLImageElement>((resolve) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.src = path;
    })
  )
);