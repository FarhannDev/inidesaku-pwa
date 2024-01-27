'use client';

import { useState, ChangeEvent, useEffect, FormEvent } from 'react';
import { UseFormRegister, useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import { generateRandomOTP } from '@/utils/common/generateRandomOTP';
import verify from '@/app/auth/verify/otp/verify.module.css';
import styles from '@/app/auth/login/styles.module.css';
import { useRouter } from 'next/navigation';

type VerifyOTPProps = {
  register: UseFormRegister<any>;
  otp: string[];
  setOTP: React.Dispatch<React.SetStateAction<string[]>>;
  index: number;
};

export default function VerifyOTPInput(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [otp, setOTP] = useState<string[]>(['', '', '', '']);
  const [isOtpTimeout, setIsOtpTimeout] = useState<number>(120); // 2 minutes in milliseconds
  const randomOTP = generateRandomOTP(4);
  const router = useRouter();

  useEffect(() => {
    const randomOTP = generateRandomOTP(4);
    // Set a timeout to clear the OTP after the specified time
    setTimeout(() => {
      setOTP(randomOTP.split(''));
    }, 500);
  }, []);

  useEffect(() => {
    let countdown: number = isOtpTimeout;
    const intervalId = setInterval(() => {
      if (countdown > 0) {
        countdown -= 1;
        setIsOtpTimeout(countdown);
      } else {
        clearInterval(intervalId);
        setOTP(['', '', '', '']); // Clear OTP after the timeout
      }
    }, 1000);

    // Clear the timeout when the component unmounts or the OTP is submitted
    return () => clearTimeout(intervalId);
  }, [isOtpTimeout]); // Empty dependency array ensures this effect runs only once on component mount

  const handleChange: (
    e: ChangeEvent<HTMLInputElement>,
    { register, otp, setOTP, index }: VerifyOTPProps
  ) => void = (
    e: ChangeEvent<HTMLInputElement>,
    { register, otp, setOTP, index }: VerifyOTPProps
  ) => {
    const newOTP = [...otp];
    newOTP[index] = e.target.value;

    // Fokus ke input berikutnya setelah pengguna memasukkan digit
    if (e.target.value !== '' && index < 3) {
      const nextInput = document.getElementById(
        `otp-input-${index + 1}`
      ) as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const onSubmit: (e: FormEvent<HTMLFormElement>) => void = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const enteredOTP = otp.join('');

    // Lakukan verifikasi OTP di sini
    // Contoh: kirim OTP ke server dan bandingkan dengan yang dikirimkan ke pengguna\
    setOTP(['', '', '', '']); // Clear OTP after the timeout
    setIsOtpTimeout(0);

    router.replace('/auth/verify/profile');
  };

  return (
    <Form onSubmit={onSubmit}>
      <div className="d-flex justify-content-center  g-5 py-3  mb-4">
        {otp.map((digit, index) => (
          <Form.Control
            key={index}
            type="text"
            {...register(`otp[${index}]`, { required: true, maxLength: 1 })}
            value={digit}
            onChange={(e) => handleChange(e, { register, otp, setOTP, index })}
            pattern="[0-9]{1}"
            aria-label="pin"
            aria-describedby="basic-addon1"
            autoComplete="name"
            className={verify.inputPin}
            id={`otp-input-${index}`}
            disabled={!isOtpTimeout}
          />
        ))}
      </div>

      <Button
        disabled={!isOtpTimeout}
        className={styles.customButtonLogin}
        type="submit"
      >
        Masuk
      </Button>

      <div className="d-flex justify-content-between  pt-4">
        <div className={verify.textInput}>
          {isOtpTimeout ? (
            <>
              Kirim kembali kode OTP{' '}
              <span className={verify.textInputColor}>
                ( {isOtpTimeout.toString()} )
              </span>
            </>
          ) : (
            'Tidak mendapatkan Kode? '
          )}
        </div>

        {!isOtpTimeout ? (
          <button
            onClick={() => {
              setOTP(randomOTP.split(''));
              setIsOtpTimeout(120);
            }}
            type="button"
            className={`btn btn-outline rounded-0 px-0 mx-0 p-0 m-0 ${verify.textInput}`}
          >
            Kirim ulang code
          </button>
        ) : (
          ''
        )}
      </div>

      {/* {errors.otp && <p>Please enter the 4-digit OTP.</p>} */}
    </Form>
  );
}
