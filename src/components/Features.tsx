import React from 'react';
import { Users, Rocket, Lock, Zap } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function Features() {
  const features = [
    {
      title: "Community Driven",
      description: "100% community owned and driven. No team tokens, no presale.",
      icon: Users
    },
    {
      title: "Fair Launch",
      description: "Stealth launched on Solana with liquidity locked forever.",
      icon: Rocket
    },
    {
      title: "Safe & Secure",
      description: "Contract renounced and LP tokens burned forever.",
      icon: Lock
    },
    {
      title: "Low Fees",
      description: "Built on Solana for lightning-fast trades with minimal fees.",
      icon: Zap
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why $AXOL?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}