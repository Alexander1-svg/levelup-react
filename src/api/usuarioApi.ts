import axiosClient from "./axiosClient";
import type { Usuario, RegistroUsuarioDTO } from "../types/Usuario";

export interface LoginResponse {
  token: string;
  email: string;
  message: string;
}

// Obtener la lista de usuarios (Solo ADMIN)
export const obtenerUsuarios = async (): Promise<Usuario[]> => {
  const response = await axiosClient.get<Usuario[]>("/auth");
  return response.data;
};

// Crear un nuevo usuario (Registro)
export const crearUsuario = async (
  usuario: RegistroUsuarioDTO
): Promise<Usuario> => {
  const response = await axiosClient.post<Usuario>("/auth/register", usuario);
  return response.data;
};

// Login de usuario
export const loginUsuario = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response = await axiosClient.post<LoginResponse>("/auth/login", {
    email,
    password,
  });
  return response.data;
};
