import { Bolo } from '../models/bolo.js'; // <-- .js aqui

const bolosMock: Bolo[] = [
  { 
    id: "1",
    nome: "Bolo Alva", 
    preco: "R$ 840", 
    resumo: "Um abraço em forma de bolo. Perfeito para casamentos ao ar livre, traz leveza e frescor com o toque exclusivo da fava de cumaru.", 
    imagem: "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: "2",
    nome: "Bolo Solar", 
    preco: "R$ 1.500", 
    resumo: "Celebrações intimistas pedem sofisticação. Texturas aveludadas com infusão de mel de jataí e flores comestíveis.", 
    imagem: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: "3",
    nome: "Bolo Sereno", 
    preco: "R$ 950", 
    resumo: "A definição de equilíbrio. Massa de cacau de origem com camadas de cupuaçu. Traz uma experiência sensorial profunda.", 
    imagem: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: "4",
    nome: "Bolo Festim", 
    preco: "R$ 1.200", 
    resumo: "Para momentos de alegria vibrante. Um bolo autoral que combina castanha-do-pará e frutas nativas em perfeita harmonia.", 
    imagem: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop" 
  }
];

export class ContentService {
  async listarBolos(): Promise<Bolo[]> {
    return bolosMock;
  }
}