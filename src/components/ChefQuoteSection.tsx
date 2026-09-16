import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ChefQuoteSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);

  return (
    <section ref={ref} className="py-40 px-4 md:px-12 lg:px-24 relative overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-125">
        <img
          src="/ic-mekan2.jpeg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[var(--color-primary)]/85" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-12 text-[var(--color-secondary)]">
            "Etin hakkını vermek için sadece iyi malzeme yetmez; <span className="italic text-[var(--color-accent)]">ateşle konuşmayı</span> bilmek gerekir."
          </h2>
          <p className="uppercase tracking-[0.3em] font-medium text-sm text-[var(--color-secondary)]/80">
            Baş Aşçı — Nare Kuzu Evi
          </p>
        </motion.div>
      </div>
    </section>
  );
}
