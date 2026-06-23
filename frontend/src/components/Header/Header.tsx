export function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 border-b border-bisou-border/60">
      <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
        
        {/* Menu Esquerda */}
        <nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-[0.2em] font-medium">
          <a href="#inicio" className="hover:text-bisou-terracota transition-colors">Início</a>
          <a href="#sobre" className="hover:text-bisou-terracota transition-colors">A Pâtisserie</a>
          <a href="#servicos" className="hover:text-bisou-terracota transition-colors">Criações</a>
        </nav>

        {/* LOGO CENTRAL (Estilo Bisou) */}
        <div className="text-center absolute left-1/2 -translate-x-1/2">
          <span className="font-script text-bisou-terracota text-2xl block -mb-3">Maison</span>
          <span className="font-serif text-3xl font-bold tracking-widest uppercase">Bolos</span>
        </div>

        {/* Menu Direita */}
        <nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-[0.2em] font-medium">
          <a href="#galeria" className="hover:text-bisou-terracota transition-colors">Galeria</a>
          <a href="#contato" className="hover:text-bisou-terracota transition-colors">Contato</a>
          <a href="#contato" className="text-bisou-terracota font-bold flex items-center gap-1">
            <span>ENCOMENDAR</span>
            <span className="text-lg">↗</span>
          </a>
        </nav>

        {/* Botão Mobile (Hamburguer simples) */}
        <button className="md:hidden text-2xl uppercase tracking-widest font-serif">Menu</button>

      </div>
    </header>
  );
}