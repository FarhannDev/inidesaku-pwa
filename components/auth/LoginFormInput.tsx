'use client';
import { Button, Form, InputGroup, Stack } from 'react-bootstrap';
import styles from '@/app/(auth)/login/styles.module.css';
import Link from 'next/link';

export default function LoginFormInput() {
  return (
    <Form>
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
              d="M18.3333 5.88813C18.3333 4.97147 17.5833 4.22147 16.6667 4.22147H3.33334C2.41667 4.22147 1.66667 4.97147 1.66667 5.88813M18.3333 5.88813V15.8881C18.3333 16.8048 17.5833 17.5548 16.6667 17.5548H3.33334C2.41667 17.5548 1.66667 16.8048 1.66667 15.8881V5.88813M18.3333 5.88813L10 11.7215L1.66667 5.88813"
              stroke="#8A94A6"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </InputGroup.Text>
        <Form.Control
          type="text"
          className={styles.formInput}
          placeholder="Email"
          aria-label="Email"
          aria-describedby="basic-addon1"
          autoComplete="email"
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
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
          autoComplete="new-password"
        />
      </InputGroup>

      <Form.Group className="mb-5" controlId="formBasicCheckbox">
        <div className="d-flex justify-content-between g-3">
          <Form.Check type="checkbox" label="Ingat saya" />
          <Link href="/" className={styles.customForgetPassword}>
            Lupa kata sandi?
          </Link>
        </div>
      </Form.Group>

      <Button className={styles.customButtonLogin} type="submit">
        Masuk
      </Button>

      <Stack direction="vertical" gap={3} className="py-4">
        <div className="d-flex justify-content-center ">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="138"
              height="2"
              viewBox="0 0 138 2"
              fill="none"
            >
              <path d="M0 0.888123H138" stroke="#D7DAE0" />
            </svg>{' '}
            <span className={styles.customOtherText}>Atau</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="138"
              height="2"
              viewBox="0 0 138 2"
              fill="none"
            >
              <path d="M0 0.888123H138" stroke="#D7DAE0" />
            </svg>
          </div>
        </div>

        <div className="d-flex justify-content-arround g-3 flex-lg-row flex-column">
          <Button type="button" variant="" className={styles.customButtonOauth}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M1.875 6.51312C1.875 13.4167 7.47144 19.0131 14.375 19.0131H16.25C17.2855 19.0131 18.125 18.1737 18.125 17.1381V15.9951C18.125 15.5649 17.8322 15.1899 17.4149 15.0856L13.7289 14.1641C13.363 14.0726 12.9778 14.2093 12.7515 14.5111L11.943 15.5891C11.7083 15.902 11.3025 16.0403 10.9353 15.9058C8.17949 14.8963 5.9918 12.7086 4.9823 9.95284C4.84778 9.58562 4.98613 9.17977 5.299 8.94512L6.37702 8.13661C6.67878 7.91029 6.81551 7.52517 6.72403 7.15923L5.80253 3.47325C5.69819 3.0559 5.32321 2.76312 4.89302 2.76312H3.75C2.71447 2.76312 1.875 3.60259 1.875 4.63812V6.51312Z"
                stroke="#667085"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Nomor telepon
          </Button>
          <Button type="button" variant="" className={styles.customButtonOauth}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <g clip-path="url(#clip0_3273_489)">
                <path
                  d="M20.305 11.1185C20.305 10.4387 20.2499 9.75527 20.1323 9.08652H10.7V12.9373H16.1015C15.8773 14.1793 15.1571 15.278 14.1026 15.9761V18.4747H17.325C19.2174 16.733 20.305 14.1609 20.305 11.1185Z"
                  fill="#4285F4"
                />
                <path
                  d="M10.7 20.8888C13.397 20.8888 15.6715 20.0033 17.3287 18.4747L14.1062 15.9761C13.2096 16.586 12.0522 16.9314 10.7037 16.9314C8.0948 16.9314 5.88279 15.1714 5.08911 12.805H1.76373V15.3808C3.46133 18.7576 6.91898 20.8888 10.7 20.8888Z"
                  fill="#34A853"
                />
                <path
                  d="M5.08546 12.805C4.66657 11.5631 4.66657 10.2182 5.08546 8.97625V6.40047H1.76376C0.345428 9.22611 0.345428 12.5552 1.76376 15.3808L5.08546 12.805Z"
                  fill="#FBBC04"
                />
                <path
                  d="M10.7 4.84617C12.1257 4.82413 13.5036 5.36059 14.5361 6.34535L17.3911 3.4903C15.5833 1.79271 13.1839 0.859401 10.7 0.888796C6.91898 0.888796 3.46133 3.01997 1.76373 6.40046L5.08543 8.97625C5.87544 6.60623 8.09113 4.84617 10.7 4.84617Z"
                  fill="#EA4335"
                />
              </g>
              <defs>
                <clipPath id="clip0_3273_489">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.5 0.888123)"
                  />
                </clipPath>
              </defs>
            </svg>
            Google
          </Button>
        </div>

        <div className="mx-auto text-center g-3">
          <div className={styles.customOtherText}>
            Belum mempunyai akun?{' '}
            <Link href="/register" className={styles.customGuestButton}>
              Daftar{' '}
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
