import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  }
};

const lineVariants = {
  hidden: { scaleX: 0 },
  show: { 
    scaleX: 1, 
    transition: { 
      duration: 1, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  }
};

export default function Footer() {
  return (
    <footer id="iletisim" className="relative w-full bg-[var(--color-primary)] text-[var(--color-secondary)] pt-32 overflow-hidden">
      {/* Huge Background Typography */}
      <div className="absolute top-0 left-0 w-full overflow-hidden flex justify-center opacity-[0.03] select-none pointer-events-none mt-10">
        <h2 className="text-[15vw] font-serif leading-none whitespace-nowrap tracking-tighter">NARE KUZU EVİ</h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-[90rem] mx-auto px-6 md:px-12 lg:px-24"
      >
        {/* Top Section: CTA & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          <motion.div variants={columnVariants} className="lg:col-span-7">
            <h3 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-8 leading-[1.1]">
              Ateşin ve <br />
              Ustalığın İmzası
            </h3>
            <p className="text-gray-400 font-light text-lg md:text-xl max-w-xl leading-relaxed">
              Niksar, Tokat ve Erbaa'nın en lezzetli geleneksel kuzu eti deneyimi. Rezervasyon yaparak masanızı güvenceye alın.
            </p>
            <a 
              href="tel:+905308489060" 
              className="mt-10 inline-flex items-center gap-4 group"
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-full border border-[var(--color-border)] group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] transition-all duration-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:text-white transition-colors">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </span>
              <span className="text-xl font-medium tracking-wide group-hover:text-[var(--color-accent)] transition-colors duration-300">
                Rezervasyon Yap
              </span>
            </a>
          </motion.div>
          
          <motion.div variants={columnVariants} className="lg:col-span-5 flex flex-col justify-end">
             <div className="p-8 border border-[var(--color-border)] bg-[#161616] rounded-sm relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-accent)] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
               <h4 className="font-serif text-2xl mb-4">Ayrıcalıklardan Haberdar Olun</h4>
               <p className="text-gray-400 font-light text-sm mb-6">Özel tadım menüleri ve etkinliklerden ilk siz haberdar olun.</p>
               <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                 <input 
                   type="email" 
                   placeholder="E-posta adresiniz" 
                   className="w-full bg-transparent border border-[var(--color-border)] px-4 py-3 text-sm font-light focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                 />
                 <button className="bg-[var(--color-secondary)] text-[var(--color-primary)] px-6 py-3 text-sm font-medium hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300">
                   Katıl
                 </button>
               </form>
             </div>
          </motion.div>
        </div>

        <motion.div variants={lineVariants} className="w-full h-px bg-[var(--color-border)] origin-left mb-16" />

        {/* Bottom Section: Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          <motion.div variants={columnVariants} className="flex flex-col gap-6">
            <h5 className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gray-500 font-semibold">Konum</h5>
            <address className="not-italic text-gray-300 font-light text-sm space-y-2 leading-relaxed">
              <p>Cumhuriyet Caddesi, Cebni Bey Mah.</p>
              <p>Seymenli Sokak No: 9</p>
              <p className="text-white">Niksar, Tokat</p>
            </address>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-xs uppercase tracking-widest text-[var(--color-accent)] hover:text-white transition-colors w-fit flex items-center gap-2 mt-2">
              Haritada Gör
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>

          <motion.div variants={columnVariants} className="flex flex-col gap-6">
            <h5 className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gray-500 font-semibold">İletişim</h5>
            <div className="text-gray-300 font-light text-sm space-y-3">
              <p>
                <a href="tel:+905308489060" className="hover:text-[var(--color-accent)] transition-colors">
                  +90 (530) 848 90 60
                </a>
              </p>
              <p>
                <a href="mailto:info@narekuzuevi.com" className="hover:text-[var(--color-accent)] transition-colors">
                  info@narekuzuevi.com
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div variants={columnVariants} className="flex flex-col gap-6">
            <h5 className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gray-500 font-semibold">Çalışma Saatleri</h5>
            <ul className="text-gray-300 font-light text-sm space-y-3">
              <li className="flex justify-between items-end border-b border-[var(--color-border)]/50 pb-2">
                <span>Pzt - Cmt</span>
                <span className="font-medium text-white">11:00 - 23:00</span>
              </li>
              <li className="flex justify-between items-end pt-1">
                <span>Pazar</span>
                <span className="font-medium text-[var(--color-accent)]">Kapalı</span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={columnVariants} className="flex flex-col gap-6 lg:pl-12">
            <h5 className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gray-500 font-semibold">Sosyal Medya</h5>
            <div className="flex flex-col gap-3 text-sm font-light">
              <a href="#" className="flex items-center gap-4 group text-gray-300 hover:text-white transition-colors">
                <span className="w-8 h-px bg-[var(--color-border)] group-hover:w-12 group-hover:bg-[var(--color-accent)] transition-all duration-300"></span>
                Instagram
              </a>
              <a href="#" className="flex items-center gap-4 group text-gray-300 hover:text-white transition-colors">
                <span className="w-8 h-px bg-[var(--color-border)] group-hover:w-12 group-hover:bg-[var(--color-accent)] transition-all duration-300"></span>
                Facebook
              </a>
              <a href="#" className="flex items-center gap-4 group text-gray-300 hover:text-white transition-colors">
                <span className="w-8 h-px bg-[var(--color-border)] group-hover:w-12 group-hover:bg-[var(--color-accent)] transition-all duration-300"></span>
                TripAdvisor
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Copyright Bar */}
      <div className="w-full border-t border-[var(--color-border)] bg-[#0a0a0a]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-24 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 font-light tracking-wide">
            &copy; {new Date().getFullYear()} Nare Kuzu Evi. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-xs text-gray-500 font-light tracking-wide">
            <a href="#" className="hover:text-[var(--color-secondary)] transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-[var(--color-secondary)] transition-colors">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
