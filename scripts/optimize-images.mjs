/**
 * Optimiza imágenes del sitio usando sharp (ya disponible via Astro)
 * - Redimensiona WebP de equipos a max 800px ancho
 * - Convierte posters de video PNG a WebP
 * - Convierte logo.png a WebP
 *
 * Ejecutar: node scripts/optimize-images.mjs
 */
import sharp from 'sharp';
import { readdirSync, statSync, mkdirSync, existsSync, readFileSync, writeFileSync, unlinkSync } from 'fs';
import { join, extname, basename } from 'path';

const PUBLIC = 'public';
const MAX_WIDTH = 800;
const WEBP_QUALITY = 82;

async function optimizeEquipos() {
  const dir = join(PUBLIC, 'equipos');
  const outDir = join(PUBLIC, 'equipos-opt');
  if (!existsSync(dir)) { console.log('No equipos dir found, skipping'); return; }
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

  const files = readdirSync(dir).filter(f => extname(f).toLowerCase() === '.webp');

  for (const file of files) {
    const filepath = join(dir, file);
    const outpath = join(outDir, file);
    const sizeBefore = statSync(filepath).size;

    await sharp(filepath)
      .resize(MAX_WIDTH, null, { withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY })
      .toFile(outpath);

    const sizeAfter = statSync(outpath).size;
    const saved = ((1 - sizeAfter / sizeBefore) * 100).toFixed(1);
    console.log(`${file}: ${(sizeBefore/1024).toFixed(0)}KB -> ${(sizeAfter/1024).toFixed(0)}KB (${saved}% saved)`);
  }
  console.log(`\nOptimized files in ${outDir} — move them to ${dir} manually if needed.`);
}

async function convertPostersToWebp() {
  const dir = join(PUBLIC, 'videos', 'posters');
  if (!existsSync(dir)) { console.log('No posters dir found, skipping'); return; }

  const files = readdirSync(dir).filter(f => extname(f).toLowerCase() === '.png');

  for (const file of files) {
    const filepath = join(dir, file);
    const sizeBefore = statSync(filepath).size;
    const outpath = join(dir, basename(file, '.png') + '.webp');

    await sharp(filepath)
      .resize(480, null, { withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(outpath);

    const sizeAfter = statSync(outpath).size;
    const saved = ((1 - sizeAfter / sizeBefore) * 100).toFixed(1);
    console.log(`${file} -> .webp: ${(sizeBefore/1024).toFixed(0)}KB -> ${(sizeAfter/1024).toFixed(0)}KB (${saved}% saved)`);
  }
}

async function optimizeLogo() {
  const filepath = join(PUBLIC, 'logo.png');
  if (!existsSync(filepath)) return;

  const sizeBefore = statSync(filepath).size;
  const outpath = join(PUBLIC, 'logo.webp');

  await sharp(filepath)
    .webp({ quality: 90 })
    .toFile(outpath);

  const sizeAfter = statSync(outpath).size;
  console.log(`logo.png -> logo.webp: ${(sizeBefore/1024).toFixed(0)}KB -> ${(sizeAfter/1024).toFixed(0)}KB`);
}

console.log('=== Optimizando imágenes de equipos ===');
await optimizeEquipos();
console.log('\n=== Convirtiendo posters a WebP ===');
await convertPostersToWebp();
console.log('\n=== Optimizando logo ===');
await optimizeLogo();
console.log('\nDone!');
