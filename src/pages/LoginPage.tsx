import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import type { LoginFormData } from "../types/Usuario";
import { loginUsuario } from "../api/usuarioApi";

export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simular una pequeña demora para mejor UX
      const response = await loginUsuario(formData.email, formData.password);

      // Guardar token en localStorage o contexto
      localStorage.setItem("token", response.token);

      // Pasar info al contexto de autenticación
      login({ email: response.email, token: response.token });

      console.log(`¡Bienvenido de nuevo, ${response.email}!`);

      //if (response.role === "admin") {
      //navigate("/admin", { replace: true });
      //} else {
      navigate("/dashboard", { replace: true });
      //}
    } catch (error) {
      console.error("Error en login:", error);
      alert(error instanceof Error ? error.message : "Error al iniciar sesión");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-white text-center">
        Iniciar Sesión
      </h1>
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
            name="email"
            placeholder="Correo electrónico"
            className="p-2 rounded bg-gray-700 text-white w-full border border-gray-600 focus:border-blue-500 focus:outline-none"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isLoading}
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
            name="password"
            placeholder="Contraseña"
            className="p-2 rounded bg-gray-700 text-white w-full border border-gray-600 focus:border-blue-500 focus:outline-none"
            value={formData.password}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 p-2 rounded text-white font-bold disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors"
          disabled={isLoading}
        >
          {isLoading ? "Iniciando sesión..." : "Entrar"}
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-300 text-center">
        ¿No tienes cuenta?{" "}
        <Link
          to="/register"
          className="text-blue-400 hover:text-blue-300 underline transition-colors"
        >
          Regístrate aquí
        </Link>
      </p>
    </div>
  );
}
