import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ProductCard } from "../ProductCard";

describe("ProductCard", () => {
  let addToCartSpy: jasmine.Spy;
  let decrementFromCartSpy: jasmine.Spy;
  let removeFromCartSpy: jasmine.Spy;
  let clearCartSpy: jasmine.Spy;

  beforeEach(() => {
    addToCartSpy = jasmine.createSpy("addToCart");
    decrementFromCartSpy = jasmine.createSpy("decrementFromCart");
    removeFromCartSpy = jasmine.createSpy("removeFromCart");
    clearCartSpy = jasmine.createSpy("clearCart");
  });

  const productProps = {
    id: "1",
    imageUrl: "https://via.placeholder.com/150",
    title: "Test Product",
    description: "This is a test product",
    price: "CLP 159.990",
  };

  // Hook mock que será inyectado
  const mockUseCart = () => ({
    cart: [{ ...productProps, price: 159990, quantity: 1 }],
    addToCart: addToCartSpy,
    decrementFromCart: decrementFromCartSpy,
    removeFromCart: removeFromCartSpy,
    clearCart: clearCartSpy,
    total: 159990,
  });

  it("renders correctly with props", () => {
    render(<ProductCard {...productProps} useCartHook={mockUseCart} />);
    expect(screen.getByText(productProps.title)).toBeDefined();
    expect(screen.getByText(productProps.description)).toBeDefined();
    expect(screen.getByText(productProps.price)).toBeDefined();

    const img = screen.getByRole("img") as HTMLImageElement;
    expect(img.src).toContain(productProps.imageUrl);
    expect(img.alt).toBe(productProps.title);
  });

  it("calls addToCart when Comprar button is clicked", () => {
    render(<ProductCard {...productProps} useCartHook={mockUseCart} />);
    const button = screen.getByText("Comprar");
    fireEvent.click(button);

    expect(addToCartSpy).toHaveBeenCalledWith({
      id: productProps.id,
      title: productProps.title,
      price: 159990,
      imageUrl: productProps.imageUrl
    });
  });

  it("calls decrementFromCart when restar button is clicked", () => {
    render(<ProductCard {...productProps} useCartHook={mockUseCart} />);
    const restarButton = screen.getByText("-"); // Asumiendo que tu componente tiene botón "-"
    fireEvent.click(restarButton);

    expect(decrementFromCartSpy).toHaveBeenCalledWith(productProps.id);
  });

  it("calls clearCart when vaciar carrito button is clicked", () => {
    render(<ProductCard {...productProps} useCartHook={mockUseCart} />);
    const vaciarButton = screen.getByText("Vaciar carrito 🗑️"); 
    fireEvent.click(vaciarButton);

    expect(clearCartSpy).toHaveBeenCalled();
  });
});
