import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "duoc@duocuc.cl" && password === "1234") {
      alert("Login exitoso!");
      navigate("/");
    } else {
      alert("Email o contraseña incorrecta");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-white">Iniciar Sesión</h1>

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
            placeholder="correo@ejemplo.com"
            className="p-2 rounded bg-gray-700 text-white w-full"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Iniciar Sesión
        </button>
        <p className="text-gray-300 text-sm mt-2">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="text-blue-400 hover:underline">
            Regístrate aquí
          </Link>
        </p>
      </form>
    </div>
  );
}
export { LoginPage };
