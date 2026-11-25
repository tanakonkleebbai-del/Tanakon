import type React from 'react';
import type { Product } from '../types/product';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const fallbackImg = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500';
  const categoryName =
    typeof product.category === 'object' && product.category !== null
      ? product.category.name
      : typeof product.category === 'string' && product.category.trim() !== ''
        ? product.category
        : 'ทั่วไป';

  return (
    <article className="product-card" id={`product-${product._id}`}>
      <div className="product-card-image-wrap">
        <img
          src={product.image || fallbackImg}
          alt={product.name}
          className="product-card-image"
          loading="lazy"
          onError={(e) => {
            const img = e.currentTarget;
            if (img.src !== fallbackImg) {
              img.src = fallbackImg;
            }
          }}
        />
      </div>

      <div className="product-card-body">
        <span className="product-card-category">{categoryName}</span>
        <h3 className="product-card-title">{product.name}</h3>
        <p className="product-card-desc">
          {product.description || 'สินค้าคุณภาพจากระบบ Campus E-Commerce'}
        </p>

        <div className="product-card-footer">
          <span className="product-card-price">
            ฿{product.price.toLocaleString('th-TH')}
          </span>
          <button
            type="button"
            className="product-card-btn"
            onClick={() => onAddToCart?.(product)}
          >
            🛒 ใส่ตะกร้า
          </button>
        </div>
      </div>
    </article>
  );
};
