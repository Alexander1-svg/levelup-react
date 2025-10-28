import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CartProvider, useCart, CartItem } from "../CartProvider";

// Componente de prueba para interactuar con el hook
interface TestComponentProps {
  item: Omit<CartItem, "quantity">;
}

function TestComponent({ item }: TestComponentProps) {
  const { cart, addToCart, removeFromCart, decrementFromCart, clearCart, total } = useCart();

  return (
    <div>
      <button onClick={() => addToCart(item)}>Add</button>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
      <button onClick={() => decrementFromCart(item.id)}>-</button>
      <button onClick={() => addToCart(item)}>+</button>
      <button onClick={clearCart}>Vaciar carrito</button>

      <span data-testid="cart-length">{cart.length}</span>
      <span data-testid="total">{total}</span>

      {cart.map((c) => (
        <div key={c.id} data-testid="cart-item">
          {c.title} x {c.quantity}
        </div>
      ))}
    </div>
  );
}

describe("CartProvider", () => {
  const product = { id: "1", title: "Product 1", price: 100 };

  beforeEach(() => {
    localStorage.clear();
  });

  it("agrega un item al carrito", () => {
    render(
      <CartProvider>
        <TestComponent item={product} />
      </CartProvider>
    );

    fireEvent.click(screen.getByText("Add"));

    expect(screen.getByTestId("cart-length").textContent).toBe("1");
    expect(screen.getByTestId("total").textContent).toBe("100");
    expect(screen.getByText("Product 1 x 1")).toBeDefined();
  });

  it("incrementa cantidad si el item ya existe usando +", () => {
    render(
      <CartProvider>
        <TestComponent item={product} />
      </CartProvider>
    );

    const addButton = screen.getByText("+");
    fireEvent.click(addButton);
    fireEvent.click(addButton);

    expect(screen.getByTestId("cart-length").textContent).toBe("1");
    expect(screen.getByTestId("total").textContent).toBe("200");
    expect(screen.getByText("Product 1 x 2")).toBeDefined();
  });

  it("decrementa cantidad con - y elimina si llega a 0", () => {
    render(
      <CartProvider>
        <TestComponent item={product} />
      </CartProvider>
    );

    const addButton = screen.getByText("+");
    fireEvent.click(addButton); // cantidad 1
    fireEvent.click(addButton); // cantidad 2

    const decrementButton = screen.getByText("-");
    fireEvent.click(decrementButton); // cantidad 1

    expect(screen.getByText("Product 1 x 1")).toBeDefined();
    expect(screen.getByTestId("total").textContent).toBe("100");

    fireEvent.click(decrementButton); // cantidad 0, debe eliminar

    expect(screen.getByTestId("cart-length").textContent).toBe("0");
    expect(screen.getByTestId("total").textContent).toBe("0");
  });

  it("elimina un item completamente con Remove", () => {
    render(
      <CartProvider>
        <TestComponent item={product} />
      </CartProvider>
    );

    fireEvent.click(screen.getByText("+")); // cantidad 1
    fireEvent.click(screen.getByText("Remove")); // elimina todo

    expect(screen.getByTestId("cart-length").textContent).toBe("0");
    expect(screen.getByTestId("total").textContent).toBe("0");
  });

  it("vacía el carrito con Vaciar carrito", () => {
    render(
      <CartProvider>
        <TestComponent item={product} />
      </CartProvider>
    );

    fireEvent.click(screen.getByText("+")); // cantidad 1
    fireEvent.click(screen.getByText("Vaciar carrito")); // borra todo

    expect(screen.getByTestId("cart-length").textContent).toBe("0");
    expect(screen.getByTestId("total").textContent).toBe("0");
  });
});
