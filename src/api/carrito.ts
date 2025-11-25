import axiosClient from "./axiosClient";
import type { Carrito } from "../types/Carrito";

export type CarritoItemDetalleDTO = {
  productoId: number;
  cantidad: number;
};

// Obtener carrito (o crearlo según el backend)
export const obtenerCarrito = async (): Promise<Carrito> => {
  const response = await axiosClient.get<Carrito>("/carrito");
  return response.data;
};

export const agregarItem = async (
  item: CarritoItemDetalleDTO
): Promise<Carrito> => {
  const response = await axiosClient.post<Carrito>("/carrito/agregar", item);
  return response.data;
};

export const removerItem = async (itemId: number): Promise<Carrito> => {
  const response = await axiosClient.delete<Carrito>(
    `/carrito/remover/${itemId}`
  );
  return response.data;
};

export const actualizarCantidad = async (
  itemId: number,
  nuevaCantidad: number
): Promise<Carrito> => {
  const response = await axiosClient.put<Carrito>(
    `/carrito/actualizar/${itemId}`,
    null,
    { params: { nuevaCantidad } }
  );
  return response.data;
};
