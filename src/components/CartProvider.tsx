import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";


// Estructura de un ítem del carrito
export interface CartItem {
  id: string;
  title: string;
  price: number; 
  imageUrl?: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  decrementFromCart: (id: string) => void; // nuevo método para restar 1
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Cargar carrito del localStorage al inicio
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  // Guardar carrito en localStorage al actualizar
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Agregar 1 unidad al carrito (o crear si no existe)
  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // Eliminar todo el producto del carrito
  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  // Restar 1 unidad del producto
  const decrementFromCart = (id: string) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0) // eliminar producto si cantidad llega a 0
    );
  };

  // Vaciar todo el carrito
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  // Calculamos el total
  const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, decrementFromCart, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook para consumir el carrito
export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart debe usarse dentro de CartProvider");
  return context;
}
