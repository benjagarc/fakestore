import { Product } from "@/components/molecules/Card/interface";

const STORAGE_KEY = "fakestore_products";

export const getStoredProducts = (): Product[] => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveInitialProducts = (products: Product[]) => {
  const stored = localStorage.getItem("products");
  if (!stored) {
    localStorage.setItem("products", JSON.stringify(products));
  }
};
