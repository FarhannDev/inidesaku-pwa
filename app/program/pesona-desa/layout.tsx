import type { Metadata } from 'next';
import { Breadcrumb, Container } from 'react-bootstrap';
import Link from 'next/link';
import BreadcrumbItem from '@/components/shared/BreadcrumbItem';
import HeaderTopNavigationMobile from '@/components/navigation/HeaderTopNavigationMobile';

export const metadata: Metadata = {
  title: 'Pesona  Desa -  Inidesaku',
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

const breadcrumbItem: BreadcrumbItem[] = [
  {
    name: 'Berita Desa',
    url: '/program/pesona-desa' || '/program/pesona-desa/berita',
  },
  {
    name: 'Potensi Desa',
    url: '/program/pesona-desa/potensi',
  },
  {
    name: 'Budaya Lokal',
    url: '/program/pesona-desa/budaya',
  },
  {
    name: 'Wisata Lokal',
    url: '/program/pesona-desa/wisata',
  },
];

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderTopNavigationMobile title="Pesona Desa" />
      <Container className="position-relative py-5 mt-5">
        <BreadcrumbItem menus={breadcrumbItem} />
        {children}
      </Container>
    </>
  );
}
