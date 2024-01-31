import { FormEvent } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import profile from '@/app/(auth)/verify/profile/profile.module.css';

export default function VerifyProfileInput() {
  const router = useRouter();

  const handleSubmit: (e: FormEvent<HTMLFormElement>) => void = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    router.replace('/verify/location');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInputName">
        <Form.Control
          type="text"
          className={profile.profileFormInput}
          placeholder="Nama"
          autoComplete="name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInputEmail">
        <Form.Control
          type="email"
          className={profile.profileFormInput}
          placeholder="Email"
          autoComplete="email"
        />
      </Form.Group>
      <Form.Group className="mb-4" controlId="exampleForm.referral">
        <Form.Control
          type="text"
          className={profile.profileFormInput}
          placeholder="Kode referal"
          autoComplete="name"
        />
      </Form.Group>

      <Button className={profile.customButtonLogin} type="submit">
        Selanjutnya
      </Button>
    </Form>
  );
}
