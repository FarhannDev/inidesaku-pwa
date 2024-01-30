'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, Stack } from 'react-bootstrap';
import { HiOutlineClock, HiOutlineUser, HiOutlineEye } from 'react-icons/hi';
import { postedAt } from '@/utils/common/generateFormattedDate';
import '../styles/pesona-news.css';

type PesonaNewsItemProps = PesonaNewsType;

export default function PesonaNewsItem({
  id,
  slug,
  title,
  cover,
  user,
  totalViews,
  createdAt,
}: PesonaNewsItemProps) {
  return (
    <Card className="pesona-news-item position-relative ">
      <div className="d-flex justify-content-arround align-item-center g-2">
        <Image
          className="pesona-news-item__cover"
          src={cover}
          width={100}
          height={92}
          alt={slug}
          priority
        />

        <Stack direction="vertical" gap={2}>
          <Link
            className="pesona-news-item__title stretched-link"
            href={`/program/pesona-desa/berita/${id}`}
          >
            {title}
          </Link>

          <div className="pesona-news-item__info">
            <div className="pesona-news-item__info-user">
              <HiOutlineUser className="me-1" /> {user}
            </div>
            <div className="pesona-news-item__info-date">
              <HiOutlineClock className="me-1" /> {postedAt(createdAt)}
            </div>
            <div className="pesona-news-item__info-view">
              <HiOutlineEye className="me-1" /> {totalViews}
            </div>
          </div>
        </Stack>
      </div>
    </Card>
  );
}
