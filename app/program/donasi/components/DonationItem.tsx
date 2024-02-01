import React from 'react';
import { Card, Stack } from 'react-bootstrap';
import { HiOutlineClock, HiOutlineUser } from 'react-icons/hi';
import styles from '../styles/styles.module.css';
import Image from 'next/image';
import Link from 'next/link';

type DonationItemProps = Donation;

export const DonationIconLabel = () => (
  <div>
    <div className={styles.donationInfo}>
      <HiOutlineClock fontSize={16} className="me-1" /> 08 Agustus 1023
    </div>
    <div className={styles.donationInfo}>
      <HiOutlineUser fontSize={16} className="me-1" /> Admin Desa
    </div>
  </div>
);

export default function DonationItem({
  slug,
  title,
  cover,
  createdAt,
  user,
}: DonationItemProps) {
  return (
    <Card className={styles.donationCardItem}>
      <div className="d-flex justify-content-arround align-content-start">
        <Image
          priority
          src={cover}
          width={100}
          height={92}
          alt="donation-image"
          className={styles.donationCoverImage}
        />

        <div className="mx-2">
          <Stack direction="vertical" gap={2}>
            <Link
              href={`/program/donasi/${slug}`}
              aria-label="Selengkapnya"
              className={`stretched-link ${styles.donationHeadingName}`}
            >
              {title}
            </Link>

            <DonationIconLabel />
          </Stack>
        </div>
      </div>
    </Card>
  );
}
