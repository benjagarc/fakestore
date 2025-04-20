import { Product } from "@/components/molecules/Card/interface";
import { ProductActions } from "./interface";

export const setProducts = (payload: Product[]): ProductActions => ({
  type: "SET",
  payload,
});

export const addProduct = (payload: Product): ProductActions => ({
  type: "ADD",
  payload,
});

export const updateProduct = (payload: Product): ProductActions => ({
  type: "UPDATE",
  payload,
});

export const deleteProduct = (payload: number): ProductActions => ({
  type: "DELETE",
  payload,
});
