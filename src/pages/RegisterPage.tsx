import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { crearUsuario } from "../api/usuarioApi";


export function RegisterPage() {
  const navigate = useNavigate(); // 1. Nuevo estado para el nombre completo
  const [nombre, setNombre] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [fechaNacimiento, setFechaNacimiento] = useState<string>("");


  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    } // Verificar si el email ya está registrado

    // Validar fecha de nacimiento
    if (!fechaNacimiento) {
      alert("Por favor, ingresa tu fecha de nacimiento");
      return;
    }

    // Calcular edad
    const today = new Date();
    const birthDateObj = new Date(fechaNacimiento);
    let age = today.getFullYear() - birthDateObj.getFullYear(); // Cambia const por let
    const monthDiff = today.getMonth() - birthDateObj.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDateObj.getDate())
    ) {
      age--; // Ahora puedes modificar age porque es let
    }

    // Validar que sea mayor de 18 años
    if (age < 18) {
      alert("Debes tener al menos 18 años para registrarte");
      return;
    }
    try {
      await crearUsuario({
        nombre,
        email,
        password,
        fechaNacimiento
      });
      alert("Usuario registrado correctamente");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Error al registrar usuario");
    }
    

    

    

    

    
    
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-white">
        Registro de Usuario
      </h1>
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        {/* Nuevo campo para el Nombre Completo */}
        <div>
          <label
            htmlFor="nombre"
            className="block text-gray-300 text-sm font-bold mb-2"
          >
            Nombre Completo
          </label>
          <input
            type="text"
            id="nombre"
            placeholder="Nombre Completo"
            className="p-2 rounded bg-gray-700 text-white w-full"
            value={nombre}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNombre(e.target.value)
            }
            required
          />
        </div>
        {/* Resto de campos (Email, Contraseña, Confirmar Contraseña) */}
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
        <div>
          <label
            htmlFor="fechaNacimiento"
            className="block text-gray-300 text-sm font-bold mb-2"
          >
            Fecha de Nacimiento
          </label>
          <input
            type="date"
            id="fechaNacimiento"
            className="p-2 rounded bg-gray-700 text-white w-full border border-gray-600 focus:border-blue-500 focus:outline-none"
            value={fechaNacimiento}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFechaNacimiento(e.target.value)
            }
            required
          />
          <p className="text-gray-400 text-xs mt-1">
            Debes tener al menos 18 años para registrarte
          </p>
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
