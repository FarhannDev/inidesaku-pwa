'use client';

import React, { useEffect, useState } from 'react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { pesonaDesaBudayaData } from '@/utils/data/localDataPesonaDesa';
import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import SearchBarIsEmpty from '../berita/components/SearchBarIsEmpty';
import SearchBar from '../berita/components/SearchBar';
import PesonaBudayaItemListForYou from './components/PesonaBudayaItemListForYou';

export default function BudayaLokal(): React.JSX.Element {
  const router: AppRouterInstance = useRouter();
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const [searchKeyword, setSearchKeyword] = useState<string>(
    () => searchParams.get('keyword') || ''
  );

  useEffect(() => {
    if (searchKeyword) {
      router.replace(
        `/program/pesona-desa/budaya?keyword=${searchKeyword?.toString()}`
      );
    }
  }, [router, searchKeyword]);

  const onSearchKeywordChangeHandler: (keyword: string) => void = (
    keyword: string
  ) => {
    setSearchKeyword(keyword);
  };

  const filteredItem: PesonaDesaBudaya[] = pesonaDesaBudayaData?.filter(
    (item) => item.title.toLowerCase().includes(searchKeyword?.toLowerCase())
  );

  return (
    <>
      <SearchBar
        keyword={searchKeyword}
        setKeyword={onSearchKeywordChangeHandler}
        placeholder="Cari Budaya Lokal"
      />

      {filteredItem.length ? (
        <>
          <PesonaBudayaItemListForYou
            budaya={filteredItem}
            heading="Rekomendasi budaya Lokal"
          />
          <PesonaBudayaItemListForYou
            budaya={filteredItem}
            heading="Budaya Lokal Disekitar"
          />
          <PesonaBudayaItemListForYou
            budaya={filteredItem}
            heading="Paling Banyak Dicari "
          />
        </>
      ) : (
        <SearchBarIsEmpty
          images="/images/halaman_tidak_ditemukan.gif"
          heading="Budaya Lokal yang anda cari tidak ditemukan!"
          subheading=""
        />
      )}
    </>
  );
}
