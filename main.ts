import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "The senator who wants to license every AI model in America still thinks 'Save as PDF' is a department in his office.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
