'use client';

import React from 'react';
import { Card, Stack } from 'react-bootstrap';
import { HiOutlineClock, HiOutlineLocationMarker } from 'react-icons/hi';
import ProgramLayananDesaDetailContentList from './ProgramLayananDesaDetailContentList';

import '../styles/index.css';

type Props = { result: LayananDesa | undefined };

export default function ProgramLayananDesaDetail({ result }: Props) {
  return (
    <>
      <Card className="detail-program-layanan-desa-item" body>
        <h3 className="detail-program-layanan-desa-item__heading">
          {result?.title}
        </h3>
        <div className="detail-program-layanan-desa-item__info">
          <Stack direction="vertical" gap={3}>
            <span>
              <HiOutlineClock className="me-2" />
              {result?.date}
            </span>
            <span>
              <HiOutlineLocationMarker className="me-2" /> {result?.location}
            </span>
          </Stack>
        </div>

        <ProgramLayananDesaDetailContentList />
      </Card>
    </>
  );
}
