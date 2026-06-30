import { useEffect, useState } from 'react';
import { getFotosGaleria, type FotoGaleria } from '../../sanity';

export function Gallery() {
  const [fotos, setFotos] = useState<FotoGaleria[]>([]);

  useEffect(() => {
    getFotosGaleria().then(setFotos);
  }, []);

  if (fotos.length === 0) {
    return null;
  }

  return (
    <section id="galeria" className="py-32 bg-white text-bisou-dark border-b border-bisou-border/60">
      <div className="max-w-7xl mx-auto px-8">

        <div className="mb-20 flex flex-col items-center text-center border-b border-bisou-border pb-12">
          <span className="font-script text-bisou-terracota text-4xl block -mb-1">
            @BenditoBolo
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-light uppercase tracking-widest text-bisou-dark">
            Diário 
          </h2>
          <a 
            href="#contato" 
            className="mt-6 text-xs uppercase tracking-[0.2em] font-medium text-bisou-dark hover:text-bisou-terracota transition-all inline-flex items-center gap-1.5 group"
          >
            <span className="border-b border-transparent group-hover:border-bisou-terracota pb-0.5 transition-colors">
              Acompanhe as Novidades
            </span>
            <span className="text-lg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              ↗
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {fotos.map((item) => (
            <div 
              key={item._id} 
              className="group relative overflow-hidden aspect-4/5 bg-bisou-rose cursor-pointer shadow-sm hover:shadow-2xl transition-shadow duration-500"
            >
              {item.imagemUrl && (
                <a href="#contato" className="block w-full h-full">
                  <img 
                    src={item.imagemUrl} 
                    alt="Foto do Ateliê" 
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-1000 ease-out"
                  />
                </a>
              )}

              <div className="absolute inset-0 bg-bisou-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-white text-center backdrop-blur-[2px]">
                
                <div className="w-14 h-14 rounded-full border border-white/60 flex items-center justify-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="font-light text-2xl mb-0.5">
                    <a href="#contato" className="hover:text-bisou-terracota transition-colors">🛒</a>
                  </span>
                </div>

                <span className="text-[9px] uppercase tracking-[0.2em] text-bisou-rose/80 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-150">
                  Ateliê
                </span>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}