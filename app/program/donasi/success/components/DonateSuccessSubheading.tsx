import React from 'react';
import styles from '../styles/styles.module.css';

type DonateSuccessSubheadingProps = { title: string };

export default function DonateSuccessSubheading({
  title,
}: DonateSuccessSubheadingProps) {
  return <h1 className={styles.donateSuccessSubheading}>{title}</h1>;
}
