import { Categoria, Ingrediente, Picture, Review } from '@/app/types'

export interface CreateBurguer {
  titulo: string
  descripcion: string
  precio: number
  descuento?: number
  pictures?: Picture[]
  categorias?: Categoria[]
  ingredientes?: Ingrediente[]
}
