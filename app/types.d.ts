export interface Burguer {
  id: number;
  titulo: string;
  descripcion: string;
  categoria: string;
  precio: number;
  ingredientes: string[];
  imagen: string;
  quantity?:number
  descuento?:number
}