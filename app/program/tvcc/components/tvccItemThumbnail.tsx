'use client';
import React from 'react';
import { Card, Stack } from 'react-bootstrap';
import styles from '../styles/tvcc.module.css';
import Link from 'next/link';

type TvccItemThumbnailProps = Tvcc;

const TvccItemThumbnail = ({
  slug,
  title,
  status,
  thumbnail,
}: TvccItemThumbnailProps) => {
  return (
    <Card className={styles.tvccCardItem}>
      <Card.Img
        className={styles.tvccCardItemImage}
        variant="top"
        src={thumbnail}
      />
      <Card.Body>
        <Stack direction="vertical" gap={2}>
          <Link
            href={`/program/tvcc/${slug}`}
            className={`stretched-link ${styles.tvccThumbnailHeading}`}
            aria-label="selengkapnya"
          >
            {title}
          </Link>
          <h5 className={styles.tvccThumbnailSubheading}>Terpopuler</h5>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default TvccItemThumbnail;
