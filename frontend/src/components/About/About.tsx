export function About() {
  return (
    <section id="sobre" className="py-32 bg-bisou-rose/40 border-b border-bisou-border/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        
        {/* COLUNA DA ESQUERDA: As fotos sobrepostas (Ocupa 6 colunas) */}
        <div className="lg:col-span-6 relative px-4 sm:px-10 lg:px-0 mb-12 lg:mb-0">
          
          {/* Foto Principal (Atrás) */}
          <div className="w-4/5 aspect-[3/4] bg-stone-200 overflow-hidden shadow-xl group cursor-pointer relative">
            <img 
              src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop" 
              alt="Mãos artesãs Ateliê de Bolos" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-bisou-dark/10 mix-blend-overlay pointer-events-none" />
          </div>

          {/* Foto Secundária Sobreposta (Na frente, no canto inferior direito) */}
          <div className="absolute -bottom-10 right-0 sm:right-4 w-3/5 aspect-square bg-stone-300 overflow-hidden shadow-2xl border-8 border-bisou-bg group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=800&auto=format&fit=crop" 
              alt="Detalhe botânico do bolo" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </div>

        </div>

        {/* COLUNA DA DIREITA: Os Textos Editoriais (Ocupa 6 colunas) */}
        <div className="lg:col-span-6 space-y-8 lg:pl-8">
          
          <div>
            <span className="font-script text-bisou-terracota text-4xl block -mb-2">História do Ateliê de Bolos</span>
            <h2 className="text-4xl sm:text-5xl font-serif font-light uppercase tracking-widest text-bisou-dark leading-[1.1]">
              A Poesia de <br />
              <span className="font-normal italic">Fazer Doce</span>
            </h2>
          </div>

          <div className="space-y-4 font-sans font-light text-bisou-dark/80 text-base sm:text-lg leading-relaxed">
            <p>
              Nossa jornada começou em uma pequena cozinha caseira, onde o ar se impregnava de notas da mata: fava de cumaru e cacau de origem, mel de jataí e o perfume da priprioca. O que era uma herança de família transformou-se numa busca pela textura perfeita.
            </p>
            <p>
              Não tomamos atalhos industriais; cada massa descansa o tempo necessário, cada recheio é apurado em tachos de cobre com castanha-do-pará ou cupuaçu, e cada flor botânica é disposta como um poema.
            </p>
          </div>

          {/* Estatísticas no padrão Bisou (Números gigantes em serifa itálica) */}
          <div className="pt-6 border-t border-bisou-border grid grid-cols-2 gap-8">
            <div>
              <span className="font-serif italic text-4xl sm:text-5xl text-bisou-terracota block leading-none">
                100%
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-bisou-dark/70 mt-2 block">
                Botânico & Natural
              </span>
            </div>

            <div>
              <span className="font-serif italic text-4xl sm:text-5xl text-bisou-terracota block leading-none">
                48h
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-bisou-dark/70 mt-2 block">
                Maturação da Massa
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}