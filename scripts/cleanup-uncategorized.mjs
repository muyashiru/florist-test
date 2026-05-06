import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const uncategorizedDir = path.join(__dirname, '../public/images/produk/uncategorized');
const produkDir = path.join(__dirname, '../public/images/produk');

console.log('🧹 Cleaning up uncategorized folder...\n');

// Read all uncategorized files
const files = fs.readdirSync(uncategorizedDir).filter(f => {
  const stats = fs.statSync(path.join(uncategorizedDir, f));
  return stats.isFile();
});

console.log(`Found ${files.length} files to cleanup`);

let deletedCount = 0;
files.forEach(filename => {
  const uncategorizedPath = path.join(uncategorizedDir, filename);
  try {
    fs.unlinkSync(uncategorizedPath);
    deletedCount++;
  } catch (err) {
    console.error(`❌ Error deleting ${filename}:`, err.message);
  }
});

console.log(`\n✅ Cleanup complete!`);
console.log(`🗑️  Deleted: ${deletedCount} files`);
console.log(`📁 uncategorized folder is now empty`);
