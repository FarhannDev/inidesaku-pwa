import React from 'react';

type PesonaBudayaHeadingProps = {
  title: string;
};

export default function PesonaBudayaHeading({
  title,
}: PesonaBudayaHeadingProps) {
  return <h3 className="pesona-budaya-heading">{title}</h3>;
}
