import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import Cookies from "js-cookie";
import { crearBlog } from "../api/blogApi";

function CreatePostPage() {
  const { user, isAuthenticated } = useAuth();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const navigate = useNavigate();

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

    const tokenFromContext = (user as any)?.token;
    const cookie = Cookies.get("currentUser");
    let tokenFromCookie: string | null = null;
    try {
      const parsed = cookie ? JSON.parse(cookie) : null;
      tokenFromCookie = parsed?.token || null;
    } catch (e) {
      tokenFromCookie = null;
    }

    const token = tokenFromContext || tokenFromCookie;
    if (!token) {
      alert(
        "No se ha detectado token de autenticación. Por favor, inicia sesión de nuevo."
      );
      navigate("/login");
      return;
    }

    console.debug(
      "Token detectado (fuente):",
      tokenFromContext ? "context" : tokenFromCookie ? "cookie" : "none"
    );

    const newPostData = {
      titulo: title,
      contenido: content,
      autor: user.nombre,
      autorId: (user as any)?.id || (user as any)?._id,
    };

    try {
      console.debug("Creando post (payload):", newPostData);
      await crearBlog(newPostData);

      alert(`¡Blog creado exitosamente por ${user.nombre}!`);
      navigate("/blog");
    } catch (error: any) {
      const status = error?.response?.status;
      const serverMsgRaw =
        error?.response?.data?.message ||
        error?.response?.data ||
        error?.message ||
        error;
      const serverMsg =
        typeof serverMsgRaw === "object"
          ? JSON.stringify(serverMsgRaw)
          : String(serverMsgRaw);

      console.error("Error al publicar el post:", {
        status,
        serverMsgRaw,
        error,
      });

      if (status === 403) {
        alert(
          `Fallo la creación del post. Status: 403. Es posible que tu usuario no tenga permisos (Forbidden). Vuelve a iniciar sesión o contacta al administrador. Detalle: ${serverMsg}`
        );
      } else {
        alert(
          `Fallo la creación del post. ${status ? `Status: ${status}. ` : ""}${
            serverMsg || "Revisa el Backend y la consola."
          }`
        );
      }
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
      {/* debug panel removed */}
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
            Contenido{" "}
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

// TokenDebug removed per user request

export default CreatePostPage;
