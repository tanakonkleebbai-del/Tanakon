interface GreetingProps {
  studentName: string;
  semester: string;
}

export function GreetingBanner({ studentName, semester }: GreetingProps) {
  return (
    <div style={{ padding: '16px', background: '#e0f2fe', borderRadius: '8px', marginBottom: '20px' }}>
      <h2 style={{ color: '#0369a1', margin: 0, fontSize: '1.1rem' }}>สวัสดีครับคุณ {studentName}!</h2>
      <p style={{ margin: '4px 0 0', color: '#0c4a6e', fontSize: '0.9rem' }}>
        ยินดีต้อนรับสู่ภาคเรียนที่ {semester} วิทยาลัยอาชีวศึกษาอุดรธานี
      </p>
    </div>
  );
}

