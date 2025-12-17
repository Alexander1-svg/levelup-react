import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import Cookies from "js-cookie";
import type { Usuario } from "../types/Usuario";

interface User extends Usuario {
  token: string;
  role?: string;
}

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Cargar usuario desde la Cookie al iniciar la app
  useEffect(() => {
    const storedUser = Cookies.get("currentUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    // Guardar en Cookie
    // La sesión dura 7 días
    Cookies.set("currentUser", JSON.stringify(userData), { expires: 7 });
    localStorage.setItem("token", userData.token);
  };

  const logout = () => {
    setUser(null);
    Cookies.remove("currentUser");
    localStorage.removeItem("token");
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
}
