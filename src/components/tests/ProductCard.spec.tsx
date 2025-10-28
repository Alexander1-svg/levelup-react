import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ProductCard } from "../ProductCard";

describe("ProductCard", () => {
  let addToCartSpy: jasmine.Spy;

  beforeEach(() => {
    addToCartSpy = jasmine.createSpy("addToCart");
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
    cart: [],
    addToCart: addToCartSpy,
    removeFromCart: () => {},
    clearCart: () => {},
    total: 0,
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

  it("calls addToCart with correct data when Comprar button is clicked", () => {
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
});
