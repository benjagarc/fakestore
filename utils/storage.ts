import { ProductInformationProps } from "@/components/organism/ProductInformation/interface";

const STORAGE_KEY = "fakestore_products";

export const getStoredProducts = (): ProductInformationProps[] => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveInitialProducts = (products: ProductInformationProps[]) => {
  const stored = localStorage.getItem("products");
  if (!stored) {
    localStorage.setItem("products", JSON.stringify(products));
  }
};
