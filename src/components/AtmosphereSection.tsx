import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const features = [
  {
    title: "Sıfır Karbonhidrat, Saf Protein",
    desc: "Menümüz eti merkeze alır. Gereksiz dolgular, ağır soslar yoktur; etin kendi lezzeti başroldedir."
  },
  {
    title: "Günlük Kesim, Yerel Üretim",
    desc: "Tüm etlerimiz bölgemizin en seçkin çiftliklerinden günlük olarak tedarik edilir."
  },
  {
    title: "Meşe Odunu Ateşi",
    desc: "Gazlı ızgaraları reddediyoruz. Etin ruhuna ancak gerçek meşe közünün dokunabileceğine inanıyoruz."
  }
];

export default function AtmosphereSection() {
  return (
    <section className="py-32 px-4 md:px-12 lg:px-24 bg-[var(--color-border)] text-center relative overflow-hidden">
      {/* Brutalist huge background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif opacity-5 whitespace-nowrap pointer-events-none select-none">
        ATEŞ VE ET
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          Neden Biz?
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 text-left"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={itemVariants} className="group">
              <div className="text-[var(--color-accent)] font-serif text-5xl mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                0{i + 1}
              </div>
              <h4 className="text-2xl font-serif text-[var(--color-secondary)] mb-4">{feature.title}</h4>
              <p className="text-gray-400 font-light leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
