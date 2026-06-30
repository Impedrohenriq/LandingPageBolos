import { useState } from 'react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 border-b border-bisou-border/60">
      <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">

        {/* Menu Esquerda — desktop */}
        <nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-[0.2em] font-medium">
          <a href="#inicio" className="hover:text-bisou-terracota transition-colors">Início</a>
          <a href="#sobre" className="hover:text-bisou-terracota transition-colors">Sobre Nós</a>
          <a href="#servicos" className="hover:text-bisou-terracota transition-colors">Criações</a>
        </nav>

        {/* Logo central */}
        <div className="text-center absolute left-1/2 -translate-x-1/2">
          <span className="font-script text-bisou-terracota text-2xl block -mb-3">Bendito Bolo</span>
          <span className="font-serif text-3xl font-bold tracking-widest uppercase">Decorações</span>
        </div>

        {/* Menu Direita — desktop */}
        <nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-[0.2em] font-medium">
          <a href="#galeria" className="hover:text-bisou-terracota transition-colors">Galeria</a>
          <a href="#contato" className="hover:text-bisou-terracota transition-colors">Contato</a>
          <a href="#contato" className="text-bisou-terracota font-bold flex items-center gap-1">
            <span>ENCOMENDAR</span>
            <span className="text-lg">↗</span>
          </a>
        </nav>

        {/* Ícone hamburguer — mobile */}
        <button
          className="md:hidden flex flex-col gap-1.25 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span className={`block w-6 h-[1.5px] bg-bisou-dark transition-transform duration-300 ${menuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-bisou-dark transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-bisou-dark transition-transform duration-300 ${menuOpen ? 'translate-y-[-6.5px] -rotate-45' : ''}`} />
        </button>

      </div>

      {/* Menu mobile expandido */}
      {menuOpen && (
        <div className="md:hidden bg-bisou-bg border-t border-bisou-border/60 px-8 py-6 flex flex-col gap-5 text-xs uppercase tracking-[0.2em] font-medium">
          <a href="#inicio" onClick={() => setMenuOpen(false)} className="hover:text-bisou-terracota transition-colors">Início</a>
          <a href="#sobre" onClick={() => setMenuOpen(false)} className="hover:text-bisou-terracota transition-colors">Sobre Nós</a>
          <a href="#servicos" onClick={() => setMenuOpen(false)} className="hover:text-bisou-terracota transition-colors">Criações</a>
          <a href="#galeria" onClick={() => setMenuOpen(false)} className="hover:text-bisou-terracota transition-colors">Galeria</a>
          <a href="#contato" onClick={() => setMenuOpen(false)} className="hover:text-bisou-terracota transition-colors">Contato</a>
          <a href="#contato" onClick={() => setMenuOpen(false)} className="text-bisou-terracota font-bold flex items-center gap-1">
            <span>ENCOMENDAR</span>
            <span className="text-lg">↗</span>
          </a>
        </div>
      )}
    </header>
  );
}