import React from "react";
import { render, screen } from "@testing-library/react";
import { CartProvider, useCart, CartItem } from "../CartProvider";
import { fireEvent } from "@testing-library/dom";

interface TestComponentProps {
  item: Omit<CartItem, "quantity">;
}

function TestComponent({ item }: TestComponentProps) {
  const { cart, addToCart, removeFromCart, clearCart, total } = useCart();

  return (
    <div>
      <button onClick={() => addToCart(item)}>Add</button>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
      <button onClick={() => clearCart()}>Clear</button>
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

  it("adds an item to the cart", () => {
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

  it("increments quantity if item already exists", () => {
    render(
      <CartProvider>
        <TestComponent item={product} />
      </CartProvider>
    );

    const addButton = screen.getByText("Add");
    fireEvent.click(addButton);
    fireEvent.click(addButton);

    expect(screen.getByTestId("cart-length").textContent).toBe("1");
    expect(screen.getByTestId("total").textContent).toBe("200");
    expect(screen.getByText("Product 1 x 2")).toBeDefined();
  });

  it("removes an item from the cart", () => {
    render(
      <CartProvider>
        <TestComponent item={product} />
      </CartProvider>
    );

    const addButton = screen.getByText("Add");
    fireEvent.click(addButton);

    fireEvent.click(screen.getByText("Remove"));
    expect(screen.getByTestId("cart-length").textContent).toBe("0");
    expect(screen.getByTestId("total").textContent).toBe("0");
  });

  it("clears the cart", () => {
    render(
      <CartProvider>
        <TestComponent item={product} />
      </CartProvider>
    );

    const addButton = screen.getByText("Add");
    fireEvent.click(addButton);
    fireEvent.click(screen.getByText("Clear"));

    expect(screen.getByTestId("cart-length").textContent).toBe("0");
    expect(screen.getByTestId("total").textContent).toBe("0");
  });
});
