import { Link } from "react-router-dom";

const categorias = [
  {
    nombre: "Accesorios y Perifericos",
    slug: "Accesorios",
  },
  {
    nombre: "Consolas",
    slug: "Consolas",
  },
  {
    nombre: "PCs y Laptos Gamer",
    slug: "Computadores",
  },
  {
    nombre: "Sillas Gamer",
    slug: "Silla_Gamer",
  },
  {
    nombre: "Mouse y Teclados Gamer",
    slug: "Mouse_Teclado",
  },
  {
    nombre: "Mousepads",
    slug: "Mousepadds",
  },
  {
    nombre: "Ropa personalizada",
    slug: "Poleras_Polerones",
  },
  {
    nombre: "Juegos de Mesa",
    slug: "Juegos_de_Mesa",
  },
];

function Hero() {
  return (
    <div className="bg-[url('/public/img/fwebp.webp')] bg-center bg-gray-900/80 bg-blend-overlay h-110 flex items-center justify-center mb-8">
      <div>
        <h1 className="text-5xl text-white font-medium text-center mb-4 drop-shadow-lg drop-shadow-black">
          Bienvenido a Level Up Gamer
        </h1>
        <span className="text-white text-2xl text-center block shadow-lg drop-shadow-lg drop-shadow-black">
          Tu tienda gamer de confianza
        </span>
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 pb-12">
        {/* Categorías */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 m-20 items-center justify-center">
          {categorias.map((cat) => (
            <Link
              key={cat.slug}
              to={`/categoria/${cat.slug}`}
              className="relative h-70 w-full flex flex-col items-center justify-center rounded-3xl overflow-hidden
               bg-linear-to-tl from-black via-gray-900 to-slate-900 p-8 border-cyan-700 border-2 hover:drop-shadow-cyan-600 
               hover:drop-shadow-xl hover:scale-105 hover:contrast-125 transition-transform duration-300 group cursor-pointer m-3"
            >
              {/* Título */}
              <span className="text-cyan-300 text-3xl w-full text-center font-medium text-2xl block w-2/3">
                {cat.nombre}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
