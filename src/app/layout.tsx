import type { Metadata } from 'next';

import './globals.css';
import { Navbar, Footer } from '@/components';

export const metadata: Metadata = {
  title: 'RuBot',
  description: 'Generative AI application for Rutgers Students',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <body className="bg-gray-900 text-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
