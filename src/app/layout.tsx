// src/app/layout.tsx
import './globals.css';
import { JetBrains_Mono } from 'next/font/google';

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata = {
  title: 'Huilén Vilches | Portfolio',
  description: 'Full Stack Developer - Golang / React',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${jetBrainsMono.className} bg-black text-white`}>{children}</body>
    </html>
  );
}