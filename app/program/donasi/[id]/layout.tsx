import type { Metadata, ResolvingMetadata } from 'next';
import { cache } from 'react';
import { donation } from '@/utils/data/localDataDonation';

type Props = { params: { id: string } };

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id: string = params.id;
  const donation: DonationDetail | undefined = await getData(id);

  return {
    title: donation?.title,
    description: donation?.content,
    openGraph: {
      images: donation?.cover,
    },
  };
}

export const getData: (id: string) => Promise<DonationDetail | undefined> =
  cache(async (id: string) => {
    const donations: DonationDetail | undefined = await donation.find(
      (donation) => donation.slug === id.toString()
    );

    return donations;
  });

export default function Layout({
  params: { id },
  children, // will be a page or nested layout
}: {
  params: { id: string };
  children: React.ReactNode;
}) {
  return children;
}
