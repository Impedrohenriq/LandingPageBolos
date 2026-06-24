import { createClient } from '@sanity/client'

export const sanity = createClient({
  projectId: '2y489dqg',
  dataset: 'production',
  useCdn: true, // true = cache rápido em produção; false = atualiza em tempo real
  apiVersion: '2024-01-01', // Use a data de hoje ou qualquer data recente
})

export async function getBolos() {
  // A mágica da query GROQ: o '->url' já resolve o link absoluto da imagem
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