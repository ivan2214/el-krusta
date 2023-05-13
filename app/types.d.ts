export interface Burguer {
  id: number
  titulo: string
  descripcion: string
  categoria: string
  precio: number
  ingredientes: string[]
  imagen: string
  quantity?: number
  descuento?: number
  rating?: number
  reviews?: number
  hrefReviews?: string
  features?: Feature[]
  colors?: Color[]
  sizes?: Size[] // hacer que la propiedad 'sizes' sea opcional
  pictures?: Picture[]
}

interface CardBurguerDetailProps {
  burguerDetail: Burguer
}

interface Picture {
  src: string
  alt: string
}

interface Size {
  name: string
  inStock: boolean
}

interface Color {
  name: string
  class: string
}

interface Feature {
  name: string
  details: string
}
