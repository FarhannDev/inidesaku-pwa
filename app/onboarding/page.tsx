'use client';

import OnboardingList from '@/components/onboarding/OnboardingList';
import { onboardingSlide } from '@/utils/data/localDataOnboarding';
import { Card, Col, Row } from 'react-bootstrap';
import styles from '@/styles/onboarding.module.css';

export default function Onboarding() {
  return (
    <Row className="justify-content-center mt-5">
      <Col lg={10}>
        <Card body className={styles.card}>
          <OnboardingList onboarding={onboardingSlide} />
        </Card>
      </Col>
    </Row>
  );
}
