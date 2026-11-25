import { useState } from 'react';
import type { Product } from './types/product';
import { ProductCard } from './components/ProductCard';

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [totalSpent, setTotalSpent] = useState(0);
  const [lastAddedMessage, setLastAddedMessage] = useState<string | null>(null);

  const [mockProducts] = useState<Product[]>([
    {
      _id: 'prod-001',
      name: 'เสื้อช็อปปฏิบัติการ UDVC',
      price: 350,
      description: 'เนื้อผ้าคอตตอนคุณภาพดี ระบายความร้อน เหมาะสำหรับงานช่างและคอมพิวเตอร์',
      category: { _id: 'cat-apparel', name: 'เครื่องแต่งกาย' },
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500',
      stock: 25
    },
    {
      _id: 'prod-002',
      name: 'สมุดบันทึกแล็บไอที 2026',
      price: 60,
      description: 'กระดาษถนอมสายตา 100 แผ่น พร้อมตารางสรุปไวยากรณ์ TypeScript',
      category: { _id: 'cat-stationery', name: 'อุปกรณ์การเรียน' },
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500',
      stock: 50
    },
    {
      _id: 'prod-003',
      name: 'เมาส์ไร้สายสำหรับเขียนโค้ด',
      price: 590,
      description: 'ดีไซน์จับถนัดมือ เสียงคลิกเงียบ เชื่อมต่อได้ทั้ง Bluetooth และ USB Receiver',
      category: { _id: 'cat-tech', name: 'อุปกรณ์ไอที' },
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500',
      stock: 15
    }
  ]);

  const handleAddToCart = (product: Product, quantity: number) => {
    setCartCount((prev) => prev + quantity);
    setTotalSpent((prev) => prev + product.price * quantity);
    setLastAddedMessage(
      `เพิ่ม "${product.name}" จำนวน ${quantity} ชิ้น (฿${(product.price * quantity).toLocaleString('th-TH')}) ลงในตะกร้าแล้ว`
    );
  };

  return (
    <div style={{ maxWidth: '960px', margin: '32px auto', padding: '24px' }}>
      <header
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          borderBottom: '2px solid #dbeafe',
          paddingBottom: '18px',
          marginBottom: '24px'
        }}
      >
        <div>
          <h1 style={{ color: '#1e3a8a', margin: 0, fontSize: '1.75rem' }}>
            🏬 Campus Shop Interactivity
          </h1>
          <p style={{ color: '#64748b', margin: '6px 0 0', fontSize: '0.92rem' }}>
            พัฒนาโดย นายธนกร กลีบใบ (69409010902) • สัปดาห์ที่ 5: State Management &amp; QuantityCounter
          </p>
        </div>

        <div
          style={{
            background: '#eff6ff',
            padding: '10px 16px',
            borderRadius: '12px',
            border: '1px solid #bfdbfe',
            color: '#1e3a8a',
            fontSize: '0.95rem'
          }}
        >
          🛒 ตะกร้า: <strong>{cartCount}</strong> ชิ้น | รวม:{' '}
          <strong>฿{totalSpent.toLocaleString('th-TH')}</strong>
        </div>
      </header>

      {lastAddedMessage && (
        <div
          style={{
            background: '#ecfdf5',
            border: '1px solid #a7f3d0',
            color: '#065f46',
            padding: '10px 14px',
            borderRadius: '10px',
            marginBottom: '18px',
            fontSize: '0.9rem'
          }}
        >
          {lastAddedMessage}
        </div>
      )}

      <main>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '22px'
          }}
        >
          {mockProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
