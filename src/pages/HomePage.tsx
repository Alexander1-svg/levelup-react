import { ProductCard } from "../components/ProductCard";

function Hero() {
  return (
    <div className="bg-[url('/public/img/fwebp.webp')] bg-center bg-gray-900/80 bg-blend-overlay h-110 flex items-center justify-center mb-8">
      <div>
        <h1 className="text-5xl text-white font-medium text-center mb-4">
          Bienvenido a Level Up Gamer
        </h1>
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <>
      <Hero />
      <div>
        {/* Categorías */}
        <div className="grid grid-cols-3 grids-2">
          <div className="relative rounded-3xl overflow-hidden bg-linear-to-tl from-black via-gray-900 to-slate-900 p-16 m-15 border-cyan-700 border-2 hover:scale-105 hover:contrast-125 transition-transform duration-300">
            <span className="text-slate-300 text-center font-light text-2xl mr-8">
              Accesorios y Perifericos
            </span>
            <img
              src="/img/logitech_g733.png"
              alt="Consolas"
              className="h-30 w-30 absolute bottom-0 right-0 mb-4 mr-4"
            />
          </div>
          <div className="flex relative rounded-3xl overflow-hidden bg-linear-to-tl from-black via-gray-900 to-slate-900 p-16 m-15 border-cyan-700 border-2 hover:scale-105 hover:contrast-125 transition-transform duration-300">
            <span className="text-slate-300 text-center font-light text-2xl mr-8">
              Consolas
            </span>
            <img
              src="/img/ps5_slim.png"
              alt="Consolas"
              className="h-30 w-30 absolute bottom-0 right-0 mb-4 mr-4"
            />
          </div>
          <div className="flex relative rounded-3xl overflow-hidden bg-linear-to-tl from-black via-gray-900 to-slate-900 p-16 m-15 border-cyan-700 border-2 hover:scale-105 hover:contrast-125 transition-transform duration-300">
            <span className="text-slate-300 text-center font-light text-2xl mr-8">
              Computadires y Laptos Gaming
            </span>
            <img
              src="/img/ps5_slim.png"
              alt="Consolas"
              className="h-30 w-30 absolute bottom-0 right-0 mb-4 mr-4"
            />
          </div>
          <div className="flex relative rounded-3xl overflow-hidden bg-linear-to-tl from-black via-gray-900 to-slate-900 p-16 m-15 border-cyan-700 border-2 hover:scale-105 hover:contrast-125 transition-transform duration-300">
            <span className="text-slate-300 text-center font-light text-2xl mr-8">
              Sillas Gamers
            </span>
            <img
              src="/img/ps5_slim.png"
              alt="Consolas"
              className="h-30 w-30 absolute bottom-0 right-0 mb-4 mr-4"
            />
          </div>
          <div className="flex relative rounded-3xl overflow-hidden bg-linear-to-tl from-black via-gray-900 to-slate-900 p-16 m-15 border-cyan-700 border-2 hover:scale-105 hover:contrast-125 transition-transform duration-300">
            <span className="text-slate-300 text-center font-light text-2xl mr-8">
              Mouse y Teclados Gamer
            </span>
            <img
              src="/img/ps5_slim.png"
              alt="Consolas"
              className="h-30 w-30 absolute bottom-0 right-0 mb-4 mr-4"
            />
          </div>
          <div className="flex relative rounded-3xl overflow-hidden bg-linear-to-tl from-black via-gray-900 to-slate-900 p-16 m-15 border-cyan-700 border-2 hover:scale-105 hover:contrast-125 transition-transform duration-300">
            <span className="text-slate-300 text-center font-light text-2xl mr-8">
              Mousepads
            </span>
            <img
              src="/img/ps5_slim.png"
              alt="Consolas"
              className="h-30 w-30 absolute bottom-0 right-0 mb-4 mr-4"
            />
          </div>
          <div className="flex relative rounded-3xl overflow-hidden bg-linear-to-tl from-black via-gray-900 to-slate-900 p-16 m-15 border-cyan-700 border-2 hover:scale-105 hover:contrast-125 transition-transform duration-300">
            <span className="text-slate-300 text-center font-light text-2xl mr-8">
              Ropa personalizada
            </span>
            <img
              src="/img/ps5_slim.png"
              alt="Consolas"
              className="h-30 w-30 absolute bottom-0 right-0 mb-4 mr-4"
            />
          </div>
          <div className="flex relative rounded-3xl overflow-hidden bg-linear-to-tl from-black via-gray-900 to-slate-900 p-16 m-15 border-cyan-700 border-2 hover:scale-105 hover:contrast-125 transition-transform duration-300">
            <span className="text-slate-300 text-center font-light text-2xl mr-8">
              Juegos de Mesa
            </span>
            <img
              src="/img/ps5_slim.png"
              alt="Consolas"
              className="h-30 w-30 absolute bottom-0 right-0 mb-4 mr-4"
            />
          </div>
        </div>
      </div>
    </>
  );
}
