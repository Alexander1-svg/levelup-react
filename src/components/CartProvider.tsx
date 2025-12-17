import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import {
  obtenerCarrito,
  agregarItem,
  removerItem,
  actualizarCantidad,
} from "../api/carritoApi";
import type { Carrito } from "../types/Carrito";

// =====================
// Estructura del carrito
// =====================
export interface CartItem {
  id: number;          // id del CarritoItem
  productoId: number;  // id del Producto
  title: string;
  price: number;
  imageUrl?: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity" | "id">) => Promise<void>;
  removeFromCart: (id: number) => Promise<void>;
  decrementFromCart: (id: number) => Promise<void>;
  clearCart: () => Promise<void>;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// =====================
// Mapper backend → frontend
// =====================
const mapCarrito = (carrito: Carrito): CartItem[] =>
  carrito.items.map((item) => {
    const producto =
      typeof item.producto === "object" ? item.producto : null;

    return {
      id: item.id,
      productoId: producto?.id ?? 0,
      title: producto?.nombre ?? "",
      price: producto?.precio ?? 0,
      imageUrl: producto?.imagenUrl,
      quantity: item.cantidad,
    };
  });

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  // =====================
  // Cargar carrito backend
  // =====================
  useEffect(() => {
    cargarCarrito();
  }, []);

  const cargarCarrito = async () => {
    const carrito = await obtenerCarrito();
    const items = mapCarrito(carrito);
    setCart(items);
    recalcularTotal(items);
  };

  const recalcularTotal = (items: CartItem[]) => {
    setTotal(items.reduce((acc, p) => acc + p.price * p.quantity, 0));
  };

  // =====================
  // Agregar 1 unidad
  // =====================
  const addToCart = async (item: Omit<CartItem, "quantity" | "id">) => {
    const carrito = await agregarItem({
      productoId: item.productoId,
      cantidad: 1,
    });

    const items = mapCarrito(carrito);
    setCart(items);
    recalcularTotal(items);
  };

  // =====================
  // Eliminar producto
  // =====================
  const removeFromCart = async (id: number) => {
    const carrito = await removerItem(id);
    const items = mapCarrito(carrito);
    setCart(items);
    recalcularTotal(items);
  };

  // =====================
  // Restar 1 unidad
  // =====================
  const decrementFromCart = async (id: number) => {
    const item = cart.find((p) => p.id === id);
    if (!item) return;

    if (item.quantity === 1) {
      await removeFromCart(id);
      return;
    }

    const carrito = await actualizarCantidad(id, item.quantity - 1);
    const items = mapCarrito(carrito);
    setCart(items);
    recalcularTotal(items);
  };

  // =====================
  // Vaciar carrito
  // =====================
  const clearCart = async () => {
    for (const item of cart) {
      await removerItem(item.id);
    }
    setCart([]);
    setTotal(0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        decrementFromCart,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// =====================
// Hook
// =====================
export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart debe usarse dentro de CartProvider");
  return context;
}
