import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { getBolosCarrossel, type Bolo } from '../../sanity';

export function Services() {
  // O React começa com uma lista vazia, e depois preenche com os dados do Sanity
  const [bolos, setBolos] = useState<Bolo[]>([]);

useEffect(() => {
    getBolosCarrossel().then(setBolos);
  }, []);

  return (
    <section id="servicos" className="py-32 bg-bisou-bg border-b border-bisou-border/60">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="font-script text-bisou-terracota text-4xl block">Nossas Criações</span>
          <h2 className="text-4xl font-serif uppercase tracking-widest text-bisou-dark">Cardápio Autoral</h2>
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
              {/* Imagem com efeito Hover e Botão Detalhes */}
              <div className="relative aspect-3/4 overflow-hidden bg-bisou-rose">
                
                {/* AQUI ESTÁ A MÁGICA: puxando imagemUrl do Sanity */}
                {bolo.imagemUrl && (
                  <img 
                    src={bolo.imagemUrl} 
                    alt={bolo.nome}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                )}
                
                {/* Botão Detalhes (só aparece no hover) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-bisou-dark/20 backdrop-blur-[2px]">
                  <button className="bg-white text-bisou-dark px-8 py-3 uppercase text-[10px] tracking-[0.2em] font-bold hover:bg-bisou-terracota hover:text-white transition-colors">
                    Ver Detalhes
                  </button>
                </div>
              </div>
              
              {/* Nome e Preço */}
              <div className="p-6 text-center">
                <h3 className="font-serif text-xl text-bisou-dark">{bolo.nome}</h3>
                
                {/* Se o preço existir, formata com "R$". Senão, "Sob consulta" */}
                <p className="font-sans italic text-sm text-bisou-terracota mt-1">
                  {bolo.preco ? `R$ ${bolo.preco}` : 'Sob consulta'}
                </p>
                
                {/* A descrição vem do Sanity (lembra de preencher lá no painel!) */}
                <p className="text-[11px] text-bisou-dark/60 mt-4 leading-relaxed px-4">
                  {bolo.descricao}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}