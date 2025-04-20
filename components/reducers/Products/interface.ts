import { Product } from "@/components/molecules/Card/interface";
import { Dispatch } from "react";

export type ProductActions =
  | { type: "SET"; payload: Product[] }
  | { type: "ADD"; payload: Product }
  | { type: "UPDATE"; payload: Product }
  | { type: "DELETE"; payload: number };

export interface ProductContextType {
  products: Product[];
  dispatch: Dispatch<ProductActions>;
}
