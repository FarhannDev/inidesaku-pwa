'use client';

import OnboardingList from '@/components/onboarding/OnboardingList';
import { onboardingSlide } from '@/utils/data/localDataOnboarding';
import { Card, Col, Row } from 'react-bootstrap';

export default function Onboarding() {
  return (
    <Row className="justify-content-center">
      <Col lg={8}>
        <Card body className="mt-5">
          <OnboardingList onboarding={onboardingSlide} />
        </Card>
      </Col>
    </Row>
  );
}
