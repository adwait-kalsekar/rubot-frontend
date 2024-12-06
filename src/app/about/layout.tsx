import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RuBot | About',
  description: 'Generative AI application for Rutgers Students',
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
