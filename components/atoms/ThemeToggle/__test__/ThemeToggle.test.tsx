import { fireEvent, render, screen } from "@testing-library/react";
import ThemeToggle from "..";

type typeTheme = null | "light" | "dark";

const localStorageMock = {
  getItem: jest.fn((): typeTheme => null),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("ThemeToggle", () => {
  beforeEach(() => {
    // Reset the mock before each test to ensure isolation
    localStorageMock.getItem.mockReturnValue(null);
    localStorageMock.setItem.mockClear();
    document.documentElement.classList.remove("dark");
  });

  it("Should render with 'Switch to Dark Mode' initially", () => {
    render(<ThemeToggle />);
    expect(
      screen.getByRole("button", { name: "🌙 Switch to Dark Mode" })
    ).toBeInTheDocument();
  });

  it('Should render "Switch to Light Mode" when theme is dark in localStorage', () => {
    localStorageMock.getItem.mockReturnValue("dark");
    render(<ThemeToggle />);
    expect(
      screen.getByRole("button", { name: "☀️ Switch to Light Mode" })
    ).toBeInTheDocument();
  });

  it("Should render button with the correct class", () => {
    render(<ThemeToggle />);
    const buttonToggle = screen.getByRole("button");
    expect(buttonToggle).toBeInTheDocument();
    expect(buttonToggle).toHaveClass(/toggleButton/i);
  });

  it("Should toggle to dark mode on click and update localStorage", () => {
    render(<ThemeToggle />);
    const buttonToggle = screen.getByRole("button", {
      name: "🌙 Switch to Dark Mode",
    });

    fireEvent.click(buttonToggle);

    expect(
      screen.getByRole("button", { name: "☀️ Switch to Light Mode" })
    ).toBeInTheDocument();
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(localStorageMock.setItem).toHaveBeenCalledWith("theme", "dark");
  });

  it("Should toggle back to light mode on click and update localStorage", () => {
    localStorageMock.getItem.mockReturnValue("dark");
    render(<ThemeToggle />);
    const buttonToggle = screen.getByRole("button", {
      name: "☀️ Switch to Light Mode",
    });

    fireEvent.click(buttonToggle);

    expect(
      screen.getByRole("button", { name: "🌙 Switch to Dark Mode" })
    ).toBeInTheDocument();
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(localStorageMock.setItem).toHaveBeenCalledWith("theme", "light");
  });

  it("Should apply dark class to documentElement on mount if theme is dark in localStorage", () => {
    localStorageMock.getItem.mockReturnValue("dark");
    render(<ThemeToggle />);
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("Should not apply dark class on mount if theme is light or null in localStorage", () => {
    localStorageMock.getItem.mockReturnValue("light");
    render(<ThemeToggle />);
    expect(document.documentElement.classList.contains("dark")).toBe(false);

    localStorageMock.getItem.mockReturnValue(null);
    render(<ThemeToggle />);
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });
});
