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

export function HomePage() {
  return (
    <>
      <Hero />

      <hr className="text-gray-100 max-w-7xl mx-auto my-3" />

      {/* Accesorios y Periféricos Gaming Esports */}

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

      {/* Computadores y Laptops Gaming */}

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

      {/* Consolas */}

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

      <hr className="text-gray-100 max-w-7xl mx-auto my-3" />

      {/* Sillas Gamer */}

      <article className="max-w-7xl mx-auto p-4 mb-8">
        <p className="text-gray-400 max-w-350 mx-auto text-xl mb-4">
          Sillas Gamer
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductCard
            id="10"
            title="Trust GXT 707R Resto"
            description="Silla Gamer Trust GXT 707R Resto Negro con Rojo"
            price="CLP 139.990"
            imageUrl="/img/trust_gxt707.png"
          />
          <ProductCard
            id="11"
            title="Kronos Hunter Pro"
            description="Silla Gamer Kronos Hunter Pro Negra y Azul"
            price="CLP 119.990"
            imageUrl="/img/kronos_hunter_pro.png"
          />
          <ProductCard
            id="12"
            title="Cougar Defensor"
            description="Silla Gamer Cougar Defensor Negra y Naranja"
            price="CLP 189.990"
            imageUrl="/img/cougar_defensor.png"
          />
        </div>
      </article>

      <hr className="text-gray-100 max-w-7xl mx-auto my-3" />

      {/* Mouse y teclados Gamer */}
      <article className="max-w-7xl mx-auto p-4 mb-8">
        <p className="text-gray-400 max-w-350 mx-auto text-xl mb-4">
          Mouse y teclados Gamer
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductCard
            id="13"
            title="Logitech G502 Hero"
            description="Mouse Gamer Logitech G502 Hero"
            price="CLP 79.990"
            imageUrl="/img/logitech_g502.png"
          />
          <ProductCard
            id="14"
            title="Razer DeathAdder"
            description="Mouse Gamer Razer DeathAdder"
            price="CLP 89.990"
            imageUrl="/img/razer_deathadder_v2.png"
          />
          <ProductCard
            id="15"
            title="Logitech G413"
            description="Teclado Gamer Logitech G413 Mechanical"
            price="CLP 99.990"
            imageUrl="/img/logitech_g413.png"
          />
        </div>
      </article>

      <hr className="text-gray-100 max-w-7xl mx-auto my-3" />

      {/* Mousepads */}
      <article className="max-w-7xl mx-auto p-4 mb-8">
        <p className="text-gray-400 max-w-350 mx-auto text-xl mb-4">
          Mousepads
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductCard
            id="16"
            title="HyperX Fury S"
            description="Mousepad Gamer HyperX Fury S Pro XL"
            price="CLP 29.990"
            imageUrl="/img/hyperx_fury_s.png"
          />
          <ProductCard
            id="17"
            title="Logitech G640"
            description="Mousepad Gamer Logitech G640"
            price="CLP 29.990"
            imageUrl="/img/logitech_g640.png"
          />
          <ProductCard
            id="18"
            title="Razer Gigantus V2"
            description="Mousepad Gamer Razer Gigantus V2"
            price="CLP 29.990"
            imageUrl="/img/razer_gigantus_v2.png"
          />
        </div>
      </article>

      <hr className="text-gray-100 max-w-7xl mx-auto my-3" />

      {/* Poleras y polerones personalizados */}
      <article className="max-w-7xl mx-auto p-4 mb-8">
        <p className="text-gray-400 max-w-350 mx-auto text-xl mb-4">
          Poleras y polerones personalizados
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductCard
            id="19"
            title="Polera HALO"
            description="Polera de HALO Talla M/L/XL"
            price="CLP 19.990"
            imageUrl="/img/polera_halo.png"
          />
          <ProductCard
            id="20"
            title="Polera God Of War"
            description="Polera de God Of War Talla M/L/XL"
            price="CLP 19.990"
            imageUrl="/img/polera_gow.png"
          />
          <ProductCard
            id="21"
            title="Poleron Legend of Zelda"
            description="Poleron de Legend of Zelda Talla M/L/XL"
            price="CLP 39.990"
            imageUrl="/img/poleron_zelda.png"
          />
        </div>
      </article>

      <hr className="text-gray-100 max-w-7xl mx-auto my-3" />

      {/* Juegos de mesa */}
      <article className="max-w-7xl mx-auto p-4 mb-8">
        <p className="text-gray-400 max-w-350 mx-auto text-xl mb-4">
          Juegos de mesa
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductCard
            id="22"
            title="Warhammer 40M"
            description="Juego de mesa Warhammer 40,000"
            price="CLP 89.990"
            imageUrl="/img/warhammer_40m.png"
          />
          <ProductCard
            id="23"
            title="Ajedrez"
            description="Juego de mesa Ajedrez"
            price="CLP 24.990"
            imageUrl="/img/ajedrez.png"
          />
          <ProductCard
            id="24"
            title="Shogi"
            description="Juego de mesa Shogi"
            price="CLP 59.990"
            imageUrl="/img/shogi.png"
          />
        </div>
      </article>
    </>
  );
}
