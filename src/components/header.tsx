import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-gradient-to-t from-black via-black to-stone-800 text-white font-semibold">
      <div className="mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center flex-shrink-0 gap-4">
          <button>
            <nav>
              <Link to="/">
                <img
                  src="/img/logolevelupgamer.png"
                  alt="Level-up Gamer"
                  className="h-20 w-27 mr-2"
                />
              </Link>
            </nav>
          </button>
        </div>

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
          {/* Login */}
          <button className="bg-sky-500 hover:bg-sky-700 text-white px-3 py-1 rounded hover:scale-110 transition-transform">
            <nav>
              <Link to="/login">Iniciar sesión</Link>
            </nav>
          </button>
        </div>
      </div>
    </header>
  );
}
