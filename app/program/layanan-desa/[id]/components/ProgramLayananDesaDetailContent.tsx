import React from 'react';
import { Stack } from 'react-bootstrap';

type Props = {
  title: string;
  content: string;
};

export default function ProgramLayananDesaDetailContent({
  title,
  content,
}: Props) {
  return (
    <Stack direction="vertical" gap={4}>
      <div className="detail-program-layanan-desa-item__content">
        <h4 className="detail-program-layanan-desa-item__content-heading">
          {title}
        </h4>
        <div className="detail-program-layanan-desa-item__content-description ">
          {content}
        </div>
      </div>
    </Stack>
  );
}
