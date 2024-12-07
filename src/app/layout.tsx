import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '$UPA Token',
  description: 'The cutest meme token on Solana',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}