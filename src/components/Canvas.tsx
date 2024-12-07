'use client';

import React, { useState, useRef, useEffect } from 'react';
import { UpaSprite } from './UpaSprite';

interface UpaPosition {
  x: number;
  y: number;
  id: number;
  size: number;
}

export function Canvas() {
  const [upas, setUpas] = useState<UpaPosition[]>([]);
  const [nextId, setNextId] = useState(0);
  const [isHolding, setIsHolding] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentSize, setCurrentSize] = useState(24);
  const animationFrameRef = useRef<number>();
  const startTimeRef = useRef<number>(0);
  const baseGrowthRate = 300;

  useEffect(() => {
    let lastTime = 0;
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
        lastTime = timestamp;
      }

      const deltaTime = (timestamp - lastTime) / 1000;
      lastTime = timestamp;
      const elapsedTime = (timestamp - startTimeRef.current) / 1000;

      if (isHolding) {
        setCurrentSize(prev => {
          const growthMultiplier = 1 + (elapsedTime * 0.5);
          const growth = baseGrowthRate * deltaTime * growthMultiplier;
          return Math.min(prev + growth, 400);
        });
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    if (isHolding) {
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHolding]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
    setIsHolding(true);
    setCurrentSize(24);
    startTimeRef.current = 0;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (isHolding) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left - (currentSize / 2);
      const y = e.clientY - rect.top - (currentSize / 2);
      
      setUpas(prev => [...prev, { 
        x, 
        y, 
        id: nextId,
        size: currentSize
      }]);
      setNextId(prev => prev + 1);
    }
    
    setIsHolding(false);
    startTimeRef.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isHolding) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });
    }
  };

  return (
    <div 
      className="min-h-screen w-full bg-gradient-to-b from-upa-dark via-upa-brown to-upa-dark relative overflow-hidden cursor-pointer"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {isHolding && (
        <img 
          src="/upa.gif"
          alt="growing upa"
          className="absolute pixelated pointer-events-none z-50"
          style={{
            width: `${currentSize}px`,
            height: `${currentSize}px`,
            left: mousePos.x - (currentSize / 2),
            top: mousePos.y - (currentSize / 2),
            transition: 'none'
          }}
        />
      )}
      {upas.map(upa => (
        <UpaSprite 
          key={upa.id} 
          x={upa.x} 
          y={upa.y} 
          size={upa.size}
        />
      ))}
    </div>
  );
}