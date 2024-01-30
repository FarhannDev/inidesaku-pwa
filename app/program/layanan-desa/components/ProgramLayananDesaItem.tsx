'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, Stack } from 'react-bootstrap';
import { HiOutlineClock, HiOutlineLocationMarker } from 'react-icons/hi';
import '../styles/layanan-desa.css';

type ProgramLayananDesaItemProps = ProgramLayananDesaType;

export default function ProgramLayananDesaItem({
  id,
  slug,
  title,
  cover,
  date,
  location,
}: ProgramLayananDesaItemProps) {
  return (
    <Card className="program-layanan-desa-item position-relative ">
      <div className="d-flex justify-content-arround align-item-center g-2">
        <Image
          className="program-layanan-desa-item____cover"
          src={cover}
          width={100}
          height={92}
          alt={slug}
          priority
        />

        <Stack direction="vertical" gap={2}>
          <Link
            className="program-layanan-desa-item__title stretched-link"
            href={`/program/layanan-desa/${id}`}
          >
            {title}
          </Link>

          <div className="program-layanan-desa-item__info">
            <div className="program-layanan-desa-item__info-date">
              <HiOutlineClock className="me-1" /> {date}
            </div>
            <div className="program-layanan-desa-item__info-user">
              <HiOutlineLocationMarker className="me-1" /> {location}
            </div>
          </div>
        </Stack>
      </div>
    </Card>
  );
}
