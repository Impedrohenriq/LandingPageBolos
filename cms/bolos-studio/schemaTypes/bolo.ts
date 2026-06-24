import { defineField, defineType } from 'sanity'

export const boloType = defineType({
  name: 'bolo',
  title: 'Bolo',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      title: 'Nome do Bolo',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'nome',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'preco',
      title: 'Preço (R$)',
      type: 'number',
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: 'imagem',
      title: 'Foto do Bolo',
      type: 'image',
      options: {
        hotspot: true, // Permite recortar a foto no próprio Sanity
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'descricao',
      title: 'Descrição Curta',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'destaque',
      title: 'Destaque no Carrossel (Swiper)?',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})