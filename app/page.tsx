// app/page.tsx
import Calculator from './_components/calculator';

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-[url('/images/halloween.jpg')] bg-cover">
      <Calculator />
    </main>
  );
}
