import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

// 1. Definimos la interfaz del usuario
interface UserData {
  fullName: string;
  email: string;
  password?: string;
}

// 2. Definimos la interfaz del Contexto
interface AuthContextType {
  currentUser: UserData | null;
  login: (userData: UserData) => void;
  logout: () => void;
}

// 3. Creamos el Contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook personalizado para usar el contexto fácilmente
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// 4. Creamos el Proveedor (Provider)
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);

  // FUNCIÓN CLAVE: Chequear la sesión al cargar la aplicación
  useEffect(() => {
    const userString = sessionStorage.getItem("currentUser");
    if (userString) {
      // Si existe, lo cargamos en el estado
      const userData: UserData = JSON.parse(userString);
      setCurrentUser(userData);
    }
  }, []);

  // Funciones para manejar la sesión
  const login = (userData: UserData) => {
    sessionStorage.setItem("currentUser", JSON.stringify(userData));
    setCurrentUser(userData);
  };

  const logout = () => {
    sessionStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
