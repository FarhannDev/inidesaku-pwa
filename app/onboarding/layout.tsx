import { Container } from '@chakra-ui/react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: ' Selamat datang di Inidesaku',
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

export default function OnboardingLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <Container
      display="flex"
      justifyContent="center"
      alignContent="center"
      maxW="lg"
      w="auto"
      paddingTop={10}
      paddingBottom={10}
    >
      {children}
    </Container>
  );
}
