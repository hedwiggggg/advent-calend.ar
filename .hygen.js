const path = require('path');
const fs = require('fs');
const baseX = require('base-x');
const md5 = require('md5');

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

        fs.writeFileSync(path.join(__dirname, 'src/days', name, 'sprites.png'), result.image);
        fs.writeFileSync(path.join(__dirname, 'src/days', name, 'sprites_data.json'), JSON.stringify(framesSorted, null, 2));
      });

      return (
        `import sprites from './sprites.png';\n` +
        `import spritesData from './sprites_data.json';`
      );
    },

    imageImportsFromPath: (imagesPath) => {
      const images = fs.readdirSync(imagesPath);
      const imagesPaths = images.map((i) => path.join(imagesPath, i));
      const imageImports = imagesPaths.map((path) => `import('${path}'),`);

      return imageImports.join('\n    ');
    },

    hash: (stringValue) => {
      const hashHex = md5(stringValue);
      const hashBytes = hex.decode(hashHex);
      const hashLetters = letters.encode(hashBytes).padEnd(23, "0");
      return hashLetters;
    },

    importsFromPath: (imagesPath) => {
      const images = fs.readdirSync(imagesPath);
      const imagesPaths = images.map((i) => path.join(imagesPath, i));
      const imageImports = imagesPaths.map(
        (path) => {
          const hashHex = md5(path);
          const hashBytes = hex.decode(hashHex);
          const hashLetters = letters.encode(hashBytes).padEnd(23, "0");

          return `import ${hashLetters} from '${path}';`;
        }
      );

      return imageImports.join('\n');
    },

    imagesFromPath: (imagesPath) => {
      const images = fs.readdirSync(imagesPath);
      const imagesPaths = images.map((i) => path.join(imagesPath, i));
      const imageImports = imagesPaths.map(
        (path) => {
          const hashHex = md5(path);
          const hashBytes = hex.decode(hashHex);
          const hashLetters = letters.encode(hashBytes).padEnd(23, "0");

          return `loadImage(${hashLetters}),`;
        }
      );

      return imageImports.join('\n    ');
    },
  }
}
