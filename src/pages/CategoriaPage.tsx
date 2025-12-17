import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Producto } from "../types/Producto";
import { ProductCard } from "../components/ProductCard";
import { obtenerProductosPorCategoria } from "../api/productoApi";

export default function CategoriaPage() {
  const { nombreCategoria } = useParams<{ nombreCategoria: string }>();

  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductos = async () => {
      if (!nombreCategoria) return;

      setLoading(true);
      setError(null);

      try {
        const productosData = await obtenerProductosPorCategoria(
          nombreCategoria
        );
        setProductos(productosData);
      } catch (error) {
        setError("Error al obtener los productos");
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [nombreCategoria]);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-8 min-h-screen bg-gray-900">
      <h1 className="text-3xl font-bold text-white mb-8 uppercase border-b border-gray-700 pb-4">
        {nombreCategoria}
      </h1>

      {productos.length === 0 ? (
        <p className="text-gray-400 text-lg">
          No hay productos disponibles en esta categoría.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productos.map((prod) => (
            <Link key={prod.id} to={`/producto/${prod.id}`}>
              <ProductCard
                id={prod.id}
                title={prod.nombre}
                description={prod.descripcion || "Sin descripción disponible"}
                price={prod.precio}
                imageUrl={prod.imagenUrl || "https://via.placeholder.com/300"}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
