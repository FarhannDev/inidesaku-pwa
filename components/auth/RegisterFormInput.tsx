'use client';

import Link from 'next/link';
import styles from '@/app/auth/login/styles.module.css';
import register from '@/app/auth/register/register.module.css';
import { Button, Form, InputGroup, Stack } from 'react-bootstrap';

export default function RegisterFormInput() {
  return (
    <Form>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1" className={register.formInputIcon}>
          +62
        </InputGroup.Text>
        <Form.Control
          type="tel"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          className={register.formInput}
          placeholder="Nomor telepon"
          aria-label="Nomor telepon"
          aria-describedby="basic-addon1"
          autoComplete="name"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1" className={styles.formInputIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M13.125 5C13.125 6.72589 11.7259 8.125 10 8.125C8.27411 8.125 6.875 6.72589 6.875 5C6.875 3.27411 8.27411 1.875 10 1.875C11.7259 1.875 13.125 3.27411 13.125 5Z"
              stroke="#8A94A6"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.75095 16.7652C3.80953 13.3641 6.58489 10.625 10 10.625C13.4152 10.625 16.1906 13.3642 16.2491 16.7654C14.3467 17.6383 12.2303 18.125 10.0003 18.125C7.77 18.125 5.65341 17.6383 3.75095 16.7652Z"
              stroke="#8A94A6"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </InputGroup.Text>
        <Form.Control
          type="text"
          className={styles.formInput}
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          autoComplete="name"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1" className={styles.formInputIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <path
              d="M13.75 9.63812V6.51312C13.75 4.44205 12.0711 2.76312 10 2.76312C7.92893 2.76312 6.25 4.44205 6.25 6.51312V9.63812M5.625 19.0131H14.375C15.4105 19.0131 16.25 18.1737 16.25 17.1381V11.5131C16.25 10.4776 15.4105 9.63812 14.375 9.63812H5.625C4.58947 9.63812 3.75 10.4776 3.75 11.5131V17.1381C3.75 18.1737 4.58947 19.0131 5.625 19.0131Z"
              stroke="#8A94A6"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </InputGroup.Text>
        <Form.Control
          type="password"
          className={styles.formInput}
          placeholder="Kata sandi"
          aria-label="Kata sandi"
          aria-describedby="basic-addon1"
          autoComplete="new-password"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1" className={styles.formInputIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <path
              d="M13.75 9.63812V6.51312C13.75 4.44205 12.0711 2.76312 10 2.76312C7.92893 2.76312 6.25 4.44205 6.25 6.51312V9.63812M5.625 19.0131H14.375C15.4105 19.0131 16.25 18.1737 16.25 17.1381V11.5131C16.25 10.4776 15.4105 9.63812 14.375 9.63812H5.625C4.58947 9.63812 3.75 10.4776 3.75 11.5131V17.1381C3.75 18.1737 4.58947 19.0131 5.625 19.0131Z"
              stroke="#8A94A6"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </InputGroup.Text>
        <Form.Control
          type="password"
          className={styles.formInput}
          placeholder="Konfirmasi kata sandi"
          aria-label="Konfirmasi kata sandi"
          aria-describedby="basic-addon1"
          autoComplete="new-password"
        />
      </InputGroup>

      <Button className={styles.customButtonLogin} type="submit">
        Daftar
      </Button>

      <Stack direction="vertical" gap={3} className="py-4">
        <div className="mx-auto text-center g-3">
          <div className={styles.customOtherText}>
            Sudah mempunyai akun?{' '}
            <Link href="/auth/login" className={styles.customGuestButton}>
              Masuk{' '}
            </Link>
          </div>
          <div className="pt-3">
            <Link href="/" className={styles.customGuestButton}>
              Masuk Sebagai Tamu{' '}
            </Link>
          </div>
        </div>
      </Stack>
    </Form>
  );
}
