'use client';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import { Container, Navbar } from 'react-bootstrap';
import { HiArrowLeft } from 'react-icons/hi';

type HeaderTopNavigationMobileProps = { title: string };

export default function HeaderTopNavigationMobile({
  title,
}: HeaderTopNavigationMobileProps) {
  const router: AppRouterInstance = useRouter();
  const handleClickButton = () => router.back();
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="custom-navbar-mobile d-block d-lg-none d-xl-none"
    >
      <Container>
        <button
          onClick={handleClickButton}
          type="button"
          className="btn px-0 mx-0 border-0"
        >
          <HiArrowLeft color="#fff" fontSize={20} />
        </button>

        <div className="d-flex justify-content-center g-3 align-content-center m-auto">
          <Navbar.Brand>{title}</Navbar.Brand>
        </div>
      </Container>
    </Navbar>
  );
}
