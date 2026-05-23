import SectionBackground from './SectionBackground';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function Pricelist() {
  const prices = [
    { name: 'Sedap Malam pink', price: '15K' },
    { name: 'Casablanca Lily', price: '75K' },
    { name: 'Baby breathe', price: '35K' },
    { name: 'Mawar', price: '7K' },
    { name: 'Gerbera lokal', price: '4K' },
    { name: 'Gerbera Semi', price: '8K' },
    { name: 'Anthurium', price: '15K' },
    { name: 'Carnation', price: '5K' },
    { name: 'Chrysanthemum Toba', price: '20K' },
    { name: 'Gladiol', price: '15K' },
    { name: 'Aster', price: '5K' },
    { name: 'Pikok', price: '3.5K' },
    { name: 'Solidago', price: '4K' },
    { name: 'Taiwan leaves', price: '6K' },
    { name: 'Ruskus', price: '2K' },
    { name: 'Hydrangea lokal', price: '10K' },
  ];

  return (
    <section className="pt-10 pb-20 md:pt-12 md:pb-32 border-b border-sand/30 bg-[#fbf8f3] relative overflow-hidden">
      <SectionBackground variant="features" />

      {/* Background Ornaments (Bintang & Kilau) */}
      <div className="absolute top-[10%] left-[10%] text-[#D9A299]/40 text-3xl animate-[pulse_3s_infinite] pointer-events-none">✦</div>
      <div className="absolute bottom-[20%] right-[10%] text-[#DCC5B2]/40 text-4xl animate-[pulse_4s_infinite_1s] pointer-events-none">✧</div>
      <div className="absolute top-[50%] right-[5%] text-[#D9A299]/30 text-2xl animate-[pulse_2.5s_infinite_0.5s] pointer-events-none">✦</div>
      <div className="absolute bottom-[10%] left-[15%] text-[#DCC5B2]/30 text-2xl animate-[pulse_3.5s_infinite_1.5s] pointer-events-none">✧</div>

      {/* Dekorasi Tambahan */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-brand/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-brand/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

      {/* Pattern Titik Halus */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#D9A299 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Menu Card with Elegant Double Border */}
        <div className="relative bg-white/70 backdrop-blur-md rounded-[2rem] md:rounded-[3rem] p-3 md:p-4 shadow-[0_20px_60px_rgba(217,162,153,0.15)] border border-rose-brand/10">
          <div className="border-[2px] border-dashed border-rose-brand/30 rounded-[1.5rem] md:rounded-[2.5rem] py-12 px-6 md:px-16 relative overflow-hidden">

            {/* Dekorasi Bunga/Daun Pojok (Watermark) */}
            <svg className="absolute -top-6 -left-6 w-32 h-32 md:w-48 md:h-48 text-rose-brand/5 transform -rotate-12 pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 0 C70 30 90 40 100 60 C80 50 60 70 50 100 C40 70 20 50 0 60 C10 40 30 30 50 0 Z" />
              <path d="M50 20 C60 40 80 50 90 60 C70 50 60 70 50 90 C40 70 30 50 10 60 C20 50 40 40 50 20 Z" opacity="0.5" />
            </svg>
            <svg className="absolute -bottom-6 -right-6 w-32 h-32 md:w-48 md:h-48 text-rose-brand/5 transform rotate-12 pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 0 C70 30 90 40 100 60 C80 50 60 70 50 100 C40 70 20 50 0 60 C10 40 30 30 50 0 Z" />
              <path d="M50 20 C60 40 80 50 90 60 C70 50 60 70 50 90 C40 70 30 50 10 60 C20 50 40 40 50 20 Z" opacity="0.5" />
            </svg>

            {/* Header section inside the card */}
            <div className="text-center mb-12 relative z-10">
              <div className="inline-block relative mb-4">
                {/* Pita Estetik (Ribbon) */}
                <svg className="absolute -top-8 left-1/2 -translate-x-1/2 w-48 h-16 text-rose-brand/15 -z-10" viewBox="0 0 200 60" fill="currentColor">
                  <path d="M20 30 Q 100 -10 180 30 L 200 10 L 180 50 Q 100 10 20 50 L 0 10 Z" />
                </svg>
                <h2 className="font-display text-4xl md:text-6xl text-rose-brand font-bold tracking-tight">
                  <span className="text-rose-brand/40 hidden md:inline-block mr-2 text-3xl md:-translate-y-2">✦</span>
                  Pricelist Flowers
                  <span className="text-rose-brand/40 hidden md:inline-block ml-2 text-3xl md:-translate-y-2">✦</span>
                </h2>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-[1px] bg-charcoal/30"></div>
                <p className="text-charcoal tracking-[0.3em] text-xs md:text-sm font-medium uppercase">@JALE.FLORISTT</p>
                <div className="w-12 h-[1px] bg-charcoal/30"></div>
              </div>
            </div>

            {/* List Harga Kolom Kiri Kanan */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 md:gap-y-5 relative z-10">
              {prices.map((item, i) => (
                <div key={i} className="flex items-end justify-between group">
                  <span className="text-charcoal font-medium text-base md:text-lg capitalize group-hover:text-rose-brand transition-colors">{item.name}</span>
                  <span className="flex-1 border-b-[2px] border-dotted border-charcoal/20 mx-3 md:mx-4 mb-2 opacity-70 group-hover:border-rose-brand/40 transition-colors"></span>
                  <div className="flex items-center gap-1">
                    <span className="text-rose-brand font-bold text-base md:text-lg">{item.price}</span>
                    <span className="text-xs text-muted/80 whitespace-nowrap hidden sm:inline">/ tangkai</span>
                    <span className="text-xs text-muted/80 whitespace-nowrap sm:hidden">/ tki</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
