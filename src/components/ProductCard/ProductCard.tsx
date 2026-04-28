import type { Product } from "../../types/product";
import "./ProductCard.css";

interface Props {
  product: Product;
}
export const ProductCard = ({ product }: Props) => {
  const selectedVolume = product.volumes.find(
    (v) => v.id === product.selected_volume_id,
  );

  const hasDiscount = product.discount_percent > 0;

  return (
    <div className="product-card">
      <img
        src={`/images/${product.image}`}
        alt={product.name}
        className="product-image"
      />

      <div className="product-price">
        {product.old_price && (
          <span className="old-price">{product.old_price}</span>
        )}

        <span className="price">
          {product.price} {product.currency}
        </span>

        {hasDiscount && (
          <span className="discount-badge">-{product.discount_percent}%</span>
        )}
      </div>

      <h3 className="product-title">{product.name}</h3>

      <div className="stars-wrapper">
        <div className="stars">
          {[1, 2, 3, 4, 5].map((i) => {
            const fillPercent =
              Math.max(Math.min(product.rating - i + 1, 1), 0) * 100;

            return (
              <div
                key={i}
                className="star"
                style={
                  {
                    "--fill-percent": `${fillPercent}%`,
                  } as React.CSSProperties & {
                    [key: string]: string;
                  }
                }
              />
            );
          })}
        </div>

        <span className="reviews-count">{product.reviews_count}</span>
      </div>

      <div className="product-meta">
        {product.in_stock ? (
          <span className="in-stock">
            <img src="/icons/checkMark.svg" className="check-icon" alt="" />В
            наявності
          </span>
        ) : (
          <span className="out-stock">Немає в наявності</span>
        )}

        <span className="category">
          <img src="/icons/drop.svg" alt="" />
          {product.category}
        </span>
      </div>

      <div className="product-actions">
        {product.volumes.length > 0 ? (
          <>
            <select defaultValue={selectedVolume?.id}>
              {product.volumes.map((volume) => (
                <option key={volume.id} value={volume.id}>
                  {volume.label}
                </option>
              ))}
            </select>

            <button className="cart-btn">
              <img src="/icons/cart.svg" alt="" className="cart-icon" />
              <span>До кошика</span>
            </button>
          </>
        ) : (
          <button className="cart-btn full-width">
            <img src="/icons/cart.svg" alt="" className="cart-icon" />
            <span>До кошика</span>
          </button>
        )}
      </div>
    </div>
  );
};
