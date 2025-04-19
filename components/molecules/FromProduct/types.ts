import { Product } from "../Card/interface";

export type FormProductType = {
  product: Product;
  onClose: () => void;
  form: string;
  validationSchema: unknown;
  onSubmit: (product: Partial<Product>) => void;
  categories: string[];
};
