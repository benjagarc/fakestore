import CardProduct from "../index";
import { render, screen } from "@testing-library/react";

const mockProduct = {
  title: "Fjallraven Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  id: 1,
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
};

describe("CardProduct", () => {
  it("Should render whitout erros", () => {
    render(<CardProduct {...mockProduct} />);
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
  });

  it("Should render the title correctly", () => {
    render(<CardProduct {...mockProduct} />);
    const titleElement = screen.getByText(mockProduct.title);
    expect(titleElement).toHaveClass("fs-6");
    expect(titleElement).toHaveClass("card-title");
  });

  it("Should render description correctly", () => {
    render(<CardProduct {...mockProduct} />);
    const descriptionElement = screen.getByText(mockProduct.description);
    expect(descriptionElement).toHaveClass("card-text");
    expect(descriptionElement).toHaveClass(/cardDescription/i);
  });

  it("Should render price correctly", () => {
    render(<CardProduct {...mockProduct} />);
    const priceElement = screen.getByText(/^\$109\.95$/);
    expect(priceElement).toHaveClass("fw-bold");
    expect(priceElement).toHaveClass("card-text");
  });

  it("Should render the Link with the correct href", () => {
    render(<CardProduct {...mockProduct} />);
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", "/product/1");
  });

  it("should render the motion.div with animation props and classes", () => {
    render(<CardProduct {...mockProduct} />);
    const motionDivElement = screen.getByTestId("motion-div");
    expect(motionDivElement).toHaveClass("h-100");
    expect(motionDivElement).toHaveClass("shadow-sm");
  });
});
