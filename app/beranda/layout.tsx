import HeaderTopNavigation from '@/components/navigation/HeaderTopNavigation';
import { Container } from 'react-bootstrap';

export default function BerandaLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Container className="py-5 mt-5">{children}</Container>
    </>
  );
}
