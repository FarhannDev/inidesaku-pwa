import HeaderTopNavigation from '@/components/navigation/HeaderTopNavigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from 'react-bootstrap';

export const metadata: Metadata = {
  title: 'Berita Desa -  Inidesaku',
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

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return children;
}
