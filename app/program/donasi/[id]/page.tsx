import React, { cache } from 'react';
import { donation } from '@/utils/data/localDataDonation';
import DonationDetails from './components/DonationDetails';

export const getData: (id: string) => Promise<Donation | undefined> = cache(
  async (id: string) => {
    const donations: Donation | undefined = await donation.find(
      (donation) => donation.slug === id.toString()
    );

    return donations;
  }
);

export default async function DonationDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const donation: Donation | undefined = await getData(id);

  return <DonationDetails donation={donation} />;
}
