import * as Yup from "yup";
export const validationSchemaCreate = Yup.object({
  title: Yup.string().required("Title is required"),
  price: Yup.number()
    .required("Price is required")
    .min(0, "Price must be at least 0"),
  description: Yup.string().required("Description is required"),
  category: Yup.string().required("Category is required"),
});
