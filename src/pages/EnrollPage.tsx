import { useState } from 'react';
import Icon from '@/components/ui/icon';

const steps = [
  { num: 1, title: 'Выбери курс', desc: 'Из 8 направлений' },
  { num: 2, title: 'Заполни заявку', desc: 'Займёт 2 минуты' },
  { num: 3, title: 'Пробный урок', desc: 'Бесплатно' },
  { num: 4, title: 'Стань студентом', desc: 'Добро пожаловать!' },
];

const courseOptions = [
  'Масляная живопись', 'Акварель', 'Портретная фотография', 'Уличная фотография',
  'Графический дизайн', 'Скульптура из глины', 'Рисунок для детей', 'Цифровая иллюстрация',
];

export default function EnrollPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', course: '', level: '', message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6 animate-scale-in">
            <Icon name="CheckCircle" size={40} className="text-gold" />
          </div>
          <h2 className="font-cormorant text-4xl font-light mb-4 animate-fade-in">
            Заявка отправлена!
          </h2>
          <p className="font-golos text-muted-foreground leading-relaxed animate-fade-in animate-delay-100">
            Мы свяжемся с тобой в ближайшее время и договоримся о пробном занятии. Добро пожаловать в Монпарнас!
          </p>
          <div className="mt-6 p-4 card-glass rounded-xl text-sm font-golos text-muted-foreground">
            <span className="text-gold">📞</span> Если хочешь связаться сейчас: <a href="tel:+74951234567" className="text-gold hover:underline">+7 (495) 123-45-67</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-4">
          <span className="text-gold text-xs font-golos tracking-widest uppercase">Запись</span>
        </div>
        <h1 className="font-cormorant text-6xl md:text-7xl font-light text-center mb-4">
          Стать <span className="text-gradient-gold italic">студентом</span>
        </h1>
        <p className="font-golos text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Первое занятие — бесплатно и ни к чему не обязывает. Просто приходи и попробуй.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {steps.map((s, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-3 font-cormorant text-xl font-semibold text-gold">
                {s.num}
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute mt-6 ml-24 w-full h-px bg-gradient-to-r from-gold/30 to-transparent" />
              )}
              <div className="font-golos font-semibold text-sm text-foreground mb-1">{s.title}</div>
              <div className="font-golos text-xs text-muted-foreground">{s.desc}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="card-glass rounded-3xl p-8">
              <h2 className="font-cormorant text-3xl font-light mb-6 text-foreground">Заявка на обучение</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-golos text-muted-foreground mb-1.5 tracking-wide">Имя *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ваше имя"
                      className="w-full bg-muted border border-border rounded-xl px-4 py-3 font-golos text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-golos text-muted-foreground mb-1.5 tracking-wide">Телефон *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full bg-muted border border-border rounded-xl px-4 py-3 font-golos text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-golos text-muted-foreground mb-1.5 tracking-wide">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-muted border border-border rounded-xl px-4 py-3 font-golos text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-golos text-muted-foreground mb-1.5 tracking-wide">Интересующий курс</label>
                  <select
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                    className="w-full bg-muted border border-border rounded-xl px-4 py-3 font-golos text-sm text-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                  >
                    <option value="">Выберите курс</option>
                    {courseOptions.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-golos text-muted-foreground mb-1.5 tracking-wide">Ваш уровень</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['С нуля', 'Начинающий', 'Есть опыт'].map((level) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setForm(prev => ({ ...prev, level }))}
                        className={`py-2 rounded-xl font-golos text-xs border transition-all ${
                          form.level === level
                            ? 'border-gold bg-gold/10 text-gold'
                            : 'border-border text-muted-foreground hover:border-gold/30'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-golos text-muted-foreground mb-1.5 tracking-wide">Комментарий</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Расскажите о себе или задайте вопрос..."
                    className="w-full bg-muted border border-border rounded-xl px-4 py-3 font-golos text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all resize-none"
                  />
                </div>

                <button type="submit" className="btn-gold w-full py-4 rounded-xl font-golos font-semibold text-sm tracking-wide flex items-center justify-center gap-2">
                  Отправить заявку
                  <Icon name="Send" size={15} />
                </button>

                <p className="font-golos text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="card-glass rounded-2xl p-6">
              <h3 className="font-cormorant text-xl font-semibold mb-4">Контакты</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={16} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <div className="font-golos text-sm text-foreground">Адрес</div>
                    <div className="font-golos text-xs text-muted-foreground">Москва, ул. Тверская, 18</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={16} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <div className="font-golos text-sm text-foreground">Телефон</div>
                    <a href="tel:+74951234567" className="font-golos text-xs text-gold hover:underline">+7 (495) 123-45-67</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={16} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <div className="font-golos text-sm text-foreground">Email</div>
                    <a href="mailto:info@montparnas.ru" className="font-golos text-xs text-gold hover:underline">info@montparnas.ru</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={16} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <div className="font-golos text-sm text-foreground">Режим работы</div>
                    <div className="font-golos text-xs text-muted-foreground">Пн–Пт: 10:00–21:00</div>
                    <div className="font-golos text-xs text-muted-foreground">Сб–Вс: 10:00–18:00</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-glass rounded-2xl p-6">
              <h3 className="font-cormorant text-xl font-semibold mb-4">Почему Монпарнас?</h3>
              <div className="space-y-3">
                {[
                  'Первое занятие бесплатно',
                  'Профессиональное оборудование',
                  'Группы по 6–8 человек',
                  'Материалы включены в стоимость',
                  'Гибкое расписание',
                  'Выставки и мероприятия для студентов',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <Icon name="Check" size={14} className="text-gold shrink-0" />
                    <span className="font-golos text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
