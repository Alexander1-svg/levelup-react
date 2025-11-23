import { Link } from "react-router-dom";
// Asegúrate de que esta ruta sea correcta para tu AuthContext
import { useAuth } from "../pages/AuthContext";

export function Header() {
  // Usamos el hook para obtener el estado del usuario (currentUser) y la función para cerrar sesión (logout)
  const { currentUser, logout } = useAuth();

  return (
    <header className="text-white font-semibold font-mono">
      <div className="mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-4">
<<<<<<< HEAD
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 gap-4">
=======
        <div className="flex items-center shrink-0 gap-4">
>>>>>>> test
          <button>
            <nav>
              <Link to="/">
                <img
                  src="/img/logolevelupgamer.png"
                  alt="Level-up Gamer"
                  className="h-16 w-22"
                />
              </Link>
            </nav>
          </button>
          <span className="flex">
            Level<p className="text-lime-500">UP</p>
            <p className="text-sky-300">Gamer</p>
          </span>
        </div>
        {/* Navegación principal */}
        <nav className="flex gap-6 flex-1 justify-center text-white">
          <Link
            className="hover:scale-110 transition-transform hover:text-sky-500 mx-10"
            to="/"
          >
            Inicio
          </Link>
          <Link
            className="hover:scale-110 transition-transform hover:text-sky-500 mx-10"
            to="/nosotros"
          >
            Nosotros
          </Link>
          <Link
            className="hover:scale-110 transition-transform hover:text-sky-500 mx-10"
            to="/blog"
          >
            Blogs
          </Link>
        </nav>
        {/* Login y carrito */}
        <div className="flex items-center shrink-0 gap-4">
          {/* Carrito */}
          <button className="relative hover:scale-110 transition-transform sm:w-auto md:w-auto lg:w-auto">
            <nav>
              <Link to="/carrito">
                <img
                  src="/img/IconoCarrito.png"
                  alt="Carrito de compras"
                  className="flex h-7 w-15 hover:bg-gray-800/70 rounded-3xl"
                />
              </Link>
            </nav>
          </button>
<<<<<<< HEAD
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
=======
          {/* Login */}
          <button className="bg-sky-500 hover:bg-sky-700 text-white font-light px-3 py-1 rounded hover:scale-110 hover:contrast-100 transition-transform">
            <nav>
              <Link to="/login">Iniciar sesión</Link>
            </nav>
          </button>
>>>>>>> test
        </div>
      </div>
    </header>
  );
}
