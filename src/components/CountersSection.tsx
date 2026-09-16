import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const counters = [
  {
    src: '/tezgah-gorselleri/kirmizi-et-beyaz-et.jpeg',
    kicker: 'Kasap Tezgahı',
    title: 'Kırmızı Et & Beyaz Et',
    desc: 'Günlük kesim kuzu ve dana etleri; beyaz et alternatifleriyle aynı özenle, aynı tezgahta. Ne fazla, ne eksik.',
    video: '/media/tezgah-kasap-canli.mp4',
    poster: '/media/tezgah-kasap-canli-poster.jpg'
  },
  {
    src: '/tezgah-gorselleri/balik-eti.jpeg',
    kicker: 'Balık Tezgahı',
    title: 'Günün Balığı',
    desc: "Karadeniz'in günlük balığı, buz üzerinde özenle sergilenir. Mevsimine göre değişen tezgah, her gün yeniden kurulur.",
    video: '/media/tezgah-balik-canli.mp4',
    poster: '/media/tezgah-balik-canli-poster.jpg'
  }
];

export default function CountersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  return (
    <section ref={sectionRef} className="py-32 px-4 md:px-12 lg:px-24 bg-[var(--color-border)]/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="text-[var(--color-accent)] font-serif italic text-xl block mb-4">Tezgahın Dili</span>
          <h2 className="mb-6">Günlük Tezgah,<br/>Günlük Tazelik.</h2>
          <p className="text-gray-400 font-light text-xl max-w-2xl">
            Menümüz yazılı değildir; tezgaha bakarız. Sabah kurulan tezgah, akşam sofranın menüsüdür.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {counters.map((counter, i) => (
            <CounterCard key={counter.src} counter={counter} index={i} scrollYProgress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CounterCard({ counter, index, scrollYProgress }: {
  counter: typeof counters[number];
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const y = useTransform(scrollYProgress, [0, 1], index % 2 === 0 ? [60, -60] : [-60, 60]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <motion.div style={{ y }} className="relative overflow-hidden aspect-[4/3] bg-[var(--color-border)]">
        {counter.video ? (
          <video
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            src={counter.video}
            poster={counter.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <img
            src={counter.src}
            alt={counter.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <span className="absolute top-6 left-6 font-serif italic text-lg text-[var(--color-secondary)] bg-black/40 backdrop-blur-sm px-4 py-1.5">
          {counter.kicker}
        </span>
      </motion.div>

      <div className="mt-8">
        <h3 className="mb-4 group-hover:text-[var(--color-accent)] transition-colors duration-300">{counter.title}</h3>
        <p className="text-gray-400 font-light text-lg leading-relaxed">{counter.desc}</p>
      </div>
    </motion.article>
  );
}
