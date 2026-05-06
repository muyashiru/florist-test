import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const produkDir = path.join(__dirname, '../public/images/produk');

// Function to check if file is HEIC by magic bytes
function isHeicFile(filePath) {
  try {
    const buf = Buffer.alloc(16);
    const fd = fs.openSync(filePath, 'r');
    fs.readSync(fd, buf, 0, 16);
    fs.closeSync(fd);
    
    // HEIF/HEIC signature: starts with 00000020 followed by ftyp
    return buf.toString('hex').startsWith('0000002466747970');
  } catch (err) {
    return false;
  }
}

// Function to convert HEIC to WebP
async function convertHeicToWebp(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);
    return true;
  } catch (error) {
    console.error(`❌ Conversion failed: ${error.message}`);
    return false;
  }
}

// Main conversion function
async function convertAllHeicFiles() {
  console.log(`🔍 Scanning for HEIC files without extension...\n`);
  
  let converted = 0;
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
    
    // Check if already WebP
    if (ext === '.webp') {
      skipped++;
      continue;
    }
    
    // Check if HEIC by magic bytes
    if (isHeicFile(filePath)) {
      const dir = path.dirname(filePath);
      const nameWithoutExt = path.parse(filePath).name;
      const outputPath = path.join(dir, `${nameWithoutExt}.webp`);
      
      try {
        const success = await convertHeicToWebp(filePath, outputPath);
        if (success) {
          // Delete original HEIC file
          fs.unlinkSync(filePath);
          console.log(`✅ Converted: ${basename} → ${path.basename(outputPath)}`);
          converted++;
        } else {
          console.error(`❌ Failed to convert: ${basename}`);
        }
      } catch (err) {
        console.error(`❌ Error: ${basename} - ${err.message}`);
      }
    } else {
      skipped++;
    }
  }
  
  console.log(`\n✨ Conversion complete!`);
  console.log(`✅ Converted: ${converted} files`);
  console.log(`⏭️  Skipped: ${skipped} files (already correct format)`);
}

// Run conversion
convertAllHeicFiles().catch(err => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
