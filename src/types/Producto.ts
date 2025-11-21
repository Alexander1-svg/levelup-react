// src/types/Producto.ts

export interface Producto {
  id: number;
  codigo: string;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  nombreCategoria: string;
  imageUrl: string;
}
