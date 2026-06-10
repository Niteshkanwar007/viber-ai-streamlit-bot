import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Military Hiring Marketplace | Discovery & Solution Blueprint V1',
  description: 'Premium consulting-grade discovery and solution blueprint prepared by Shine Dezign.'
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
