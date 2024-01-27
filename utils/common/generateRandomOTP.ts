function generateRandomOTP(length: number): string {
  const digits = '0123456789';
  let OTP = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    OTP += digits.charAt(randomIndex);
  }

  return OTP;
}
export { generateRandomOTP };
