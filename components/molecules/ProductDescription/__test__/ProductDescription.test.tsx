import { fireEvent, render, screen } from "@testing-library/react";
import ProductDescription from "..";

const mockProduct = {
  title: "Fjallraven Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  id: 1,
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: {
    rate: 3.9,
    count: 120,
  },
  handleEditClick: jest.fn(),
  handleDeleteClick: jest.fn(),
};

describe("ProductDescription", () => {
  it("Should render without errors", () => {
    render(<ProductDescription {...mockProduct} />);
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
  });

  it("Should render title correctly", () => {
    render(<ProductDescription {...mockProduct} />);
    const titleElement = screen.getByText(mockProduct.title);
    expect(titleElement).toHaveClass("card-title");
    expect(titleElement).toHaveClass("fs-4");
    expect(titleElement).toHaveClass("h5");
  });

  it("Should render starting correctly", () => {
    render(<ProductDescription {...mockProduct} />);
    const starting = screen.getByRole("img");
    expect(starting).toHaveClass("d-flex");
    expect(starting).toHaveClass("accent");
    expect(starting).toHaveClass("align-items-center");
  });

  it("Should render price correctly", () => {
    render(<ProductDescription {...mockProduct} />);
    const priceElement = screen.getByText(/^\$109\.95$/);
    expect(priceElement).toHaveClass("h5");
    expect(priceElement).toHaveClass("fw-bold");
    expect(priceElement).toHaveClass("my-2");
  });

  it("Shoyuld render category correctly", () => {
    render(<ProductDescription {...mockProduct} />);
    const categoryElement = screen.getByText(mockProduct.category);
    expect(categoryElement).toHaveClass("mb-2");
    expect(categoryElement).toHaveClass("mt-4");
    expect(categoryElement).toHaveClass("text-muted");
    expect(categoryElement).toHaveClass("text-capitalize");
  });

  it("Should render description correctly", () => {
    render(<ProductDescription {...mockProduct} />);
    const titleElement = screen.getByText(mockProduct.description);
    expect(titleElement).toHaveClass("card-text");
    expect(titleElement).toHaveClass("my-3");
  });

  it("should call handleEditClick when the Edit button is clicked", () => {
    render(<ProductDescription {...mockProduct} />);
    const editButton = screen.getByRole("button", { name: "Edit" });
    fireEvent.click(editButton);
    expect(mockProduct.handleEditClick).toHaveBeenCalledTimes(1);
  });

  it("should call handleDeleteClick when the Delete button is clicked", () => {
    render(<ProductDescription {...mockProduct} />);
    const deleteButton = screen.getByRole("button", { name: "Delete" });
    fireEvent.click(deleteButton);
    expect(mockProduct.handleDeleteClick).toHaveBeenCalledTimes(1);
  });

  it("should render the buttons with correct variants and classes", () => {
    render(<ProductDescription {...mockProduct} />);
    const deleteButton = screen.getByRole("button", { name: "Delete" });
    expect(deleteButton).toHaveClass("btn-danger");
    const editButton = screen.getByRole("button", { name: "Edit" });
    expect(editButton).toHaveClass("btn");
    expect(editButton).toHaveClass("btn-custom");
  });
});
