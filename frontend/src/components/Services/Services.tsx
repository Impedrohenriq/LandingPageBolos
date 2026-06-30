import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { getBolosCarrossel, type Bolo } from '../../sanity';

export function Services() {
  const [bolos, setBolos] = useState<Bolo[]>([]);

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
          {bolos.map((bolo) => (
            <SwiperSlide key={bolo._id} className="group cursor-pointer">
              <a href="#contato" className="block relative aspect-3/4 overflow-hidden bg-bisou-rose">
                {bolo.imagemUrl && (
                  <img
                    src={bolo.imagemUrl}
                    alt="Bolo do ateliê"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 aspect-3/4"
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-bisou-dark/20 backdrop-blur-[2px]">
                  <span className="bg-white text-bisou-dark px-8 py-3 uppercase text-[10px] tracking-[0.2em] font-bold">
                    Ver Detalhes
                  </span>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}