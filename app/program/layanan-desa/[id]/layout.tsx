import type { Metadata, ResolvingMetadata } from 'next';
import { cache } from 'react';
import { layananDesaData } from '@/utils/data/localDataLayananDesa';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id: string = params.id;
  const item: LayananDesa | undefined = await getData(id);

  return {
    title: item?.title,
    description: item?.content,
    openGraph: {
      images: item?.cover,
    },
  };
}

export const getData: (id: string) => Promise<LayananDesa | undefined> = cache(
  async (id: string) => {
    const items: LayananDesa | undefined = await layananDesaData.find(
      (item) => item.slug === id.toString()
    );

    return items;
  }
);

export default function Layout({
  params: { id },
  children, // will be a page or nested layout
}: {
  params: { id: string };
  children: React.ReactNode;
}) {
  return children;
}
