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
        <main className="transition-all duration-500 ease-in-out min-h-[80vh]">
          {children}
        </main>

        {/* solo visible en desktop */}
        <footer className="hidden md:block w-full text-center py-10 text-sm transition-all duration-500 ease-in-out">
          © 2025 Made with <span aria-label="corazón" role="img">❤️</span> by Huilén Vilches
        </footer>
      </body>
    </html>
  );
}
