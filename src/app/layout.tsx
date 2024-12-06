import type { Metadata } from 'next';

import './globals.css';
import { Navbar, Footer } from '@/components';
import { AuthProvider } from '@/provider/authProvider';

export const metadata: Metadata = {
  title: 'RuBot | Home',
  description: 'Generative AI application for Rutgers Students',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <body className="bg-gray-900 text-white flex flex-col h-full">
        <AuthProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
