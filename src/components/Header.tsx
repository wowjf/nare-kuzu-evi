import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';
import MobileNav from './MobileNav';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Menü', href: '#menu' },
    { name: 'Lokasyon', href: '#location' }
  ];

  return (
    <>
      {/* Desktop header — mobilde gizli */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          isScrolled ? 'bg-[var(--color-primary)]/90 backdrop-blur-md border-b border-[var(--color-border)]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24 h-24 flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="relative z-50 flex items-center gap-2 group">
            <span className="font-serif text-2xl font-semibold text-[var(--color-secondary)] tracking-tight group-hover:text-[var(--color-accent)] transition-colors">
              Nare.
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-[var(--color-accent)] uppercase tracking-widest transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-[var(--color-accent)] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            <a
              href="tel:+905308489060"
              className="ml-4 px-6 py-2.5 border border-[var(--color-border)] text-[var(--color-secondary)] text-sm font-medium uppercase tracking-widest rounded-full hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors duration-300"
            >
              Rezervasyon
            </a>
          </nav>
        </div>
      </motion.header>

      {/* Mobil alt navbar — sadece icon */}
      <MobileNav />

      {/* Mobil logo — sayfanın en üstünde küçük marka işareti */}
      <AnimatePresence>
        {isScrolled && (
          <motion.a
            href="#"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-4 left-1/2 -translate-x-1/2 z-40 bg-[var(--color-primary)]/85 backdrop-blur-md border border-[var(--color-border)] rounded-full px-5 py-2 font-serif text-lg text-[var(--color-secondary)]"
          >
            Nare.
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
}
