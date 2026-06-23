export function Contact() {
  return (
    <section id="contato" className="py-20 bg-creme">
      <div className="max-w-3xl mx-auto px-6 bg-white p-10 rounded-3xl shadow-xl border border-stone-100 space-y-8 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-chocolate">Peça o Seu Orçamento</h2>
          <p className="text-stone-500 text-sm">Responda em instantes e entraremos em contato para acertar os detalhes.</p>
        </div>

        <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-chocolate uppercase">Seu Nome</label>
              <input type="text" className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-caramelo" placeholder="Ex: Maria Silva" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-chocolate uppercase">WhatsApp</label>
              <input type="tel" className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-caramelo" placeholder="(11) 99999-9999" />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-chocolate uppercase">Tipo de Evento</label>
            <select className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-caramelo bg-white">
              <option>Aniversário</option>
              <option>Casamento / Noivado</option>
              <option>Corporativo</option>
              <option>Outros</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-caramelo hover:bg-avelã text-white font-bold py-4 rounded-xl shadow-lg transition-colors text-center block mt-6">
            🚀 Enviar Pedido via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}