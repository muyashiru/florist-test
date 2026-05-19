const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\Yashiru\\Downloads\\Compressed\\Foto produk catalog Jale Florist for Halo AI';

const files = fs.readdirSync(dir);

let renameCount = 0;

files.forEach(file => {
    let newName = file;
    
    // 1. Standardize "Harga" with exactly one space after it and an underscore before it.
    // This matches "_ Harga", " Harga", "_harga", " harga", "_Harga", etc.
    newName = newName.replace(/_?\s*[hH]arga\s*/, '_Harga ');
    
    // 2. Fix cases where we have something like "_Harga_" instead of "_Harga "
    newName = newName.replace(/_Harga_/, '_Harga ');
    
    // 3. Remove trailing underscore before extension (e.g., 35k_.jpg -> 35k.jpg)
    newName = newName.replace(/_\.([a-zA-Z0-9]+)$/, '.$1');
    
    // 4. Remove trailing underscore if no extension
    newName = newName.replace(/_$/, '');

    if (newName !== file) {
        console.log(`Renaming: "${file}" -> "${newName}"`);
        fs.renameSync(path.join(dir, file), path.join(dir, newName));
        renameCount++;
    }
});

console.log(`\nTotal files renamed: ${renameCount}`);
