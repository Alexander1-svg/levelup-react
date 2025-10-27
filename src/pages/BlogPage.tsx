import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Trash2 } from "lucide-react"; // Importamos el icono de basura

// Define una interfaz para el tipo de publicación
interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  author: string;
}

function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const navigate = useNavigate();

  const loadPosts = () => {
    const existingPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]");
    setPosts(existingPosts);
  };

  useEffect(() => {
    loadPosts();
    // Este listener ayuda a recargar si la navegación es simple o si hay cambios de storage
    window.addEventListener("storage", loadPosts);
    return () => {
      window.removeEventListener("storage", loadPosts);
    };
  }, []);

  // 💥 NUEVA FUNCIÓN PARA ELIMINAR 💥
  const handleDelete = (postId: number) => {
    // 1. Preguntar confirmación antes de eliminar
    if (
      !window.confirm("¿Estás seguro de que quieres eliminar esta publicación?")
    ) {
      return;
    }

    // 2. Filtrar la lista actual para remover el post con el ID dado
    const updatedPosts = posts.filter((post) => post.id !== postId);

    // 3. Guardar la nueva lista (sin el post eliminado) en localStorage
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));

    // 4. Actualizar el estado para que la UI se refresque
    setPosts(updatedPosts);

    alert("Publicación eliminada correctamente. 🗑️");
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-white">Nuestro Blog</h1>

      {/* Botón "Escribir Nuevo Post" */}
      <button
        onClick={() => navigate("/create-post")}
        className="flex items-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 shadow-lg mb-8"
      >
        <Plus className="w-5 h-5 mr-2" />
        Escribir Nuevo Post
      </button>

      {/* Mostrar publicaciones o el mensaje de vacío */}
      {posts.length === 0 ? (
        <p className="text-xl text-gray-400 mt-10">
          Aún no hay publicaciones. ¡Sé el primero en crear una! 🚀
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-800 rounded-xl shadow-2xl p-6 flex flex-col transition duration-300 hover:scale-[1.02]" // Añadimos flex-col
            >
              <h2 className="text-2xl font-bold text-teal-400 mb-3 line-clamp-2">
                {post.title}
              </h2>
              <p className="text-gray-300 mb-4 line-clamp-4 flex-grow">
                {" "}
                {/* Añadimos flex-grow */}
                {post.content}
              </p>

              <div className="text-sm text-gray-500 border-t border-gray-700 pt-4 mt-auto flex justify-between items-center">
                {/* 💥 BOTÓN DE ELIMINAR 💥 */}
                <button
                  onClick={() => handleDelete(post.id)}
                  className="text-red-500 hover:text-red-400 transition duration-150 p-1 rounded hover:bg-gray-700"
                  aria-label={`Eliminar publicación ${post.title}`}
                >
                  <Trash2 className="w-5 h-5" />
                </button>
                {/* ----------------------- */}

                <div className="flex flex-col items-end">
                  <span>
                    Por:{" "}
                    <span className="font-semibold text-gray-400">
                      {post.author}
                    </span>
                  </span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BlogPage;
