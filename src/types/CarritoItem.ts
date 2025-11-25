import type { Carrito } from "./Carrito";
import type { Producto } from "./Producto";

export interface CarritoItem {
  id: number;
  cantidad: number;
  carrito?: Carrito | number;
  producto: Producto | number;
}
