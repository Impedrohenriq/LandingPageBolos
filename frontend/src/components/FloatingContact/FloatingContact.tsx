import { useEffect, useState } from "react";

export function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);

  // Monitora a rolagem da página para não mostrar o botão logo no topo (Hero)
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contato");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToContact}
      className="fixed bottom-8 right-8 z-50 bg-bisou-dark hover:bg-bisou-terracota text-white px-5 py-3 shadow-2xl border border-bisou-border/40 font-serif text-xs uppercase tracking-[0.2em] transition-all duration-300 ease-in-out hover:-translate-y-1"
      aria-label="Ir para contato"
    >
      <div className="flex items-center gap-2">
        {/* Ícone Minimalista de Balão de Conversa */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 8.511c.083.185.128.389.128.604v9.75a2.25 2.25 0 0 1-2.25 2.25h-1.5a2.25 2.25 0 0 1-2.25-2.25v-.133m-10.5 0c0 .188.006.376.018.563.045.756.633 1.344 1.39 1.344h.75m-4.5-12.836A5.309 5.309 0 0 1 3 6c0-2.928 2.372-5.3 5.3-5.3 2.624 0 4.811 1.91 5.234 4.417"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
          />
        </svg>
        <span>Contate-nos</span>
      </div>
    </button>
  );
}