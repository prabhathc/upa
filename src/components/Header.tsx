'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export function Header() {
  const router = useRouter();

  return (
    <div className="fixed top-0 left-0 p-4 z-10">
      <div className="flex flex-col items-start">
        <div 
          onClick={() => router.push('https://www.serebii.net/pokedex-sv/wooper/')}
          className="bg-upa-dark/90 backdrop-blur-sm rounded-lg p-3 pixel-border flex items-center gap-2 cursor-pointer"
        >
          <span className="font-pixel text-white text-lg">$upa</span>
        </div>
        <div className="mt-3 bg-upa-dark/80 backdrop-blur-sm rounded-lg px-3 py-2">
          <p className="font-pixel text-upa-purple text-xs animate-pulse">
            click + hold anywhere!
          </p>
        </div>
      </div>
    </div>
  );
}