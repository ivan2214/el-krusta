import { Burguer as BurguerPrisma } from '@prisma/client'

export interface Burguer {
  id: string
  titulo: string
  descripcion: string
  precio: number
  quantity?: number
  descuento?: number
  rating?: number
  pictures?: Picture[]
  categorias?: Categoria[]
  ingredientes?: Ingrediente[]
  reviews?: Review[]
}

interface Review {
  id: string
  comentario: string
  estrellas: Number
  burguerId: string
}

export type SafeBurguer = Omit<
  BurguerPrisma & Burguer,
  'createdAt' | 'pictureId' | 'categoriaId' | ''
> & {}

interface CardBurguerDetailProps {
  burguerDetail: Burguer
}

interface Ingrediente {
  id: string
  nombre: string
  burguerId: string
}

interface Categoria {
  id: string
  nombre: string
  burguerId: string
}

interface Picture {
  id: string
  burguerId: string
  src: string
  alt: string
}
