import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Trash2 } from "lucide-react";
import { useAuth } from "../Context/AuthContext";
import { obtenerBlogs, eliminarBlog } from "../api/blogApi";
import { obtenerUsuarios } from "../api/usuarioApi";

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
  const { user, isAuthenticated } = useAuth();

  const loadPosts = useCallback(async () => {
    try {
      const blogsAny: any[] = await obtenerBlogs();

      let users: any[] = [];
      try {
        users = await obtenerUsuarios();
      } catch (e) {
        users = [];
      }

      const userMap = new Map<number, string>();
      users.forEach((u) => {
        if (u && typeof u.id !== "undefined")
          userMap.set(u.id, u.nombre || u.email || "Desconocido");
      });

      const normalized: BlogPost[] = blogsAny.map((b: any) => {
        const authorFromString = b.autor ?? b.author;
        const authorId =
          b.autorId ?? b.authorId ?? b.userId ?? b.autor_id ?? b.author_id;

        let authorName = "Desconocido";
        if (typeof authorFromString === "string") authorName = authorFromString;
        else if (authorId && userMap.has(Number(authorId)))
          authorName = userMap.get(Number(authorId)) as string;

        return {
          id: b.id,
          title: b.titulo ?? b.title ?? "Sin título",
          content: b.contenido ?? b.content ?? "",
          date: b.fechaPublicacion ?? b.date ?? "",
          author: authorName,
        } as BlogPost;
      });

      setPosts(normalized);
    } catch (error) {
      console.error("Error al cargar posts:", error);
      setPosts([]);
    }
  }, []);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  const handleDelete = async (postId: number, postAuthor: string) => {
    if (!user || user.nombre !== postAuthor) {
      alert("Solo puedes eliminar tus propias publicaciones.");
      return;
    }

    if (
      !window.confirm("¿Estás seguro de que quieres eliminar esta publicación?")
    ) {
      return;
    }

    try {
      await eliminarBlog(String(postId));
      alert("Publicación eliminada correctamente.");
      loadPosts();
    } catch (error) {
      console.error("Error al eliminar:", error);
      alert("Fallo la eliminación.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-8">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-white">Nuestro Blog</h1>
        <p className="text-xl text-sky-400 mt-2">
          Descubre las últimas novedades y artículos de la comunidad gamer
        </p>
      </header>

      {/* Botón para crear post (solo aparece si estás logueado) */}
      {isAuthenticated && (
        <div className="text-center mb-8">
          <button
            onClick={() => navigate("/create-post")}
            className="flex items-center justify-center mx-auto gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 shadow-lg"
          >
            <Plus className="w-5 h-5 mr-2" />
            Crear Nuevo Post
          </button>
        </div>
      )}

      {/* Lista de Posts */}
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-400">
            Aún no hay posts en el blog.{" "}
            {isAuthenticated
              ? "¡Sé el primero en crear una!"
              : "Inicia sesión para crear el primero."}
          </p>
        </div>
      ) : (
        // ... (Muestra de posts)
        <div className="space-y-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-700"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                {post.title}
              </h2>
              <div className="flex items-center justify-between text-gray-400 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-blue-400">
                    Por: {post.author}
                  </span>
                </div>
                <span className="text-gray-500">{post.date}</span>
              </div>
              <div className="text-gray-300 leading-relaxed text-lg whitespace-pre-line mb-6">
                {post.content}
              </div>

              {/* Botón de eliminar (solo para el autor) */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                {user && user.nombre === post.author && (
                  <button
                    onClick={() => handleDelete(post.id, post.author)}
                    className="flex items-center gap-2 text-red-500 hover:text-red-400 transition duration-150 p-2 rounded hover:bg-gray-700"
                    aria-label={`Eliminar publicación ${post.title}`}
                  >
                    <Trash2 className="w-5 h-5" />
                    <span>Eliminar</span>
                  </button>
                )}
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
