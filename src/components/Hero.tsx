import React from 'react';
import { ArrowRight, Rocket } from 'lucide-react';
import { Button } from './Button';
import { TokenImage } from './TokenImage';

export function Hero() {
  return (
    <div className="mt-20 text-center font-pixel">
      <TokenImage />
      <h1 className="text-4xl font-bold mb-6">$UPA Token</h1>
      <p className="text-sm text-upa-purple mb-8 animate-blink">Press Start To Moon 🚀</p>
      <div className="flex justify-center space-x-6">
        <Button icon={ArrowRight}>Buy Now</Button>
        <Button variant="secondary" icon={Rocket}>Chart</Button>
      </div>
    </div>
  );
}