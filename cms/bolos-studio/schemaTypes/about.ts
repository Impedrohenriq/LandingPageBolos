import { defineType, defineField } from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: '👤 Sobre Nós',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'historia',
      title: 'História do Ateliê',
      type: 'text',
      description: 'Escreva a história da marca ou do confeiteiro(a).'
    }),
    defineField({
      name: 'imagem',
      title: 'Foto de Perfil',
      type: 'image',
      options: {
        hotspot: true, // Permite que a cliente escolha o ponto de foco da foto
      }
    })
  ]
})