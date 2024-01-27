import { Container } from 'react-bootstrap';

export default function OnboardingLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <Container>{children}</Container>;
}
