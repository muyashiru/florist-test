import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read generated products data
const jsonPath = path.join(__dirname, '../src/data/products-new.json');
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

// Extract unique categories and sizes
const categorySet = [...new Set(data.map(p => p.category))].sort();
const sizes = ['Petite', 'S', 'M', 'L', 'XL', 'XXL', 'Human Size', 'Premium'].filter(
  s => data.some(p => p.size === s)
);

// Create category mapping with labels
const categoryLabels = {
  'bouquet-artificial': 'Bouquet Artificial',
  'bouquet-fresh': 'Bouquet Fresh',
  'bouquet-fresh-mix-artificial': 'Bouquet Fresh Mix Artificial',
  'bloom-box-artificial': 'Bloom Box Artificial',
  'vas-artificial': 'Vas Artificial',
};

const categories = categorySet.map(cat => ({
  id: cat,
  label: categoryLabels[cat] || cat.replace(/-/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}));

// Create products.js content
let content = `// Data produk Jalé Florist
// Auto-generated dari organize-and-generate-products.mjs
// Total: ${data.length} produk
// Last updated: ${new Date().toLocaleString('id-ID')}

export const products = [
`;

data.forEach((product) => {
  content += `  {
    id: "${product.id}",
    name: "${product.name}",
    category: "${product.category}",
    size: "${product.size}",
    price: ${product.price},
    image: "${product.image}",
    description: "${product.description}",
    available: ${product.available},
  },
`;
});

content += `];

export const categories = ${JSON.stringify(categories, null, 2)};

export const sizes = ${JSON.stringify(sizes)};
`;

const outputPath = path.join(__dirname, '../src/data/products.js');
fs.writeFileSync(outputPath, content);

console.log(`✅ products.js updated with ${data.length} products!`);
console.log(`📁 Categories: ${categories.map(c => c.label).join(', ')}`);
console.log(`📏 Sizes: ${sizes.join(', ')}`);
