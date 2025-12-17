import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { obtenerProductoPorId } from "../api/productoApi";
import type { Producto } from "../types/Producto";
import { ArrowLeft, ShoppingCart } from "lucide-react";

export default function ProductoDetallePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [producto, setProducto] = useState<Producto | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducto = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const data = await obtenerProductoPorId(Number(id));
        setProducto(data);
      } catch (err) {
        setError("No se pudo cargar el producto.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducto();
  }, [id]);

  if (loading)
    return <div className="text-white text-center mt-10">Cargando...</div>;
  if (error || !producto)
    return (
      <div className="text-red-500 text-center mt-10">
        {error || "Producto no encontrado"}
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-950 p-8 text-white">
      {/* Botón Volver */}
      <button
        onClick={() => navigate(-1)}
        className="flex text-xl items-center gap-2 text-gray-400 hover:text-lime-400 mb-6 transition-colors"
      >
        <ArrowLeft size={20} /> Volver
      </button>

      <div className="max-w-6xl mx-auto bg-gray-900 rounded-xl overflow-hidden shadow-2xl border shadow-2xl shadow-sky-500/50 border-1 border-sky-700">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-slate-700 flex items-center justify-center p-8">
            <img
              src={producto.imagenUrl || "https://via.placeholder.com/500"}
              alt={producto.nombre}
              className="max-h-96 object-contain rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-2">
                {producto.nombre}
              </h1>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              {producto.descripcion}
            </p>

            <div className="text-3xl font-bold text-white">
              ${producto.precio.toLocaleString()}
            </div>

            <button
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
              onClick={() => console.log("Agregar al carrito", producto)}
            >
              <ShoppingCart size={20} />
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
