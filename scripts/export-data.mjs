#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const tsPath = path.join(ROOT, "app", "_shared", "data", "participants.ts");
const tsContent = fs.readFileSync(tsPath, "utf-8");

const startMarker = "export const participants: Participant[] = [";
const startIdx = tsContent.indexOf(startMarker);
if (startIdx === -1) {
  console.error("Could not find participants array");
  process.exit(1);
}

// Find matching bracket, properly handling strings
let inStr = false;
let strChar = "";
let depth = 1;
let endArr = -1;

for (let i = startIdx + startMarker.length; i < tsContent.length; i++) {
  const ch = tsContent[i];
  const prev = i > 0 ? tsContent[i - 1] : "";

  if (inStr) {
    if (ch === strChar && prev !== "\\") {
      inStr = false;
    }
    continue;
  }

  if (ch === '"') {
    inStr = true;
    strChar = ch;
    continue;
  }

  if (ch === "[") {
    depth++;
  } else if (ch === "]") {
    depth--;
    if (depth === 0) {
      endArr = i;
      break;
    }
  }
}

if (endArr === -1) {
  console.error("Could not find matching closing bracket");
  process.exit(1);
}

let raw = tsContent.slice(startIdx + startMarker.length, endArr);

// Transform to valid JSON by quoting property names.
// We process character by character to handle strings vs code.
let result = "";
let i = 0;
while (i < raw.length) {
  const ch = raw[i];

  // Inside a string, just copy until the closing quote
  if (ch === '"') {
    let j = i + 1;
    while (j < raw.length) {
      if (raw[j] === "\\") {
        j += 2;
        continue;
      }
      if (raw[j] === '"') break;
      j++;
    }
    result += raw.slice(i, j + 1);
    i = j + 1;
    continue;
  }

  // Skip single-quoted strings (convert to double-quoted)
  if (ch === "'") {
    let j = i + 1;
    while (j < raw.length) {
      if (raw[j] === "\\") { j += 2; continue; }
      if (raw[j] === "'") break;
      j++;
    }
    result += '"' + raw.slice(i + 1, j).replace(/"/g, '\\"') + '"';
    i = j + 1;
    continue;
  }

  // Skip single-line comments (//...) but NOT inside URLs (https://)
  if (ch === "/" && raw[i + 1] === "/") {
    // Check we're not inside a URL by looking back for ://
    // Simple heuristic: skip // only if preceded by whitespace or start of line
    const prev = i > 0 ? raw[i - 1] : "\n";
    if (/\s/.test(prev) || prev === "," || prev === "{" || prev === ";") {
      // This is a code comment - skip to end of line
      while (i < raw.length && raw[i] !== "\n") i++;
      continue;
    }
  }
  // Detect and quote property names: key:
  // A property name is: after { or , (with optional whitespace),
  // then identifier chars, then : (but not :: or :=)
  if (ch === "{" || ch === ",") {
    i++;

    // Skip whitespace
    let ws = "";
    while (i < raw.length && /\s/.test(raw[i])) {
      ws += raw[i];
      i++;
    }

    // Check if followed by } or ] (trailing comma)
    if (ch === "," && (raw[i] === "}" || raw[i] === "]")) {
      // Skip the comma entirely (trailing comma)
      continue;
    }

    result += ch;
    result += ws;

    // Check if followed by an identifier (property name)
    let j = i;
    if (j < raw.length && /[a-zA-Z_$]/.test(raw[j])) {
      j++;
      while (j < raw.length && /\w/.test(raw[j])) {
        j++;
      }
    }

    // After identifier, check for colon (but not :: or :=)
    let k = j;
    while (k < raw.length && /\s/.test(raw[k])) k++;
    if (k < raw.length && raw[k] === ":" && raw[k + 1] !== ":" && raw[k + 1] !== "=") {
      // This is a property name - quote it
      result += '"' + raw.slice(i, j) + '":';
      // Skip whitespace after :
      i = k + 1;
      while (i < raw.length && /\s/.test(raw[i])) {
        i++;
      }
    }
    continue;
  }

  result += ch;
  i++;
}

// Remove trailing comma before wrapping in array
const trimmed = result.replace(/,\s*$/, "");
const jsonStr = "[" + trimmed + "]";

let participants;
try {
  participants = JSON.parse(jsonStr);
} catch (e) {
  console.error("Failed to parse:", e.message);
  fs.writeFileSync("/tmp/participants_debug.txt", jsonStr);
  console.error("Debug written to /tmp/participants_debug.txt");
  process.exit(1);
}

const cvData = participants.map((p) => ({
  slug: p.slug,
  name: p.name,
  role: p.role || "",
  email: p.email || "",
  contact: p.contact || "",
  instagram: p.social?.instagram
    ? p.social.instagram
        .replace("https://www.instagram.com/", "")
        .replace("/", "")
    : "",
  description: p.description || "",
  areas: p.areas || [],
}));

const outPath = path.join(__dirname, "participants.json");
fs.writeFileSync(outPath, JSON.stringify(cvData, null, 2));
console.log(`Exported ${cvData.length} participants to ${outPath}`);
