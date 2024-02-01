interface ProgramFeature {
  id: string | number;
  name: string;
  description: string;
  tag: string;
  icons: string;
  links: string;
}

interface PesonaDesaBerita {
  id: string;
  slug: string;
  title: string;
  content: string;
  cover: string;
  user: string;
  totalViews: number;
  createdAt: string;
}

interface PesonaDesaBudaya {
  id: string;
  slug: string;
  title: string;
  content: string;
  cover: string;
  imageUrl: string[];
  user: string;
  totalViews: number;
  createdAt: string;
}

interface LayananDesa {
  id: string;
  slug: string;
  title: string;
  cover: string;
  content: string;
  location: string;
  date: string;
  categories: string;
}
