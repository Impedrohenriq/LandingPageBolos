import { defineType, defineField } from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: '🏠 Banner Inicial',
  type: 'document',
  fields: [
    defineField({ name: 'tag', title: 'Tag de Cima (Ex: Tradição & Botânica)', type: 'string' }),
    defineField({ name: 'titulo1', title: 'Título Linha 1', type: 'string' }),
    defineField({ name: 'titulo2', title: 'Título Linha 2 (Destaque Itálico)', type: 'string' }),
    defineField({ name: 'titulo3', title: 'Título Linha 3 (Script/Cursiva)', type: 'string' }),
    defineField({ name: 'descricao', title: 'Descrição', type: 'text', rows: 3 }),
    defineField({ 
      name: 'imagemBolo', 
      title: 'Foto do Bolo Principal', 
      type: 'image',
      options: { hotspot: true } 
    })
  ]
})