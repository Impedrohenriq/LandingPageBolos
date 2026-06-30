import { defineField, defineType } from 'sanity'

export const boloType = defineType({
  name: 'bolo',
  title: '🎂Carrossel de Bolos',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'imagem.asset._ref',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
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
      name: 'destaqueCarrossel',
      title: '🌟 Mostrar no Carrossel da Página Inicial?',
      type: 'boolean',
      initialValue: false, // Por padrão, o bolo entra desligado
      description: 'Ligue esta chave para que o bolo apareça na seção "Catálogo Autoral" do site.'
    }),
  ],
})