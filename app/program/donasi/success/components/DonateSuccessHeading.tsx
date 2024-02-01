import React from 'react';
import styles from '../styles/styles.module.css';

type DonateSuccessHeadingProps = { title: string };

export default function DonateSuccessHeading({
  title,
}: DonateSuccessHeadingProps) {
  return <h1 className={styles.donateSuccessHeading}>{title}</h1>;
}
