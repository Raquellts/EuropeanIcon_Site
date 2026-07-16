import sharp from "sharp";
import fs from "fs";
import path from "path";

const MAX_WIDTH = 1200;
const QUALITY = 80;

const conversions = [
  {
    source: "/mnt/e/INSTITUTO/direito fotos",
    dest: "public/images/masters/direito-penal-economico",
    prefix: "galeria",
  },
  {
    source: "/mnt/e/INSTITUTO/hof fotos",
    dest: "public/images/masters/harmonizacao-orofacial",
    prefix: "galeria",
  },
];

for (const { source, dest, prefix } of conversions) {
  const files = fs
    .readdirSync(source)
    .filter((f) => /\.(jpg|jpeg|png)$/i.test(f))
    .sort();

  console.log(`\n📂 ${path.basename(source)}: ${files.length} fotos`);

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const srcPath = path.join(source, file);
    const outName = `${prefix}-${String(i + 1).padStart(2, "0")}.webp`;
    const outPath = path.join(dest, outName);

    try {
      const metadata = await sharp(srcPath).metadata();
      const resizeOpts =
        metadata.width > MAX_WIDTH ? { width: MAX_WIDTH } : {};

      await sharp(srcPath).resize(resizeOpts).webp({ quality: QUALITY }).toFile(outPath);

      const srcSize = fs.statSync(srcPath).size;
      const outSize = fs.statSync(outPath).size;
      const reduction = ((1 - outSize / srcSize) * 100).toFixed(0);

      console.log(
        `  ✅ ${file} → ${outName} (${(srcSize / 1024).toFixed(0)}KB → ${(outSize / 1024).toFixed(0)}KB, -${reduction}%)`
      );
    } catch (err) {
      console.error(`  ❌ ${file}: ${err.message}`);
    }
  }
}

console.log("\n✨ Conversão concluída!");
