'use client';

import Image from 'next/image';
import { Card, Col, Row, Stack } from 'react-bootstrap';
import styles from '@/app/auth/login/styles.module.css';
import register from './register.module.css';
import RegisterFormInput from '@/components/auth/RegisterFormInput';

export default function Register() {
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
                  <h1 className={register.heading}>Pendaftaran Akun</h1>
                  <h2 className={register.subheading}>
                    Selamat datang! Isi formulir pendaftaran dengan informasi
                    yang diperlukan, seperti nomor telepon, username dan kata
                    sandi.
                  </h2>
                  <RegisterFormInput />
                </Stack>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}
