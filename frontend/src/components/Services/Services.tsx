import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { getBolosCarrossel, type Bolo } from '../../sanity';

function smoothScrollTo(targetId: string, duration = 1800) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const startY = window.scrollY;
  const targetY = target.getBoundingClientRect().top + startY;
  const distance = targetY - startY;
  let startTime: number | null = null;

  // easeInOutQuad: começa devagar, acelera no meio, desacelera no final
  function easeInOutQuad(t: number) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }

  function step(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollTo(0, startY + distance * easeInOutQuad(progress));

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

export function Services() {
  const [bolos, setBolos] = useState<Bolo[]>([]);
  const [revealedId, setRevealedId] = useState<string | null>(null);

  useEffect(() => {
    getBolosCarrossel().then(setBolos);
  }, []);

  return (
    <section id="servicos" className="py-32 bg-bisou-bg border-b border-bisou-border/60">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="font-script text-bisou-terracota text-4xl block">Nossas Criações</span>
          <h2 className="text-4xl font-serif uppercase tracking-widest text-bisou-dark">Catálogo Autoral</h2>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation
          loop={bolos.length > 3}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="px-4"
        >
          {bolos.map((bolo) => {
            const isRevealed = revealedId === bolo._id;

            return (
              <SwiperSlide key={bolo._id} className="group cursor-pointer">
                <div
                  className="block relative aspect-3/4 overflow-hidden bg-bisou-rose"
                  onClick={(e) => {
                    const isTouchReveal = window.matchMedia('(hover: none)').matches;
                    if (isTouchReveal && !isRevealed) {
                      e.preventDefault();
                      setRevealedId(bolo._id);
                    }
                  }}
                >
                  {bolo.imagemUrl && (
                    <img
                      src={bolo.imagemUrl}
                      alt="Bolo do ateliê"
                      className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 aspect-3/4 ${isRevealed ? 'scale-105' : ''}`}
                    />
                  )}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 bg-bisou-dark/40 backdrop-blur-[2px] ${
                      isRevealed ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        smoothScrollTo('contato');
                      }}
                      className="font-script text-bisou-terracota text-2xl sm:text-3xl px-8 py-3 border border-bisou-terracota/60 rounded-full bg-bisou-bg/90 hover:bg-bisou-bg transition-colors"
                    >
                      Ver Detalhes
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}