import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HERO_IMG = 'https://cdn.poehali.dev/projects/f836a67a-a8be-4af0-8a66-d2f5ea2f50dd/files/7518d156-258b-4fc6-affa-7fb8a437df12.jpg';

const stats = [
  { value: '10+', label: 'лет опыта' },
  { value: '300+', label: 'выпускников' },
  { value: '9', label: 'программ обучения' },
  { value: '5', label: 'ведущих педагогов' },
];

const reasons = [
  {
    icon: 'ShieldCheck',
    title: 'Избавиться от зажимов',
    desc: 'Научитесь владеть голосом, телом и пространством — без страха и скованности.',
  },
  {
    icon: 'Mic',
    title: 'Публичные выступления',
    desc: 'Аудитория будет жадно ловить каждое ваше слово. Вы станете оратором.',
  },
  {
    icon: 'Film',
    title: 'Работа в кино',
    desc: 'Начните сниматься в кино и на телевидении — мы даём реальные инструменты.',
  },
  {
    icon: 'Users',
    title: 'Творческая среда',
    desc: 'Атмосфера профессионалов и единомышленников, которая вдохновляет каждый день.',
  },
  {
    icon: 'Star',
    title: 'Отточить мастерство',
    desc: 'Для профессионалов — углублённые курсы и уникальные мастер-классы.',
  },
  {
    icon: 'TrendingUp',
    title: 'Самореализация',
    desc: 'Раскройте таланты и получите дополнительные возможности в профессии.',
  },
];

const teachers = [
  { name: 'Родион Овчинников', role: 'Мастер-курс', school: 'МХАТ' },
  { name: 'Александр Рапопорт', role: 'Авторский тренинг', school: 'ВТУ им. Щукина' },
  { name: 'Данила Дунаев', role: 'Мастер-курс', school: 'ВГИК' },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${HERO_IMG})`,
            transform: `translateY(${scrollY * 0.3}px)`,
            willChange: 'transform',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

        {/* Film grain overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }} />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Pre-title */}
          <div className="flex items-center justify-center gap-4 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="h-px w-12 bg-gold/50" />
            <span className="text-gold/80 text-[10px] tracking-[0.4em] uppercase font-golos">
              Москва · Малая Лубянка, 16
            </span>
            <div className="h-px w-12 bg-gold/50" />
          </div>

          <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none mb-2 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Академия
          </h1>
          <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-bold italic text-gradient-gold leading-none mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.55s' }}>
            кино
          </h1>

          <div className="flex items-center justify-center gap-3 mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <span className="text-gold/60 text-2xl font-playfair italic">—</span>
            <span className="font-playfair text-2xl md:text-3xl text-white/80 tracking-wider">Montparnas</span>
            <span className="text-gold/60 text-2xl font-playfair italic">—</span>
          </div>

          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12 opacity-0 animate-fade-in font-golos" style={{ animationDelay: '0.85s' }}>
            Авторские методики педагогов МХАТ, Щукинского, ВГИК.<br />
            Интенсивная подготовка актёров для кино и телевидения.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
            <button
              onClick={() => onNavigate('courses')}
              className="btn-gold px-10 py-4 text-xs tracking-widest uppercase font-semibold font-golos"
            >
              Выбрать курс
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="btn-outline-gold px-10 py-4 text-xs tracking-widest uppercase font-golos"
            >
              Об академии
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-fade-in" style={{ animationDelay: '1.4s' }}>
          <span className="text-[9px] tracking-[0.3em] uppercase text-white/50 font-golos">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent" />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-black border-y border-gold/10 py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-playfair text-4xl md:text-5xl font-bold text-gradient-gold mb-1">{s.value}</div>
              <div className="text-white/40 text-xs tracking-widest uppercase font-golos">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ЗАЧЕМ */}
      <section className="py-28 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-8 bg-gold/40" />
              <span className="text-gold/60 text-[10px] tracking-[0.4em] uppercase font-golos">Для кого</span>
              <div className="h-px w-8 bg-gold/40" />
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Академия открыта для всех,<br />
              <span className="italic text-gradient-gold">кто готов меняться</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto font-golos">
              Наша программа ориентирована не только на профессионалов —
              здесь каждый найдёт путь к себе.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <div
                key={i}
                className="card-glass card-glow p-8 transition-all duration-500 group"
              >
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-black transition-all duration-300">
                  <Icon name={r.icon} size={18} />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-golos">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ПЕДАГОГИ */}
      <section className="py-24 px-6 bg-black/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-8 bg-gold/40" />
              <span className="text-gold/60 text-[10px] tracking-[0.4em] uppercase font-golos">Преподаватели</span>
              <div className="h-px w-8 bg-gold/40" />
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
              Высококлассные педагоги<br />
              <span className="italic text-gradient-gold">театральных ВУЗов Москвы</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {teachers.map((t, i) => (
              <div key={i} className="border border-gold/15 p-8 hover:border-gold/30 transition-all duration-300 group text-center">
                <div className="w-16 h-16 border border-gold/20 flex items-center justify-center mx-auto mb-5 group-hover:border-gold/50 transition-all">
                  <Icon name="User" size={24} className="text-gold/40" />
                </div>
                <div className="text-[9px] tracking-[0.3em] uppercase text-gold/50 font-golos mb-2">{t.school}</div>
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-1">{t.name}</h3>
                <p className="text-muted-foreground text-xs font-golos">{t.role}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground/60 text-sm font-golos italic">
            А также педагоги ВТУ им. Вахтангова, ГИТИС и других ведущих театральных школ
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Начните свой путь<br />
            <span className="italic text-gradient-gold">в кино сегодня</span>
          </h2>
          <p className="text-muted-foreground mb-10 font-golos leading-relaxed">
            Запишитесь на бесплатную консультацию и узнайте, какой курс подойдёт именно вам.
            Мы находимся в Москве, ул. Малая Лубянка, дом 16.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('enroll')}
              className="btn-gold px-10 py-4 text-xs tracking-widest uppercase font-semibold font-golos"
            >
              Записаться на курс
            </button>
            <a
              href="tel:+79153279755"
              className="btn-outline-gold px-10 py-4 text-xs tracking-widest uppercase font-golos flex items-center justify-center gap-2"
            >
              <Icon name="Phone" size={14} />
              +7 (915) 327-97-55
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gold/10 py-12 px-6 bg-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-playfair font-bold text-gold text-lg tracking-widest uppercase mb-1">Montparnas</div>
            <div className="text-white/30 text-xs font-golos">Академия кино · Москва</div>
          </div>
          <div className="flex flex-col items-center md:items-end gap-1">
            <a href="mailto:info@montparnas.ru" className="text-white/40 hover:text-gold transition-colors text-sm font-golos">info@montparnas.ru</a>
            <a href="tel:+79153279755" className="text-white/40 hover:text-gold transition-colors text-sm font-golos">+7 (915) 327-97-55</a>
            <div className="text-white/25 text-xs font-golos">ул. Малая Лубянка, дом 16</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
