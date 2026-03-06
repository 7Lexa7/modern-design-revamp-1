import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface CoursesPageProps {
  onNavigate: (page: string) => void;
}

const categories = ['Все', 'Живопись', 'Фотография', 'Дизайн', 'Скульптура', 'Для детей'];

const courses = [
  {
    id: 1, title: 'Масляная живопись', category: 'Живопись',
    duration: '3 месяца', schedule: 'Вт, Чт 19:00', price: '12 000 ₽/мес',
    level: 'Любой уровень', rating: 4.9, reviews: 48,
    desc: 'Классическая техника масляной живописи от основ до создания полноценных картин. Изучение колористики, композиции и работы со светом.',
    tags: ['Портрет', 'Пейзаж', 'Натюрморт'],
    color: 'from-amber-500/20 to-transparent',
  },
  {
    id: 2, title: 'Акварель', category: 'Живопись',
    duration: '2 месяца', schedule: 'Пн, Ср 18:00', price: '9 000 ₽/мес',
    level: 'С нуля', rating: 4.8, reviews: 35,
    desc: 'Техника акварели — от простых упражнений до многослойных акварельных работ. Идеально для начинающих.',
    tags: ['Ботаника', 'Городской пейзаж', 'Иллюстрация'],
    color: 'from-blue-500/15 to-transparent',
  },
  {
    id: 3, title: 'Портретная фотография', category: 'Фотография',
    duration: '2 месяца', schedule: 'Сб 12:00', price: '11 000 ₽/мес',
    level: 'Базовый', rating: 5.0, reviews: 29,
    desc: 'Работа с естественным и студийным светом, постановка кадра, работа с моделью. Обработка в Lightroom и Photoshop.',
    tags: ['Свет', 'Постобработка', 'Студия'],
    color: 'from-purple-500/15 to-transparent',
  },
  {
    id: 4, title: 'Уличная фотография', category: 'Фотография',
    duration: '1.5 месяца', schedule: 'Вс 11:00', price: '8 500 ₽/мес',
    level: 'Любой уровень', rating: 4.7, reviews: 22,
    desc: 'Репортажная съёмка, стрит-фото, работа в движении. Выезды по Москве с опытным преподавателем.',
    tags: ['Репортаж', 'Стрит', 'Москва'],
    color: 'from-green-500/15 to-transparent',
  },
  {
    id: 5, title: 'Графический дизайн', category: 'Дизайн',
    duration: '4 месяца', schedule: 'Пн, Ср, Пт 19:00', price: '14 000 ₽/мес',
    level: 'С нуля', rating: 4.9, reviews: 41,
    desc: 'Adobe Illustrator, Photoshop, InDesign. Создание логотипов, брендинг, полиграфия. Сборка портфолио.',
    tags: ['Брендинг', 'Логотип', 'Adobe'],
    color: 'from-rose-500/15 to-transparent',
  },
  {
    id: 6, title: 'Скульптура из глины', category: 'Скульптура',
    duration: '2 месяца', schedule: 'Сб, Вс 13:00', price: '10 000 ₽/мес',
    level: 'Любой уровень', rating: 4.8, reviews: 18,
    desc: 'Лепка рук, лиц, фигур. Работа с гончарным кругом. Обжиг и роспись готовых работ.',
    tags: ['Лепка', 'Гончарство', 'Обжиг'],
    color: 'from-orange-500/15 to-transparent',
  },
  {
    id: 7, title: 'Рисунок для детей', category: 'Для детей',
    duration: 'Постоянный', schedule: 'Сб 10:00, 12:00', price: '7 000 ₽/мес',
    level: '5–12 лет', rating: 5.0, reviews: 56,
    desc: 'Развиваем творческое мышление, мелкую моторику и художественный вкус у детей в игровой форме.',
    tags: ['Акварель', 'Карандаш', 'Игра'],
    color: 'from-yellow-500/15 to-transparent',
  },
  {
    id: 8, title: 'Цифровая иллюстрация', category: 'Дизайн',
    duration: '3 месяца', schedule: 'Вт, Чт 20:00', price: '13 000 ₽/мес',
    level: 'Базовый', rating: 4.9, reviews: 31,
    desc: 'Procreate, Photoshop. Создание персонажей, иллюстраций для книг, NFT-арта. Работа с коммерческими заказами.',
    tags: ['Procreate', 'Персонажи', 'Иллюстрация'],
    color: 'from-indigo-500/15 to-transparent',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      <Icon name="Star" size={12} className="text-gold fill-gold" />
      <span className="font-golos text-xs text-gold font-semibold">{rating}</span>
    </div>
  );
}

export default function CoursesPage({ onNavigate }: CoursesPageProps) {
  const [activeCategory, setActiveCategory] = useState('Все');

  const filtered = activeCategory === 'Все' ? courses : courses.filter(c => c.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-4">
          <span className="text-gold text-xs font-golos tracking-widest uppercase">Обучение</span>
        </div>
        <h1 className="font-cormorant text-6xl md:text-7xl font-light text-center mb-4">
          Наши <span className="text-gradient-gold italic">курсы</span>
        </h1>
        <p className="font-golos text-muted-foreground text-center max-w-xl mx-auto mb-12">
          8 направлений, для любого уровня подготовки. Начни с пробного занятия бесплатно.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-golos text-sm transition-all duration-300 ${
                activeCategory === cat
                  ? 'btn-gold'
                  : 'btn-outline-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((course) => (
            <div
              key={course.id}
              className="card-glass rounded-2xl overflow-hidden card-glow transition-all duration-400 group flex flex-col"
            >
              <div className={`h-2 bg-gradient-to-r ${course.color} from-gold/30`} />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-golos">
                    {course.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <StarRating rating={course.rating} />
                    <span className="text-muted-foreground text-xs font-golos">({course.reviews})</span>
                  </div>
                </div>

                <h3 className="font-cormorant text-2xl font-semibold mb-2 text-foreground">{course.title}</h3>
                <p className="font-golos text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{course.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {course.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-xs font-golos">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-3 mb-5 border-t border-border pt-5">
                  <div>
                    <div className="text-muted-foreground text-xs font-golos mb-0.5">Длительность</div>
                    <div className="text-foreground text-xs font-golos font-medium">{course.duration}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs font-golos mb-0.5">Расписание</div>
                    <div className="text-foreground text-xs font-golos font-medium">{course.schedule}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs font-golos mb-0.5">Уровень</div>
                    <div className="text-foreground text-xs font-golos font-medium">{course.level}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="font-cormorant text-2xl font-semibold text-gradient-gold">{course.price}</div>
                  <button
                    onClick={() => onNavigate('enroll')}
                    className="btn-gold px-5 py-2.5 rounded-full font-golos text-sm"
                  >
                    Записаться
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="font-golos text-muted-foreground mb-4">Не нашли подходящий курс? Мы можем разработать индивидуальную программу</p>
          <button onClick={() => onNavigate('enroll')} className="btn-outline-gold px-6 py-3 rounded-full font-golos text-sm">
            Связаться с нами
          </button>
        </div>
      </div>
    </div>
  );
}
