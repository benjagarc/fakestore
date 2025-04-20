import { ProductActions } from "./interface";
import { ProductInformationProps } from "@/components/organism/ProductInformation/interface";

export const setProducts = (
  payload: ProductInformationProps[]
): ProductActions => ({
  type: "SET",
  payload,
});

export const addProduct = (
  payload: ProductInformationProps
): ProductActions => ({
  type: "ADD",
  payload,
});

export const updateProduct = (
  payload: ProductInformationProps
): ProductActions => ({
  type: "UPDATE",
  payload,
});

export const deleteProduct = (payload: number): ProductActions => ({
  type: "DELETE",
  payload,
});
