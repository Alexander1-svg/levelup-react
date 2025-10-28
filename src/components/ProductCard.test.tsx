import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProductCard } from "./ProductCard";

// 1. Creamos una función falsa para simular 'addToCart'
const mockAddToCart = vi.fn();

// Mockeamos el módulo del contexto del carrito
vi.mock("../components/CartProvider", () => ({
  useCart: () => ({
    addToCart: mockAddToCart,
  }),
}));

// 2. Mockeamos la función 'alert' del navegador
const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});
afterEach(() => {
  cleanup();
  alertMock.mockClear();
  mockAddToCart.mockClear();
});

describe("Componente ProductCard - Lógica de Compra", () => {
  const testProduct = {
    id: "1",
    title: "Logitech G733 Wireless",
    description: "Auriculares de prueba",
    price: "CLP 159.990",
    imageUrl: "/img/test-image.webp",
  };

  it("debería llamar a addToCart y mostrar una alerta al hacer clic en Comprar", async () => {
    const user = userEvent.setup();
    render(<ProductCard {...testProduct} />);

    await user.click(screen.getByRole("button", { name: "Comprar" }));

    expect(alertMock).toHaveBeenCalledWith("Producto agregado al carrito");

    expect(mockAddToCart).toHaveBeenCalledTimes(1);

    expect(mockAddToCart).toHaveBeenCalledWith({
      id: "1",
      title: "Logitech G733 Wireless",
      price: 159990,
      imageUrl: "/img/test-image.webp",
    });
  });
});
