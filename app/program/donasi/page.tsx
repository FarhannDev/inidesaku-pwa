'use client';

import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { donation } from '@/utils/data/localDataDonation';
import DonationItemList from './components/DonationItemList';
import SearchBar from '@/components/shared/SearchBar';
import SearchBarIsEmpty from '@/components/shared/SearchBarIsEmpty';

export default function Donation() {
  const router: AppRouterInstance = useRouter();
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const [searchKeyword, setSearchKeyword] = useState<string>(
    () => searchParams.get('keyword') || ''
  );

  useEffect(() => {
    if (searchKeyword.length) {
      router.push(`/program/donasi?keyword=${searchKeyword?.toString()}`);
    }
  }, [router, searchKeyword]);

  const onSearchKeywordChangeHandler: (keyword: string) => void = (
    keyword: string
  ) => {
    setSearchKeyword(keyword);
  };

  const filteredData = donation?.filter((item) =>
    item.title.toLowerCase().includes(searchKeyword?.toLowerCase())
  );

  return (
    <Container className="position-relative py-5 mt-5">
      <SearchBar
        placeholder="Cari"
        keyword={searchKeyword}
        setKeyword={onSearchKeywordChangeHandler}
      />

      {filteredData.length ? (
        <DonationItemList donations={filteredData} />
      ) : (
        <SearchBarIsEmpty
          images="/images/halaman_tidak_ditemukan.gif"
          heading="Donasi yang Anda cari tidak ditemukan!"
          subheading=""
        />
      )}
    </Container>
  );
}
