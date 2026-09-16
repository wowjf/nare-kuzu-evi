import { motion } from 'framer-motion';

export default function LocationHighlightSection() {
  return (
    <section id="location" className="py-32 px-4 md:px-12 lg:px-24 border-t border-[var(--color-border)] max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6">Yol Üstünde Bir Lezzet Durağı.</h2>
          <p className="text-gray-400 font-light text-xl mb-6">
            Niksar merkezdeki konumumuzla sadece yerel misafirlerimizi değil, şehirler arası yolculuk yapan misafirlerimizi de ağırlıyoruz.
          </p>
          <p className="text-gray-500 font-light mb-10">
            Samsun - Tokat güzergahında seyir halindeyseniz veya kısa bir molanız varsa, meşe odununda pişen eşsiz kuzu etini tatmak için rotanızı Niksar'daki Nare Kuzu Evi'ne çevirin.
          </p>

          <a
            href="https://maps.google.com/?q=40.589418,36.952038"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors border-b border-[var(--color-secondary)] hover:border-[var(--color-accent)] pb-2 uppercase tracking-widest text-sm"
          >
            Haritada Yol Tarifi Al
            <span className="text-xl">→</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative group"
        >
          <div className="relative aspect-[4/3] overflow-hidden border border-[var(--color-border)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d378.7292566924226!2d36.95203824141371!3d40.589418243702475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDM1JzIyLjEiTiAzNsKwNTcnMDguNCJF!5e0!3m2!1str!2str!4v1789300685920!5m2!1str!2str"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Nare Kuzu Evi — Google Maps konumu"
            />
          </div>

          <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-[var(--color-primary)] border border-[var(--color-border)] px-5 py-4 font-mono text-xs text-gray-400 leading-relaxed pointer-events-none">
            <div>LAT: 40.5894° N</div>
            <div>LONG: 36.9520° E</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
