'use client';

import React, { useEffect, useState } from 'react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { Container } from 'react-bootstrap';
import { tvcc } from '@/utils/data/localDataTvcc';
import SearchBar from '@/components/shared/SearchBar';
import TvccItemList from './components/tvccItemList';
import TvccItemThumbnailList from './components/TvccItemThumbnailList';
import SearchBarIsEmpty from '@/components/shared/SearchBarIsEmpty';
import TvccItemResult from './components/TvccItemResult';
import TvccItemResultList from './components/TvccItemResultList';

export default function Page() {
  const router: AppRouterInstance = useRouter();
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const [searchKeyword, setSearchKeyword] = useState<string>(
    () => searchParams.get('keyword') || ''
  );

  useEffect(() => {
    if (searchKeyword) {
      router.replace(`/program/tvcc?keyword=${searchKeyword?.toString()}`);
    }
  }, [router, searchKeyword]);

  const onSearchKeywordChangeHandler: (keyword: string) => void = (
    keyword: string
  ) => {
    setSearchKeyword(keyword);
  };

  const filteredItem: Tvcc[] = tvcc.filter((filtered) =>
    filtered.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <>
      <Container className="position-relative py-5 mt-5">
        <SearchBar
          placeholder="Cari program TVCC yang kamu mau"
          keyword={searchKeyword}
          setKeyword={onSearchKeywordChangeHandler}
        />

        {!filteredItem.length ? (
          <SearchBarIsEmpty
            images="/images/halaman_tidak_ditemukan.gif"
            heading="Program TVCC yang Anda cari tidak ditemukan!"
            subheading=""
          />
        ) : null}

        {!searchKeyword ? (
          <>
            <TvccItemList items={tvcc} />
            <TvccItemThumbnailList items={tvcc} />
          </>
        ) : (
          <TvccItemResultList items={filteredItem} />
        )}
      </Container>
      ;
    </>
  );
}
