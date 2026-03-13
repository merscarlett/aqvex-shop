export const getProducts = async () => {
  const res = await fetch("/api/v1/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data.data.products;
};
