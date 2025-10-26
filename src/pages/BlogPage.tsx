import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  author: string;
}

function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const storedPosts = localStorage.getItem("blogPosts");
    if (storedPosts) {
      try {
        setPosts(JSON.parse(storedPosts) as BlogPost[]);
      } catch (e) {
        console.error("Error al parsear posts de localStorage:", e);
        setPosts([]);
      }
    }
  }, []);

  const renderPostCard = (post: BlogPost) => (
    <div
      key={post.id}
      className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
    >
      <h2 className="text-2xl font-bold mb-2 text-blue-300">{post.title}</h2>
      <p className="text-gray-400 text-sm mb-4">
        Por: {post.author} | Publicado el: {post.date}
      </p>
      {/* Muestra un extracto del contenido */}
      <p className="text-gray-200 line-clamp-3">{post.content}</p>
      <Link
        to={`/blog/${post.id}`}
        className="mt-4 inline-block text-blue-400 hover:text-blue-200 font-semibold"
      >
        Leer más...
      </Link>
    </div>
  );

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-white">Nuestro Blog</h1>

      {/* Botón para crear un nuevo post */}
      <div className="mb-8">
        <Link
          to="/blog/new"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-md"
        >
          ➕ Escribir Nuevo Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className="text-xl text-gray-400">
          Aún no hay publicaciones. ¡Sé el primero en crear una!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(renderPostCard)}
        </div>
      )}
    </div>
  );
}

export default BlogPage;
