const path = require('path');
const fs = require('fs');
const baseX = require('base-x');
const md5 = require('md5');
const Jimp = require('jimp');

const Spritesmith = require('spritesmith');
const canvassmith = require('canvassmith');

const hex = baseX("0123456789abcdef");
const letters = baseX("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");

module.exports = {
  helpers: {
    generateSpriteImport: (name, imagesPath) => {
      const images = fs.readdirSync(imagesPath);
      const imagesPaths = images.map((i) => path.join(imagesPath, i));

      const props = { src: imagesPaths, engine: canvassmith };

      Spritesmith.run(props, (err, result) => {
        if (err) {
          throw err;
        }

        const getFrame = (name) => parseInt((/frame_(\d+)/gm).exec(name)[1], 10);

        const files = Object.entries(result.coordinates);
        const framesRaw = files.map(([key, value]) => [getFrame(key), value]);
        const framesRawSorted = framesRaw.sort(([keyA], [keyB]) => keyA - keyB);
        const framesSorted = framesRawSorted.map(([, value]) => value);

        const spriteJpgPath = path.join(__dirname, 'src/days', name, 'sprites.jpg');
        const spriteDataPath = path.join(__dirname, 'src/days', name, 'sprites_data.json');

        fs.writeFileSync(spriteDataPath, JSON.stringify(framesSorted, null, 2));

        Jimp.read(result.image, (err, image) => {
          if (err) throw err;

          image
            .quality(60)
            .write(spriteJpgPath);
        });
      });

      return (
        `import sprites from './sprites.jpg';\n` +
        `import spritesData from './sprites_data.json';`
      );
    },

    hash: (stringValue) => {
      const hashHex = md5(stringValue);
      const hashBytes = hex.decode(hashHex);
      const hashLetters = letters.encode(hashBytes).padEnd(23, "0");
      return hashLetters;
    },
  }
}
