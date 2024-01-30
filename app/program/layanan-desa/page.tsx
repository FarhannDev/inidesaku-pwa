'use client';

import React, { useEffect, useState } from 'react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { layananDesaData } from '@/utils/data/localDataLayananDesa';
import SearchBar from '@/components/shared/SearchBar';
import SearchBarIsEmpty from '@/components/shared/SearchBarIsEmpty';
import ProgramLayananDesaItemList from './components/ProgramLayananDesaItemList';

export default function Page() {
  const router: AppRouterInstance = useRouter();
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const [searchKeyword, setSearchKeyword] = useState<string>(
    () => searchParams.get('keyword') || ''
  );

  useEffect(() => {
    if (searchKeyword) {
      router.replace(
        `/program/layanan-desa?keyword=${searchKeyword?.toString()}`
      );
    }
  }, [router, searchKeyword]);

  const onSearchKeywordChangeHandler: (keyword: string) => void = (
    keyword: string
  ) => {
    setSearchKeyword(keyword);
  };

  const filteredItem: ProgramLayananDesaType[] = layananDesaData?.filter(
    (item) => item.title.toLowerCase().includes(searchKeyword?.toLowerCase())
  );

  return (
    <>
      <SearchBar
        keyword={searchKeyword}
        setKeyword={onSearchKeywordChangeHandler}
        placeholder="Cari Layanan Desa"
      />

      {filteredItem.length ? (
        <ProgramLayananDesaItemList programs={filteredItem} />
      ) : (
        <SearchBarIsEmpty
          images="/images/halaman_tidak_ditemukan.gif"
          heading="Pelayanan desa yang Anda cari tidak ditemukan!"
          subheading=""
        />
      )}
    </>
  );
}
