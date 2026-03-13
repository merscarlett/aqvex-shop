import { useEffect, useState } from "react";

import { getProducts } from "../../api/productsApi";
import type { Product } from "../../types/product";

import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Footer } from "../../components/Footer/Footer";
import { Pagination } from "../../components/Pagination/Pagination";
import { Header } from "../../components/Header/Header";

import "./ProductsPage.css";

export const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);

  const itemsPerPage = 12;

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (!sort) return 0;

    const [field, direction] = sort.split("-");

    if (field === "price") {
      return direction === "asc" ? a.price - b.price : b.price - a.price;
    }

    if (field === "rating") {
      return direction === "asc" ? a.rating - b.rating : b.rating - a.rating;
    }

    return 0;
  });

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedProducts = sortedProducts.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  return (
    <>
      <Header />
      <div className="products-page">
        <div className="container">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Поиск"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />
          </div>

          <div className="controls">
            <div className="products-count">
              {filteredProducts.length} товаров
            </div>

            <div className="sort-controls">
              <button
                className="sort-direction"
                onClick={() => {
                  setSort((prev) =>
                    prev.endsWith("asc")
                      ? prev.replace("asc", "desc")
                      : prev.replace("desc", "asc"),
                  );
                  setPage(1);
                }}
              >
                <img src="/icons/sorting-arrows.svg" alt="sort direction" />
              </button>

              <select
                value={sort.split("-")[0]}
                onChange={(e) => {
                  const field = e.target.value;
                  setSort(field ? `${field}-asc` : "");
                  setPage(1);
                }}
              >
                <option value="">Сортировка</option>
                <option value="price">Цена</option>
                <option value="rating">По популярности</option>
              </select>
            </div>
          </div>

          <div className="products-grid">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        </div>
      </div>
      <Footer />
    </>
  );
};
