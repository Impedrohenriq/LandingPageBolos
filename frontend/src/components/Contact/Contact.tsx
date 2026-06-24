export function Contact() {
  return (
    <section id="contato" className="py-32 bg-bisou-bg border-b border-bisou-border/60">
      <div className="max-w-2xl mx-auto px-8 text-center space-y-12">
        
        {/* Título com a tipografia do Ateliê */}
        <div className="space-y-4">
          <span className="font-script text-bisou-terracota text-4xl block">Atendimento</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-light uppercase tracking-widest text-bisou-dark">
            Vamos conversar?
          </h2>
          <p className="font-sans text-bisou-dark/70 text-lg italic">
            Estamos prontos para realizar sua celebração.
          </p>
        </div>

        {/* Botões de Ação Direta */}
        <div className="grid sm:grid-cols-2 gap-6 pt-8">
          
          {/* Botão WhatsApp */}
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative border border-bisou-dark py-6 px-8 hover:bg-bisou-dark transition-all duration-500"
          >
            <span className="block font-serif text-2xl text-bisou-dark group-hover:text-white transition-colors">WhatsApp</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-bisou-terracota font-bold">Atendimento direto</span>
          </a>

          {/* Botão Instagram */}
          <a 
            href="https://instagram.com/altmann" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative border border-bisou-dark py-6 px-8 hover:bg-bisou-dark transition-all duration-500"
          >
            <span className="block font-serif text-2xl text-bisou-dark group-hover:text-white transition-colors">Instagram</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-bisou-terracota font-bold">Portfólio diário</span>
          </a>

        </div>

      </div>
    </section>
  );
}