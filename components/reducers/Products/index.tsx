"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useLayoutEffect,
  useReducer,
} from "react";
import { productReducer } from "./reducer";
import { getStoredProducts, saveInitialProducts } from "@/utils/storage";
import { ProductContextType } from "./interface";
import { getAllProducts } from "@/request/products";

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, dispatch] = useReducer(productReducer, []);

  useLayoutEffect(() => {
    const load = async () => {
      const stored = getStoredProducts();
      if (!stored.length) {
        const data = await getAllProducts();
        saveInitialProducts(data);
        dispatch({ type: "SET", payload: data });
      } else {
        dispatch({ type: "SET", payload: stored });
      }
    };
    load();
  }, []);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error("useProducts must be used within ProductProvider");
  return context;
};
