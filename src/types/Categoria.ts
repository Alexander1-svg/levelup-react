import type { Producto } from "./Producto";

export interface Categoria {
  id: number;
  nombreCategoria: string;
  descripcion: string;
  productos: Producto[];
}
