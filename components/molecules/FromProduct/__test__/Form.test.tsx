import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { FromProducts } from "../index";
import * as Yup from "yup";

const mockValidationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  price: Yup.number().required("Price is required").positive(),
  description: Yup.string().required("Description is required"),
  category: Yup.string().required("Category is required"),
  image: Yup.string().url("Invalid URL"),
});

const mockProduct = {
  title: "Test Product",
  price: 10,
  description: "Test Description",
  category: "electronics",
  id: 1,
  image: "http://example.com/image.jpg",
};

const mockCategories = ["electronics", "men's clothing", "women's clothing"];
const mockOnClose = jest.fn();
const mockOnSubmit = jest.fn(() => Promise.resolve());

describe("FromProducts", () => {
  it("should render the form title", () => {
    render(
      <FromProducts
        product={mockProduct}
        onClose={mockOnClose}
        validationSchema={mockValidationSchema}
        onSubmit={mockOnSubmit}
        form="Create Product"
        categories={mockCategories}
      />
    );
    expect(screen.getByText("Create Product")).toBeInTheDocument();
  });

  it("should render all form fields with initial values", () => {
    render(
      <FromProducts
        product={mockProduct}
        onClose={mockOnClose}
        validationSchema={mockValidationSchema}
        onSubmit={mockOnSubmit}
        form="Edit Product"
        categories={mockCategories}
      />
    );
    expect(screen.getByLabelText("Title")).toHaveValue("Test Product");
    expect(screen.getByLabelText("Price")).toHaveValue(10);
    expect(screen.getByLabelText("Description")).toHaveValue(
      "Test Description"
    );
    expect(screen.getByLabelText("Category")).toHaveValue("electronics");
    expect(screen.getByLabelText("Image (URL)")).toHaveValue(
      "http://example.com/image.jpg"
    );
  });

  it("should call onClose when the Cancel button is clicked", () => {
    render(
      <FromProducts
        product={mockProduct}
        onClose={mockOnClose}
        validationSchema={mockValidationSchema}
        onSubmit={mockOnSubmit}
        form="Create Product"
        categories={mockCategories}
      />
    );
    const cancelButton = screen.getByRole("button", { name: "Cancel" });
    fireEvent.click(cancelButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("should call onSubmit with form values when the Save button is clicked and form is valid", async () => {
    render(
      <FromProducts
        product={mockProduct}
        onClose={mockOnClose}
        validationSchema={mockValidationSchema}
        onSubmit={mockOnSubmit}
        form="Edit Product"
        categories={mockCategories}
      />
    );
    const saveButton = screen.getByRole("button", { name: "Save" });
    fireEvent.click(saveButton);
    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
      expect(mockOnSubmit).toHaveBeenCalledWith(mockProduct);
    });
  });

  it("should display validation errors when the form is submitted with invalid values", async () => {
    render(
      <FromProducts
        product={{ ...mockProduct, title: "", description: "" }}
        onClose={mockOnClose}
        validationSchema={mockValidationSchema}
        onSubmit={mockOnSubmit}
        form="Create Product"
        categories={mockCategories}
      />
    );
    const saveButton = screen.getByRole("button", { name: "Save" });
    fireEvent.click(saveButton);
    await waitFor(() => {
      expect(screen.getByText("Title is required")).toBeInTheDocument();
      expect(screen.getByText("Description is required")).toBeInTheDocument();
    });
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it("should display the loading spinner when submitting the form", async () => {
    const promise = new Promise(() => {});
    const loadingOnSubmit = jest.fn(() => promise);

    const { container } = render(
      <FromProducts
        product={mockProduct}
        onClose={mockOnClose}
        validationSchema={mockValidationSchema}
        onSubmit={loadingOnSubmit}
        form="Edit Product"
        categories={mockCategories}
      />
    );
    const saveButton = screen.getByRole("button", { name: "Save" });
    const cancelButton = screen.getByRole("button", { name: "Cancel" });
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(loadingOnSubmit).toHaveBeenCalledTimes(1);
      expect(saveButton).toBeDisabled();
      expect(
        container.querySelector(
          'span.spinner-border.spinner-border-sm[aria-hidden="true"][role="status"]'
        )
      ).toBeInTheDocument();
      expect(cancelButton).toBeDisabled();
    });
  });

  it("should render category options correctly", () => {
    render(
      <FromProducts
        product={mockProduct}
        onClose={mockOnClose}
        validationSchema={mockValidationSchema}
        onSubmit={mockOnSubmit}
        form="Create Product"
        categories={mockCategories}
      />
    );
    expect(screen.getByRole("combobox", { name: "Category" })).toHaveValue(
      "electronics"
    );
    expect(
      screen.getByRole("option", { name: "electronics" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: "men's clothing" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: "women's clothing" })
    ).toBeInTheDocument();
  });
});
