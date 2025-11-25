import type { Usuario } from "./Usuario";
import type { CarritoItem } from "./CarritoItem";

export interface Carrito {
  id: number;
  usuario: Usuario;
  items: CarritoItem[];
}
