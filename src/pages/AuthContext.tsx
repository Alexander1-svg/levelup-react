import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface UserData {
  fullName: string;
  email: string;
  password?: string;
}

interface AuthContextType {
  currentUser: UserData | null;
  login: (userData: UserData) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);

  useEffect(() => {
    const userString = sessionStorage.getItem("currentUser");
    if (userString) {
      const userData: UserData = JSON.parse(userString);
      setCurrentUser(userData);
    }
  }, []);

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
