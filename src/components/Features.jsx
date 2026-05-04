export default function Features() {
  const features = [
    {
      title: 'Kualitas Premium',
      desc: 'Setiap bunga dirangkai dengan teliti dan penuh cinta menggunakan bahan terbaik untuk hasil yang memukau.',
      icon: '✨'
    },
    {
      title: 'Bisa Custom',
      desc: 'Konsultasikan desain, ukuran, jenis bunga, hingga budget sesuai dengan keinginan dan kebutuhan Anda.',
      icon: '🎀'
    },
    {
      title: 'Pengiriman Aman',
      desc: 'Kami memastikan setiap pesanan dikemas dengan aman dan tiba di tangan Anda dalam kondisi sempurna.',
      icon: '🚚'
    }
  ];

  return (
    <section className="py-16 border-b border-sand/30 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-sand/50">
          {features.map((f, i) => (
            <div key={i} className="text-center p-6 sm:p-8 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-blush rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-3">{f.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
