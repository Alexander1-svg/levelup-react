import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePostPage() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const navigate = useNavigate();

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
      date: new Date().toLocaleDateString(),
      author: "Usuario Actual",
    };

    const existingPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]");

    existingPosts.push(newPost);

    localStorage.setItem("blogPosts", JSON.stringify(existingPosts));

    alert("¡Blog creado exitosamente!");
    navigate("/blog");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-gray-800 rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold mb-6 text-white">
        Crear Nueva Publicación
      </h1>
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
            className="w-full p-3 rounded bg-gray-700 text-white"
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
            className="w-full p-3 rounded bg-gray-700 text-white resize-none"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded transition duration-200"
        >
          Publicar Blog
        </button>
      </form>
    </div>
  );
}

export default CreatePostPage;
