import React from 'react';
import { TokenomicsCard } from './TokenomicsCard';

export function Tokenomics() {
  const tokenomicsData = [
    { title: "1,000,000,000", description: "Total Supply" },
    { title: "0%", description: "Tax" },
    { title: "LP Burned", description: "100% Safe" },
    { title: "Contract Renounced", description: "Fully Decentralized" }
  ];

  return (
    <div className="bg-upa-brown/30 backdrop-blur-sm py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Tokenomics</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {tokenomicsData.map((item, index) => (
            <TokenomicsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}