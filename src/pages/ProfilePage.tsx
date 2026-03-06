import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface ProfilePageProps {
  user: { name: string; email: string };
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

const enrolledCourses = [
  {
    title: 'Базовый курс актёрского мастерства',
    progress: 65,
    nextLesson: 'Вт, 18 марта, 19:00',
    teacher: 'Родион Овчинников',
    color: 'from-gold/40 to-transparent',
  },
  {
    title: 'Мастер-курс Данилы Дунаева',
    progress: 30,
    nextLesson: 'Пн, 17 марта, 19:00',
    teacher: 'Данила Дунаев',
    color: 'from-violet/30 to-transparent',
  },
];

const achievements = [
  { icon: '🎬', title: 'Первая сцена', desc: 'Завершил первое занятие' },
  { icon: '⭐', title: 'Звезда группы', desc: 'Оценка 5.0 от преподавателя' },
  { icon: '🏆', title: 'Месяц в академии', desc: 'Обучается больше месяца' },
];

const recentActivities = [
  { action: 'Посетил занятие', course: 'Базовый курс актёрского мастерства', time: '2 часа назад', icon: 'CheckCircle' },
  { action: 'Получил оценку 5/5', course: 'Мастер-курс Данилы Дунаева', time: 'вчера', icon: 'Star' },
  { action: 'Записался на курс', course: 'Базовый курс актёрского мастерства', time: '3 дня назад', icon: 'BookOpen' },
];

export default function ProfilePage({ user, onLogout, onNavigate }: ProfilePageProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [editMode, setEditMode] = useState(false);
  const [editName, setEditName] = useState(user.name);

  const tabs = [
    { id: 'overview', label: 'Обзор', icon: 'LayoutDashboard' },
    { id: 'courses', label: 'Мои курсы', icon: 'BookOpen' },
    { id: 'achievements', label: 'Достижения', icon: 'Award' },
    { id: 'settings', label: 'Настройки', icon: 'Settings' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="card-glass rounded-3xl p-8 mb-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-background font-playfair font-bold text-3xl shadow-lg shadow-gold/20">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-background" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                {editMode ? (
                  <input
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="font-playfair text-3xl font-light bg-transparent border-b border-gold/50 focus:outline-none text-foreground"
                  />
                ) : (
                  <h1 className="font-playfair text-3xl font-light text-foreground">{editName}</h1>
                )}
                <button
                  onClick={() => setEditMode(!editMode)}
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  <Icon name={editMode ? 'Check' : 'Pencil'} size={15} />
                </button>
              </div>
              <p className="font-golos text-sm text-muted-foreground">{user.email}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-golos">Студент</span>
                <span className="px-3 py-1 rounded-full bg-violet/10 border border-violet/20 text-violet-light text-xs font-golos">2 активных курса</span>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all font-golos text-sm"
            >
              <Icon name="LogOut" size={15} />
              Выйти
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-golos text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gold text-background font-semibold'
                  : 'card-glass text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name={tab.icon} fallback="Circle" size={14} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-5">

              <div>
                <h2 className="font-playfair text-2xl font-light mb-4">Мои курсы</h2>
                <div className="space-y-4">
                  {enrolledCourses.map((c, i) => (
                    <div key={i} className="card-glass rounded-2xl p-5 overflow-hidden relative">
                      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${c.color}`} />
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-golos font-semibold text-foreground">{c.title}</h3>
                          <p className="font-golos text-xs text-muted-foreground mt-0.5">Педагог: {c.teacher}</p>
                        </div>
                        <span className="font-playfair text-2xl font-semibold text-gradient-gold">{c.progress}%</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden mb-4">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light transition-all duration-1000"
                          style={{ width: `${c.progress}%` }}
                        />
                      </div>
                      <div className="flex items-center gap-2 text-xs font-golos text-muted-foreground">
                        <Icon name="Calendar" size={12} className="text-gold" />
                        Следующее занятие: {c.nextLesson}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-playfair text-2xl font-light mb-4">Последняя активность</h2>
                <div className="card-glass rounded-2xl divide-y divide-border">
                  {recentActivities.map((a, i) => (
                    <div key={i} className="flex items-center gap-4 p-4">
                      <div className="w-9 h-9 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                        <Icon name={a.icon} fallback="Circle" size={15} className="text-gold" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-golos text-sm text-foreground">{a.action}</p>
                        <p className="font-golos text-xs text-gold truncate">{a.course}</p>
                      </div>
                      <span className="font-golos text-xs text-muted-foreground shrink-0">{a.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="card-glass rounded-2xl p-5">
                <h3 className="font-playfair text-xl font-light mb-4">Статистика</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Занятий посещено', value: '24' },
                    { label: 'Часов обучения', value: '48' },
                    { label: 'Выполнено заданий', value: '18' },
                    { label: 'Средняя оценка', value: '4.8' },
                  ].map((s, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <span className="font-golos text-sm text-muted-foreground">{s.label}</span>
                      <span className="font-playfair text-xl font-semibold text-gradient-gold">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-glass rounded-2xl p-5">
                <h3 className="font-playfair text-xl font-light mb-4">Достижения</h3>
                <div className="space-y-3">
                  {achievements.map((a, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-2xl">{a.icon}</span>
                      <div>
                        <p className="font-golos text-sm font-semibold text-foreground">{a.title}</p>
                        <p className="font-golos text-xs text-muted-foreground">{a.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onNavigate('courses')}
                className="btn-outline-gold w-full py-3 rounded-xl font-golos text-sm flex items-center justify-center gap-2"
              >
                <Icon name="Plus" size={15} />
                Записаться на курс
              </button>
            </div>
          </div>
        )}

        {/* Courses tab */}
        {activeTab === 'courses' && (
          <div>
            <h2 className="font-playfair text-2xl font-light mb-6">Мои курсы</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {enrolledCourses.map((c, i) => (
                <div key={i} className="card-glass rounded-2xl p-6 overflow-hidden relative">
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${c.color}`} />
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-1">{c.title}</h3>
                  <p className="font-golos text-sm text-muted-foreground mb-4">Педагог: {c.teacher}</p>
                  <div className="flex justify-between text-sm font-golos text-muted-foreground mb-2">
                    <span>Прогресс</span>
                    <span className="text-gold">{c.progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden mb-4">
                    <div className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light" style={{ width: `${c.progress}%` }} />
                  </div>
                  <div className="flex items-center gap-2 text-xs font-golos text-muted-foreground">
                    <Icon name="Calendar" size={12} className="text-gold" />
                    {c.nextLesson}
                  </div>
                </div>
              ))}
              <div
                onClick={() => onNavigate('courses')}
                className="card-glass rounded-2xl p-6 border-2 border-dashed border-gold/20 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-gold/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Icon name="Plus" size={22} className="text-gold" />
                </div>
                <p className="font-golos text-sm text-muted-foreground group-hover:text-foreground transition-colors text-center">
                  Записаться на новый курс
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Achievements tab */}
        {activeTab === 'achievements' && (
          <div>
            <h2 className="font-playfair text-2xl font-light mb-6">Достижения</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {[...achievements, ...achievements].map((a, i) => (
                <div key={i} className={`card-glass rounded-2xl p-6 flex flex-col items-center text-center gap-3 ${i >= 3 ? 'opacity-30 grayscale' : ''}`}>
                  <span className="text-4xl">{a.icon}</span>
                  <div>
                    <p className="font-playfair text-lg font-semibold text-foreground mb-1">{a.title}</p>
                    <p className="font-golos text-sm text-muted-foreground">{a.desc}</p>
                  </div>
                  {i < 3 && (
                    <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-golos">Получено</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Settings tab */}
        {activeTab === 'settings' && (
          <div className="max-w-xl">
            <h2 className="font-playfair text-2xl font-light mb-6">Настройки профиля</h2>
            <div className="card-glass rounded-2xl p-6 space-y-5">
              <div>
                <label className="block text-xs font-golos text-muted-foreground mb-1.5">Имя</label>
                <input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full bg-muted border border-border rounded-xl px-4 py-3 font-golos text-sm text-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-golos text-muted-foreground mb-1.5">Email</label>
                <input
                  value={user.email}
                  disabled
                  className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 font-golos text-sm text-muted-foreground cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-xs font-golos text-muted-foreground mb-1.5">Новый пароль</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-muted border border-border rounded-xl px-4 py-3 font-golos text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                />
              </div>
              <button className="btn-gold w-full py-3 rounded-xl font-golos font-semibold text-sm">
                Сохранить изменения
              </button>
              <div className="pt-4 border-t border-border">
                <button
                  onClick={onLogout}
                  className="flex items-center gap-2 text-destructive hover:text-destructive/80 transition-colors font-golos text-sm"
                >
                  <Icon name="LogOut" size={15} />
                  Выйти из аккаунта
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
