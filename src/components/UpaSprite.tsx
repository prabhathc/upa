'use client';

import React from 'react';

interface UpaSpriteProps {
  x: number;
  y: number;
  size: number;
}

export function UpaSprite({ x, y, size }: UpaSpriteProps) {
  return (
    <img
      src="/upa.gif"
      alt="upa"
      className="absolute pixelated animate-bounce"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
}