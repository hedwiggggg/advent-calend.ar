const path = require('path');
const fs = require('fs');
const baseX = require('base-x');
const md5 = require('md5');
const Jimp = require('jimp');

const hex = baseX("0123456789abcdef");
const letters = baseX("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");

const hash = (value) => {
  const hashHex = md5(value);
  const hashBytes = hex.decode(hashHex);
  const hashLetters = letters.encode(hashBytes).padEnd(23, "0");

  return hashLetters;
}

const getFrames = async (name, imagesPath) => {
  const images = fs.readdirSync(imagesPath);
  const $$imagesPaths = images.map((i) => path.join(imagesPath, i));
  const $imagesPaths = [];
  const $framesPromises = [];

  for (let i = 0; i < $$imagesPaths.length; i++) {
    const imagePath = $$imagesPaths[i];

    const imageNum = `${i}`.padStart(4, `0`);
    const framePath = path.join('src/days', name, 'frames', `frame_${imageNum}.jpg`);

    $framesPromises.push(`loadImage(${hash(imageNum)}),`);
    $imagesPaths.push(new Promise((resolve) => {
      Jimp.read(imagePath, (err, image) => {
        if (err) throw err;

        image.resize(256, 256, () => {
          image.quality(60, () => {
            image.write(framePath, () => {
              resolve(`import ${hash(imageNum)} from './frames/frame_${imageNum}.jpg';`);
            });
          });
        });
      });
    }));
  }

  const imagesPaths = await Promise.all($imagesPaths);
  const framesImport = imagesPaths.join('\n');
  const framesPromises = $framesPromises.join('\n    ');

  const hashedName = hash(name);

  return { hashedName, framesImport, framesPromises };
}

const getContent = (dev) => {
  const contentImport = typeof dev !== 'undefined'
    ? (
      `import marked from 'marked';\n` +
      `import twemoji from 'twemoji';\n` +
      `import contentMdUrl from './content.md';`
    )
    : `import preval from 'preval.macro';`;

  const $contentFunction = typeof dev !== 'undefined'
  ? [
    `async () => {`,
  `    const contentRes = await fetch(contentMdUrl);`,
  `    const content = await contentRes.text();`,
  `    const _html = marked(content);`,
  `    const html = twemoji.parse(_html);`,
  ``,
  `    return html;`,
  `  };`,
  ]
  : [
    `async () => preval\``,
  `    const marked = require('marked');`,
  `    const twemoji = require('twemoji');`,
  `    const path = require('path');`,
  `    const fs = require('fs');`,
  ``,
  `    const markdownPath = path.join(__dirname, 'content.md');`,
  `    const markdown = fs.readFileSync(markdownPath, 'utf-8')`,
  ``,
  `    const _html = marked(markdown);`,
  `    const html = twemoji.parse(_html);`,
  ``,
  `    module.exports = html;`,
  `  \`;`,
  ];

  const contentFunction = $contentFunction.join('\n');

  return { contentImport, contentFunction };
}

module.exports = {
  params: async ({ args }) => {
    const { name, imagesPath, dev } = args;

    const frames = await getFrames(name, imagesPath);
    const content = getContent(dev);

    return { ...frames, ...content };
  }
};
