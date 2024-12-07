import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  icon?: LucideIcon;
}

export function Button({ variant = 'primary', children, icon: Icon }: ButtonProps) {
  return (
    <button 
      className={`
        px-8 py-3 font-pixel text-sm pixel-button pixel-border
        ${variant === 'primary' 
          ? 'bg-upa-brown hover:bg-upa-dark text-white' 
          : 'bg-upa-purple/20 hover:bg-upa-purple/30 text-upa-purple'
        }
        flex items-center space-x-2 uppercase tracking-wider
      `}
    >
      <span>{children}</span>
      {Icon && <Icon className="w-4 h-4" />}
    </button>
  );
}