import Icon from '@/components/ui/icon';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

const teachers = [
  { name: 'Елена Воронова', role: 'Преподаватель живописи', exp: '20 лет опыта', avatar: 'Е', color: 'from-gold to-gold-dark' },
  { name: 'Михаил Дорогов', role: 'Фотография и медиа', exp: '15 лет опыта', avatar: 'М', color: 'from-violet to-violet-dark' },
  { name: 'Светлана Кузнецова', role: 'Графический дизайн', exp: '12 лет опыта', avatar: 'С', color: 'from-gold-light to-gold' },
  { name: 'Андрей Белов', role: 'Скульптура и керамика', exp: '18 лет опыта', avatar: 'А', color: 'from-violet-light to-violet' },
];

const values = [
  { icon: 'Heart', title: 'Страсть к искусству', desc: 'Мы любим то, чему учим, и эта любовь передаётся студентам' },
  { icon: 'Users', title: 'Сообщество', desc: 'Монпарнас — это не просто школа, это семья творческих людей' },
  { icon: 'Award', title: 'Качество', desc: 'Только лучшие материалы, оборудование и методики обучения' },
  { icon: 'Zap', title: 'Развитие', desc: 'Постоянное обновление программ и внедрение новых техник' },
];

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 pb-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-4">
            <span className="text-gold text-xs font-golos tracking-widest uppercase">О нас</span>
          </div>
          <h1 className="font-cormorant text-6xl md:text-7xl font-light text-center mb-8">
            Место, где <span className="text-gradient-gold italic">рождается</span><br />искусство
          </h1>
          <p className="font-golos text-muted-foreground text-lg text-center max-w-2xl mx-auto leading-relaxed mb-16">
            С 2009 года мы помогаем людям раскрыть творческий потенциал. Монпарнас — 
            это пространство свободы, вдохновения и мастерства в самом сердце Москвы.
          </p>

          <div className="relative rounded-3xl overflow-hidden h-96 mb-24">
            <img
              src="https://cdn.poehali.dev/projects/f836a67a-a8be-4af0-8a66-d2f5ea2f50dd/files/ca1594a0-45ec-4c4a-82fc-ef5c97388d32.jpg"
              alt="Школа Монпарнас"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-xs font-golos tracking-widest uppercase">История</span>
              <h2 className="font-cormorant text-4xl font-light mt-3 mb-6 text-foreground">
                Как всё начиналось
              </h2>
              <p className="font-golos text-muted-foreground leading-relaxed mb-4">
                Школа была основана в 2009 году художником Николаем Паршиным. Вдохновлённый парижским кварталом Монпарнас — меккой художников начала XX века — он мечтал создать такое же живое творческое пространство в Москве.
              </p>
              <p className="font-golos text-muted-foreground leading-relaxed mb-4">
                Начав с небольшой студии и трёх преподавателей, сегодня Монпарнас — это 600 кв.м. творческих пространств, 12 направлений обучения и команда из 20 профессиональных педагогов.
              </p>
              <p className="font-golos text-muted-foreground leading-relaxed">
                За 15 лет через наши классы прошли более 2000 студентов. Многие из них стали профессиональными художниками, дизайнерами, фотографами.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="card-glass rounded-2xl p-6 text-center">
                <div className="font-cormorant text-5xl font-semibold text-gradient-gold mb-2">2009</div>
                <div className="font-golos text-sm text-muted-foreground">год основания</div>
              </div>
              <div className="card-glass rounded-2xl p-6 text-center">
                <div className="font-cormorant text-5xl font-semibold text-gradient-gold mb-2">600</div>
                <div className="font-golos text-sm text-muted-foreground">кв.м. студий</div>
              </div>
              <div className="card-glass rounded-2xl p-6 text-center">
                <div className="font-cormorant text-5xl font-semibold text-gradient-gold mb-2">20</div>
                <div className="font-golos text-sm text-muted-foreground">преподавателей</div>
              </div>
              <div className="card-glass rounded-2xl p-6 text-center">
                <div className="font-cormorant text-5xl font-semibold text-gradient-gold mb-2">12</div>
                <div className="font-golos text-sm text-muted-foreground">направлений</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-golos tracking-widest uppercase">Ценности</span>
            <h2 className="font-cormorant text-4xl font-light mt-3 text-foreground">Во что мы верим</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div key={i} className="card-glass rounded-2xl p-6 card-glow transition-all duration-400">
                <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                  <Icon name={v.icon} fallback="Heart" size={20} className="text-gold" />
                </div>
                <h3 className="font-cormorant text-xl font-semibold mb-2">{v.title}</h3>
                <p className="font-golos text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-golos tracking-widest uppercase">Команда</span>
            <h2 className="font-cormorant text-4xl font-light mt-3 text-foreground">Наши преподаватели</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {teachers.map((t, i) => (
              <div key={i} className="card-glass rounded-2xl p-6 text-center card-glow transition-all duration-400">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center mx-auto mb-4 text-background font-cormorant font-bold text-3xl shadow-lg`}>
                  {t.avatar}
                </div>
                <h3 className="font-golos font-semibold text-foreground mb-1">{t.name}</h3>
                <p className="font-golos text-sm text-gold mb-1">{t.role}</p>
                <p className="font-golos text-xs text-muted-foreground">{t.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 pb-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl font-light mb-4">Присоединяйся к нашей семье</h2>
          <p className="font-golos text-muted-foreground mb-8">Запишись на пробное занятие и почувствуй атмосферу Монпарнаса</p>
          <button onClick={() => onNavigate('enroll')} className="btn-gold px-8 py-3.5 rounded-full font-golos font-semibold text-sm tracking-wide inline-flex items-center gap-2">
            Стать студентом <Icon name="ArrowRight" size={15} />
          </button>
        </div>
      </section>
    </div>
  );
}
