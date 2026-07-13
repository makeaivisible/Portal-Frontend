import { readFile } from "node:fs/promises";

const requiredFiles = ["index.html", "styles.css", "src/app.js"];

for (const path of requiredFiles) {
  const source = await readFile(path, "utf8");
  if (!source.trim()) {
    throw new Error(`${path} is empty`);
  }
}

const html = await readFile("index.html", "utf8");
for (const needle of ["consent", "file-input", "submit-button", "makeaivisible.org", "connector"]) {
  if (!html.includes(needle)) {
    throw new Error(`index.html is missing ${needle}`);
  }
}

const script = await readFile("src/app.js", "utf8");
for (const needle of ["supportedExtensions", "raw_file_persisted", "final_mvp_direction", "addEventListener"]) {
  if (!script.includes(needle)) {
    throw new Error(`src/app.js is missing ${needle}`);
  }
}

console.log("Portal prototype validation passed.");
