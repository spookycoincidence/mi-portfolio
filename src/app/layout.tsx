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
      <body className={`${jetBrainsMono.className} bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 text-black scroll-smooth`}>
        <main className="transition-all duration-500 ease-in-out">{children}</main>

        <footer className="w-full text-center py-6 mt-12 text-sm transition-all duration-500 ease-in-out">
          © 2025 Made with ❤️ by Huilén Vilches 
        </footer>
      </body>
    </html>
  );
}
