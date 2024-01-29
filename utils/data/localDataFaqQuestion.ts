type FaqQuestionType = {
  question: string;
  answer: string | undefined;
};

type FaqQuestionUserType = {
  id: string;
  name: string;
  email: string;
  question: string;
};

const faqQuestionData: FaqQuestionType[] = [
  {
    question: 'Bagaimana cara membuat akun di aplikasi ini?',
    answer:
      'Anda dapat membuat akun dengan mengikuti langkah-langkah pendaftaran yang sederhana di aplikasi.',
  },
  {
    question: 'Bagaimana cara mengatur profil saya?',
    answer:
      'Anda dapat mengatur profil Anda dengan masuk ke menu pengaturan dan memilih opsi "Profil."',
  },
  {
    question: 'Apakah data pribadi saya aman di dalam aplikasi ini?',
    answer: '',
  },
  {
    question: 'Apa yang harus dilakukan jika saya mengalami masalah teknis?',
    answer: '',
  },
  {
    question: 'Apakah aplikasi ini memerlukan koneksi internet?',
    answer: '',
  },
  {
    question: 'Apakah aplikasi ini gratis digunakan?',
    answer: '',
  },
  {
    question: 'Apa yang harus saya lakukan jika lupa kata sandi akun saya?',
    answer: '',
  },
];

const faqQuestionUserData: FaqQuestionUserType[] = [
  {
    id: '1',
    name: 'eybel',
    email: 'eybel@gmail.com',
    question:
      'Adakah panduan atau video tutorial yang bisa saya akses untuk memahami fitur-fitur khusus?',
  },
];

export { faqQuestionData, faqQuestionUserData };
