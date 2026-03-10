import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface ReviewsPageProps {
  onNavigate: (page: string) => void;
  user: { name: string; email: string } | null;
}

const allReviews = [
  {
    name: 'Мария Соколова',
    role: 'Базовый курс актёрского мастерства',
    text: 'Пришла совершенно зажатой, боялась даже говорить на публике. После трёх месяцев в Монпарнасе выступаю перед аудиторией без страха. Педагоги — настоящие профессионалы!',
    rating: 5,
    avatar: 'М',
    date: 'Февраль 2026',
  },
  {
    name: 'Дмитрий Волков',
    role: 'Мастер-курс Данилы Дунаева',
    text: 'Уникальный опыт работы с настоящим мастером кино. После курса получил первую роль в сериале. Рекомендую всем, кто серьёзно хочет работать в кино.',
    rating: 5,
    avatar: 'Д',
    date: 'Январь 2026',
  },
  {
    name: 'Анна Кириллова',
    role: 'Школа Юного Актёра',
    text: 'Отдала дочь в Школу Юного Актёра — не узнаю ребёнка. Стала уверенной, раскованной, с удовольствием выступает на сцене. Спасибо команде Монпарнаса!',
    rating: 5,
    avatar: 'А',
    date: 'Декабрь 2025',
  },
  {
    name: 'Игорь Петров',
    role: 'Актёрский интенсив',
    text: 'Интенсив дал мне больше, чем я ожидал. За две недели — колоссальный прогресс. Метод Ли Страсберга в исполнении педагогов академии — это нечто особенное.',
    rating: 5,
    avatar: 'И',
    date: 'Ноябрь 2025',
  },
  {
    name: 'Светлана Орлова',
    role: 'Продвинутый курс актёрского мастерства',
    text: 'Второй год в академии. Здесь настоящая творческая семья. Каждое занятие — открытие. Я нашла себя именно в Монпарнасе.',
    rating: 5,
    avatar: 'С',
    date: 'Октябрь 2025',
  },
  {
    name: 'Роман Белов',
    role: 'Подготовка в театральные ВУЗы',
    text: 'Благодаря курсу подготовки поступил в ГИТИС с первого раза! Педагоги работали с каждым индивидуально. Очень благодарен всей команде.',
    rating: 5,
    avatar: 'Р',
    date: 'Сентябрь 2025',
  },
];

export default function ReviewsPage({ onNavigate, user }: ReviewsPageProps) {
  const [reviews, setReviews] = useState(allReviews);
  const [form, setForm] = useState({ course: '', text: '', rating: 5 });
  const [submitted, setSubmitted] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.text.trim() || !form.course.trim()) return;
    const newReview = {
      name: user!.name,
      role: form.course,
      text: form.text,
      rating: form.rating,
      avatar: user!.name.charAt(0).toUpperCase(),
      date: 'Март 2026',
    };
    setReviews([newReview, ...reviews]);
    setSubmitted(true);
    setForm({ course: '', text: '', rating: 5 });
  };

  return (
    <div className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors font-golos text-sm mb-8"
          >
            <Icon name="ArrowLeft" size={14} />
            На главную
          </button>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/60" />
            <span className="text-gold text-xs font-golos tracking-widest uppercase">Отзывы студентов</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/60" />
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-light text-foreground mb-4">
            Что говорят <span className="text-gradient-gold italic">наши студенты</span>
          </h1>
          <p className="text-muted-foreground font-golos max-w-xl mx-auto">
            Реальные истории людей, которые изменили себя в стенах академии Монпарнас
          </p>
        </div>

        {/* Write review block */}
        {user ? (
          submitted ? (
            <div className="card-glass rounded-2xl p-8 mb-10 text-center animate-scale-in">
              <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={24} className="text-gold" />
              </div>
              <h3 className="font-playfair text-2xl font-light text-foreground mb-2">Спасибо за отзыв!</h3>
              <p className="text-muted-foreground font-golos text-sm">Ваш отзыв опубликован и уже виден другим студентам</p>
            </div>
          ) : (
            <div className="card-glass rounded-2xl p-8 mb-10 animate-fade-in">
              <h2 className="font-playfair text-2xl font-light text-foreground mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                  <Icon name="Pencil" size={14} className="text-gold" />
                </div>
                Оставить отзыв
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-golos text-muted-foreground mb-1.5">Курс</label>
                  <input
                    type="text"
                    value={form.course}
                    onChange={(e) => setForm(p => ({ ...p, course: e.target.value }))}
                    placeholder="Название курса, который вы прошли"
                    className="w-full bg-muted border border-border rounded-xl px-4 py-3 font-golos text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-golos text-muted-foreground mb-2">Оценка</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setForm(p => ({ ...p, rating: star }))}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="transition-transform hover:scale-110"
                      >
                        <Icon
                          name="Star"
                          size={24}
                          className={star <= (hoverRating || form.rating) ? 'text-gold' : 'text-muted-foreground'}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-golos text-muted-foreground mb-1.5">Ваш отзыв</label>
                  <textarea
                    value={form.text}
                    onChange={(e) => setForm(p => ({ ...p, text: e.target.value }))}
                    placeholder="Расскажите о вашем опыте в академии..."
                    rows={4}
                    className="w-full bg-muted border border-border rounded-xl px-4 py-3 font-golos text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-gold px-8 py-3 rounded-full font-golos font-semibold text-sm"
                >
                  Опубликовать отзыв
                </button>
              </form>
            </div>
          )
        ) : (
          <div className="card-glass rounded-2xl p-8 mb-10 text-center">
            <Icon name="Lock" size={28} className="text-gold/60 mx-auto mb-4" />
            <h3 className="font-playfair text-xl font-light text-foreground mb-2">Хотите оставить отзыв?</h3>
            <p className="text-muted-foreground font-golos text-sm mb-5">Войдите или зарегистрируйтесь — это займёт минуту</p>
            <button
              onClick={() => onNavigate('login')}
              className="btn-gold px-8 py-3 rounded-full font-golos font-semibold text-sm"
            >
              Войти
            </button>
          </div>
        )}

        {/* Reviews list */}
        <div className="space-y-5">
          {reviews.map((r, i) => (
            <div key={i} className="card-glass rounded-2xl p-7 animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold/40 to-gold-dark/40 border border-gold/30 flex items-center justify-center text-gold font-playfair font-bold text-lg flex-shrink-0">
                  {r.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <span className="font-golos font-semibold text-foreground">{r.name}</span>
                    <span className="font-golos text-xs text-muted-foreground flex-shrink-0">{r.date}</span>
                  </div>
                  <p className="font-golos text-xs text-gold mb-3">{r.role}</p>
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: r.rating }).map((_, si) => (
                      <Icon key={si} name="Star" size={12} className="text-gold" />
                    ))}
                  </div>
                  <p className="font-golos text-sm text-muted-foreground leading-relaxed">{r.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
