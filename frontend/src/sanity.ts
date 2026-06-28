import { createClient } from '@sanity/client'

// 1. Interfaces
export interface Bolo {
  _id: string;
  nome: string;
  slug?: string;
  preco?: number;
  descricao?: string;
  destaqueCarrossel?: boolean; 
  imagemUrl?: string;
}

export interface FotoGaleria {
  _id: string;
  legenda?: string;
  imagemUrl?: string;
}

// 2. Cliente do Sanity
export const sanity = createClient({
  projectId: '2y489dqg',
  dataset: 'production',
  useCdn: false, // false para pegar sempre os dados mais recentes
  apiVersion: '2024-01-01', 
})
export interface Hero {
  tag: string;
  titulo1: string;
  titulo2: string;
  titulo3: string;
  descricao: string;
  imagemBoloUrl?: string;
}

export async function getHero(): Promise<Hero | null> {
  const query = `*[_type == "hero"][0]{
    tag, titulo1, titulo2, titulo3, descricao,
    "imagemBoloUrl": imagemBolo.asset->url+ "?w=1200&auto=format"
  }`
  return await sanity.fetch(query);
}

// 3. Função 2: Todos os Bolos
export async function getBolos(): Promise<Bolo[]> {
  const query = `*[_type == "bolo"]{
    _id,
    nome,
    preco,
    descricao,
    "imagemUrl": imagem.asset->url+ "?w=700&auto=format"
  }`
  return await sanity.fetch(query);
}
// 4. Função 3: Decorações do Carrossel (Estrelinha)
export async function getBolosCarrossel(): Promise<Bolo[]> {
  const query = `*[_type == "bolo" && destaqueCarrossel == true]{
    _id,
    nome,
    preco,
    descricao,
    "imagemUrl": imagem.asset->url+ "?w=700&auto=format"
  }`
  return await sanity.fetch(query);
}

// 5. Função 4: Fotos da Galeria
export async function getFotosGaleria(): Promise<FotoGaleria[]> {
  const query = `*[_type == "fotoGaleria"]{
    _id,
    legenda,
    "imagemUrl": imagem.asset->url+ "?w=700&auto=format"
  }`
  return await sanity.fetch(query);
}
// 6. Função 5: Sobre
export interface About {
  titulo: string;
  historia?: string;
  imagemUrl?: string;
}

export async function getAbout(): Promise<About | null> {
  const query = `*[_type == "about"][0]{
    titulo,
    historia,
    "imagemUrl": imagem.asset->url+ "?w=700&auto=format"
  }`
  return await sanity.fetch(query);
}
