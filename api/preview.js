export default function handler(req, res) {
  const { id, title, desc, img } = req.query;
  
  const ogTitle = title || "Jalé Florist";
  const ogDesc = desc || "Bloom with meaning, delivered with love.";
  // Default image jika tidak ada
  const ogImg = img || "https://florist-test.vercel.app/logo.png";
  
  const redirectUrl = `https://florist-test.vercel.app/catalog${id ? `?open=${id}` : ''}`;

  const html = `
    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${ogTitle}</title>
      
      <!-- Open Graph / WhatsApp / Facebook -->
      <meta property="og:type" content="website">
      <meta property="og:title" content="${ogTitle}">
      <meta property="og:description" content="${ogDesc}">
      <meta property="og:image" content="${ogImg}">
      <meta property="og:image:width" content="800">
      <meta property="og:image:height" content="800">
      <meta property="og:url" content="https://florist-test.vercel.app/">
      
      <!-- Twitter -->
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:title" content="${ogTitle}">
      <meta name="twitter:description" content="${ogDesc}">
      <meta name="twitter:image" content="${ogImg}">

      <!-- Redirect ke katalog -->
      <meta http-equiv="refresh" content="0; url=${redirectUrl}">
      <style>
        body { font-family: sans-serif; text-align: center; padding-top: 50px; color: #333; }
      </style>
    </head>
    <body>
      <p>Membuka produk ${ogTitle}...</p>
      <p>Jika tidak dialihkan otomatis, <a href="${redirectUrl}">klik di sini</a>.</p>
    </body>
    </html>
  `;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
