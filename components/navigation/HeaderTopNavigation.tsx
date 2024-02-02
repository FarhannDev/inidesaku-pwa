'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HiOutlineHome } from 'react-icons/hi2';

export default function HeaderTopNavigation() {
  const menu = [
    {
      title: 'Beranda',
      icons: <HiOutlineHome fontSize={26} color="#fff" />,
      link: '/',
    },
    {
      title: 'Program',
      icons: <HiOutlineHome fontSize={26} color="#fff" />,
      link: '/program',
    },
    {
      title: 'Pusat Bantuan',
      icons: <HiOutlineHome fontSize={26} color="#fff" />,
      link: '/',
    },
    // {
    //   title: 'Profile Desa',
    //   icons: <HiOutlineBuildingOffice2 fontSize={26} color="#fff" />,
    //   link: '/',
    // },
    // {
    //   title: 'Geopoint',
    //   icons: <HiOutlineMap fontSize={26} color="#fff" />,
    //   link: '/',
    // },
    // {
    //   title: 'PPOB',
    //   icons: <HiOutlineShoppingCart fontSize={26} color="#fff" />,
    //   link: '/',
    // },
    // {
    //   title: 'Profile',
    //   icons: <HiOutlineUser fontSize={26} color="#fff" />,
    //   link: '/',
    // },
  ];

  const MenuItem = () =>
    menu.map((menu, idx) => (
      <Link
        key={idx}
        href={menu.link}
        className="mx-md-2 nav-link"
        aria-label={menu.title}
      >
        {menu.title}
      </Link>
    ));

  return (
    <Navbar expand="lg" fixed="top" className="d-none d-xl-block d-lg-block">
      <Container>
        <Navbar.Brand href="/">
          <Image
            src="/images/logo/inidesaku_logo.png"
            width={36}
            height={33}
            alt="inidesaku logo"
            priority
          />

          <span>INIDESAKU</span>
        </Navbar.Brand>
        <Nav className="me-auto d-none d-lg-flex justify-content-start align-item-center">
          <MenuItem />
        </Nav>
      </Container>
    </Navbar>
  );
}
