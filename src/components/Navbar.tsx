import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isLoggedIn: boolean;
}

const navItems = [
  { id: 'home', label: 'Главная' },
  { id: 'about', label: 'Об академии' },
  { id: 'courses', label: 'Курсы' },
  { id: 'enroll', label: 'Записаться' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-gold/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 group"
        >
          <div className="w-8 h-8 border border-gold/60 flex items-center justify-center text-gold font-playfair font-bold text-sm group-hover:bg-gold group-hover:text-black transition-all duration-300">
            M
          </div>
          <div className="text-left">
            <div className="text-gold font-playfair font-bold text-sm leading-none tracking-widest uppercase">
              Montparnas
            </div>
            <div className="text-foreground/40 text-[9px] tracking-[0.2em] uppercase leading-none mt-0.5">
              Академия кино
            </div>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-xs tracking-widest uppercase transition-all duration-300 ${
                currentPage === item.id
                  ? 'text-gold'
                  : 'text-foreground/50 hover:text-foreground'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+79153279755"
            className="text-foreground/40 hover:text-gold transition-colors text-xs tracking-wide"
          >
            +7 (915) 327-97-55
          </a>
          <button
            onClick={() => onNavigate('enroll')}
            className="btn-gold px-5 py-2 text-[10px] tracking-widest uppercase font-semibold"
          >
            Записаться
          </button>
        </div>

        <button
          className="md:hidden text-foreground/70 hover:text-gold transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gold/10 px-6 py-6 flex flex-col gap-5 animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { onNavigate(item.id); setMenuOpen(false); }}
              className={`text-left text-sm tracking-widest uppercase transition-colors ${
                currentPage === item.id ? 'text-gold' : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="section-divider my-1" />
          <a href="tel:+79153279755" className="text-foreground/40 text-sm">
            +7 (915) 327-97-55
          </a>
          <button
            onClick={() => { onNavigate('enroll'); setMenuOpen(false); }}
            className="btn-gold px-5 py-3 text-xs tracking-widest uppercase font-semibold w-full"
          >
            Записаться на курс
          </button>
        </div>
      )}
    </header>
  );
}
