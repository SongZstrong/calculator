const fs = require('fs');
const path = require('path');

// 读取 public/images/blog 目录下的所有图片
const imagesDir = path.join(__dirname, 'public/images/blog');
const images = fs.readdirSync(imagesDir).filter(file => file.endsWith('.jpg'));

console.log('Converting images to base64...');

const base64Images = {};

images.forEach(imageFile => {
  const imagePath = path.join(imagesDir, imageFile);
  const imageBuffer = fs.readFileSync(imagePath);
  const base64 = imageBuffer.toString('base64');
  const mimeType = 'image/jpeg';
  const dataUrl = `data:${mimeType};base64,${base64}`;
  base64Images[imageFile] = dataUrl;
  console.log(`Converted ${imageFile}`);
});

// 生成 JavaScript 对象字符串
const jsObject = `const base64Images = ${JSON.stringify(base64Images, null, 2)};`;

console.log('\nBase64 images generated successfully!');
console.log('Copy the following code to your blog page:');
console.log('\n' + '='.repeat(50));
console.log(jsObject);
console.log('='.repeat(50)); 