import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <div className="bg-upa-brown/20 p-8 pixel-border font-pixel">
      <Icon className="w-8 h-8 mb-6 text-upa-purple" />
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <p className="text-sm text-upa-purple leading-relaxed">{description}</p>
    </div>
  );
}