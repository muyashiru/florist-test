import SectionBackground from './SectionBackground';

export default function InstagramPromo() {
  return (
    <section className="py-10 md:py-20 bg-cream relative overflow-hidden border-b border-sand/40">
      <SectionBackground variant="promo" />
      <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-white rounded-2xl md:rounded-[2rem] p-6 md:p-12 shadow-sm border border-sand/30 flex flex-col md:flex-row items-center gap-5 md:gap-14 relative overflow-hidden group">
          
          {/* Efek kilauan background di dalam card saat di-hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-rose-brand/0 via-rose-brand/5 to-rose-brand/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Sisi Kiri: Ikon Instagram Besar */}
          <div className="flex-shrink-0 relative">
            <div className="w-20 h-20 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center shadow-lg shadow-[#bc1888]/20 group-hover:scale-105 transition-transform duration-500">
              <svg className="w-10 h-10 md:w-20 md:h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </div>
            
            {/* Emoticon Dekoratif */}
            <span className="absolute -top-2 -right-2 md:-top-3 md:-right-3 text-xl md:text-3xl animate-[bounce_3s_infinite]">✨</span>
            <span className="absolute -bottom-1 -left-1 md:-bottom-2 md:-left-2 text-xl md:text-3xl animate-[pulse_3s_infinite]">🌸</span>
          </div>

          {/* Sisi Kanan: Teks Konten */}
          <div className="flex-1 text-center md:text-left relative z-10">
            <p className="text-[#bc1888] text-[10px] md:text-sm font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase mb-2 md:mb-3">
              Katalog Terupdate
            </p>
            <h2 className="font-display text-xl md:text-4xl text-charcoal font-bold mb-3 md:mb-4 leading-snug">
              Cari Inspirasi Buket Terbaru? Cek Highlight Instagram Kami!
            </h2>
            <p className="text-muted text-xs md:text-base leading-relaxed mb-5 md:mb-8 max-w-xl mx-auto md:mx-0">
              Koleksi di website ini hanya mewakili sebagian dari karya kami. Untuk melihat <strong>desain karangan bunga terbaru, portofolio pesanan pelanggan, dan promo eksklusif</strong> setiap harinya, pastikan Anda mengunjungi Highlight di profil Instagram Jalé Florist!
            </p>
            
            <a 
              href="https://instagram.com/jale.floristt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] hover:opacity-90 text-white font-medium text-xs md:text-base px-6 py-3 md:px-8 md:py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              Lihat Highlight Instagram
            </a>
          </div>
        </div>
      </div>
      
      {/* Dekorasi Coquette & Pastel di belakang card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-gradient-to-r from-pink-200/40 via-rose-100/50 to-fuchsia-200/40 blur-3xl rounded-full pointer-events-none z-0" />

      {/* Aksesori Geometris Lembut */}
      <div className="absolute -top-10 left-10 md:left-20 w-40 h-40 bg-pink-300/20 rounded-full blur-2xl pointer-events-none z-0" />
      <div className="absolute -bottom-10 right-10 md:right-20 w-48 h-48 bg-rose-300/20 rounded-full blur-2xl pointer-events-none z-0" />
      
      {/* Bunga Sakura / Daisy Kiri Atas */}
      <svg className="absolute top-8 left-6 md:top-16 md:left-20 w-16 h-16 md:w-24 md:h-24 text-pink-300 opacity-60 animate-[spin_15s_linear_infinite] pointer-events-none z-0 drop-shadow-sm" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="25" r="20" />
        <circle cx="74" cy="42" r="20" />
        <circle cx="65" cy="70" r="20" />
        <circle cx="35" cy="70" r="20" />
        <circle cx="26" cy="42" r="20" />
        <circle cx="50" cy="50" r="15" fill="#fff" className="opacity-60" />
      </svg>
      
      {/* Bunga Sakura / Daisy Kanan Bawah */}
      <svg className="absolute bottom-8 right-8 md:bottom-20 md:right-28 w-12 h-12 md:w-20 md:h-20 text-rose-300 opacity-60 animate-[spin_20s_linear_infinite_reverse] pointer-events-none z-0 drop-shadow-sm" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="25" r="20" />
        <circle cx="74" cy="42" r="20" />
        <circle cx="65" cy="70" r="20" />
        <circle cx="35" cy="70" r="20" />
        <circle cx="26" cy="42" r="20" />
        <circle cx="50" cy="50" r="15" fill="#fff" className="opacity-60" />
      </svg>
      
      {/* Sparkles / Bintang Kecil Pastel */}
      <div className="absolute top-20 right-16 md:top-28 md:right-36 text-pink-400 text-3xl md:text-5xl opacity-40 animate-pulse pointer-events-none z-0 drop-shadow-sm">✦</div>
      <div className="absolute bottom-24 left-16 md:bottom-32 md:left-36 text-rose-400 text-2xl md:text-4xl opacity-40 animate-[pulse_3s_infinite_1s] pointer-events-none z-0 drop-shadow-sm">✧</div>
      
      {/* Ornamen titik-titik (dot pattern) yang super soft */}
      <div className="absolute top-12 right-12 md:top-24 md:right-32 w-24 h-24 md:w-32 md:h-32 opacity-[0.05] pointer-events-none z-0 animate-[pulse_4s_infinite]" style={{ backgroundImage: 'radial-gradient(#f472b6 2px, transparent 2px)', backgroundSize: '16px 16px' }} />
      <div className="absolute bottom-12 left-12 md:bottom-24 md:left-32 w-20 h-20 md:w-24 md:h-24 opacity-[0.05] pointer-events-none z-0 animate-[pulse_4s_infinite_1s]" style={{ backgroundImage: 'radial-gradient(#fb7185 2px, transparent 2px)', backgroundSize: '16px 16px' }} />
    </section>
  );
}
