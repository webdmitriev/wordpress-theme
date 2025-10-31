// build-js.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const srcDir = path.join(__dirname, "development/js");
const distDir = path.join(__dirname, "assets/css-js");

if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

// читаем все JS кроме jQuery
const files = fs
  .readdirSync(srcDir)
  .filter((f) => f.endsWith(".js") && f !== "jquery-3.6.1.min.js");

let output = "";

// объединяем JS файлы
for (const file of files) {
  const content = fs.readFileSync(path.join(srcDir, file), "utf8");
  output += `\n/* ${file} */\n${content}\n`;
}

// записываем main.js
fs.writeFileSync(path.join(distDir, "app.js"), output);

// копируем jquery (если не существует или изменился)
const jquerySrc = path.join(srcDir, "jquery-3.6.1.min.js");
const jqueryDest = path.join(distDir, "jquery-3.6.1.min.js");

fs.copyFileSync(jquerySrc, jqueryDest);

console.log("✅ JS успешно собран и скопирован в assets/css-js/");
