import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ProductCard } from "../ProductCard";
import * as CartProviderModule from "../CartProvider";

describe("ProductCard", () => {
  let addToCartSpy: jasmine.Spy;

  beforeEach(() => {
    // Mockeamos useCart con todos los campos necesarios
    addToCartSpy = jasmine.createSpy("addToCart");
    spyOn(CartProviderModule, "useCart").and.returnValue({
      cart: [],
      addToCart: addToCartSpy,
      removeFromCart: () => {},
      clearCart: () => {},
      total: 0
    });
  });

  const productProps = {
    id: "1",
    imageUrl: "https://via.placeholder.com/150",
    title: "Test Product",
    description: "This is a test product",
    price: "CLP 159.990",
  };

  it("renders correctly with props", () => {
    render(<ProductCard {...productProps} />);
    expect(screen.getByText(productProps.title)).toBeDefined();
    expect(screen.getByText(productProps.description)).toBeDefined();
    expect(screen.getByText(productProps.price)).toBeDefined();

    const img = screen.getByRole("img") as HTMLImageElement;
    expect(img.src).toContain(productProps.imageUrl);
    expect(img.alt).toBe(productProps.title);
  });

  it("calls addToCart with correct data when Comprar button is clicked", () => {
    render(<ProductCard {...productProps} />);
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
