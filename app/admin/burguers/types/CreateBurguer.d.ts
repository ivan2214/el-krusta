import { Categoria, Ingrediente, Picture, Review } from '@/app/types'

export interface CreateBurguer {
  nombre: string
  descripcion: string
  precio: number
  descuento?: number
  pictures?: Picture[string]
  categorias?: Categoria[string]
  ingredientes?: Ingrediente[string]
}
