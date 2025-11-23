import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../pages/AuthContext"; // Asegúrate de la ruta correcta

export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth(); // Usamos el hook para obtener la función login
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const userDataJSON = localStorage.getItem(email);

    if (userDataJSON) {
      const userData = JSON.parse(userDataJSON);

      if (userData.password === password) {
        // INICIO DE SESIÓN EXITOSO: Usamos la función del contexto
        login(userData);

        alert(`¡Bienvenido de nuevo, ${userData.fullName}!`);
        navigate("/dashboard");
        return;
      }
    }
    alert("Correo electrónico o contraseña incorrectos.");
  };

  return (
    // ... (cuerpo del formulario de login similar a RegisterPage)
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-white">Iniciar Sesión</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="email"
            className="block text-gray-300 text-sm font-bold mb-2"
          >
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            placeholder="Correo electrónico"
            className="p-2 rounded bg-gray-700 text-white w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-gray-300 text-sm font-bold mb-2"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            placeholder="Contraseña"
            className="p-2 rounded bg-gray-700 text-white w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 p-2 rounded text-white font-bold"
        >
          Entrar
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-300">
        ¿No tienes cuenta?{" "}
        <Link to="/register" className="text-blue-400 underline">
          Regístrate aquí
        </Link>
      </p>
    </div>
  );
}
