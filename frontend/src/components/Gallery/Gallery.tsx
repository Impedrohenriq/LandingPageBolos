export function Gallery() {
  // 6 fotos de cair o queixo escolhidas a dedo no Unsplash
  const fotosGaleria = [
    {
      id: 1,
      legenda: "Coleção Blanche",
      imagem: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      legenda: "Casamento Botânico",
      imagem: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      legenda: "Texturas de Baunilha",
      imagem: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      legenda: "Pâtisserie Fina",
      imagem: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      legenda: "Figos & Amoras Silvestres",
      imagem: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      legenda: "Folhas de Ouro 24k",
      imagem: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    // Note que aqui usei bg-white para dar um contraste visual com o fundo areia da seção anterior
    <section id="galeria" className="py-32 bg-white text-bisou-dark border-b border-bisou-border/60">
      <div className="max-w-7xl mx-auto px-8">

        {/* Cabeçalho Editorial Centralizado */}
        <div className="mb-20 flex flex-col items-center text-center border-b border-bisou-border pb-12">
          
          <span className="font-script text-bisou-terracota text-4xl block -mb-1">
            @maisonaltmann
          </span>
          
          <h2 className="text-4xl sm:text-5xl font-serif font-light uppercase tracking-widest text-bisou-dark">
            Journal Visuel
          </h2>

          <a 
            href="#contato" 
            className="mt-6 text-xs uppercase tracking-[0.2em] font-medium text-bisou-dark hover:text-bisou-terracota transition-all inline-flex items-center gap-1.5 group"
          >
            <span className="border-b border-transparent group-hover:border-bisou-terracota pb-0.5 transition-colors">
              Acompanhe as fornadas
            </span>
            {/* O translate-x-0.5 com -translate-y-0.5 faz a setinha ↗ subir na diagonal exata no hover */}
            <span className="text-lg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              ↗
            </span>
          </a>

        </div>

        {/* Mosaico de 6 fotos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {fotosGaleria.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden aspect-[4/5] bg-bisou-rose cursor-pointer shadow-sm hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Foto do bolo */}
              <img 
                src={item.imagem} 
                alt={item.legenda} 
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-1000 ease-out"
              />

              {/* Película escura que surge no hover */}
              <div className="absolute inset-0 bg-bisou-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-white text-center backdrop-blur-[2px]">
                
                {/* Círculo com o "+" animado */}
                <div className="w-14 h-14 rounded-full border border-white/60 flex items-center justify-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="font-light text-2xl mb-0.5">+</span>
                </div>

                {/* Título da foto */}
                <span className="font-serif italic text-xl tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 ease-out">
                  {item.legenda}
                </span>

                <span className="text-[9px] uppercase tracking-[0.2em] text-bisou-rose/80 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-150">
                  Maison Altmann
                </span>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}