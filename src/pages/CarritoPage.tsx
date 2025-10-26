import { useCart } from "../components/CartProvider";
import { Link } from "react-router-dom";

export default function CarritoPage() {
  const { cart, removeFromCart, clearCart, total } = useCart();

  if (cart.length === 0)
    return (
      <div className="p-8 text-center text-white">
        <h1 className="text-2xl mb-4">Tu carrito está vacío 🛒</h1>
        <Link to="/">
          <button className="bg-lime-600 px-4 py-2 rounded hover:bg-lime-700">
            Volver al inicio
          </button>
        </Link>
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">🛒 Carrito de compras</h1>
      <ul className="space-y-4">
        {cart.map((p) => (
          <li
            key={p.id}
            className="flex justify-between items-center bg-gray-800 p-4 rounded"
          >
            <div className="flex items-center gap-4">
              {p.imageUrl && (
                <img
                  src={p.imageUrl}
                  alt={p.title}
                  className="w-20 h-20 object-cover rounded"
                />
              )}
              <div>
                <p className="font-semibold">{p.title}</p>
                <p>Cantidad: {p.quantity}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold">
                ${ (p.price * p.quantity).toLocaleString("es-CL") }
              </span>
              <button
                onClick={() => removeFromCart(p.id)}
                className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center mt-6">
        <span className="text-xl font-bold">
          Total: ${ total.toLocaleString("es-CL") }
        </span>
        <button
          onClick={clearCart}
          className="bg-lime-600 hover:bg-lime-700 px-4 py-2 rounded"
        >
          Pagar 💸
        </button>
      </div>
    </div>
  );
}
