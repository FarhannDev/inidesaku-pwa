interface Donation {
  id: string;
  slug: string;
  title: string;
  cover: string;
  content: string;
  categories: string[];
  user: string;
  createdAt: string;
}

type DonationDetail = Donation;
