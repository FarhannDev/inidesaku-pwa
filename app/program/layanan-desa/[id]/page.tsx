import React, { cache } from 'react';
import { layananDesaData } from '@/utils/data/localDataLayananDesa';
import ProgramLayananDesaDetail from './components/ProgramLayananDesaDetail';

import './styles/index.css';

export const getData: (id: string) => Promise<LayananDesa | undefined> = cache(
  async (id: string) => {
    const items: LayananDesa | undefined = await layananDesaData.find(
      (item) => item.slug === id.toString()
    );

    return items;
  }
);

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const result = await getData(id);

  return <ProgramLayananDesaDetail result={result} />;
}
