import { render, screen } from "@testing-library/react";
import { Formik } from "formik";
import { FromProducts } from "../index";
import * as Yup from "yup";
// Define a mock validation schema for testing
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
  category: "Electronics",
  id: 1,
  image: "http://example.com/image.jpg",
};

const mockCategories = ["electronics", "men's clothing", 
    "women's clothing"];
const mockOnClose = jest.fn();
const mockOnSubmit = jest.fn(() => Promise.resolve());

describe("FromProducts", () => {
  it("should render the form title", () => {
    render(
      <Formik
        initialValues={mockProduct}
        onSubmit={() => {}}
        validationSchema={mockValidationSchema}
      >
        <FromProducts
          product={mockProduct}
          onClose={mockOnClose}
          validationSchema={mockValidationSchema}
          onSubmit={mockOnSubmit}
          form="Create Product"
          categories={mockCategories}
        />
      </Formik>
    );
    expect(screen.getByText("Create Product")).toBeInTheDocument();
  });

  it("should render all form fields with initial values", () => {
    render(
      <Formik
        initialValues={mockProduct}
        onSubmit={() => {}}
        validationSchema={mockValidationSchema}
      >
        <FromProducts
          product={mockProduct}
          onClose={mockOnClose}
          validationSchema={mockValidationSchema}
          onSubmit={mockOnSubmit}
          form="Edit Product"
          categories={mockCategories}
        />
      </Formik>
    );
    expect(screen.getByLabelText("Title")).toHaveValue("Test Product");
    expect(screen.getByLabelText("Price")).toHaveValue(10);
    expect(screen.getByLabelText("Description")).toHaveValue(
      "Test Description"
    );
    expect(screen.getByLabelText("Category")).toHaveValue("Test Category");
    expect(screen.getByLabelText("Image (URL)")).toHaveValue(
      "http://example.com/image.jpg"
    );
  });

//   it("should call onClose when the Cancel button is clicked", () => {
//     render(
//       <Formik
//         initialValues={mockProduct}
//         onSubmit={() => {}}
//         validationSchema={mockValidationSchema}
//       >
//         <FromProducts
//           product={mockProduct}
//           onClose={mockOnClose}
//           validationSchema={mockValidationSchema}
//           onSubmit={mockOnSubmit}
//           form="Create Product"
//           categories={mockCategories}
//         />
//       </Formik>
//     );
//     const cancelButton = screen.getByRole("button", { name: "Cancel" });
//     fireEvent.click(cancelButton);
//     expect(mockOnClose).toHaveBeenCalledTimes(1);
//   });

//   it("should call onSubmit with form values when the Save button is clicked and form is valid", async () => {
//     render(
//       <Formik
//         initialValues={mockProduct}
//         onSubmit={mockOnSubmit}
//         validationSchema={mockValidationSchema}
//       >
//         <FromProducts
//           product={mockProduct}
//           onClose={mockOnClose}
//           validationSchema={mockValidationSchema}
//           onSubmit={mockOnSubmit}
//           form="Edit Product"
//           categories={mockCategories}
//         />
//       </Formik>
//     );
//     const saveButton = screen.getByRole("button", { name: "Save" });
//     fireEvent.click(saveButton);
//     await waitFor(() => {
//       expect(mockOnSubmit).toHaveBeenCalledTimes(1);
//       expect(mockOnSubmit).toHaveBeenCalledWith(mockProduct);
//     });
//   });

//   it("should display validation errors when the form is submitted with invalid values", async () => {
//     render(
//       <Formik
//         initialValues={{ ...mockProduct, title: "", price: -1 }}
//         onSubmit={mockOnSubmit}
//         validationSchema={mockValidationSchema}
//       >
//         <FromProducts
//           product={{ ...mockProduct, title: "", price: -1 }}
//           onClose={mockOnClose}
//           validationSchema={mockValidationSchema}
//           onSubmit={mockOnSubmit}
//           form="Create Product"
//           categories={mockCategories}
//         />
//       </Formik>
//     );
//     const saveButton = screen.getByRole("button", { name: "Save" });
//     fireEvent.click(saveButton);
//     await waitFor(() => {
//       expect(screen.getByText("Title is required")).toBeInTheDocument();
//       expect(screen.getByText("Price is required")).toBeInTheDocument();
//     });
//     expect(mockOnSubmit).not.toHaveBeenCalled();
//   });

//   it("should display the loading spinner when submitting the form", async () => {
//     const promise = new Promise(() => {}); // Never resolves
//     const loadingOnSubmit = jest.fn(() => promise);

//     render(
//       <Formik
//         initialValues={mockProduct}
//         onSubmit={loadingOnSubmit}
//         validationSchema={mockValidationSchema}
//       >
//         <FromProducts
//           product={mockProduct}
//           onClose={mockOnClose}
//           validationSchema={mockValidationSchema}
//           onSubmit={loadingOnSubmit}
//           form="Edit Product"
//           categories={mockCategories}
//         />
//       </Formik>
//     );
//     const saveButton = screen.getByRole("button", { name: "Save" });
//     fireEvent.click(saveButton);
//     expect(screen.getByRole("status")).toBeInTheDocument(); // Spinner
//     expect(saveButton).toBeDisabled();
//     expect(screen.getByRole("button", { name: "Cancel" })).toBeDisabled();
//   });

//   it("should disable buttons during loading and enable them after submission", async () => {
//     const resolvingOnSubmit = jest.fn(() => Promise.resolve());

//     render(
//       <Formik
//         initialValues={mockProduct}
//         onSubmit={resolvingOnSubmit}
//         validationSchema={mockValidationSchema}
//       >
//         <FromProducts
//           product={mockProduct}
//           onClose={mockOnClose}
//           validationSchema={mockValidationSchema}
//           onSubmit={resolvingOnSubmit}
//           form="Create Product"
//           categories={mockCategories}
//         />
//       </Formik>
//     );
//     const saveButton = screen.getByRole("button", { name: "Save" });
//     const cancelButton = screen.getByRole("button", { name: "Cancel" });

//     fireEvent.click(saveButton);
//     expect(saveButton).toBeDisabled();
//     expect(cancelButton).toBeDisabled();

//     await waitFor(() => {
//       expect(resolvingOnSubmit).toHaveBeenCalledTimes(1);
//     });

//     expect(saveButton).toBeEnabled();
//     expect(cancelButton).toBeEnabled();
//   });

//   it("should render category options correctly", () => {
//     render(
//       <Formik
//         initialValues={mockProduct}
//         onSubmit={() => {}}
//         validationSchema={mockValidationSchema}
//       >
//         <FromProducts
//           product={mockProduct}
//           onClose={mockOnClose}
//           validationSchema={mockValidationSchema}
//           onSubmit={mockOnSubmit}
//           form="Create Product"
//           categories={mockCategories}
//         />
//       </Formik>
//     );
//     expect(screen.getByRole("combobox", { name: "Category" })).toHaveValue(
//       "Test Category"
//     );
//     expect(
//       screen.getByRole("option", { name: "Electronics" })
//     ).toBeInTheDocument();
//     expect(
//       screen.getByRole("option", { name: "Clothing" })
//     ).toBeInTheDocument();
//     expect(screen.getByRole("option", { name: "Books" })).toBeInTheDocument();
//   });
});
