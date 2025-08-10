import fs from "fs";
import path from "path";

const key = fs.readFileSync(
  path.resolve(import.meta.dirname, "./serviceAccountKey.json"),
  "utf8"
);
const base64 = Buffer.from(key).toString("base64");

console.log(base64);
