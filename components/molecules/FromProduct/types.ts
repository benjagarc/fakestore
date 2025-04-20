import { Product } from "../Card/interface";

export type FormProductType = {
  product: Product;
  onClose: () => void;
  form: string;
  validationSchema: unknown;
  onSubmit: (product: Product) => void;
  categories: string[];
};
