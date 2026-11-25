import type React from 'react';

interface QuantityCounterProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
  max?: number;
}

export const QuantityCounter: React.FC<QuantityCounterProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
  max = 99
}) => {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        border: '1px solid #cbd5e1',
        borderRadius: '8px',
        overflow: 'hidden',
        background: '#ffffff'
      }}
    >
      <button
        type="button"
        aria-label="ลดจำนวนสินค้า"
        onClick={onDecrease}
        disabled={quantity <= min}
        style={{
          background: '#f8fafc',
          border: 'none',
          padding: '6px 12px',
          cursor: quantity <= min ? 'not-allowed' : 'pointer',
          color: quantity <= min ? '#94a3b8' : '#0f172a',
          fontWeight: 700
        }}
      >
        -
      </button>

      <span
        style={{
          padding: '0 12px',
          fontSize: '0.9rem',
          fontWeight: 600,
          minWidth: '24px',
          textAlign: 'center',
          color: '#0f172a'
        }}
      >
        {quantity}
      </span>

      <button
        type="button"
        aria-label="เพิ่มจำนวนสินค้า"
        onClick={onIncrease}
        disabled={quantity >= max}
        style={{
          background: '#f8fafc',
          border: 'none',
          padding: '6px 12px',
          cursor: quantity >= max ? 'not-allowed' : 'pointer',
          color: quantity >= max ? '#94a3b8' : '#0f172a',
          fontWeight: 700
        }}
      >
        +
      </button>
    </div>
  );
};
