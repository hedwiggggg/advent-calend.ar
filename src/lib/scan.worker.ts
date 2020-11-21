import { scanImageData } from 'zbar.wasm';

export async function scan(imageData: ImageData) {
  const symbols = await scanImageData(imageData);
  return symbols;
}
