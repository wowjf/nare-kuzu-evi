import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Utensils, MapPin, Phone } from 'lucide-react';

const tabs = [
  { href: '#', icon: Home, label: 'Baş' },
  { href: '#menu', icon: Utensils, label: 'Menü' },
  { href: '#location', icon: MapPin, label: 'Yol' },
  { href: 'tel:+905308489060', icon: Phone, label: 'Ara', external: true }
];

function currentSection(): number {
  const ids = ['#', '#menu', '#location'];
  const pos = window.scrollY + window.innerHeight * 0.4;
  let active = 0;
  ids.forEach((id, i) => {
    if (id === '#') return;
    const el = document.querySelector(id);
    if (el && (el as HTMLElement).offsetTop <= pos) active = i;
  });
  return active;
}

export default function MobileNav() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => setActive(currentSection());
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[var(--color-primary)]/90 backdrop-blur-md border-t border-[var(--color-border)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="grid grid-cols-4 h-16 max-w-md mx-auto">
        {tabs.map((tab, i) => {
          const isActive = !tab.external && active === i;
          return (
            <a
              key={tab.label}
              href={tab.href}
              aria-label={tab.label}
              onClick={() => !tab.external && setActive(i)}
              className={`relative flex items-center justify-center transition-colors duration-300 ${
                isActive ? 'text-[var(--color-accent)]' : 'text-gray-500'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="mobile-nav-indicator"
                  className="absolute top-0 inset-x-4 h-0.5 bg-[var(--color-accent)]"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <tab.icon
                size={22}
                strokeWidth={isActive ? 2.2 : 1.8}
                className={tab.external ? 'text-[var(--color-accent)]' : ''}
              />
            </a>
          );
        })}
      </div>
    </nav>
  );
}
