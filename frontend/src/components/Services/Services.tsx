import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export function Services() {
const bolos = [
    { 
      nome: "Bolo Alva", 
      preco: "R$ 840", 
      resumo: "Um abraço em forma de bolo. Perfeito para casamentos ao ar livre, traz leveza e frescor com o toque exclusivo da fava de cumaru.", 
      // Nova imagem selecionada para o Bolo Alva (estética clara e artesanal)
      imagem: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=503&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      nome: "Bolo ", 
      preco: "R$ 1.500", 
      resumo: "Celebrações intimistas pedem sofisticação. Texturas aveludadas com infusão de mel de jataí e flores comestíveis.", 
      imagem: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      nome: "Bolo Sereno", 
      preco: "R$ 950", 
      resumo: "A definição de equilíbrio. Massa de cacau de origem com camadas de cupuaçu. Traz uma experiência sensorial profunda.", 
      imagem: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      nome: "Bolo Festim", 
      preco: "R$ 1.200", 
      resumo: "Para momentos de alegria vibrante. Um bolo autoral que combina castanha-do-pará e frutas nativas em perfeita harmonia.", 
      imagem: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop" 
    }
  ];

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
          loop={true}
          spaceBetween={30} 
          slidesPerView={1}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="px-4"
        >
          {bolos.map((bolo, i) => (
            <SwiperSlide key={i} className="group cursor-pointer">
              {/* Imagem com efeito Hover e Botão Detalhes */}
              <div className="relative aspect-[3/4] overflow-hidden bg-bisou-rose">
                <img 
                  src={bolo.imagem} 
                  alt={bolo.nome}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                
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
                <p className="font-sans italic text-sm text-bisou-terracota mt-1">{bolo.preco}</p>
                {/* Resumo do bolo (aparece fixo abaixo) */}
                <p className="text-[11px] text-bisou-dark/60 mt-4 leading-relaxed px-4">{bolo.resumo}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}