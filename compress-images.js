// compress-images.js
import fs from "fs-extra";
import path from "path";
import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";
import imageminSvgo from "imagemin-svgo";
import chokidar from "chokidar";

const inputDir = "development/img";
const outputDir = "assets/img";

// Функция для сжатия одного файла
async function compressImage(filePath) {
  const relativePath = path.relative(inputDir, filePath);
  const outputPath = path.join(outputDir, relativePath);

  // Создаём целевую директорию, если её нет
  await fs.ensureDir(path.dirname(outputPath));

  // Сжимаем
  const files = await imagemin([filePath], {
    destination: path.dirname(outputPath),
    plugins: [
      imageminMozjpeg({ quality: 80 }),
      imageminPngquant({ quality: [0.7, 0.9] }),
      imageminSvgo()
    ]
  });

  if (files.length > 0) {
    console.log(`🖼️  Optimized: ${relativePath}`);
  }
}

// Инициализация наблюдения
function watchImages() {
  console.log("👀 Watching for new or changed images...");
  chokidar
    .watch(inputDir, { ignoreInitial: false })
    .on("add", compressImage)
    .on("change", compressImage);
}

watchImages();
