import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center px-4 md:px-12 lg:px-24 overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-bg.mp4"
        poster="/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-7xl mx-auto w-full"
      >
        <h1 className="text-[var(--color-secondary)] mb-6">
          Nare<br />
          <span className="text-[var(--color-accent)] italic">Kuzu Evi</span>
        </h1>
        <p className="max-w-xl text-fluid-lg text-gray-400 font-sans font-light mb-12">
          Gerçek ateş, ustalıkla marine edilmiş kuzu eti ve Niksar'ın yerel lezzetleriyle unutulmaz bir gastronomi deneyimi.
        </p>

        <div className="flex flex-wrap gap-6">
          <a
            href="#menu"
            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-secondary)] text-[var(--color-primary)] font-medium rounded-full transition-transform hover:scale-105 active:scale-95"
          >
            Menüyü İncele
          </a>
          <a
            href="#iletisim"
            className="inline-flex items-center justify-center px-8 py-4 border border-[var(--color-border)] text-[var(--color-secondary)] font-medium rounded-full transition-colors hover:bg-[var(--color-border)]"
          >
            Rezervasyon
          </a>
        </div>
      </motion.div>
    </section>
  );
}
