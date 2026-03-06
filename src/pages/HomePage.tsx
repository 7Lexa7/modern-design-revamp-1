import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const stats = [
  { value: '15+', label: 'лет опыта' },
  { value: '2000+', label: 'выпускников' },
  { value: '12', label: 'направлений' },
  { value: '98%', label: 'довольных студентов' },
];

const features = [
  { icon: 'Palette', title: 'Живопись и рисунок', desc: 'Масло, акварель, графика — с нуля до профессионального уровня' },
  { icon: 'Camera', title: 'Фотография', desc: 'Портрет, пейзаж, репортаж. Работа со светом и постобработка' },
  { icon: 'Layers', title: 'Дизайн', desc: 'Графический и цифровой дизайн, иллюстрация, типографика' },
  { icon: 'Music', title: 'Скульптура', desc: 'Лепка из глины и пластилина, работа с различными материалами' },
];

const reviews = [
  { name: 'Анна М.', course: 'Живопись', rating: 5, text: 'Школа изменила мою жизнь! Никогда не думала, что смогу так рисовать. Преподаватели — настоящие мастера своего дела.', avatar: 'А' },
  { name: 'Дмитрий К.', course: 'Фотография', rating: 5, text: 'Прошёл курс фотографии — теперь веду собственную студию. Всё, что нужно знать, объясняют на практике.', avatar: 'Д' },
  { name: 'Мария С.', course: 'Дизайн', rating: 5, text: 'После курса дизайна получила работу в крупном агентстве. Портфолио, которое мы собрали за обучение, открыло все двери.', avatar: 'М' },
  { name: 'Игорь П.', course: 'Скульптура', rating: 4, text: 'Потрясающая атмосфера и профессиональное оборудование. Каждое занятие — это маленькое открытие.', avatar: 'И' },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon 
          key={i} 
          name="Star" 
          size={14} 
          className={i < rating ? 'text-gold fill-gold' : 'text-muted-foreground'} 
        />
      ))}
    </div>
  );
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => {
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div ref={heroRef} className="absolute inset-0 will-change-transform">
          <img
            src="https://cdn.poehali.dev/projects/f836a67a-a8be-4af0-8a66-d2f5ea2f50dd/files/3807cb5c-23d4-4b8d-a09a-5b6357811973.jpg"
            alt="Монпарнас школа искусств"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-violet/10 blur-3xl animate-float pointer-events-none" />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-gold/10 blur-2xl animate-float pointer-events-none" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-6 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-gold text-xs font-golos tracking-widest uppercase">Школа искусств · Москва</span>
            </div>
            
            <h1 className="font-cormorant text-7xl md:text-8xl font-light leading-[0.9] mb-6 opacity-0 animate-fade-in animate-delay-100">
              <span className="text-foreground">Рас&shy;крой</span>
              <br />
              <span className="text-gradient-gold italic">свой</span>
              <br />
              <span className="text-foreground">талант</span>
            </h1>

            <p className="font-golos text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg opacity-0 animate-fade-in animate-delay-300">
              Монпарнас — место, где рождается искусство. 15 лет мы помогаем людям открыть в себе художника, фотографа, дизайнера.
            </p>

            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in animate-delay-400">
              <button
                onClick={() => onNavigate('courses')}
                className="btn-gold px-8 py-3.5 rounded-full font-golos font-semibold text-sm tracking-wide"
              >
                Смотреть курсы
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="btn-outline-gold px-8 py-3.5 rounded-full font-golos text-sm tracking-wide flex items-center gap-2"
              >
                О школе
                <Icon name="ArrowRight" size={15} />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-float">
          <span className="text-xs font-golos tracking-widest text-muted-foreground uppercase">Scroll</span>
          <Icon name="ChevronDown" size={16} className="text-muted-foreground" />
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-cormorant text-5xl font-semibold text-gradient-gold mb-1">{s.value}</div>
                <div className="font-golos text-sm text-muted-foreground tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold text-xs font-golos tracking-widest uppercase">Направления</span>
            <h2 className="font-cormorant text-5xl font-light mt-3 text-foreground">
              Чему мы учим
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <div
                key={i}
                className="card-glass card-glow rounded-2xl p-6 transition-all duration-400 cursor-pointer group"
                onClick={() => onNavigate('courses')}
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5 group-hover:bg-gold/15 transition-colors">
                  <Icon name={f.icon} fallback="Palette" size={22} className="text-gold" />
                </div>
                <h3 className="font-cormorant text-xl font-semibold mb-2 text-foreground">{f.title}</h3>
                <p className="font-golos text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                <div className="mt-4 flex items-center gap-1.5 text-gold text-xs font-golos group-hover:gap-3 transition-all">
                  Подробнее <Icon name="ArrowRight" size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="py-8 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-3 rounded-3xl overflow-hidden">
            <div className="col-span-2 row-span-2 relative group cursor-pointer overflow-hidden rounded-l-3xl h-80" onClick={() => onNavigate('gallery')}>
              <img
                src="https://cdn.poehali.dev/projects/f836a67a-a8be-4af0-8a66-d2f5ea2f50dd/files/3807cb5c-23d4-4b8d-a09a-5b6357811973.jpg"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="gallery"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent flex items-end p-6">
                <span className="font-cormorant text-2xl text-foreground italic">Атмосфера творчества</span>
              </div>
            </div>
            <div className="relative group cursor-pointer overflow-hidden h-[9.5rem]" onClick={() => onNavigate('gallery')}>
              <img
                src="https://cdn.poehali.dev/projects/f836a67a-a8be-4af0-8a66-d2f5ea2f50dd/files/77bdee64-d408-4406-95c7-a55e5044f1ed.jpg"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="gallery"
              />
            </div>
            <div className="relative group cursor-pointer overflow-hidden h-[9.5rem] rounded-br-3xl" onClick={() => onNavigate('gallery')}>
              <img
                src="https://cdn.poehali.dev/projects/f836a67a-a8be-4af0-8a66-d2f5ea2f50dd/files/ca1594a0-45ec-4c4a-82fc-ef5c97388d32.jpg"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="gallery"
              />
            </div>
          </div>
          <div className="text-center mt-6">
            <button onClick={() => onNavigate('gallery')} className="btn-outline-gold px-6 py-2.5 rounded-full text-sm font-golos">
              Смотреть всю галерею
            </button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold text-xs font-golos tracking-widest uppercase">Отзывы</span>
            <h2 className="font-cormorant text-5xl font-light mt-3 text-foreground">
              Говорят студенты
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="card-glass rounded-2xl p-6 card-glow transition-all duration-400">
                <StarRating rating={r.rating} />
                <p className="font-golos text-sm text-muted-foreground leading-relaxed mt-4 mb-5 italic">
                  «{r.text}»
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-violet flex items-center justify-center text-background font-golos font-bold text-sm">
                    {r.avatar}
                  </div>
                  <div>
                    <div className="font-golos font-semibold text-sm text-foreground">{r.name}</div>
                    <div className="font-golos text-xs text-muted-foreground">{r.course}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="card-glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet/10 to-gold/5 pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-cormorant text-5xl md:text-6xl font-light text-foreground mb-4">
                Готов начать <span className="text-gradient-gold italic">своё</span> путешествие?
              </h2>
              <p className="font-golos text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
                Первое занятие — бесплатно. Приходи и почувствуй атмосферу Монпарнаса.
              </p>
              <button
                onClick={() => onNavigate('enroll')}
                className="btn-gold px-10 py-4 rounded-full font-golos font-semibold text-sm tracking-wide inline-flex items-center gap-2"
              >
                Записаться на пробное занятие
                <Icon name="ArrowRight" size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
              <span className="text-background font-cormorant font-bold text-base leading-none">М</span>
            </div>
            <span className="font-cormorant text-lg tracking-widest">МОНПАРНАС</span>
          </div>
          <p className="font-golos text-xs text-muted-foreground text-center">
            © 2024 Школа искусств Монпарнас · Москва · montparnas.ru
          </p>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="tel:+74951234567" className="font-golos text-sm hover:text-gold transition-colors">+7 (495) 123-45-67</a>
          </div>
        </div>
      </footer>
    </div>
  );
}