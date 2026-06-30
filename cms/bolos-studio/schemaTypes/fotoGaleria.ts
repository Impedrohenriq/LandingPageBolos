import { defineType, defineField } from 'sanity'

export const fotoGaleriaType = defineType({
  name: 'fotoGaleria',
  title: '🖼️ Fotos da Galeria',
  type: 'document',
  fields: [
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