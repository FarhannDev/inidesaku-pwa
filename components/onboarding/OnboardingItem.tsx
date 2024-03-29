'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/onboarding.module.css';
import { Col, Row, Stack } from 'react-bootstrap';

type OnboardingItemProps = {
  title: string;
  description: string;
  images: string;
};

export default function OnboardingItem({
  title,
  description,
  images,
}: OnboardingItemProps) {
  return (
    <>
      <Row className="justify-content-center align-self-center align-items-center g-4">
        <Col lg={6} xl={6} md={12}>
          <Image
            src={images}
            width={350}
            height={248}
            alt="onboarding-slide"
            quality={75}
            priority
            className={styles.avatar}
          />

          <h2 className={styles.heading}>{title}</h2>
          <h3 className={styles.subheading}>{description}</h3>

          <Stack direction="vertical" gap={3} className="py-5 mt-5">
            <Link
              href="/login"
              aria-label="masuk"
              title="masuk"
              className={styles.onboardingLoginBtn}
            >
              Masuk
            </Link>
            <Link
              href="/register"
              aria-label="Daftar"
              title="Daftar"
              className={styles.onboardingRegisterBtn}
            >
              Daftar
            </Link>

            {/* <Link
              href="/"
              aria-label="masuk sebagai tamu"
              title="masuk sebagai tamu"
              className={styles.onboardingGuestBtn}
            >
              Masuk Sebagai Tamu
            </Link> */}
          </Stack>
        </Col>
        {/* <Col ld={6} xl={6} md={12}></Col> */}
      </Row>
    </>
  );
}
