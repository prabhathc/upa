import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
  return (
    <a 
      href={href}
      className="text-upa-purple hover:text-white transition-colors flex items-center space-x-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="w-6 h-6" />
      <span>{label}</span>
    </a>
  );
}