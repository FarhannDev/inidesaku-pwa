import React from 'react';
import { Card, Stack } from 'react-bootstrap';
import styles from '../styles/tvcc.module.css';
import Image from 'next/image';
import Link from 'next/link';

type TvccItemResultProps = Tvcc;

const TvccItemResult = ({
  slug,
  title,
  thumbnail,
  status,
}: TvccItemResultProps) => {
  return (
    <Card body className={styles.tvccCardResult}>
      <div className="d-flex justify-content-arround g-5">
        <Image
          src={thumbnail}
          width={100}
          height={100}
          alt={title}
          className={styles.tvccResultImage}
        />

        <Stack direction="vertical" gap={2}>
          <Link
            href={`/program/tvcc/${slug}`}
            className={`stretched-link ${styles.tvccResultHeading}`}
            aria-label="selengkapnya"
          >
            {title}
          </Link>

          <h3 className={styles.tvccResultHeadingLive}>{status}</h3>
        </Stack>
      </div>
    </Card>
  );
};

export default TvccItemResult;
