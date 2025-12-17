import axiosClient from "./axiosClient";
import type { Blog } from "../types/Blog";

// Obtener la lista de blogs
export const obtenerBlogs = async (): Promise<Blog[]> => {
  const response = await axiosClient.get<Blog[]>("/blog");
  return response.data;
};

// Obtener un blog por ID
export const obtenerBlogPorId = async (id: string): Promise<Blog> => {
  const response = await axiosClient.get<Blog>(`/blog/${id}`);
  return response.data;
};

// Crear nuevo blog
export const crearBlog = async (blog: Partial<Blog>): Promise<Blog> => {
  const response = await axiosClient.post<Blog>("/blog", blog);
  return response.data;
};

// Actualizar blog por ID
export const actualizarBlog = async (
  id: string,
  blog: Partial<Blog>
): Promise<Blog> => {
  const response = await axiosClient.put<Blog>(`/blog/${id}`, blog);
  return response.data;
};

// Eliminar blog por ID
export const eliminarBlog = async (id: string): Promise<void> => {
  await axiosClient.delete(`/blog/${id}`);
};
