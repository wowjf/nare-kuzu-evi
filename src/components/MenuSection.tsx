import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Fish, Beef, Flame, CookingPot, Soup, CakeSlice,
  ArrowUpRight, ArrowLeft, ChevronRight, LayoutGrid,
  type LucideIcon
} from 'lucide-react';

type Product = { name: string; price: number; unit: string };
type SubCategory = { name: string; items: Product[] };
type Category = { name: string; icon: LucideIcon; desc: string; subs: SubCategory[] };

const menuData: Category[] = [
  {
    name: "Balık & Deniz Ürünleri",
    icon: Fish,
    desc: "Karadeniz'in günlük balığı, buz üzerinde",
    subs: [
      {
        name: "Günün Balığı",
        items: [
          { name: "Levrek", price: 750, unit: "Porsiyon" },
          { name: "Çupra", price: 750, unit: "Porsiyon" },
          { name: "Mezgit", price: 1300, unit: "Kilo" },
          { name: "Palamut", price: 450, unit: "Adet" },
          { name: "Somon", price: 450, unit: "Adet" }
        ]
      }
    ]
  },
  {
    name: "Et Tezgahı",
    icon: Beef,
    desc: "Kilo ile günlük kesim",
    subs: [
      {
        name: "Kuzu (Kilo)",
        items: [
          { name: "Kuzu Kalem", price: 2200, unit: "Kilo" },
          { name: "Kuzu Külbastı", price: 1900, unit: "Kilo" },
          { name: "Kuzu Karski", price: 2000, unit: "Kilo" },
          { name: "Kuzu Lokum", price: 1800, unit: "Kilo" }
        ]
      },
      {
        name: "Dana (Kilo)",
        items: [
          { name: "Antrikot", price: 2000, unit: "Kilo" },
          { name: "Bonfile", price: 2100, unit: "Kilo" },
          { name: "Kontrafile", price: 1900, unit: "Kilo" },
          { name: "Kilo İşi Kebap", price: 1600, unit: "1.5 Kilo" }
        ]
      },
      {
        name: "Köfte & Sucuk (Kilo)",
        items: [
          { name: "Akçaabat Köfte", price: 1400, unit: "Kilo" },
          { name: "Satır Köfte", price: 1500, unit: "Kilo" },
          { name: "Sucuk", price: 1100, unit: "Kilo" }
        ]
      }
    ]
  },
  {
    name: "Izgara & Kebap",
    icon: Flame,
    desc: "Meşe közünde, porsiyon ile",
    subs: [
      {
        name: "Kebap Çeşitleri",
        items: [
          { name: "Adana Kebap", price: 400, unit: "Porsiyon" },
          { name: "Urfa Kebap", price: 400, unit: "Porsiyon" },
          { name: "Sarma Beyti", price: 450, unit: "Porsiyon" },
          { name: "İskender Kebap", price: 450, unit: "Porsiyon" },
          { name: "Alinazik", price: 450, unit: "Porsiyon" },
          { name: "Yaman Kebap", price: 600, unit: "Porsiyon" },
          { name: "Ciğer Şiş", price: 400, unit: "Porsiyon" }
        ]
      },
      {
        name: "Kuzu Porsiyon",
        items: [
          { name: "Kalem Pirzola", price: 600, unit: "Porsiyon" },
          { name: "Külbastı", price: 550, unit: "Porsiyon" },
          { name: "Kaşleme", price: 600, unit: "Porsiyon" },
          { name: "Kuzu Beyti", price: 600, unit: "Porsiyon" },
          { name: "Spesiyel Sarma", price: 600, unit: "Porsiyon" },
          { name: "Kare Sarma", price: 600, unit: "Porsiyon" },
          { name: "Kuzu Çöp Şiş", price: 450, unit: "Porsiyon" },
          { name: "Kuzu Lokum", price: 450, unit: "Porsiyon" }
        ]
      },
      {
        name: "Dana Porsiyonlar",
        items: [
          { name: "Çimiçiro Soslu Antrikot", price: 550, unit: "Porsiyon" },
          { name: "Lokum Bonfile", price: 600, unit: "Porsiyon" },
          { name: "Tereyağlı Bonfile", price: 600, unit: "Porsiyon" },
          { name: "Demiglass Soslu Kontrafile", price: 550, unit: "Porsiyon" },
          { name: "Sote Birgen", price: 600, unit: "Porsiyon" }
        ]
      },
      {
        name: "Tavuk Izgara",
        items: [
          { name: "Kanat", price: 400, unit: "Porsiyon" },
          { name: "Tavuk Pirzola", price: 400, unit: "Porsiyon" },
          { name: "Tavuk Şiş", price: 350, unit: "Porsiyon" },
          { name: "Tavuk Karışık", price: 500, unit: "Porsiyon" }
        ]
      }
    ]
  },
  {
    name: "Tava Yemekleri",
    icon: CookingPot,
    desc: "Sac ve tavada, porsiyon ile",
    subs: [
      {
        name: "Porsiyon",
        items: [
          { name: "Çökertme Kebabı", price: 600, unit: "Porsiyon" },
          { name: "Çoban Kavurma", price: 450, unit: "Porsiyon" },
          { name: "Et Sote", price: 450, unit: "Porsiyon" },
          { name: "Sac Kavurma", price: 450, unit: "Porsiyon" },
          { name: "Kuzu Sote", price: 450, unit: "Porsiyon" },
          { name: "Yaprak Ciğer", price: 400, unit: "Porsiyon" },
          { name: "Ankara Tava", price: 700, unit: "Porsiyon" }
        ]
      }
    ]
  },
  {
    name: "Çorbalar",
    icon: Soup,
    desc: "Günün sıcak başlangıcı",
    subs: [
      {
        name: "Günün Çorbaları",
        items: [
          { name: "Günün Çorbası", price: 100, unit: "Kase" },
          { name: "Düğün Çorbası", price: 200, unit: "Kase" },
          { name: "Tandır Çorbası", price: 200, unit: "Kase" }
        ]
      }
    ]
  },
  {
    name: "Tatlılar",
    icon: CakeSlice,
    desc: "Ev yapımı final",
    subs: [
      {
        name: "Ev Yapımı",
        items: [
          { name: "Fırın Sütlaç", price: 150, unit: "Porsiyon" },
          { name: "Dondurmalı İrmik", price: 100, unit: "Porsiyon" },
          { name: "Kabak Tatlısı", price: 200, unit: "Porsiyon" }
        ]
      }
    ]
  }
];

const itemTotal = (cat: Category) => cat.subs.reduce((sum, s) => sum + s.items.length, 0);

const levelVariants = {
  enter: { opacity: 0, y: 24 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 }
};

const gridVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } }
};

export default function MenuSection() {
  const [categoryIdx, setCategoryIdx] = useState<number | null>(null);
  const [subIdx, setSubIdx] = useState<number | null>(null);

  const category = categoryIdx !== null ? menuData[categoryIdx] : null;
  const sub = category && subIdx !== null ? category.subs[subIdx] : null;

  const openCategory = (i: number) => { setCategoryIdx(i); setSubIdx(null); };
  const openSub = (i: number) => setSubIdx(i);
  const back = () => {
    if (subIdx !== null) setSubIdx(null);
    else setCategoryIdx(null);
  };

  const viewKey = `${categoryIdx ?? 'root'}-${subIdx ?? 'root'}`;

  return (
    <section id="menu" className="py-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-6 tracking-tight"
      >
        Menü
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="text-gray-400 font-light text-xl mb-12 max-w-2xl"
      >
        Kategoriyi seçin, tezgahın detayına inin.
      </motion.p>

      {/* Breadcrumb */}
      <AnimatePresence mode="wait">
        {category && (
          <motion.nav
            key={`crumb-${viewKey}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 flex-wrap mb-10 text-sm uppercase tracking-widest"
          >
            <button
              onClick={back}
              className="flex items-center gap-2 text-gray-400 hover:text-[var(--color-accent)] transition-colors"
            >
              <ArrowLeft size={16} />
              Geri
            </button>
            <span className="text-gray-600">/</span>
            <button
              onClick={() => { setCategoryIdx(null); setSubIdx(null); }}
              className="flex items-center gap-2 text-gray-400 hover:text-[var(--color-secondary)] transition-colors"
            >
              <LayoutGrid size={16} />
              Menü
            </button>
            <span className="text-gray-600">/</span>
            <button
              onClick={() => setSubIdx(null)}
              disabled={!sub}
              className={`flex items-center gap-2 transition-colors ${
                sub ? 'text-gray-400 hover:text-[var(--color-secondary)]' : 'text-[var(--color-secondary)]'
              }`}
            >
              <category.icon size={16} />
              {category.name}
            </button>
            {sub && (
              <>
                <span className="text-gray-600">/</span>
                <span className="text-[var(--color-accent)]">{sub.name}</span>
              </>
            )}
          </motion.nav>
        )}
      </AnimatePresence>

      <div className="min-h-[420px]">
        <AnimatePresence mode="wait">
          {/* Seviye 1: Kategori kartları */}
          {category === null && (
            <motion.div
              key="level-categories"
              variants={gridVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {menuData.map((cat, i) => (
                <motion.button
                  key={cat.name}
                  variants={cardVariants}
                  onClick={() => openCategory(i)}
                  className="group relative text-left border border-[var(--color-border)] hover:border-[var(--color-accent)]/60 bg-[var(--color-primary)] p-8 transition-colors duration-300 overflow-hidden"
                >
                  <ArrowUpRight
                    size={20}
                    className="absolute top-6 right-6 text-gray-600 group-hover:text-[var(--color-accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                  <div className="w-14 h-14 border border-[var(--color-border)] group-hover:border-[var(--color-accent)]/60 flex items-center justify-center mb-6 transition-colors duration-300">
                    <cat.icon size={26} strokeWidth={1.5} className="text-[var(--color-secondary)] group-hover:text-[var(--color-accent)] transition-colors duration-300" />
                  </div>
                  <h3 className="font-serif text-2xl text-[var(--color-secondary)] group-hover:text-[var(--color-accent)] transition-colors duration-300 mb-3">
                    {cat.name}
                  </h3>
                  <p className="text-gray-500 font-light mb-6">{cat.desc}</p>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-gray-600">
                    <span>{cat.subs.length} alt kategori</span>
                    <span className="w-4 h-px bg-[var(--color-border)]"></span>
                    <span>{itemTotal(cat)} ürün</span>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* Seviye 2: Alt kategori kartları */}
          {category !== null && sub === null && (
            <motion.div
              key={`level-subs-${categoryIdx}`}
              variants={gridVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {category.subs.map((s, i) => (
                <motion.button
                  key={s.name}
                  variants={cardVariants}
                  onClick={() => openSub(i)}
                  className="group relative text-left border border-[var(--color-border)] hover:border-[var(--color-accent)]/60 bg-[var(--color-primary)] p-8 transition-colors duration-300 overflow-hidden flex flex-col"
                >
                  <ArrowUpRight
                    size={20}
                    className="absolute top-6 right-6 text-gray-600 group-hover:text-[var(--color-accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                  <span className="font-serif italic text-4xl text-[var(--color-border)] group-hover:text-[var(--color-accent)]/40 transition-colors duration-300 mb-8">
                    0{i + 1}
                  </span>
                  <h3 className="font-serif text-2xl text-[var(--color-secondary)] group-hover:text-[var(--color-accent)] transition-colors duration-300 mb-3">
                    {s.name}
                  </h3>
                  <div className="mt-auto flex items-center gap-3 text-xs uppercase tracking-widest text-gray-600">
                    <span>{s.items.length} ürün</span>
                    <span className="flex-1 h-px bg-[var(--color-border)]"></span>
                    <ChevronRight size={14} className="group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* Seviye 3: Ürün kartları */}
          {category !== null && sub !== null && (
            <motion.div
              key={`level-items-${categoryIdx}-${subIdx}`}
              variants={gridVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {sub.items.map((item) => (
                <motion.div
                  key={item.name}
                  variants={cardVariants}
                  className="group border border-[var(--color-border)] hover:border-[var(--color-accent)]/60 bg-[var(--color-primary)] p-6 transition-colors duration-300"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h4 className="text-xl font-sans font-medium text-[var(--color-secondary)] group-hover:text-[var(--color-accent)] transition-colors duration-300 leading-snug">
                      {item.name}
                    </h4>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-serif text-[var(--color-accent)] whitespace-nowrap">
                      ₺{item.price.toLocaleString('tr-TR')}
                    </span>
                    <span className="text-sm text-gray-500 font-light">/ {item.unit}</span>
                    <span className="flex-1 h-px bg-[var(--color-border)]"></span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
