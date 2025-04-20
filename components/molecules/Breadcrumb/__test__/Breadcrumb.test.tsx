import { render, screen } from "@testing-library/react";
import Breadcrumb from "..";

const mockUrlCategory = "/category/men's%20clothing/";
const mockUrlProduct =
  "/category/men's%20clothing/Fjallraven Foldsack No. 1 Backpack, Fits 15 Laptops";

describe("Breadcrumb", () => {
  it("Should render wtihout errors", () => {
    render(<Breadcrumb url={mockUrlCategory} />);
    expect(screen.getByLabelText("breadcrumb")).toBeInTheDocument();
  });

  it("Should render home correctly", () => {
    render(<Breadcrumb url={mockUrlCategory} />);
    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("Should render current route correctly", () => {
    render(<Breadcrumb url={mockUrlCategory} />);
    const categoryElement = screen.getByText("men's%20clothing");
    expect(categoryElement).toHaveClass("active");
    expect(categoryElement).toHaveClass("breadcrumb-item");
  });

  it("Should render link category correctly", () => {
    render(<Breadcrumb url={mockUrlProduct} />);
    const categoryLink = screen.getByRole("link", { name: "men's%20clothing" });
    expect(categoryLink).toHaveAttribute("href", "/category/men's%20clothing");
  });

  it("Should render multiple segments correctly", () => {
    render(<Breadcrumb url={mockUrlProduct} />);
    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink).toHaveAttribute("href", "/");
    const categoryLink = screen.getByRole("link", { name: "men's%20clothing" });
    expect(categoryLink).toHaveAttribute("href", "/category/men's%20clothing");
    const productElement = screen.getByText(
      "Fjallraven Foldsack No. 1 Backpack, Fits 15 Laptops"
    );
    expect(productElement).toBeInTheDocument();
    expect(productElement).toHaveClass("active");
    expect(productElement).toHaveClass("breadcrumb-item");
  });
});
