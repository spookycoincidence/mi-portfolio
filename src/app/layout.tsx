import './globals.css';
import { JetBrains_Mono } from 'next/font/google';
import LoadingWrapper from './LoadingWrapper'; 

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata = {
  title: 'Huilén Vilches | Portfolio',
  description: 'Full Stack Developer - Golang / React',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${jetBrainsMono.className} bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 text-black scroll-smooth`}>
        {/*  maneja el estado y el loader */}
        <LoadingWrapper>
          {children}
        </LoadingWrapper>
      </body>
    </html>
  );
}
