import { defineType, defineField } from 'sanity'

export const fotoGaleriaType = defineType({
  name: 'fotoGaleria',
  title: '🖼️ Fotos da Galeria',
  type: 'document',
  fields: [
    defineField({
      name: 'legenda',
      title: 'Legenda da Foto',
      type: 'string',
      description: 'Ex: "Casamento", "Folhas de Ouro 24k"'
    }),
    defineField({
      name: 'imagem',
      title: 'Imagem',
      type: 'image',
      options: {
        hotspot: true,
      }
    })
  ]
})