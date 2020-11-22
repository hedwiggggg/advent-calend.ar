const path = require('path');
const fs = require('fs');
const baseX = require('base-x');
const md5 = require('md5');

const hex = baseX("0123456789abcdef");
const letters = baseX("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");

module.exports = {
  helpers: {
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
