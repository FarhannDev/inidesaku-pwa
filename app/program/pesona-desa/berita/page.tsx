'use client';

import React, { useEffect, useState } from 'react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { pesonaDesaBeritaData } from '@/utils/data/localDataPesonaDesa';
import SearchBar from './components/SearchBar';
import PesonaNewsItemList from './components/PesonaNewsItemList';
import SearchBarIsEmpty from './components/SearchBarIsEmpty';

export default function BeritaDesa(): React.JSX.Element {
  const router: AppRouterInstance = useRouter();
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const [searchKeyword, setSearchKeyword] = useState<string>(
    () => searchParams.get('keyword') || ''
  );

  useEffect(() => {
    if (searchKeyword) {
      router.replace(
        `/program/pesona-desa/berita?keyword=${searchKeyword?.toString()}`
      );
    }
  }, [router, searchKeyword]);

  const onSearchKeywordChangeHandler: (keyword: string) => void = (
    keyword: string
  ) => {
    setSearchKeyword(keyword);
  };

  const filteredItem: PesonaNewsType[] = pesonaDesaBeritaData?.filter((item) =>
    item.title.toLowerCase().includes(searchKeyword?.toLowerCase())
  );

  return (
    <>
      <SearchBar
        keyword={searchKeyword}
        setKeyword={onSearchKeywordChangeHandler}
        placeholder="Cari Berita"
      />

      {filteredItem.length ? (
        <PesonaNewsItemList news={filteredItem} />
      ) : (
        <SearchBarIsEmpty
          images="/images/halaman_tidak_ditemukan.gif"
          heading="Berita yang anda cari tidak ditemukan!"
          subheading=""
        />
      )}
    </>
  );
}
