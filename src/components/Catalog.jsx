import { useState, useMemo } from 'react';
import { products, categories, sizes } from '../data/products';
import ProductCard from './ProductCard';
import QuickView from './QuickView';

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSize, setActiveSize] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const catMatch = activeCategory === 'all' || p.category === activeCategory;
      const sizeMatch = activeSize === 'all' || p.size === activeSize;
      return catMatch && sizeMatch;
    });
  }, [activeCategory, activeSize]);

  return (
    <section id="catalog" className="py-24 bg-cream relative overflow-hidden">
      {/* --- Ornamen Background --- */}
      {/* Blur Backgrounds (Menyebar di berbagai area) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D9A299]/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-[30%] right-0 w-[400px] h-[400px] bg-[#DCC5B2]/15 rounded-full blur-[120px] translate-x-1/3 pointer-events-none"></div>
      <div className="absolute top-[60%] left-0 w-[600px] h-[600px] bg-[#D9A299]/10 rounded-full blur-[120px] -translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#DCC5B2]/15 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4 pointer-events-none"></div>
      
      {/* Floating Flowers (Lebih banyak & variatif di berbagai ketinggian) */}
      {/* Top area */}
      <svg className="absolute top-40 left-10 md:left-20 w-16 h-16 text-[#D9A299]/20 animate-[spin_20s_linear_infinite] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="25" r="20" /><circle cx="74" cy="42" r="20" /><circle cx="65" cy="70" r="20" /><circle cx="35" cy="70" r="20" /><circle cx="26" cy="42" r="20" />
      </svg>
      <svg className="absolute top-[15%] right-8 md:right-24 w-12 h-12 text-[#DCC5B2]/30 animate-[spin_15s_linear_infinite_reverse] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="25" r="20" /><circle cx="74" cy="42" r="20" /><circle cx="65" cy="70" r="20" /><circle cx="35" cy="70" r="20" /><circle cx="26" cy="42" r="20" />
      </svg>
      
      {/* Middle area */}
      <svg className="absolute top-[40%] left-5 md:left-12 w-20 h-20 text-[#D9A299]/20 animate-[bounce_5s_infinite] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="25" r="20" /><circle cx="74" cy="42" r="20" /><circle cx="65" cy="70" r="20" /><circle cx="35" cy="70" r="20" /><circle cx="26" cy="42" r="20" />
      </svg>
      <svg className="absolute top-[55%] right-10 md:right-20 w-16 h-16 text-[#DCC5B2]/25 animate-[spin_25s_linear_infinite] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="25" r="20" /><circle cx="74" cy="42" r="20" /><circle cx="65" cy="70" r="20" /><circle cx="35" cy="70" r="20" /><circle cx="26" cy="42" r="20" />
      </svg>
      
      {/* Bottom area */}
      <svg className="absolute top-[80%] left-10 md:left-[15%] w-14 h-14 text-[#D9A299]/20 animate-[spin_18s_linear_infinite_reverse] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="25" r="20" /><circle cx="74" cy="42" r="20" /><circle cx="65" cy="70" r="20" /><circle cx="35" cy="70" r="20" /><circle cx="26" cy="42" r="20" />
      </svg>
      <svg className="absolute bottom-[5%] right-12 md:right-32 w-24 h-24 text-[#DCC5B2]/20 animate-[bounce_6s_infinite] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="25" r="20" /><circle cx="74" cy="42" r="20" /><circle cx="65" cy="70" r="20" /><circle cx="35" cy="70" r="20" /><circle cx="26" cy="42" r="20" />
      </svg>

      {/* Floating Sparkles (Menyebar) */}
      <div className="absolute top-[10%] right-[20%] text-[#D9A299]/40 text-4xl animate-pulse pointer-events-none">✦</div>
      <div className="absolute top-[25%] left-[25%] text-[#DCC5B2]/50 text-2xl animate-[pulse_3s_infinite_1s] pointer-events-none">✧</div>
      <div className="absolute top-[50%] right-[30%] text-[#D9A299]/30 text-3xl animate-[pulse_4s_infinite_2s] pointer-events-none">✦</div>
      <div className="absolute top-[75%] left-[10%] text-[#DCC5B2]/40 text-4xl animate-pulse pointer-events-none">✧</div>
      <div className="absolute bottom-[10%] right-[15%] text-[#D9A299]/50 text-3xl animate-[pulse_3s_infinite] pointer-events-none">✦</div>
      
      {/* Pattern Titik Halus */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#D9A299 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
      {/* --- End Ornamen --- */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* How To Order Section (Styled like hero4) */}
        <div className="mb-24 max-w-6xl mx-auto px-2 md:px-4">
          <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 rounded-[2rem] md:rounded-[3rem] py-12 md:py-16 px-4 md:px-8 shadow-sm border border-white relative overflow-hidden">
            
            {/* Aksen putih bercahaya di sudut */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/60 blur-3xl rounded-full z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-white/60 blur-3xl rounded-full z-0"></div>

            <div className="text-center mb-16 relative z-10">
              {/* Background dekoratif di belakang teks HOW TO ORDER */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-16 bg-rose-200/30 blur-xl rounded-full z-0"></div>
              
              <h3 className="font-display text-3xl md:text-4xl text-[#D9A299] font-medium tracking-[0.15em] mb-3 relative z-10" style={{ fontFamily: 'serif' }}>
                HOW TO ORDER
              </h3>
              <div className="flex items-center justify-center gap-4 relative z-10">
                <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-[#DCC5B2]"></div>
                <svg className="w-5 h-5 text-[#D9A299]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.2c-.3 0-.6.2-.7.4l-1.3 3.5-3.5-1.3c-.3-.1-.6 0-.8.2-.2.2-.2.6 0 .8l2.6 2.6-2.6 2.6c-.2.2-.2.6 0 .8.2.2.5.3.8.2l3.5-1.3 1.3 3.5c.1.3.4.4.7.4.3 0 .6-.2.7-.4l1.3-3.5 3.5 1.3c.3.1.6 0 .8-.2.2-.2.2-.6 0-.8l-2.6-2.6 2.6-2.6c.2-.2.2-.6 0-.8-.2-.2-.5-.3-.8-.2l-3.5 1.3-1.3-3.5c-.1-.2-.4-.4-.7-.4z" />
                </svg>
                <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-[#DCC5B2]"></div>
              </div>
            </div>
            
            <div className="relative z-10">
              {/* Garis Penghubung (Mobile: Vertikal Dashed, Desktop: Horizontal Dashed) */}
              <div className="md:hidden absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-px border-l-2 border-dashed border-[#D9A299]/40 z-0"></div>
              <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px border-t-2 border-dashed border-[#D9A299]/40 z-0"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center group max-w-[260px] mx-auto md:max-w-none w-full">
                  <div className="w-12 h-12 rounded-full bg-white text-[#D9A299] flex items-center justify-center font-bold text-xl mb-6 shadow-md border-2 border-[#D9A299]/30 z-10 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#D9A299] group-hover:text-white group-hover:border-[#D9A299]">1</div>
                  <div className="bg-white rounded-t-[3rem] rounded-b-xl p-5 md:p-6 pt-7 md:pt-8 shadow-[0_4px_20px_-4px_rgba(217,162,153,0.15)] border border-[#DCC5B2]/30 w-full h-full flex flex-col items-center relative overflow-hidden transition-all duration-500 group-hover:border-[#D9A299]/50 group-hover:shadow-[0_8px_30px_-4px_rgba(217,162,153,0.25)] group-hover:-translate-y-2">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D9A299] to-transparent opacity-50"></div>
                    
                    {/* Ikon SVG Keren */}
                    <div className="mb-5 mt-2 text-[#D9A299] group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-12 h-12 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <p className="font-medium text-charcoal text-[11px] md:text-xs uppercase tracking-[0.1em] leading-relaxed">PICK YOUR BOUQUETS ON OUR CATALOG</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center group max-w-[260px] mx-auto md:max-w-none w-full">
                  <div className="w-12 h-12 rounded-full bg-white text-[#D9A299] flex items-center justify-center font-bold text-xl mb-6 shadow-md border-2 border-[#D9A299]/30 z-10 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#D9A299] group-hover:text-white group-hover:border-[#D9A299]">2</div>
                  <div className="bg-white rounded-t-[3rem] rounded-b-xl p-5 md:p-6 pt-7 md:pt-8 shadow-[0_4px_20px_-4px_rgba(217,162,153,0.15)] border border-[#DCC5B2]/30 w-full h-full flex flex-col items-center relative overflow-hidden transition-all duration-500 group-hover:border-[#D9A299]/50 group-hover:shadow-[0_8px_30px_-4px_rgba(217,162,153,0.25)] group-hover:-translate-y-2">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D9A299] to-transparent opacity-50"></div>
                    
                    <div className="mb-5 mt-2 text-[#D9A299] group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-12 h-12 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                    </div>
                    <p className="font-medium text-charcoal text-[11px] md:text-xs uppercase tracking-[0.1em] leading-relaxed">CLICK "ORDER NOW" BUTTON ON THE CATALOG</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center group max-w-[260px] mx-auto md:max-w-none w-full">
                  <div className="w-12 h-12 rounded-full bg-white text-[#D9A299] flex items-center justify-center font-bold text-xl mb-6 shadow-md border-2 border-[#D9A299]/30 z-10 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#D9A299] group-hover:text-white group-hover:border-[#D9A299]">3</div>
                  <div className="bg-white rounded-t-[3rem] rounded-b-xl p-5 md:p-6 pt-7 md:pt-8 shadow-[0_4px_20px_-4px_rgba(217,162,153,0.15)] border border-[#DCC5B2]/30 w-full h-full flex flex-col items-center relative overflow-hidden transition-all duration-500 group-hover:border-[#D9A299]/50 group-hover:shadow-[0_8px_30px_-4px_rgba(217,162,153,0.25)] group-hover:-translate-y-2">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D9A299] to-transparent opacity-50"></div>
                    
                    <div className="mb-5 mt-2 text-[#D9A299] group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-12 h-12 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <p className="font-medium text-charcoal text-[11px] md:text-xs uppercase tracking-[0.1em] leading-relaxed">FILL OUT THE FORMAT ORDER</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col items-center text-center group max-w-[260px] mx-auto md:max-w-none w-full">
                  <div className="w-12 h-12 rounded-full bg-white text-[#D9A299] flex items-center justify-center font-bold text-xl mb-6 shadow-md border-2 border-[#D9A299]/30 z-10 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#D9A299] group-hover:text-white group-hover:border-[#D9A299]">4</div>
                  <div className="bg-white rounded-t-[3rem] rounded-b-xl p-5 md:p-6 pt-7 md:pt-8 shadow-[0_4px_20px_-4px_rgba(217,162,153,0.15)] border border-[#DCC5B2]/30 w-full h-full flex flex-col items-center relative overflow-hidden transition-all duration-500 group-hover:border-[#D9A299]/50 group-hover:shadow-[0_8px_30px_-4px_rgba(217,162,153,0.25)] group-hover:-translate-y-2">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D9A299] to-transparent opacity-50"></div>
                    
                    <div className="mb-5 mt-2 text-[#D9A299] group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-12 h-12 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <p className="font-medium text-charcoal text-[11px] md:text-xs uppercase tracking-[0.1em] leading-relaxed">PAYMENT AND CONFIRMATION</p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex flex-col items-center text-center group max-w-[260px] mx-auto md:max-w-none w-full">
                  <div className="w-12 h-12 rounded-full bg-white text-[#D9A299] flex items-center justify-center font-bold text-xl mb-6 shadow-md border-2 border-[#D9A299]/30 z-10 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#D9A299] group-hover:text-white group-hover:border-[#D9A299]">5</div>
                  <div className="bg-white rounded-t-[3rem] rounded-b-xl p-5 md:p-6 pt-7 md:pt-8 shadow-[0_4px_20px_-4px_rgba(217,162,153,0.15)] border border-[#DCC5B2]/30 w-full h-full flex flex-col items-center relative overflow-hidden transition-all duration-500 group-hover:border-[#D9A299]/50 group-hover:shadow-[0_8px_30px_-4px_rgba(217,162,153,0.25)] group-hover:-translate-y-2">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D9A299] to-transparent opacity-50"></div>
                    
                    <div className="mb-5 mt-2 text-[#D9A299] group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-12 h-12 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <p className="font-medium text-charcoal text-[11px] md:text-xs uppercase tracking-[0.1em] leading-relaxed">SIT BACK AND RELAX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-rose-brand text-sm tracking-[0.25em] uppercase font-medium mb-3">Koleksi Kami</p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal font-bold mb-4">Katalog Produk</h2>
          <div className="w-16 h-0.5 bg-rose-brand mx-auto mb-5" />
          <p className="text-muted max-w-xl mx-auto">
            Temukan rangkaian bunga sempurna untuk setiap momen spesialmu.
          </p>
        </div>

        {/* Filter Kategori */}
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === 'all'
                ? 'bg-rose-brand text-white shadow-md'
                : 'bg-blush text-charcoal hover:bg-sand'
              }`}
          >
            Semua Kategori
          </button>
          {categories.filter((c) => c.id !== 'all').map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat.id
                  ? 'bg-rose-brand text-white shadow-md'
                  : 'bg-blush text-charcoal hover:bg-sand'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Filter Ukuran */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          <button
            onClick={() => setActiveSize('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${activeSize === 'all'
                ? 'border-rose-brand bg-rose-brand/10 text-rose-brand'
                : 'border-sand text-muted hover:border-rose-brand hover:text-rose-brand'
              }`}
          >
            Semua Ukuran
          </button>
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setActiveSize(size)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${activeSize === size
                  ? 'border-rose-brand bg-rose-brand/10 text-rose-brand'
                  : 'border-sand text-muted hover:border-rose-brand hover:text-rose-brand'
                }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Product Count */}
        <p className="text-sm text-muted text-center mb-8">
          Menampilkan <span className="font-semibold text-charcoal">{filtered.length}</span> produk
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={setSelectedProduct}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-4xl mb-3">🌸</p>
            <p className="text-muted">Belum ada produk untuk filter ini.</p>
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <QuickView product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </section>
  );
}
