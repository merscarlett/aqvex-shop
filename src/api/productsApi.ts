import type { Product } from "../types/product";

export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(
    "https://ip-194-99-21-145-139178.vps.hosted-by-mvps.net/api/v1/products",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  return data.data.products;
};
