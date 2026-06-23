export function Services() {
  // Lista de produtos espelhando exatamente os 4 bolos da sua imagem de referência
  const bolosVitrine = [
    {
      id: 1,
      nome: "Bolo Nupcial Alva",
      preco: "R$ 840,00",
      // Foto temporária de alta definição do Unsplash
      imagem: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      nome: "Marble Wedding Cake With Fresh Flowers",
      preco: "R$ 1.500,00",
      imagem: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      nome: "Elegant Wedding Cake",
      preco: "R$ 680,00",
      imagem: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      nome: "Wedding Cake With Flowers",
      preco: "R$ 2.100,00",
      imagem: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="servicos" className="py-32 bg-bisou-bg relative border-b border-bisou-border/60">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center space-y-3 mb-20">
          <span className="font-script text-bisou-terracota text-4xl block -mb-2">Bolos de Matrimônio</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-light uppercase tracking-widest text-bisou-dark">
            Nossas Assinaturas
          </h2>
          <div className="w-12 h-[1px] bg-bisou-terracota mx-auto mt-4" />
        </div>

        {/* A Grade de 4 colunas exatamente igual ao print */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {bolosVitrine.map((bolo) => (
            // A classe 'group' aqui é o pulo do gato! Ela avisa: "Se passarem o mouse em qualquer lugar aqui dentro, ative o hover de todo mundo"
            <div key={bolo.id} className="group cursor-pointer flex flex-col">
              
              {/* Container da Imagem com Proporção 3:4 (Editorial) */}
              <div className="w-full aspect-[3/4] overflow-hidden bg-bisou-rose relative">
                <img 
                  src={bolo.imagem} 
                  alt={bolo.nome}
                  // duration-700 ease-out deixa o zoom lento e extremamente requintado
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Véu super suave que aparece por cima da foto ao passar o mouse */}
                <div className="absolute inset-0 bg-bisou-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Textos e Preços abaixo da foto */}
              <div className="text-center pt-6 px-2 flex-grow flex flex-col justify-between space-y-1">
                <h3 className="text-xs uppercase tracking-[0.18em] font-medium text-bisou-dark leading-snug group-hover:text-bisou-terracota transition-colors duration-300">
                  {bolo.nome}
                </h3>
                
                <p className="font-serif italic text-sm text-bisou-dark/70 tracking-wide pt-1">
                  {bolo.preco}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}