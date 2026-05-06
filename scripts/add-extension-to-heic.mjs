import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const produkDir = path.join(__dirname, '../public/images/produk');

// Function to check if file is HEIC by magic bytes
function isHeicFile(filePath) {
  try {
    const buf = Buffer.alloc(16);
    const fd = fs.openSync(filePath, 'r');
    fs.readSync(fd, buf, 0, 16);
    fs.closeSync(fd);
    
    // HEIF/HEIC signature
    return buf.toString('hex').startsWith('0000002466747970');
  } catch (err) {
    return false;
  }
}

// Main function
async function renameHeicFiles() {
  console.log(`🔍 Scanning for HEIC files without extension...\n`);
  
  let renamed = 0;
  let skipped = 0;
  
  // Get all files recursively
  const getFilesRecursive = (dir) => {
    let files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stats = fs.statSync(fullPath);
      
      if (stats.isDirectory()) {
        files = files.concat(getFilesRecursive(fullPath));
      } else if (stats.isFile()) {
        files.push(fullPath);
      }
    }
    return files;
  };
  
  const allFiles = getFilesRecursive(produkDir).filter(f => !f.includes('uncategorized'));
  
  console.log(`📁 Found ${allFiles.length} files total\n`);
  
  for (const filePath of allFiles) {
    const ext = path.extname(filePath).toLowerCase();
    const basename = path.basename(filePath);
    
    // Skip if already has extension
    if (ext) {
      skipped++;
      continue;
    }
    
    // Check if HEIC by magic bytes
    if (isHeicFile(filePath)) {
      const dir = path.dirname(filePath);
      const newPath = `${filePath}.jpg`;
      
      try {
        fs.renameSync(filePath, newPath);
        console.log(`✅ Renamed: ${basename} → ${path.basename(newPath)}`);
        renamed++;
      } catch (err) {
        console.error(`❌ Error: ${basename} - ${err.message}`);
      }
    } else {
      skipped++;
    }
  }
  
  console.log(`\n✨ Rename complete!`);
  console.log(`✅ Renamed: ${renamed} files`);
  console.log(`⏭️  Skipped: ${skipped} files (already have extension)`);
}

// Run
renameHeicFiles().catch(err => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
