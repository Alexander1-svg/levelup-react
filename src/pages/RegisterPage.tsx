import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    localStorage.setItem(email, password);

    alert(`Usuario registrado: ${email}`);
    navigate("/login");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-white">
        Registro de Usuario
      </h1>
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
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
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-gray-300 text-sm font-bold mb-2"
          >
            Confirmar Contraseña
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirmar Contraseña"
            className="p-2 rounded bg-gray-700 text-white w-full"
            value={confirmPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(e.target.value)
            }
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 p-2 rounded text-white font-bold"
        >
          Registrarse
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-300">
        ¿Ya tienes cuenta?{" "}
        <Link to="/login" className="text-blue-400 underline">
          Inicia sesión aquí
        </Link>
      </p>
    </div>
  );
}
