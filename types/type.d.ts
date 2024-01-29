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

type ProgramFeatureType = {
  id: string | number;
  name: string;
  description: string;
  tag: string;
  icons: string;
};
