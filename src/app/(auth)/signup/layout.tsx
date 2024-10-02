import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RuBot | Signup',
  description: 'Generative AI application for Rutgers Students',
};

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
