import axiosClient from "./axiosClient";
import type { Categoria } from "../types/Categoria";

// Obtener la lista de categorías
export const obtenerCategorias = async (): Promise<Categoria[]> => {
  const response = await axiosClient.get<Categoria[]>("/categorias");
  return response.data;
};

// Obtener una categoría por ID
export const obtenerCategoriaPorId = async (id: string): Promise<Categoria> => {
  const response = await axiosClient.get<Categoria>(`/categorias/${id}`);
  return response.data;
};
