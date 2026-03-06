import Icon from '@/components/ui/icon';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

const values = [
  { icon: 'GraduationCap', title: 'Профессионализм', desc: 'Педагоги ведущих театральных ВУЗов Москвы: МХАТ, ВТУ им. Щукина, ВГИК и других.' },
  { icon: 'Zap', title: 'Интенсивность', desc: 'Авторские методики обеспечивают быстрый прогресс даже для начинающих.' },
  { icon: 'Heart', title: 'Атмосфера', desc: 'Творческая среда единомышленников, где каждый вдохновляет друг друга.' },
  { icon: 'Target', title: 'Практика', desc: 'Реальные навыки для работы в кино, на телевидении и публичных выступлений.' },
];

const schools = ['МХАТ', 'ВТУ им. Щукина', 'ВГИК', 'ГИТИС', 'ВТУ им. Вахтангова'];

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="pt-24 pb-20 overflow-x-hidden">
      {/* HERO */}
      <section className="py-20 px-6 text-center relative">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(212,168,83,0.3) 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(212,168,83,0.3) 60px)',
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-8 bg-gold/40" />
            <span className="text-gold/60 text-[10px] tracking-[0.4em] uppercase font-golos">Об академии</span>
            <div className="h-px w-8 bg-gold/40" />
          </div>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground leading-tight mb-8">
            Академия кино<br />
            <span className="italic text-gradient-gold">Montparnas</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto font-golos">
            Уникальный образовательный проект, объединяющий Академию актёрского мастерства,
            Школу юного актёра и Мастер-курсы с ведущими представителями киноиндустрии.
          </p>
        </div>
      </section>

      {/* ОПИСАНИЕ */}
      <section className="py-20 px-6 bg-black/30">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
              Три направления<br />
              <span className="italic text-gradient-gold">одной академии</span>
            </h2>
            <div className="space-y-5">
              {[
                { title: 'Академия актёрского мастерства', desc: 'Базовый и продвинутый курсы для тех, кто хочет профессионально освоить актёрскую профессию.' },
                { title: 'Школа юного актёра', desc: 'Специальная программа для детей и подростков — раскрытие творческого потенциала с юных лет.' },
                { title: 'Мастер-курсы', desc: 'Уникальные курсы с ведущими представителями киноиндустрии. Голливудский метод, звёздные мастер-классы.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 border border-gold/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-gold/60" />
                  </div>
                  <div>
                    <div className="text-foreground font-semibold mb-1 font-golos">{item.title}</div>
                    <div className="text-muted-foreground text-sm font-golos leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-gold/15 p-10">
            <div className="text-center mb-8">
              <div className="font-playfair text-5xl font-bold text-gradient-gold mb-1">10+</div>
              <div className="text-white/40 text-xs tracking-widest uppercase font-golos">лет опыта</div>
            </div>
            <div className="section-divider mb-8" />
            <div className="text-center mb-8">
              <div className="font-playfair text-5xl font-bold text-gradient-gold mb-1">300+</div>
              <div className="text-white/40 text-xs tracking-widest uppercase font-golos">выпускников</div>
            </div>
            <div className="section-divider mb-8" />
            <div className="text-center">
              <p className="text-muted-foreground/70 text-sm font-golos italic leading-relaxed">
                «Наша цель — дать актуальные знания и практические навыки для развития в актёрской профессии и обычной жизни»
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ЦЕННОСТИ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-playfair text-4xl font-bold text-foreground">
              Наши <span className="italic text-gradient-gold">ценности</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div key={i} className="card-glass card-glow p-6 transition-all duration-500 group text-center">
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold mx-auto mb-5 group-hover:bg-gold group-hover:text-black transition-all duration-300">
                  <Icon name={v.icon} size={18} />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed font-golos">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ВУЗы */}
      <section className="py-16 px-6 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-8 bg-gold/40" />
            <span className="text-gold/60 text-[10px] tracking-[0.4em] uppercase font-golos">Педагоги из ВУЗов</span>
            <div className="h-px w-8 bg-gold/40" />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {schools.map((school, i) => (
              <div key={i} className="border border-gold/20 px-6 py-3 text-sm text-foreground/70 font-golos tracking-wider hover:border-gold/40 hover:text-foreground transition-all duration-300">
                {school}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* АДРЕС */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-8">
            Найдите нас <span className="italic text-gradient-gold">в Москве</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="border border-gold/15 p-6 text-center">
              <Icon name="MapPin" size={20} className="text-gold mx-auto mb-3" />
              <div className="text-xs tracking-widest uppercase text-muted-foreground font-golos mb-2">Адрес</div>
              <div className="text-foreground text-sm font-golos">г. Москва, ул. Малая Лубянка, дом 16</div>
            </div>
            <div className="border border-gold/15 p-6 text-center">
              <Icon name="Phone" size={20} className="text-gold mx-auto mb-3" />
              <div className="text-xs tracking-widest uppercase text-muted-foreground font-golos mb-2">Телефон</div>
              <a href="tel:+79153279755" className="text-foreground text-sm font-golos hover:text-gold transition-colors">+7 (915) 327-97-55</a>
            </div>
            <div className="border border-gold/15 p-6 text-center">
              <Icon name="Mail" size={20} className="text-gold mx-auto mb-3" />
              <div className="text-xs tracking-widest uppercase text-muted-foreground font-golos mb-2">Эл. почта</div>
              <a href="mailto:info@montparnas.ru" className="text-foreground text-sm font-golos hover:text-gold transition-colors">info@montparnas.ru</a>
            </div>
          </div>
          <button
            onClick={() => onNavigate('enroll')}
            className="btn-gold px-10 py-4 text-xs tracking-widest uppercase font-semibold font-golos"
          >
            Записаться на консультацию
          </button>
        </div>
      </section>
    </div>
  );
}
