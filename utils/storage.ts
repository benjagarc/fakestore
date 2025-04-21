import { ProductInformationProps } from "@/components/organism/ProductInformation/interface";

const STORAGE_KEY = "fakestore_products";

export const getStoredProducts = (): ProductInformationProps[] => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveProducts = (products: ProductInformationProps[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
};
