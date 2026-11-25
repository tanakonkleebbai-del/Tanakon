import type React from 'react';
import { useState } from 'react';
import type { Product } from '../types/product';
import { QuantityCounter } from './QuantityCounter';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product, quantity: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const fallbackImg = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500';
  const maxQuantity = product.stock ?? 99;
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

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '8px 0 12px'
          }}
        >
          <span style={{ fontSize: '0.82rem', color: '#64748b' }}>เลือกจำนวน:</span>
          <QuantityCounter
            quantity={quantity}
            max={maxQuantity}
            onIncrease={() => setQuantity((q) => Math.min(maxQuantity, q + 1))}
            onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
          />
        </div>

        <div className="product-card-footer">
          <span className="product-card-price">
            ฿{(product.price * quantity).toLocaleString('th-TH')}
          </span>
          <button
            type="button"
            className="product-card-btn"
            onClick={() => onAddToCart?.(product, quantity)}
          >
            🛒 ใส่ตะกร้า ({quantity})
          </button>
        </div>
      </div>
    </article>
  );
};
