// browser-sync.js
import browserSync from "browser-sync";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const bs = browserSync.create();

// Настройки для твоей локальной WP-темы
bs.init({
  proxy: "http://localhost:8888/github", // ← поменяй на свой локальный домен (например: http://wp.local)
  files: [
    "assets/css-js/*.css",
    "assets/css-js/*.js",
    "build/**/*.js",
    "**/*.php"
  ],
  notify: false,
  open: "external",
  reloadDelay: 300
});
