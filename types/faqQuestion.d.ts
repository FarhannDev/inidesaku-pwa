interface FaqQuestion {
  question: string;
  answer: string | undefined;
}

interface FaqQuestionUser {
  id: string;
  name: string;
  email: string;
  question: string;
}
