export function Hero() {
  return (
    <section id="inicio" className="min-h-screen pt-32 pb-20 flex items-center relative overflow-hidden">
      
      {/* Elemento decorativo de fundo: um grande círculo bege bem suave */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[550px] h-[550px] bg-bisou-rose/50 rounded-full blur-2xl -z-10 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Coluna da Esquerda: Textos de altíssimo impacto (Ocupa 7 colunas) */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-bisou-terracota inline-block" />
            <span className="text-xs uppercase tracking-[0.25em] text-bisou-terracota font-semibold">
              Tradição & Botânica
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-light tracking-tight leading-[0.95]">
            Doces feitos <br />
            <span className="italic font-normal">com a alma</span> <br />
            <span className="font-script text-bisou-terracota text-6xl sm:text-7xl -mt-6 block">e flores frescas</span>
          </h1>

          <p className="font-sans font-light text-bisou-dark/80 text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
            Elevando a confeitaria artesanal à categoria de arte. Sabores botânicos, texturas aveludadas e design minimalista para os seus momentos mais raros.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <a 
              href="#servicos" 
              className="bg-bisou-dark hover:bg-bisou-terracota text-bisou-bg text-xs uppercase tracking-[0.2em] font-medium px-10 py-5 rounded-none transition-all duration-300 shadow-xl"
            >
              Explorar Cardápio
            </a>
            
            <a 
              href="#sobre" 
              className="group text-xs uppercase tracking-[0.2em] font-medium flex items-center gap-2 py-5"
            >
              <span className="border-b border-bisou-dark pb-1 group-hover:border-bisou-terracota group-hover:text-bisou-terracota transition-colors">
                Nossa Filosofia
              </span>
            </a>
          </div>

        </div>

        {/* Coluna da Direita: A imagem no "Arco Estilo Bisou" */}
        <div className="lg:col-span-5 flex justify-center relative">
          
          {/* O "Arco" (Pill shape vertical) */}
          <div className="w-[320px] sm:w-[380px] h-[480px] sm:h-[560px] bg-bisou-rose rounded-[200px] p-4 relative shadow-2xl border border-white/60">
            
            {/* O Container da imagem que segue o formato do arco */}
            <div className="w-full h-full rounded-[180px] overflow-hidden bg-bisou-rose relative group">
              
              {/* IMAGEM REAL DO BOLO (Com zoom suave ao passar o mouse) */}
              <img 
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop" 
                alt="Bolo de Casamento Botânico Ateliê Altmann"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              />

              {/* Camada de requinte: um brilho/escurecimento bem sutil por cima da foto */}
              <div className="absolute inset-0 bg-bisou-dark/10 mix-blend-overlay pointer-events-none" />
            </div>

            {/* O Selo circular flutuante */}
            <div className="absolute -bottom-6 -left-6 bg-bisou-terracota text-bisou-bg w-32 h-32 rounded-full flex flex-col items-center justify-center p-2 shadow-lg animate-[spin_20s_linear_infinite] z-10">
              <span className="text-[10px] uppercase tracking-widest font-bold text-center leading-tight">
                ★ 100% ARTESANAL ★ FEITO HOJE
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}