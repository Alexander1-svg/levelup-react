import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

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

  // Si no está autenticado, mostrar nada mientras redirige
  if (!isAuthenticated || !user) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Por favor, completa el título y el contenido.");
      return;
    }

    const newPost = {
      id: Date.now(),
      title: title,
      content: content,
      date: new Date().toLocaleDateString("es-CL"),
      author: user.fullName, // Usar user en lugar de currentUser
    };

    const existingPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]");
    existingPosts.unshift(newPost);
    localStorage.setItem("blogPosts", JSON.stringify(existingPosts));

    alert(`¡Blog creado exitosamente por ${user.fullName}!`);
    navigate("/blog");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-gray-800 rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold mb-6 text-white">
        Crear Nueva Publicación
      </h1>
      <p className="text-gray-400 mb-6">
        Publicando por:{" "}
        <span className="text-sky-400 font-semibold">{user.fullName}</span>
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div>
          <label
            htmlFor="title"
            className="block text-gray-300 font-semibold mb-2"
          >
            Título
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
            Contenido
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
            Publicar Blog
          </button>
          <button
            type="button"
            onClick={() => navigate("/blog")}
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded transition duration-200"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePostPage;
