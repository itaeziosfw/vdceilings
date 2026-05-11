const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'src/assets/images');
const outputDir = path.join(__dirname, 'src/assets/images');

const files = fs.readdirSync(inputDir).filter(f => f.match(/\.(jpg|jpeg|png)$/i));

(async () => {
  for (const file of files) {
    const input = path.join(inputDir, file);
    const output = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    await sharp(input)
      .resize({ width: 900, withoutEnlargement: true })
      .webp({ quality: 75 })
      .toFile(output);
    console.log(`Converted: ${file} -> ${path.basename(output)}`);
  }
  console.log('Done!');
})();
