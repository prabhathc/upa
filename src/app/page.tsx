import { Header } from '../components/Header';
import { Canvas } from '../components/Canvas';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <Canvas />
    </main>
  );
}