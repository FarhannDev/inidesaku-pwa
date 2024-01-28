import { Container } from 'react-bootstrap';

export default function AboutLayout({
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
