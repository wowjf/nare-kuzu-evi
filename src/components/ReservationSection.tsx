import { motion } from 'framer-motion';

export default function ReservationSection() {
  return (
    <section className="py-32 px-4 md:px-12 lg:px-24 bg-[var(--color-border)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="text-[var(--color-accent)] font-serif text-xl italic mb-4 block">Ateş Sönmeden</span>
          <h2 className="text-5xl md:text-7xl font-sans tracking-tight mb-8 leading-none">Masanızı<br/>Ayırtın.</h2>
          <p className="text-gray-400 font-light text-lg mb-8">
            Özellikle haftasonları ve akşam saatlerinde yer bulmak zor olabilir. Kuzu etinin en iyisi için şimdiden yerinizi ayırtın veya özel etkinlikleriniz için bizimle iletişime geçin.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a href="tel:+905308489060" className="group relative inline-flex items-center justify-center w-48 h-48 rounded-full border border-[var(--color-border)] hover:bg-[var(--color-secondary)] transition-colors duration-500 overflow-hidden">
            <span className="relative z-10 text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] font-medium text-lg uppercase tracking-widest text-center px-4">
              Hemen<br/>Ara
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
