'use client';

import Image from 'next/image';
import { Card, Col, Row, Stack } from 'react-bootstrap';
import styles from '@/app/auth/login/styles.module.css';
import register from '@/app/auth/register/register.module.css';
import VerifyOTPInput from '@/components/auth/VerifyOtpInput';

export default function VerifyOTP() {
  return (
    <>
      <Row className="justify-content-center">
        <Col lg={10}>
          <Card body className={styles.card}>
            <Row className="justify-content-arround align-self-center align-items-center g-5 py-4">
              <Col lg={12} xl={6} md={12}>
                <Image
                  src="/images/background_login.png"
                  width={300}
                  height={250}
                  alt="Background Login"
                  priority
                  className={styles.avatar}
                />
              </Col>
              <Col lg={12} xl={6} md={12}>
                <Stack direction="vertical" gap={3}>
                  <h1 className={register.heading}>Masukkan Kode OTP</h1>
                  <h2 className={register.subheading}>
                    Lakukan verifikasi sesuai petunjuk yang diberikan melalui
                    SMS.
                  </h2>
                  <VerifyOTPInput />
                </Stack>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}
