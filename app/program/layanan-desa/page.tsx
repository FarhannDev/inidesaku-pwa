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
import ProgramLayananDesaButtonFiltered from './components/ProgramLayananDesaButtonFiltered';

export default function LayananDesa() {
  const router: AppRouterInstance = useRouter();
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const [searchKeyword, setSearchKeyword] = useState<string>(
    () => searchParams.get('keyword') || ''
  );

  const [selectedLayanan, setSelectedLayanan] = useState<string>('');

  useEffect(() => {
    if (searchKeyword.length) {
      router.push(`/program/layanan-desa?keyword=${searchKeyword?.toString()}`);
    }
  }, [router, searchKeyword]);

  const onSearchKeywordChangeHandler: (keyword: string) => void = (
    keyword: string
  ) => {
    setSearchKeyword(keyword);
  };

  const filteredItem: LayananDesa[] = selectedLayanan
    ? layananDesaData.filter((item) => item.categories === selectedLayanan)
    : layananDesaData?.filter((item) =>
        item.title.toLowerCase().includes(searchKeyword?.toLowerCase())
      );

  const handleSelectedLayanan = (value: string) => setSelectedLayanan(value);

  return (
    <>
      <SearchBar
        keyword={searchKeyword}
        setKeyword={onSearchKeywordChangeHandler}
        placeholder="Cari Layanan Desa"
      />

      {!searchKeyword.length ? (
        <ProgramLayananDesaButtonFiltered
          item={selectedLayanan}
          setItem={handleSelectedLayanan}
          categories={layananDesaData}
        />
      ) : null}

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
