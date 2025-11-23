import { Link } from "react-router-dom";
// Asegúrate de que esta ruta sea correcta para tu AuthContext
import { useAuth } from "../pages/AuthContext";

export function Header() {
  // Usamos el hook para obtener el estado del usuario (currentUser) y la función para cerrar sesión (logout)
  const { currentUser, logout } = useAuth();

  return (
    <header className="bg-gradient-to-t from-black via-black to-stone-800 text-white font-semibold">
      <div className="mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 gap-4">
          <button>
            <nav>
              <Link to="/">
                <img
                  src="/img/logolevelupgamer.png"
                  alt="Level-up Gamer"
                  className="h-18 w-26 mr-2"
                />
              </Link>
            </nav>
          </button>
        </div>
        {/* Navegación principal */}
        <nav className="flex gap-6 flex-1 justify-center text-white">
          <Link
            className="hover:scale-110 transform-transition hover:text-sky-500"
            to="/"
          >
            Inicio
          </Link>
          <p>/</p>
          <Link
            className="hover:scale-110 transform-transition hover:text-sky-500"
            to="/nosotros"
          >
            Nosotros
          </Link>
          <p>/</p>
          <Link
            className="hover:scale-110 transform-transition hover:text-sky-500"
            to="/blog"
          >
            Blogs
          </Link>
        </nav>
        {/* Login y carrito */}
        <div className="flex items-center flex-shrink-0 gap-4">
          {/* Carrito */}
          <button className="relative hover:scale-120 transition-transform sm:w-auto md:w-auto lg:w-auto">
            <nav>
              <Link to="/carrito">
                <img
                  src="/img/5465865.png"
                  alt="Carrito de compras"
                  className="size-9"
                />
              </Link>
            </nav>
          </button>
          {/* 🟢 LÓGICA CONDICIONAL: Muestra el nombre/logout o Iniciar Sesión 🟢 */}
          {currentUser ? (
            <div className="flex items-center gap-4 text-sm">
              <Link
                to="/dashboard"
                className="text-sky-500 hover:text-sky-400 hover:underline transition-colors"
              >
                Hola, {currentUser.fullName.split(" ")[0]}{" "}
                {/* Muestra el primer nombre */}
              </Link>
              <button
                onClick={logout} // Llama a la función de cierre de sesión del contexto
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded hover:scale-110 transition-transform text-xs"
              >
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <button className="bg-sky-500 hover:bg-sky-700 text-white px-3 py-1 rounded hover:scale-110 transition-transform">
              <nav>
                <Link to="/login">Iniciar sesión</Link>
              </nav>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
