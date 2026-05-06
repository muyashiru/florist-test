import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const uncategorizedDir = path.join(__dirname, '../public/images/produk/uncategorized');
const produkDir = path.join(__dirname, '../public/images/produk');

// Function to convert HEIC to WebP
async function convertHeicToWebp(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);
    return true;
  } catch (error) {
    console.error(`❌ Conversion failed for ${path.basename(inputPath)}:`, error.message);
    return false;
  }
}

// Main async function to organize files
async function organizeProducts() {
  // Read all files from uncategorized
  const files = fs.readdirSync(uncategorizedDir).filter(f => {
    const stats = fs.statSync(path.join(uncategorizedDir, f));
    return stats.isFile() && !f.startsWith('.'); // Exclude hidden files and directories
  });

  console.log(`📁 Found ${files.length} files to organize...\n`);

  const products = [];

  // Process each file
  for (const filename of files) {
    // Handle files with and without extensions
    const match = filename.match(/^([A-Za-z]+)_(\d+)(?:_|\s)(.*?)(?:\.jpg|\.png|\.jpeg|\.heic)?$/i);
    
    if (!match) {
      console.warn(`⚠️  Skipping: ${filename} (invalid format)`);
      continue;
    }

    const [fullMatch, prefix, number, rest] = match;
    
    // Extract price - handle various formats
    const priceMatch = rest.match(/(?:Harga|harga)?\s*(\d+)\s*k/i);
    const price = priceMatch ? parseInt(priceMatch[1]) * 1000 : 0;
    
    // Check if file is HEIC
    const isHeic = filename.toLowerCase().endsWith('.heic');
    const baseFilename = isHeic ? filename.replace(/\.heic$/i, '') : filename;
    const finalFilename = isHeic ? `${baseFilename}.webp` : filename;

    let category, size, categoryName, destinationDir, productType;
    
    // Map prefix to category and size
    if (prefix.toLowerCase() === 'bap') {
      category = 'bouquet-artificial';
      size = 'Petite';
      categoryName = 'Bouquet Artificial';
      productType = 'bouquet-artificial';
      destinationDir = path.join(produkDir, 'bouquet-artificial/petite');
    } else if (prefix.toLowerCase() === 'bas') {
      category = 'bouquet-artificial';
      size = 'S';
      categoryName = 'Bouquet Artificial';
      productType = 'bouquet-artificial';
      destinationDir = path.join(produkDir, 'bouquet-artificial/s');
    } else if (prefix.toLowerCase() === 'bam') {
      category = 'bouquet-artificial';
      size = 'M';
      categoryName = 'Bouquet Artificial';
      productType = 'bouquet-artificial';
      destinationDir = path.join(produkDir, 'bouquet-artificial/m');
    } else if (prefix.toLowerCase() === 'bal') {
      category = 'bouquet-artificial';
      size = 'L';
      categoryName = 'Bouquet Artificial';
      productType = 'bouquet-artificial';
      destinationDir = path.join(produkDir, 'bouquet-artificial/l');
    } else if (prefix.toLowerCase() === 'baxl') {
      category = 'bouquet-artificial';
      size = 'XL';
      categoryName = 'Bouquet Artificial';
      productType = 'bouquet-artificial';
      destinationDir = path.join(produkDir, 'bouquet-artificial/xl');
    } else if (prefix.toLowerCase() === 'baxxl') {
      category = 'bouquet-artificial';
      size = 'XXL';
      categoryName = 'Bouquet Artificial';
      productType = 'bouquet-artificial';
      destinationDir = path.join(produkDir, 'bouquet-artificial/xxl');
    } else if (prefix.toLowerCase() === 'bahs') {
      category = 'bouquet-artificial';
      size = 'Human Size';
      categoryName = 'Bouquet Artificial';
      productType = 'bouquet-artificial';
      destinationDir = path.join(produkDir, 'bouquet-artificial/human-size');
    } else if (prefix.toLowerCase() === 'bfs') {
      category = 'bouquet-fresh';
      size = 'S';
      categoryName = 'Bouquet Fresh';
      productType = 'bouquet-fresh';
      destinationDir = path.join(produkDir, 'bouquet-fresh/s');
    } else if (prefix.toLowerCase() === 'bfm' && !filename.toLowerCase().includes('bfma')) {
      category = 'bouquet-fresh';
      size = 'M';
      categoryName = 'Bouquet Fresh';
      productType = 'bouquet-fresh';
      destinationDir = path.join(produkDir, 'bouquet-fresh/m');
    } else if (prefix.toLowerCase() === 'bfl') {
      category = 'bouquet-fresh';
      size = 'L';
      categoryName = 'Bouquet Fresh';
      productType = 'bouquet-fresh';
      destinationDir = path.join(produkDir, 'bouquet-fresh/l');
    } else if (prefix.toLowerCase() === 'bfxl') {
      category = 'bouquet-fresh';
      size = 'XL';
      categoryName = 'Bouquet Fresh';
      productType = 'bouquet-fresh';
      destinationDir = path.join(produkDir, 'bouquet-fresh/xl');
    } else if (prefix.toLowerCase() === 'bfp') {
      category = 'bouquet-fresh';
      size = 'Premium';
      categoryName = 'Bouquet Fresh';
      productType = 'bouquet-fresh';
      destinationDir = path.join(produkDir, 'bouquet-fresh/premium');
    } else if (prefix.toLowerCase() === 'bfmam') {
      category = 'bouquet-fresh-mix-artificial';
      size = 'M';
      categoryName = 'Bouquet Fresh Mix Artificial';
      productType = 'bouquet-fresh-mix-artificial';
      destinationDir = path.join(produkDir, 'bouquet-fresh-mix-artificial/m');
    } else if (prefix.toLowerCase() === 'bfmal') {
      category = 'bouquet-fresh-mix-artificial';
      size = 'L';
      categoryName = 'Bouquet Fresh Mix Artificial';
      productType = 'bouquet-fresh-mix-artificial';
      destinationDir = path.join(produkDir, 'bouquet-fresh-mix-artificial/l');
    } else if (prefix.toLowerCase() === 'bfmaxl') {
      category = 'bouquet-fresh-mix-artificial';
      size = 'XL';
      categoryName = 'Bouquet Fresh Mix Artificial';
      productType = 'bouquet-fresh-mix-artificial';
      destinationDir = path.join(produkDir, 'bouquet-fresh-mix-artificial/xl');
    } else if (prefix.toLowerCase().includes('blboxartif')) {
      category = 'bloom-box-artificial';
      categoryName = 'Bloom Box Artificial';
      productType = 'bloom-box-artificial';
      if (filename.toLowerCase().includes('m')) {
        size = 'M';
        destinationDir = path.join(produkDir, 'bloom-box-artificial/m');
      } else {
        size = 'S';
        destinationDir = path.join(produkDir, 'bloom-box-artificial/s');
      }
    } else if (prefix.toLowerCase().includes('vasplastic')) {
      category = 'vas-artificial';
      categoryName = 'Vas Plastic Melamin Artificial';
      productType = 'vas-artificial';
      size = 'S'; // Default
      destinationDir = path.join(produkDir, 'vas-artificial');
    } else {
      console.warn(`⚠️  Skipping: ${filename} (unknown prefix: ${prefix})`);
      continue;
    }

    try {
      const sourcePath = path.join(uncategorizedDir, filename);
      const destPath = path.join(destinationDir, finalFilename);
      
      // If HEIC, convert to WebP first
      if (isHeic) {
        const converted = await convertHeicToWebp(sourcePath, destPath);
        if (!converted) {
          console.warn(`⚠️  Failed to convert ${filename}, skipping`);
          continue;
        }
        console.log(`✅ ${filename} → ${size} (converted to WebP)`);
      } else {
        // Just move non-HEIC files
        fs.renameSync(sourcePath, destPath);
        console.log(`✅ ${filename} → ${size}`);
      }
      
      // Determine image path for products.js
      const normalizedSize = size.toLowerCase().replace(/\s+/g, '-');
      const imagePath = `/images/produk/${productType}/${normalizedSize}/${finalFilename}`;
      
      const productId = `${prefix.toUpperCase()}-${number.padStart(3, '0')}`;
      
      const product = {
        id: productId,
        name: `${categoryName} ${size}`,
        category: productType,
        size: size,
        price: price,
        image: imagePath,
        description: `Rangkaian bunga ${categoryName.toLowerCase()} ukuran ${size} dari Jalé Florist. Cantik, tahan lama, dan cocok untuk berbagai momen spesial.`,
        available: true,
      };

      products.push(product);
    } catch (err) {
      console.error(`❌ Error processing ${filename}:`, err.message);
    }
  }

  // Fix duplicate IDs - add suffix if duplicate found
  const idCount = {};
  const productsWithUniqueIds = [];
  products.forEach((product) => {
    let finalId = product.id;
    if (!idCount[product.id]) {
      idCount[product.id] = 1;
    } else {
      idCount[product.id]++;
      finalId = `${product.id}-${idCount[product.id]}`;
    }
    product.id = finalId;
    productsWithUniqueIds.push(product);
  });

  // Sort products by category and ID
  productsWithUniqueIds.sort((a, b) => {
    if (a.category !== b.category) return a.category.localeCompare(b.category);
    return a.id.localeCompare(b.id);
  });

  // Save to JSON file for reference
  const outputPath = path.join(__dirname, '../src/data/products-new.json');
  fs.writeFileSync(outputPath, JSON.stringify(productsWithUniqueIds, null, 2));

  console.log(`\n✨ Organization complete!`);
  console.log(`📊 Total products: ${productsWithUniqueIds.length}`);
  console.log(`💾 Data saved to: src/data/products-new.json`);
}

// Run the main function
organizeProducts().catch(err => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
