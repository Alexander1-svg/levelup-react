export interface Usuario {
  id?: number;
  nombre: string;
  email: string;
  password?: string;
  fechaNacimiento?: string;
  roles?: string[];
  enabled?: boolean;
}

// Esta es la interfaz para el formulario de registro
export interface RegistroUsuarioDTO {
  nombre: string;
  email: string;
  password?: string;
  fechaNacimiento: string;
}

// Esta es la interfaz para el formulario de login
export interface LoginFormData {
  email: string;
  password: string;
}
