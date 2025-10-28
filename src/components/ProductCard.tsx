import React from "react";
import { useCart as defaultUseCart } from "../components/CartProvider";

interface ProductCardProps {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  useCartHook?: typeof defaultUseCart;
}

export function ProductCard({
  imageUrl,
  title,
  description,
  price,
  id,
  useCartHook,
}: ProductCardProps) {
  const { addToCart } = (useCartHook || defaultUseCart)();
  const handleBuyClick = () => {
    addToCart({
      id,
      title,
      price: Number(price.replace(/\D/g, "")),
      imageUrl,
    });
    alert("Producto agregado al carrito");
  };

  return (
    <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <img src={imageUrl} alt={title} className="w-full h-auto object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        {" "}
        <h3 className="text-lg font-sans mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 flex-grow">{description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold">{price}</span>
          <button
            className="bg-lime-600 hover:bg-lime-700 text-white px-3 py-1 rounded"
            onClick={handleBuyClick}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
