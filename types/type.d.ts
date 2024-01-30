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

type PesonaNewsType = {
  id: string;
  slug: string;
  title: string;
  content: string;
  cover: string;
  user: string;
  totalViews: number;
  createdAt: string;
};

type PesonaDesaBudayaType = {
  id: string;
  slug: string;
  title: string;
  content: string;
  cover: string;
  imageUrl: string[];
  user: string;
  totalViews: number;
  createdAt: string;
};

type ProgramLayananDesaType = {
  id: string;
  slug: string;
  title: string;
  cover: string;
  content: string;
  location: string;
  date: string;
  categories: string;
};
