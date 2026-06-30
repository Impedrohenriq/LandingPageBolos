import { Button, Label, TextInput } from "flowbite-react";

export function Login() {
  return (
    <div className="min-h-screen bg-bisou-bg flex flex-col justify-center items-center px-6 selection:bg-bisou-terracota selection:text-white">
      
      <div className="w-full max-w-md bg-white p-12 shadow-2xl border border-bisou-border text-center space-y-8 relative">
        
        {/* Linha decorativa superior */}
        <div className="absolute top-0 left-12 right-12 h-[2px] bg-bisou-terracota" />

        <div>
          <span className="font-script text-bisou-terracota text-4xl block -mb-2">Bendito Bolo</span>
          <h1 className="font-serif text-3xl tracking-widest uppercase text-bisou-dark font-light">
            Acesso Restrito
          </h1>
        </div>

        <form className="space-y-5 text-left" onSubmit={(e) => e.preventDefault()}>
          {/* E-mail de Gestão */}
          <div>
            <Label 
              htmlFor="email" 
              className="text-[10px] uppercase tracking-[0.2em] text-bisou-dark block mb-1.5 font-semibold"
            >
              E-mail de Gestão
            </Label>
            <TextInput 
              id="email" 
              type="email" 
              placeholder="gerencia@decorações.com.br" 
              required 
              className="rounded-none focus:ring-bisou-terracota focus:border-bisou-terracota text-sm" 
            />
          </div>

          {/* Senha de Segurança */}
          <div>
            <Label 
              htmlFor="senha" 
              className="text-[10px] uppercase tracking-[0.2em] text-bisou-dark block mb-1.5 font-semibold"
            >
              Senha de Segurança
            </Label>
            <TextInput 
              id="senha" 
              type="password" 
              placeholder="••••••••" 
              required 
              className="rounded-none focus:ring-bisou-terracota focus:border-bisou-terracota text-sm" 
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-bisou-dark hover:bg-bisou-terracota text-white rounded-none uppercase tracking-[0.2em] text-xs py-2 transition-all duration-300 shadow-lg mt-4"
          >
            Entrar no Backoffice
          </Button>
        </form>

        <div className="pt-4 border-t border-bisou-border/60">
          <a 
            href="/" 
            className="text-[10px] uppercase tracking-[0.2em] text-bisou-dark/60 hover:text-bisou-terracota transition-colors inline-flex items-center gap-1"
          >
            <span>← Voltar para a vitrine</span>
          </a>
        </div>

      </div>

    </div>
  );
}