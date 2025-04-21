import { ProductInformationProps } from "@/components/organism/ProductInformation/interface";

const API_URL = process.env.API_URL;

export const handleResponse = async (res: Response) => {
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Algo salió mal");
  }
  return res.json();
};

export const getAllProducts = async (): Promise<ProductInformationProps[]> => {
  const response = await fetch(`${API_URL}/products`, {
    method: "get",
    cache: "force-cache",
  });
  return handleResponse(response);
};

export const getCategories = async () => {
  const response = await fetch(`${API_URL}/products/categories`, {
    method: "GET",
    cache: "force-cache",
  });
  return handleResponse(response);
};

export const updateProductById = async (id: number, body: string) => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  return handleResponse(response);
};

export const deleteProductById = async (id: number) => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return handleResponse(response);
};

export const createProduct = async (body: string) => {
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  return handleResponse(response);
};
