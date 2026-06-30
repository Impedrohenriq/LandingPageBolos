import { useEffect, useState } from 'react';
import { getAbout, type About } from '../../sanity';

export function About() {
  const [data, setData] = useState<About | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAbout()
      .then((res) => setData(res))
      .catch((err) => console.error('Erro ao buscar About:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-20 text-center text-white">Carregando dados do Sanity...</div>;
  if (!data) return null;

  const paragraphs = data.historia ? data.historia.split(/\r?\n{2,}/) : [];

  return (
    <section id="sobre" className="py-32 bg-bisou-rose/40 border-b border-bisou-border/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        
        {/* COLUNA DA ESQUERDA: As fotos sobrepostas */}
        <div className="lg:col-span-6 relative px-4 sm:px-10 lg:px-0 mb-12 lg:lg-0">
          
          {/* Foto Principal (Atrás) */}
          <div className="w-4/5 aspect-3/4 bg-stone-200 overflow-hidden shadow-xl group cursor-pointer relative">
            {data.imagemPrincipalUrl ? (
              <img 
                src={data.imagemPrincipalUrl} 
                alt="Mãos artesãs Bendito Bolo" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            ) : (
              <div className="w-full h-full bg-stone-200" />
            )}
            <div className="absolute inset-0 bg-bisou-dark/10 mix-blend-overlay pointer-events-none" />
          </div>

          {/* Foto Secundária Sobreposta */}
          <div className="absolute -bottom-10 right-0 sm:right-4 w-3/5 aspect-square bg-stone-300 overflow-hidden shadow-2xl border-8 border-bisou-bg group cursor-pointer">
            {data.imagemSecundariaUrl ? (
              <img 
                src={data.imagemSecundariaUrl} 
                alt="Detalhe do bolo" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            ) : (
              <div className="w-full h-full bg-stone-300" />
            )}
          </div>
        </div>

        {/* COLUNA DA DIREITA: Textos Editoriais Dinâmicos */}
        <div className="lg:col-span-6 space-y-8 lg:pl-8">
          
          <div>
            <span className="font-script text-bisou-terracota text-4xl block -mb-2">
              {data.titulo}
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-light uppercase tracking-widest text-bisou-dark leading-[1.1]">
              {data.titulo}
            </h2>
          </div>

          <div className="space-y-4 font-sans font-light text-bisou-dark/80 text-base sm:text-lg leading-relaxed">
            {paragraphs.length ? (
              <>
                <p>{paragraphs[0]}</p>
                {paragraphs[1] && <p>{paragraphs[1]}</p>}
              </>
            ) : (
              <p>{data.historia}</p>
            )}
          </div>

          {/* Estatísticas */}
          <div className="pt-6 border-t border-bisou-border grid grid-cols-2 gap-8">
            <div>
              <span className="font-serif italic text-4xl sm:text-5xl text-bisou-terracota block leading-none">
                Rápido
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-bisou-dark/70 mt-2 block">
                 & Prático
              </span>
            </div>

            <div>
              <span className="font-serif italic text-4xl sm:text-5xl text-bisou-terracota block leading-none">
                Decorações especiais
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-bisou-dark/70 mt-2 block">
                &  Sob medida
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}