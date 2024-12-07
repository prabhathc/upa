import React from 'react';
import { Canvas } from './components/Canvas';
import { Header } from './components/Header';

function App() {
  return (
    <div className="relative">
      <Header />
      <Canvas />
    </div>
  );
}

export default App;