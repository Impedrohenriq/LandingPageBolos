import { createClient } from '@sanity/client'

// 1. A interface com os nomes EXATOS que vêm da sua consulta GROQ:
export interface Bolo {
  _id: string;
  nome: string;
  slug: string;
  preco: number;
  descricao?: string;
  destaque?: boolean;
  imagemUrl?: string;
}

export const sanity = createClient({
  projectId: '2y489dqg',
  dataset: 'production',
  useCdn: true, // true = cache rápido em produção; false = atualiza em tempo real
  apiVersion: '2024-01-01', 
})

// 2. Avisamos ao TypeScript que essa função devolve uma lista de Bolos (Promise<Bolo[]>)
export async function getBolos(): Promise<Bolo[]> {
  const query = `*[_type == "bolo"]{
    _id,
    nome,
    "slug": slug.current,
    preco,
    descricao,
    destaque,
    "imagemUrl": imagem.asset->url
  }`
  
  return await sanity.fetch(query)
}