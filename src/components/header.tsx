import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { User, ShoppingCart } from "lucide-react";

export function Header() {
  const { user, logout, isAuthenticated } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="text-white font-semibold font-mono bg-black shadow-lg">
      <div className="mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center shrink-0 gap-4">
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

        {/* Login y carrito - VERSIÓN CON SALUDO CLICKEABLE */}
        <div className="flex items-center shrink-0 gap-4">
          {/* Carrito - SIEMPRE VISIBLE */}
          <button>
            <nav>
              <Link to="/carrito">
                <ShoppingCart
                  className="mr-2 h-8 w-8 text-white hover:drop-shadow hover:drop-shadow-sky-200 
                rounded-xl hover:scale-110 transition-transform"
                />
              </Link>
            </nav>
          </button>

          {/* Estado de autenticación */}
          {isAuthenticated ? (
            <>
              <Link to="/dashboard">
                <User
                  className="p-1 mr-2 h-9 w-9 text-white bg-linear-to-br from-lime-400 via-lime-600
                 to-cyan-500 rounded-full hover:scale-110 transition-transform hover:drop-shadow hover:drop-shadow-cyan-400"
                />
              </Link>
            </>
          ) : (
            /* Botón de Iniciar Sesión (cuando no está logueado) */
            <button className="bg-sky-500 hover:bg-sky-700 text-white font-light px-3 py-1 rounded hover:scale-110 hover:contrast-100 transition-transform">
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
