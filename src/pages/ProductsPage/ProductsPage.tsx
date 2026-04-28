import { useEffect, useMemo, useState } from "react";

import { getProducts } from "../../api/productsApi";
import type { Product } from "../../types/product";

import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Footer } from "../../components/Footer/Footer";
import { Pagination } from "../../components/Pagination/Pagination";
import { Header } from "../../components/Header/Header";

import "./ProductsPage.css";

const ITEMS_PER_PAGE = 12;

type SortValue = "" | "price-asc" | "price-desc" | "rating-asc" | "rating-desc";

const getProductsLabel = (count: number) => {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return "товар";
  }

  if ([2, 3, 4].includes(lastDigit) && ![12, 13, 14].includes(lastTwoDigits)) {
    return "товари";
  }

  return "товарів";
};

const productMatchesSearch = (product: Product, search: string) => {
  const searchableFields = [
    product.name,
    product.category,
    product.currency,
    String(product.price),
    ...product.volumes.map((volume) => volume.label),
  ];

  return searchableFields.some((field) => field.toLowerCase().includes(search));
};

export const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortValue>("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch {
        setError("Не вдалося завантажити товари. Спробуйте оновити сторінку.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const normalizedSearch = search.trim().toLowerCase();

  const filteredProducts = useMemo(
    () =>
      normalizedSearch
        ? products.filter((product) =>
            productMatchesSearch(product, normalizedSearch),
          )
        : products,
    [normalizedSearch, products],
  );

  const sortedProducts = useMemo(() => {
    if (!sort) return filteredProducts;

    const [field, direction] = sort.split("-") as [
      "price" | "rating",
      "asc" | "desc",
    ];

    return [...filteredProducts].sort((a, b) => {
      const multiplier = direction === "asc" ? 1 : -1;
      return (a[field] - b[field]) * multiplier;
    });
  }, [filteredProducts, sort]);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = sortedProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);

  return (
    <div className="page-shell">
      <Header />
      <main className="products-page">
        <div className="container">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Пошук товарів"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              aria-label="Пошук товарів"
            />

            {search && (
              <button
                type="button"
                className="search-clear"
                onClick={() => {
                  setSearch("");
                  setPage(1);
                }}
                aria-label="Очистити пошук"
              >
                ×
              </button>
            )}
          </div>

          <div className="controls">
            <div className="products-count">
              {filteredProducts.length} {getProductsLabel(filteredProducts.length)}
            </div>

            <div className="sort-controls">
              <button
                className="sort-direction"
                onClick={() => {
                  setSort((prev) =>
                    !prev
                      ? "price-asc"
                      : prev.endsWith("asc")
                        ? (prev.replace("asc", "desc") as SortValue)
                        : (prev.replace("desc", "asc") as SortValue),
                  );
                  setPage(1);
                }}
                aria-label="Змінити напрям сортування"
              >
                <img src="/icons/sorting-arrows.svg" alt="" />
              </button>

              <select
                value={sort.split("-")[0]}
                onChange={(e) => {
                  const field = e.target.value;
                  setSort(field ? (`${field}-asc` as SortValue) : "");
                  setPage(1);
                }}
              >
                <option value="">Сортування</option>
                <option value="price">Ціна</option>
                <option value="rating">За популярністю</option>
              </select>
            </div>
          </div>

          {isLoading && <p className="products-state">Завантаження товарів...</p>}

          {error && <p className="products-state products-state-error">{error}</p>}

          {!isLoading && !error && paginatedProducts.length > 0 && (
            <div className="products-grid">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {!isLoading && !error && paginatedProducts.length === 0 && (
            <p className="products-state">
              За запитом «{search.trim()}» нічого не знайдено.
            </p>
          )}

          <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        </div>
      </main>
      <Footer />
    </div>
  );
};
