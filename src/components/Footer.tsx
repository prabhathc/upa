import React from 'react';
import { Twitter, MessageCircle, Globe } from 'lucide-react';
import { SocialLink } from './SocialLink';

export function Footer() {
  return (
    <footer className="border-t border-upa-brown">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-upa-purple">© 2024 $UPA Token. Built with 💜 on Solana</p>
          <div className="flex space-x-6">
            <SocialLink href="#" icon={Twitter} label="Twitter" />
            <SocialLink href="#" icon={MessageCircle} label="Telegram" />
            <SocialLink href="#" icon={Globe} label="Website" />
          </div>
        </div>
      </div>
    </footer>
  );
}