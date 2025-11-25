import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Trash2 } from "lucide-react";
import { useAuth } from "../pages/AuthContext";

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
  const { user, isAuthenticated } = useAuth(); // Cambiado a user e isAuthenticated

  const loadPosts = () => {
    const existingPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]");
    setPosts(existingPosts);
  };

  useEffect(() => {
    loadPosts();
    window.addEventListener("storage", loadPosts);
    return () => {
      window.removeEventListener("storage", loadPosts);
    };
  }, []);

  const handleDelete = (postId: number, postAuthor: string) => {
    if (!user || user.fullName !== postAuthor) {
      alert("Solo puedes eliminar tus propias publicaciones.");
      return;
    }

    if (
      !window.confirm("¿Estás seguro de que quieres eliminar esta publicación?")
    ) {
      return;
    }

    const updatedPosts = posts.filter((post) => post.id !== postId);
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
    alert("Publicación eliminada correctamente.");
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-8">
      {/* Header del Blog */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4 text-white">
          Nuestro Blog
        </h1>
        <p className="text-gray-300 text-lg">
          Descubre las últimas novedades y artículos de la comunidad gamer
        </p>
      </div>

      {/* Botón para crear post (solo usuarios logueados) */}
      {isAuthenticated && (
        <div className="text-center mb-8">
          <button
            onClick={() => navigate("/create-post")}
            className="flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 shadow-lg mx-auto"
          >
            <Plus className="w-5 h-5 mr-2" />
            Crear Nuevo Post
          </button>
        </div>
      )}

      {/* Lista de Posts en formato de artículo */}
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-400">
            {isAuthenticated
              ? "Aún no hay publicaciones. ¡Sé el primero en crear una!"
              : "Aún no hay posts en el blog. Inicia sesión para crear el primero."}
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-700"
            >
              {/* Título del post */}
              <h2 className="text-3xl font-bold text-white mb-4">
                {post.title}
              </h2>

              {/* Información del autor y fecha */}
              <div className="flex items-center justify-between text-gray-400 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-blue-400">
                    Por: {post.author}
                  </span>
                </div>
                <span className="text-gray-500">{post.date}</span>
              </div>

              {/* Contenido del post */}
              <div className="text-gray-300 leading-relaxed text-lg whitespace-pre-line mb-6">
                {post.content}
              </div>

              {/* Botón de eliminar (solo para el autor) */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                {user && user.fullName === post.author && (
                  <button
                    onClick={() => handleDelete(post.id, post.author)}
                    className="flex items-center gap-2 text-red-500 hover:text-red-400 transition duration-150 p-2 rounded hover:bg-gray-700"
                    aria-label={`Eliminar publicación ${post.title}`}
                  >
                    <Trash2 className="w-5 h-5" />
                    <span>Eliminar</span>
                  </button>
                )}
                <div className="flex-1"></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Mensaje para usuarios no logueados */}
      {!isAuthenticated && posts.length > 0 && (
        <div className="text-center mt-8 p-6 bg-gray-800 rounded-lg border border-gray-700">
          <p className="text-gray-300 text-lg">
            ¿Te gustaría compartir tus ideas?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-blue-400 hover:text-blue-300 underline font-semibold"
            >
              Inicia sesión
            </button>{" "}
            para crear tu propio post.
          </p>
        </div>
      )}
    </div>
  );
}

export default BlogPage;
