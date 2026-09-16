import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-[var(--color-border)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="mb-8 tracking-tight">Ateşin Başında<br/>Gerçek Ustalık.</h2>
          <p className="text-xl text-gray-400 font-light leading-relaxed mb-8">
            Nare Kuzu Evi, sıradan bir et lokantası değil; Anadolu'nun kadim et pişirme geleneklerini modern bir dokunuşla ateşin etrafında yeniden yorumlayan bir gastronomi durağıdır.
          </p>
          <p className="text-lg text-gray-500 font-light leading-relaxed mb-12">
            Özenle seçilmiş kuzu etleri, meşe kömürünün isli aromasıyla harmanlanır. Saatler süren marinasyon süreci ve ağır ateşte pişirme tekniğiyle, etin en doğal ve lezzetli halini sofralarınıza taşıyoruz. Niksar'ın merkezinde, kalabalıktan uzak ama lezzetin tam kalbindeyiz.
          </p>
          
          <div className="flex items-center gap-6 text-sm uppercase tracking-widest text-[var(--color-secondary)]">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--color-accent)]"></span>
              Geleneksel Reçeteler
            </div>
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--color-accent)]"></span>
              Premium Et
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[3/4] overflow-hidden group"
        >
          <img
            src="/ic-mekan.jpeg"
            alt="Nare Kuzu Evi iç mekan — ateş başındaki ocak"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
            <h3 className="text-3xl font-serif text-[var(--color-secondary)]">Ustalık Sır Değildir</h3>
            <p className="text-[var(--color-accent)] mt-2 uppercase tracking-widest text-sm">Sadece Sabır Gerektirir</p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
