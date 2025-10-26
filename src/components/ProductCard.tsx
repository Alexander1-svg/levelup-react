import { useCart } from "../components/CartProvider";

interface ProductCardProps {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: string;
}

// 2. Creamos el componente. Recibe los props y los usa para rellenar el HTML.
export function ProductCard({
  imageUrl,
  title,
  description,
  price,
  id,
}: ProductCardProps) {
  const { addToCart } = useCart();
  const handleBuyClick = () => {
    addToCart({
      id,
      title,
      price: Number(price.replace(/\D/g, "")), // convierte "CLP 159.990" a 159990
      imageUrl,
    });
    
  };

  return (
    <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <img src={imageUrl} alt={title} className="w-full h-72 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        {" "}
        <h3 className="text-lg font-sans mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 flex-grow">{description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold">{price}</span>
          <button
            className="bg-lime-600 hover:bg-lime-700 text-white px-3 py-1 rounded"
            onClick={handleBuyClick} // 4. Así se manejan los clics en React
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
