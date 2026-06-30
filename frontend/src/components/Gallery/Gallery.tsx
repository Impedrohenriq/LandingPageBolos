import { useEffect, useState } from 'react';
import { getFotosGaleria, type FotoGaleria } from '../../sanity';

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

export function Gallery() {
  const [fotos, setFotos] = useState<FotoGaleria[]>([]);
  const [revealedId, setRevealedId] = useState<string | null>(null);

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
          {fotos.map((item) => {
            const isRevealed = revealedId === item._id;

            return (
              <div
                key={item._id}
                className="group relative overflow-hidden aspect-4/5 bg-bisou-rose cursor-pointer shadow-sm hover:shadow-2xl transition-shadow duration-500"
                onClick={(e) => {
                  const isTouchReveal = window.matchMedia('(hover: none)').matches;
                  if (isTouchReveal && !isRevealed) {
                    e.preventDefault();
                    setRevealedId(item._id);
                  }
                }}
              >
                {item.imagemUrl && (
                  <img 
                    src={item.imagemUrl} 
                    alt="Foto do Ateliê" 
                    className={`w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-1000 ease-out ${isRevealed ? 'scale-108' : ''}`}
                  />
                )}

                <div
                  className={`absolute inset-0 bg-bisou-dark/40 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-white text-center backdrop-blur-[2px] ${
                    isRevealed ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-full border border-white/60 flex items-center justify-center mb-3 transform transition-transform duration-500 ease-out ${
                      isRevealed ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'
                    }`}
                  >
                    <span className="font-light text-2xl mb-0.5">🛒</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      smoothScrollTo('contato');
                    }}
                    className={`font-script text-bisou-terracota text-base sm:text-lg px-5 py-1.5 border border-bisou-terracota/60 rounded-full bg-bisou-bg/90 hover:bg-bisou-bg transition-all duration-500 ease-out ${
                      isRevealed ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
                    }`}
                  >
                    Ver Detalhes
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}