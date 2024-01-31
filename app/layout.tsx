import type { Metadata } from 'next';
import { fonts } from '@/utils/common/fonts';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/navbar.css';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: ' Beranda - Inidesaku',
  description: `Selamat datang. Membangun desa juara di Indonesia? Ayo bergabung bersama kami!. Memajukan ekonomi desa. Melalui pemberdayaan masyarakat desa di bidang ekonomi, sosial dan budaya!. Kegiatan desa. Menginformasikan pelaksanaan kegiatan yang berlangsung di Desa!. Pesona desa. Menginformasikan budaya lokal, wisata desa dan produk unggulan dari desa`,
  keywords: [
    'Selamat datang',
    'Memajukan ekonomi desa',
    'Kegiatan desa',
    'Pesona desa',
  ],
  authors: {
    name: 'Inidesaku',
    url: 'http://localhost:3000',
  },
  openGraph: {
    title: 'Selamat datang',
    description: `Selamat datang.Membangun desa juara di Indonesia? Ayo bergabung bersama kami!. Memajukan ekonomi desa. Melalui pemberdayaan masyarakat desa di bidang ekonomi, sosial dan budaya!. Kegiatan desa. Menginformasikan pelaksanaan kegiatan yang berlangsung di Desa!. Pesona desa. Menginformasikan budaya lokal, wisata desa dan produk unggulan dari desa`,
    type: 'website',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts.poppins.variable}>{children}</body>
    </html>
  );
}
