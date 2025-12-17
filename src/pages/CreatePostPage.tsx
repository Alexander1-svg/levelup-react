import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import axios from "axios"; // 🚨 ¡Añadir esta importación!

// 🚨 API_URL RELATIVA: Usará el Proxy de Vite configurado
const API_URL = "/api/v1/blog";

function CreatePostPage() {
  const { user, isAuthenticated } = useAuth();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const navigate = useNavigate();

  // Redirigir si no está autenticado
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated || !user) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Por favor, completa el título y el contenido.");
      return;
    }

    // Preparamos los datos para enviar al Backend
    const newPostData = {
      // Spring Boot debe asignar el ID y la fecha
      title: title,
      content: content,
      // 🚨 CORRECCIÓN: Usamos user.nombre como identificador del autor
      author: user.nombre,
    };

    try {
      // Petición POST a la API
      await axios.post(API_URL, newPostData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      alert(`¡Blog creado exitosamente por ${user.nombre}!`);
      navigate("/blog");
    } catch (error) {
      console.error("Error al publicar el post:", error);
      alert("Fallo la creación del post. Revisa el Backend y la consola.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-gray-800 rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold mb-6 text-white">
        Crear Nueva Publicación
      </h1>
      <p className="text-gray-400 mb-6">
        Publicando por:{" "}
        <span className="text-sky-400 font-semibold">{user.nombre}</span>
      </p>
      {/* ... (Tu código de formulario) ... */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div>
          <label
            htmlFor="title"
            className="block text-gray-300 font-semibold mb-2"
          >
            Título{" "}
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
            placeholder="Escribe un título..."
            required
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-gray-300 font-semibold mb-2"
          >
             Contenido   {" "}
          </label>
          <textarea
            id="content"
            rows={10}
            value={content}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setContent(e.target.value)
            }
            className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none resize-vertical"
            placeholder="Comparte tus ideas, experiencias o noticias con la comunidad..."
            required
          ></textarea>
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded transition duration-200 flex-1"
          >
            Publicar Blog{" "}
          </button>
          <button
            type="button"
            onClick={() => navigate("/blog")}
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded transition duration-200"
          >
            Cancelar{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePostPage;
