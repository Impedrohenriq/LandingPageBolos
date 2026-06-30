export function Footer() {
  return (
    <footer className="bg-chocolate text-stone-100 py-12 border-t border-white/5">    
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
      <div className="text-lg font-bold text-creme">
        🎉 Bendito Bolo 🎊
      </div>
      <p className="text-xs text-stone-400">
        &copy; {new Date().getFullYear()} Bendito Bolo. Todos os direitos reservados.
      </p>
      <div className="flex space-x-4 text-sm">
        <a href="#" className="hover:text-white transition-colors">Instagram</a>
        <a href="#" className="hover:text-white transition-colors">Facebook</a>
      </div>
    </div>
    </footer>
  );
}