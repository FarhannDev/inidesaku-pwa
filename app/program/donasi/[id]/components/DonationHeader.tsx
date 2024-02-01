/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '../styles/styles.module.css';

type DonationHeaderProps = {
  cover: string | undefined;
};

export default function DonationHeader({ cover }: DonationHeaderProps) {
  return (
    <header className="position-relative">
      <img
        src={cover}
        className={styles.backgroundCoverFull}
        loading="lazy"
        alt="background"
      />
    </header>
  );
}
