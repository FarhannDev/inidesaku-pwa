'use client';

import Image from 'next/image';
import { Card, Col, Row, Stack } from 'react-bootstrap';
import styles from './styles.module.css';
import LoginFormInput from '@/components/auth/LoginFormInput';

export default function Login() {
  return (
    <>
      <Row className="justify-content-center">
        <Col>
          <Card body className={styles.card}>
            <Row className="justify-content-arround align-self-center align-items-center g-3 py-4">
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
                  <h1 className={styles.heading}>
                    Selamat datang, Silahkan isi data di bawah untuk dapat login
                    ke akun Anda
                  </h1>
                  <LoginFormInput />
                </Stack>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}
