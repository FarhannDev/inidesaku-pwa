'use client';

import Image from 'next/image';
import React from 'react';
import { Figure } from 'react-bootstrap';
import styles from '../styles/tvcc.module.css';
import Link from 'next/link';

type TvccItemProps = Tvcc;

const TvccItem = ({ slug, title, thumbnail, status }: TvccItemProps) => {
  return (
    <Figure className="position-relative">
      <Image
        src={thumbnail}
        width={300}
        height={216}
        alt={title}
        priority
        className={styles.tvccFigureImage}
      />
      <Figure.Caption className={styles.tvccFigureFigcaption}>
        <button type="button" className={styles.tvccFigureButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="10"
            viewBox="0 0 9 10"
            fill="none"
          >
            <circle cx="4.5" cy="5" r="4.5" fill="#FF452C" />
          </svg>
          Sedang Tayang
        </button>
        <Link
          href={`/program/tvcc/${slug}`}
          className={`stretched-link ${styles.tvccFigureHeading}`}
          aria-label="selengkapnya"
        >
          {title}
        </Link>
        <h5 className={styles.tvccFigureSubheading}>Terpopuler</h5>
      </Figure.Caption>
    </Figure>
  );
};

export default TvccItem;
