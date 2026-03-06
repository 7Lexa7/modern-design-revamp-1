import { useState } from 'react';
import Icon from '@/components/ui/icon';

const galleryItems = [
  { id: 1, type: 'photo', category: 'Живопись', title: 'Мастерская', src: 'https://cdn.poehali.dev/projects/f836a67a-a8be-4af0-8a66-d2f5ea2f50dd/files/3807cb5c-23d4-4b8d-a09a-5b6357811973.jpg', span: 'col-span-2 row-span-2' },
  { id: 2, type: 'photo', category: 'Студенты', title: 'Наши студенты', src: 'https://cdn.poehali.dev/projects/f836a67a-a8be-4af0-8a66-d2f5ea2f50dd/files/ca1594a0-45ec-4c4a-82fc-ef5c97388d32.jpg', span: '' },
  { id: 3, type: 'photo', category: 'Курсы', title: 'Арт-курсы', src: 'https://cdn.poehali.dev/projects/f836a67a-a8be-4af0-8a66-d2f5ea2f50dd/files/77bdee64-d408-4406-95c7-a55e5044f1ed.jpg', span: '' },
  { id: 4, type: 'photo', category: 'Живопись', title: 'Техника масла', src: 'https://cdn.poehali.dev/projects/f836a67a-a8be-4af0-8a66-d2f5ea2f50dd/files/77bdee64-d408-4406-95c7-a55e5044f1ed.jpg', span: '' },
  { id: 5, type: 'photo', category: 'Студенты', title: 'Творческая атмосфера', src: 'https://cdn.poehali.dev/projects/f836a67a-a8be-4af0-8a66-d2f5ea2f50dd/files/ca1594a0-45ec-4c4a-82fc-ef5c97388d32.jpg', span: 'col-span-2' },
  { id: 6, type: 'video', category: 'Видео', title: 'О школе', src: 'https://cdn.poehali.dev/projects/f836a67a-a8be-4af0-8a66-d2f5ea2f50dd/files/3807cb5c-23d4-4b8d-a09a-5b6357811973.jpg', span: '' },
  { id: 7, type: 'photo', category: 'Курсы', title: 'Фотокурс', src: 'https://cdn.poehali.dev/projects/f836a67a-a8be-4af0-8a66-d2f5ea2f50dd/files/3807cb5c-23d4-4b8d-a09a-5b6357811973.jpg', span: '' },
  { id: 8, type: 'photo', category: 'Живопись', title: 'Акварель', src: 'https://cdn.poehali.dev/projects/f836a67a-a8be-4af0-8a66-d2f5ea2f50dd/files/77bdee64-d408-4406-95c7-a55e5044f1ed.jpg', span: '' },
];

const galleryCategories = ['Все', 'Живопись', 'Фотография', 'Студенты', 'Курсы', 'Видео'];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = activeCategory === 'Все' ? galleryItems : galleryItems.filter(g => g.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-4">
          <span className="text-gold text-xs font-golos tracking-widest uppercase">Галерея</span>
        </div>
        <h1 className="font-cormorant text-6xl md:text-7xl font-light text-center mb-4">
          Фото <span className="text-gradient-gold italic">&</span> видео
        </h1>
        <p className="font-golos text-muted-foreground text-center max-w-xl mx-auto mb-12">
          Жизнь школы в снимках — студии, занятия, выставки и наши студенты
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-golos text-sm transition-all duration-300 ${
                activeCategory === cat ? 'btn-gold' : 'btn-outline-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${item.span}`}
              onClick={() => setLightbox(item.src)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-xs font-golos text-gold mb-1">{item.category}</span>
                <span className="font-cormorant text-lg text-foreground">{item.title}</span>
              </div>
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-background/70 backdrop-blur flex items-center justify-center border border-gold/40">
                    <Icon name="Play" size={20} className="text-gold ml-1" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-6 animate-scale-in"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:text-gold transition-colors"
              onClick={() => setLightbox(null)}
            >
              <Icon name="X" size={18} />
            </button>
            <img
              src={lightbox}
              alt="Просмотр"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* YouTube section */}
        <div className="mt-16 card-glass rounded-3xl p-10 text-center">
          <Icon name="Youtube" size={40} className="text-gold mx-auto mb-4" />
          <h2 className="font-cormorant text-3xl font-light mb-3">Смотри нас на YouTube</h2>
          <p className="font-golos text-muted-foreground mb-6 max-w-md mx-auto">
            Уроки, мастер-классы и влоги о жизни школы — на нашем канале
          </p>
          <a
            href="#"
            className="btn-gold px-8 py-3 rounded-full font-golos text-sm inline-flex items-center gap-2"
          >
            Перейти на канал <Icon name="ExternalLink" size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
