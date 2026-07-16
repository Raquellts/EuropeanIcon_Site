#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import PDFDocument from "pdfkit";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const GOLD = "#996d1c";
const DARK = "#1a1a2e";
const WHITE = "#FFFFFF";
const GRAY = "#4a4a4a";
const LIGHT_GOLD = "#f8f4ec";

function wrap(text, width, doc) {
  const words = text.split(" ");
  const lines = [];
  let line = "";
  for (const word of words) {
    const test = line ? line + " " + word : word;
    if (doc.widthOfString(test) > width) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

async function generateCV({
  slug,
  name,
  role,
  email,
  contact,
  instagram,
  description,
  areas = [],
}) {
  const outputPath = path.join(ROOT, "public", "cvs", `${slug}.pdf`);
  const photoPath = path.join(
    ROOT,
    "public",
    "images",
    "participantes",
    `${slug}.webp`
  );

  const doc = new PDFDocument({
    size: "A4",
    margins: { top: 0, bottom: 40, left: 0, right: 0 },
    info: {
      Title: `CV - ${name}`,
      Author: "App Juri",
    },
  });

  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);

  const pageWidth = doc.page.width;
  const margin = 50;
  const contentWidth = pageWidth - margin * 2;

  // ============ HEADER ============
  const headerHeight = 180;
  const headerGradient = doc.linearGradient(
    0,
    0,
    pageWidth,
    headerHeight,
    [
      { offset: 0, color: "#1a1a2e" },
      { offset: 0.5, color: "#16213e" },
      { offset: 1, color: "#0f3460" },
    ]
  );
  doc.rect(0, 0, pageWidth, headerHeight).fill(headerGradient);

  // Gold accent line at bottom of header
  doc
    .rect(0, headerHeight - 3, pageWidth, 3)
    .fill(GOLD);

  // Photo
  const photoSize = 100;
  const photoX = margin + 10;
  const photoY = (headerHeight - photoSize) / 2;

  let hasPhoto = false;
  if (fs.existsSync(photoPath)) {
    try {
      const imgBuffer = await sharp(photoPath)
        .resize(photoSize, photoSize, { fit: "cover" })
        .jpeg({ quality: 90 })
        .toBuffer();

      // Circular clip
      doc.save();
      doc.circle(photoX + photoSize / 2, photoY + photoSize / 2, photoSize / 2);
      doc.clip();
      doc.image(imgBuffer, photoX, photoY, {
        width: photoSize,
        height: photoSize,
      });
      doc.restore();

      // Gold border
      doc
        .circle(photoX + photoSize / 2, photoY + photoSize / 2, photoSize / 2)
        .lineWidth(3)
        .stroke(GOLD);

      hasPhoto = true;
    } catch {
      // fallback
    }
  }

  if (!hasPhoto) {
    doc
      .circle(photoX + photoSize / 2, photoY + photoSize / 2, photoSize / 2)
      .lineWidth(3)
      .stroke(GOLD)
      .fillOpacity(0.15)
      .fill(GOLD)
      .fillOpacity(1);

    // Draw initials
    const initials = name
      .split(" ")
      .filter((w) => w.length > 2)
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();
    doc
      .font("Helvetica-Bold")
      .fontSize(28)
      .fillColor(GOLD)
      .text(initials, photoX + photoSize / 2, photoY + photoSize / 2 - 14, {
        align: "center",
        width: 0,
      });
  }

  // Name and info
  const textX = photoX + photoSize + 30;
  let textY = photoY + 8;

  doc.font("Helvetica-Bold").fontSize(22).fillColor(WHITE);
  doc.text(name, textX, textY);

  textY += 30;
  if (role) {
    doc.font("Helvetica").fontSize(13).fillColor(GOLD);
    doc.text(role, textX, textY);
    textY += 22;
  }

  doc.font("Helvetica").fontSize(10).fillColor("rgba(255,255,255,0.8)");
  const contactParts = [];
  if (email) contactParts.push(`\u2709 ${email}`);
  if (contact) contactParts.push(`\u260E ${contact}`);
  if (instagram) contactParts.push(`\u25C9 @${instagram.replace("@", "")}`);
  doc.text(contactParts.join("   |   "), textX, textY);

  // ============ BODY ============
  let y = headerHeight + 30;

  // ABOUT section
  if (description) {
    doc.font("Helvetica-Bold").fontSize(11).fillColor(GOLD);
    doc.text("SOBRE", margin, y);
    y += 18;

    doc
      .rect(margin, y - 2, contentWidth, 2)
      .fillColor(LIGHT_GOLD)
      .fill();

    y += 10;

    doc.font("Helvetica").fontSize(10).fillColor(GRAY);
    const descLines = wrap(description, contentWidth, doc);
    for (const line of descLines) {
      doc.text(line, margin, y);
      y += 16;
    }
    y += 8;
  }

  // AREAS section
  if (areas && areas.length > 0) {
    doc.font("Helvetica-Bold").fontSize(11).fillColor(GOLD);
    doc.text("\u00C1REAS DE ATUA\u00C7\u00C3O", margin, y);
    y += 18;

    doc
      .rect(margin, y - 2, contentWidth, 2)
      .fillColor(LIGHT_GOLD)
      .fill();

    y += 12;

    const chipSize = 10;
    for (const area of areas) {
      const textWidth = doc.widthOfString(area) + 28;
      if (textX + textWidth > pageWidth - margin) {
        // doesn't fit, would need new line logic - simple approach
      }

      // Chip background
      const chipY = y + 2;
      doc
        .roundedRect(margin, chipY, doc.widthOfString(area) + 24, 22, 12)
        .fillColor(LIGHT_GOLD)
        .fill()
        .roundedRect(margin, chipY, doc.widthOfString(area) + 24, 22, 12)
        .lineWidth(1)
        .strokeColor("#e8dcc8")
        .stroke();

      // Chip text
      doc
        .font("Helvetica")
        .fontSize(10)
        .fillColor("#8B6914")
        .text(area, margin + 12, chipY + 4);

      y += 30;
    }
  }

  // ============ FOOTER ============
  const footerY = doc.page.height - 30;
  doc
    .font("Helvetica")
    .fontSize(8)
    .fillColor("#aaa")
    .text("Gerado por App Juri", margin, footerY, { align: "center" });

  doc.end();

  await new Promise((resolve) => stream.on("finish", resolve));
  console.log(`CV generated: ${outputPath}`);
  return outputPath;
}

// ============ CLI ============
function parseArgs() {
  const args = {};
  for (const arg of process.argv.slice(2)) {
    if (arg.startsWith("--")) {
      const eqIndex = arg.indexOf("=");
      if (eqIndex > -1) {
        const key = arg.slice(2, eqIndex);
        const val = arg.slice(eqIndex + 1);
        args[key] = val;
      } else {
        args[arg.slice(2)] = true;
      }
    }
  }
  return args;
}

async function main() {
  const args = parseArgs();

  if (args.help || args.h) {
    console.log(`
Usage:
  node scripts/generate-cv.mjs --slug=<slug> [options]

Options:
  --slug         (required) Participant slug (e.g., "catarina")
  --name         Full name
  --role         Professional title/role
  --email        Email address
  --contact      Phone number
  --instagram    Instagram handle (without @)
  --description  Professional bio/description
  --areas        Comma-separated practice areas

  --from-json    Path to a JSON file with participant data
  --all          Generate CVs for ALL participants from scripts/participants.json

Example:
  node scripts/generate-cv.mjs --slug=catarina --name="Catarina Zuccaro"
`);
    return;
  }

  let data;

  if (args["from-json"]) {
    const jsonPath = path.resolve(args["from-json"]);
    const raw = fs.readFileSync(jsonPath, "utf-8");
    const all = JSON.parse(raw);
    if (args.slug) {
      data = all.find((p) => p.slug === args.slug);
      if (!data) {
        console.error(`Slug "${args.slug}" not found in ${jsonPath}`);
        process.exit(1);
      }
    } else {
      // Generate for all
      for (const p of all) {
        if (p.skipCv) continue;
        try {
          await generateCV(p);
        } catch (err) {
          console.error(`Failed for ${p.slug}: ${err.message}`);
        }
      }
      console.log("All CVs generated!");
      return;
    }
  } else if (args["all"]) {
    const jsonPath = path.join(__dirname, "participants.json");
    if (!fs.existsSync(jsonPath)) {
      console.error("scripts/participants.json not found. Create it first.");
      process.exit(1);
    }
    const raw = fs.readFileSync(jsonPath, "utf-8");
    const all = JSON.parse(raw);
    for (const p of all) {
      if (p.skipCv) continue;
      try {
        await generateCV(p);
      } catch (err) {
        console.error(`Failed for ${p.slug}: ${err.message}`);
      }
    }
    console.log("All CVs generated!");
    return;
  } else {
    data = {
      slug: args.slug,
      name: args.name || args.slug,
      role: args.role || "",
      email: args.email || "",
      contact: args.contact || "",
      instagram: args.instagram || "",
      description: args.description || "",
      areas: args.areas ? args.areas.split(",").map((a) => a.trim()) : [],
    };
  }

  if (!data.slug) {
    console.error("--slug is required");
    process.exit(1);
  }

  await generateCV(data);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
