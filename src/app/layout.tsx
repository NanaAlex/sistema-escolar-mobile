import type { Metadata } from 'next';
import { viewport } from './viewport';

export const metadata: Metadata = {
  title: 'Mobile App',
  description: 'Mobile Application',
};

export { viewport };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
