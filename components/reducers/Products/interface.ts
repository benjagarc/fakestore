import { ProductInformationProps } from "@/components/organism/ProductInformation/interface";
import { Dispatch } from "react";

export type ProductActions =
  | { type: "SET"; payload: ProductInformationProps[] }
  | { type: "ADD"; payload: ProductInformationProps }
  | { type: "UPDATE"; payload: ProductInformationProps }
  | { type: "DELETE"; payload: number };

export interface ProductContextType {
  products: ProductInformationProps[];
  dispatch: Dispatch<ProductActions>;
}
