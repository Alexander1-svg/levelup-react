import axiosClient from "./axiosClient";
import type { Producto } from "../types/Producto";

// Obtener la lista de productos
export const obtenerProductos = async (): Promise<Producto[]> => {
  const response = await axiosClient.get<Producto[]>("/productos");
  return response.data;
};

// Obtener un producto por ID
export const obtenerProductoPorId = async (id: string): Promise<Producto> => {
  const response = await axiosClient.get<Producto>(`/productos/${id}`);
  return response.data;
};

// Obtener productos por categoría
export const obtenerProductosPorCategoria = async (
  nombreCategoria: string
): Promise<Producto[]> => {
  const response = await axiosClient.get<Producto[]>(
    `/productos/categoria/${nombreCategoria}`
  );
  return response.data;
};
