import { ProductCard } from "../components/ProductCard";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-auto bg-gradient-to-t from-black via-sky-900 to-black">
      <div className="flex flex-col items-center justify-center mr-8 px-10 py-10">
        <p className="text-white text-6xl text-center mb-4 font-mono sm:text-4xl md:text-5xl lg:text-6xl">
          Prepárate para <br />
          los lanzamientos de este 2025
        </p>
      </div>
      <div className="relative">
        <img
          src="/img/p-pasta-disipadora_jpg.webp"
          alt="Oferta Septiembre"
          className="flex rounded border-l-3 border-black sm:item-bottom-0 md:item-bottom-0"
        />
      </div>
    </div>
  );
}

// --- Componente principal de la Página de Inicio ---
export function HomePage() {
  return (
    <>
      <Hero />

      <hr className="text-gray-100 max-w-7xl mx-auto my-3" />

      <article className="max-w-7xl mx-auto p-4">
        <p className="text-gray-400 max-w-350 mx-auto text-xl mb-4">
          Accesorios y Periféricos Gaming Esports
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductCard
            id="1"
            title="Logitech G733 Wireless"
            description="Auriculares inalámbricos para juegos LIGHTSPEED con LIGHTSYNC RGB"
            price="CLP 159.990"
            imageUrl="/img/logitech_g733.png"
          />
          <ProductCard
            id="2"
            title="DualSense PS5"
            description="Control inalámbrico DualSense para PS5"
            price="CLP 52.990"
            imageUrl="/img/dualsense_ps5.png"
          />
          <ProductCard
            id="3"
            title="Estuche Nintendo Switch"
            description="Estuche protector para Nintendo Switch OLED"
            price="CLP 19.990"
            imageUrl="/img/nintendo_switch_case.png"
          />
        </div>
      </article>

      <hr className="text-gray-100 max-w-7xl mx-auto my-3" />

      <article className="max-w-7xl mx-auto p-4">
        <p className="text-gray-400 max-w-350 mx-auto text-xl mb-4">
          Computadores y Laptops Gaming
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductCard
            id="4"
            title="Asus ROG Strix G18"
            description="Intel Core i9-13650HX / NVIDIA GeForce RTX 4070 12GB / 32GB RAM
                / 1TB SSD"
            price="CLP 2.229.990"
            imageUrl="/img/asus_rog_g18.png"
          />
          <ProductCard
            id="5"
            title="Acer Nitro AN515"
            description="Ryzen 7 8845HS/ NVIDIA® GeForce® RTX 3060 6GB / 16GB RAM / 512GB
                SSD / Pantalla 15,6'' Full HD @144Hz"
            price="CLP 1.099.990"
            imageUrl="/img/acer_nitro.png"
          />
          <ProductCard
            id="6"
            title="PC Gamer R5 RTX 4060"
            description="Ryzen 5 8400f / NVIDIA GeForce RTX 4060 / 16GB RAM / 512GB SSD / refrigeración líquida / gabinete ATX"
            price="CLP 1.199.990"
            imageUrl="/img/pc_gamer_r5.png"
          />
        </div>
      </article>

      <hr className="text-gray-100 max-w-7xl mx-auto my-3" />

      <article className="max-w-7xl mx-auto p-4 mb-8">
        <p className="text-gray-400 max-w-350 mx-auto text-xl mb-4">Consolas</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductCard
            id="7"
            title="PlayStation 5"
            description="Consola PlayStation 5 Slim 825GB"
            price="CLP 536.990"
            imageUrl="/img/ps5_slim.png"
          />
          <ProductCard
            id="8"
            title="Xbox Series S"
            description="Consola Xbox Series S 512GB"
            price="CLP 419.990"
            imageUrl="/img/xbox_series_s.png"
          />
          <ProductCard
            id="9"
            title="Nintendo Switch 2"
            description="Consola Nintendo Switch 2 / 256GB / 12 RAM / pantalla tactil"
            price="CLP 589.990"
            imageUrl="/img/nintendo_switch2.png"
          />
        </div>
      </article>
    </>
  );
}
