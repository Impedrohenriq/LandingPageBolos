import { useEffect, useState } from 'react';
import { getHero, type Hero } from '../../sanity';

export function Hero() {
  const [data, setData] = useState<Hero | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getHero()
      .then((res) => {
        console.log("🔍 DADOS QUE CHEGARAM DO SANITY:", res);
        setData(res);
      })
      .catch((err) => {
        console.error("Erro ao buscar hero:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-20 text-center text-white">Carregando dados do Sanity...</div>;
  if (!data) return null;


  return (
    <section id="inicio" className="min-h-screen pt-32 pb-20 flex items-center relative overflow-hidden">
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-137.5 h-137.5 bg-bisou-rose/50 rounded-full blur-2xl -z-10 hidden lg:block" />
      <div className="max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-12 gap-12 items-center">

        {/* Coluna da Esquerda */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-px bg-bisou-terracota inline-block" />
            <span className="text-xs uppercase tracking-[0.25em] text-bisou-terracota font-semibold">{data.tag}</span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-light tracking-tight leading-[0.95]">
            {data.titulo1} <br />
            <span className="italic font-normal">{data.titulo2}</span> <br />
            <span className="font-script text-bisou-terracota text-6xl sm:text-7xl -mt-6 block">{data.titulo3}</span>
          </h1>

          <p className="font-sans font-light text-bisou-dark/80 text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
            {data.descricao}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <a href="#servicos" className="bg-bisou-dark hover:bg-bisou-terracota text-bisou-bg text-xs uppercase tracking-[0.2em] font-medium px-10 py-5 rounded-none transition-all duration-300 shadow-xl">Explorar Catálogo</a>
            <a href="#sobre" className="group text-xs uppercase tracking-[0.2em] font-medium flex items-center gap-2 py-5">
              <span className="border-b border-bisou-dark pb-1 group-hover:border-bisou-terracota group-hover:text-bisou-terracota transition-colors">Nossa Filosofia</span>
            </a>
          </div>
        </div>

        {/* Coluna da Direita (Imagem Dinâmica) */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="w-[320px] sm:w-95 h-120 sm:h-140 bg-bisou-rose rounded-[200px] p-4 relative shadow-2xl border border-white/60">
            <div className="w-full h-full rounded-[180px] overflow-hidden bg-bisou-rose relative group">
              <img src={data.imagemBoloUrl}
                fetchPriority="high"
                alt="Bolo Destaque"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out" />
              <div className="absolute inset-0 bg-bisou-dark/10 mix-blend-overlay pointer-events-none" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-bisou-terracota text-bisou-bg w-32 h-32 rounded-full flex flex-col items-center justify-center p-2 shadow-lg z-10">
              <span className="text-[10px] uppercase tracking-widest font-bold text-center leading-tight">★ 100% ARTESANAL SOB-MEDIDA ★</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}