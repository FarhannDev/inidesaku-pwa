import { fonts } from '@/utils/common/fonts';
import { Providers } from './providers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inidesaku PWA',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts.poppins.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
