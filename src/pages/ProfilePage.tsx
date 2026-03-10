import { useState, useRef } from 'react';
import Icon from '@/components/ui/icon';

interface ProfilePageProps {
  user: { name: string; email: string; avatar?: string };
  onLogout: () => void;
  onNavigate: (page: string) => void;
  onUpdateUser: (user: { name: string; email: string; avatar?: string }) => void;
}

const enrolledCourses = [
  {
    title: 'Базовый курс актёрского мастерства',
    teacher: 'Родион Овчинников',
    nextLesson: 'Вт, 18 марта, 19:00',
    color: 'from-gold/30 to-transparent',
  },
  {
    title: 'Мастер-курс Данилы Дунаева',
    teacher: 'Данила Дунаев',
    nextLesson: 'Пн, 17 марта, 19:00',
    color: 'from-violet/30 to-transparent',
  },
];

export default function ProfilePage({ user, onLogout, onNavigate, onUpdateUser }: ProfilePageProps) {
  const [avatar, setAvatar] = useState<string | undefined>(user.avatar);
  const [editName, setEditName] = useState(user.name);
  const [editMode, setEditMode] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const src = ev.target?.result as string;
      setAvatar(src);
      onUpdateUser({ ...user, avatar: src });
    };
    reader.readAsDataURL(file);
  };

  const handleSaveName = () => {
    setEditMode(false);
    onUpdateUser({ ...user, name: editName, avatar });
  };

  return (
    <div className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Header card */}
        <div className="card-glass rounded-3xl p-8 mb-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">

            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div
                className="w-24 h-24 rounded-full overflow-hidden cursor-pointer border-2 border-gold/40 hover:border-gold/70 transition-all group relative"
                onClick={() => fileRef.current?.click()}
              >
                {avatar ? (
                  <img src={avatar} alt="avatar" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-background font-playfair font-bold text-3xl">
                    {editName.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Icon name="Camera" size={20} className="text-white" />
                </div>
              </div>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarChange}
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-background" />
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                {editMode ? (
                  <input
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    onBlur={handleSaveName}
                    onKeyDown={(e) => e.key === 'Enter' && handleSaveName()}
                    autoFocus
                    className="font-playfair text-2xl font-light bg-transparent border-b border-gold/50 focus:outline-none text-foreground"
                  />
                ) : (
                  <h1 className="font-playfair text-2xl font-light text-foreground">{editName}</h1>
                )}
                <button
                  onClick={() => editMode ? handleSaveName() : setEditMode(true)}
                  className="text-muted-foreground hover:text-gold transition-colors flex-shrink-0"
                >
                  <Icon name={editMode ? 'Check' : 'Pencil'} size={14} />
                </button>
              </div>
              <p className="font-golos text-sm text-muted-foreground mb-3">{user.email}</p>
              <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-golos">
                Студент академии
              </span>
            </div>

            {/* Logout */}
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all font-golos text-sm self-start"
            >
              <Icon name="LogOut" size={14} />
              Выйти
            </button>
          </div>

          <p className="text-muted-foreground text-xs font-golos mt-4 text-center sm:text-left sm:pl-30">
            Нажми на фото, чтобы загрузить своё
          </p>
        </div>

        {/* Courses */}
        <div>
          <h2 className="font-playfair text-2xl font-light text-foreground mb-5">Мои курсы</h2>

          {enrolledCourses.length === 0 ? (
            <div className="card-glass rounded-2xl p-10 text-center">
              <Icon name="BookOpen" size={32} className="text-muted-foreground mx-auto mb-4" />
              <p className="font-golos text-muted-foreground mb-5">Вы пока не записаны ни на один курс</p>
              <button
                onClick={() => onNavigate('courses')}
                className="btn-gold px-8 py-3 rounded-full font-golos font-semibold text-sm"
              >
                Выбрать курс
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {enrolledCourses.map((c, i) => (
                <div key={i} className="card-glass rounded-2xl p-6 overflow-hidden relative">
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${c.color}`} />
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-golos font-semibold text-foreground mb-1">{c.title}</h3>
                      <p className="font-golos text-xs text-muted-foreground mb-4">Педагог: {c.teacher}</p>
                      <div className="flex items-center gap-2 text-xs font-golos text-muted-foreground">
                        <Icon name="Calendar" size={12} className="text-gold flex-shrink-0" />
                        Следующее занятие: <span className="text-foreground">{c.nextLesson}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => onNavigate('courses')}
                      className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gold/10 border border-gold/20 text-gold hover:bg-gold/20 transition-all font-golos text-xs"
                    >
                      <Icon name="Calendar" size={12} />
                      Расписание
                    </button>
                  </div>
                </div>
              ))}

              <button
                onClick={() => onNavigate('courses')}
                className="w-full card-glass rounded-2xl p-5 border-dashed border-2 border-border hover:border-gold/30 transition-all flex items-center justify-center gap-2 text-muted-foreground hover:text-gold font-golos text-sm"
              >
                <Icon name="Plus" size={16} />
                Записаться на ещё один курс
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
