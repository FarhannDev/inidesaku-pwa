import Image from 'next/image';
import React from 'react';
import { Stack } from 'react-bootstrap';
import '../styles/search-bar.css';

type SearchBarIsEmptyProps = {
  images: string;
  heading: string;
  subheading: string | null;
};

export default function SearchBarIsEmpty({
  heading,
  subheading,
  images,
}: SearchBarIsEmptyProps) {
  return (
    <div className="searchbar-empty-item pt-3">
      <Stack direction="vertical" gap={3}>
        <Image
          className="searchbar-empty-item__images"
          src={images}
          width={320}
          height={250}
          alt="halaman_tidak_ditemukan"
          priority
        />

        <h3 className="searchbar-empty-item__heading">{heading}</h3>
      </Stack>
    </div>
  );
}
