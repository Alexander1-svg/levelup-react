import { useCart } from "../components/CartProvider";
import { toast } from "sonner"; // 1. Importamos el Toast

interface ProductCardProps {
  id: string | number;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

export function ProductCard({
  imageUrl,
  title,
  description,
  price,
  id,
}: ProductCardProps) {
  const { addToCart } = useCart();

  // 3. Creamos el formateador de precio SOLO para mostrarlo en pantalla
  const precioFormateado = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(price);

  const handleBuyClick = () => {
    addToCart({
      id: id.toString(),
      title,
      price: price,
      imageUrl,
    });

    toast.success(`¡${title} agregado al carrito!`);
  };

  return (
    <div className="group relative flex flex-col h-full rounded-3xl overflow-hidden border-2 border-cyan-700 bg-linear-to-tl from-black via-gray-900 to-slate-900 hover:shadow-[0_0_20px_rgba(8,145,178,0.6)] hover:scale-105 transition-all duration-300 ease-in-out">
      {/* Contenedor de Imagen */}
      <div className="relative w-full h-48 p-4 flex items-center justify-center bg-black/20">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-auto object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Contenedor de Información */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-medium text-white mb-2 line-clamp-1">
          {title}
        </h3>

        <p className="text-slate-400 text-sm mb-6 line-clamp-2 flex-grow font-light">
          {description}
        </p>

        {/* Pie de tarjeta: Precio y Botón */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-700/50">
          <span className="text-2xl font-bold text-cyan-400 drop-shadow-sm">
            {precioFormateado} {/* Mostramos la variable formateada */}
          </span>

          <button
            onClick={handleBuyClick}
            className="cursor-pointer bg-cyan-700 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded-xl shadow-lg shadow-cyan-900/50 hover:shadow-cyan-500/50 transition-all duration-300 active:scale-95"
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
