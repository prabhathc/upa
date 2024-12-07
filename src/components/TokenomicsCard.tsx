import React from 'react';

interface TokenomicsCardProps {
  title: string;
  description: string;
}

export function TokenomicsCard({ title, description }: TokenomicsCardProps) {
  return (
    <div className="bg-upa-dark/50 p-6 pixel-border font-pixel text-center">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <p className="text-sm text-upa-purple">{description}</p>
    </div>
  );
}