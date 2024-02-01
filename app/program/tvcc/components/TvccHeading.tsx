import React from 'react';
import styles from '../styles/heading.module.css';

type TvccHeadingProps = { title: string };

const TvccHeading = ({ title }: TvccHeadingProps) => {
  return <h1 className={styles.tvccHeading}>{title}</h1>;
};

export default TvccHeading;
