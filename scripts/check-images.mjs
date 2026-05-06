import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { products } from '../src/data/products.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const baseDir = path.join(__dirname, 'public');

// Check a few product images
console.log('Sample product image paths:');
[0, 100, 200, 300, 400, 477].forEach(i => {
  if (products[i]) {
    console.log(`[${i}] ${products[i].id}: ${products[i].image}`);
  }
});

// Check if paths exist
let validCount = 0;
let missingFiles = [];
products.forEach(p => {
  const fullPath = path.join(baseDir, p.image);
  if (fs.existsSync(fullPath)) {
    validCount++;
  } else {
    if (missingFiles.length < 5) {
      missingFiles.push(`${p.id}: ${p.image}`);
    }
  }
});

console.log(`\nImage files existence: ${validCount}/${products.length} exist`);
if (missingFiles.length > 0) {
  console.log('\nFirst 5 missing files:');
  missingFiles.forEach(f => console.log(`  ❌ ${f}`));
}
