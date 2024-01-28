'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Container,
  Nav,
  Navbar,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import {
  HiOutlineHome,
  HiOutlineBuildingOffice2,
  HiOutlineMap,
  HiOutlineShoppingCart,
  HiOutlineUser,
} from 'react-icons/hi2';

export default function HeaderTopNavigation() {
  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      {props}
    </Tooltip>
  );

  const menu = [
    {
      title: 'Beranda',
      icons: <HiOutlineHome fontSize={26} color="#fff" />,
      link: '/',
    },
    {
      title: 'Profile Desa',
      icons: <HiOutlineBuildingOffice2 fontSize={26} color="#fff" />,
      link: '/',
    },
    {
      title: 'Geopoint',
      icons: <HiOutlineMap fontSize={26} color="#fff" />,
      link: '/',
    },
    {
      title: 'PPOB',
      icons: <HiOutlineShoppingCart fontSize={26} color="#fff" />,
      link: '/',
    },
    {
      title: 'Profile',
      icons: <HiOutlineUser fontSize={26} color="#fff" />,
      link: '/',
    },
  ];

  const MenuItem = () =>
    menu.map((menu, idx) => (
      <OverlayTrigger
        key={idx}
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip(menu.title)}
      >
        <Link
          href={menu.link}
          className="mx-md-3 nav-link"
          aria-label={menu.title}
        >
          {menu.icons}
        </Link>
      </OverlayTrigger>
    ));

  return (
    <Navbar expand="lg" fixed="top">
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
