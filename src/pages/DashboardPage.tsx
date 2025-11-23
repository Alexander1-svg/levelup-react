import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Definimos la estructura esperada para el objeto de usuario
interface UserData {
  fullName: string;
  email: string; // password: string; // La contraseña no es necesaria aquí, pero estaba en el objeto original
}

export function DashboardPage() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);

  useEffect(() => {
    // 1. Recuperar la cadena JSON del usuario de sessionStorage
    const userString = sessionStorage.getItem("currentUser");

    if (userString) {
      // 2. Si existe, deserializar y guardar en el estado
      const userData: UserData = JSON.parse(userString);
      setCurrentUser(userData);
    } else {
      // Si no hay usuario, redirigir al login (sesión expirada/no iniciada)
      navigate("/login");
    }
  }, [navigate]); // Función para cerrar sesión y limpiar el almacenamiento

  const handleLogout = () => {
    sessionStorage.removeItem("currentUser");
    navigate("/login");
  };

  if (!currentUser) {
    return <div className="text-white">Cargando...</div>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-gray-800 rounded-lg shadow-xl text-white">
      <h1 className="text-3xl font-bold mb-4">Bienvenid@ a tu Cuenta</h1>
      <hr className="border-gray-700 mb-6" />
      {/* Aquí se MUESTRA el Nombre y el Correo */} 
      <div className="space-y-4">
        <div>
          <p className="text-lg font-semibold text-gray-400">
            Nombre Completo:
          </p>
          <p className="text-2xl font-bold text-green-400">
            {currentUser.fullName}
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-400">
            Correo Electrónico:
          </p>
          <p className="text-xl text-blue-400">{currentUser.email}</p>
        </div>
      </div>
      <button
        onClick={handleLogout}
        className="mt-8 bg-red-600 hover:bg-red-700 p-2 rounded text-white font-bold w-full"
      >
        Cerrar Sesión
      </button>
    </div>
  );
}
