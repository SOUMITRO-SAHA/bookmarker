import fs from "fs";
import glob from "glob";

const files: string[] = glob.sync("out/**/*.html");
files.forEach((file: string) => {
  const content: string = fs.readFileSync(file, "utf-8");
  const modifiedContent: string = content.replace(/\/_next/g, "./next");
  fs.writeFileSync(file, modifiedContent, "utf-8");
});

const sourcePath: string = "out/_next";
const destinationPath: string = "out/next";

fs.rename(sourcePath, destinationPath, (err) => {
  if (err) {
    console.error('Failed to rename "_next" directory to "next".', err);
  } else {
    console.log('Renamed "_next" directory to "next" successfully.');
  }
});
