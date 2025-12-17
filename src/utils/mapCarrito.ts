// utils/mapCarrito.ts
import type { Carrito } from "../types/Carrito";

export const mapCarritoToCartItems = (carrito: Carrito) =>
  carrito.items.map((item) => ({
    id: item.id,
    title: typeof item.producto === "object" ? item.producto.nombre : "",
    price: typeof item.producto === "object" ? item.producto.precio : 0,
    imageUrl:
      typeof item.producto === "object" ? item.producto.imagenUrl : undefined,
    quantity: item.cantidad,
    productoId:
      typeof item.producto === "object" ? item.producto.id : item.producto,
  }));
