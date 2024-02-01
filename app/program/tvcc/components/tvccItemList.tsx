'use client';

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import TvccItem from './tvccItem';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '@/styles/custom-swiper-navigation.css';
import TvccHeading from './TvccHeading';

type TvccItemListProps = {
  items: Tvcc[];
};

const TvccItemList: ({ items }: TvccItemListProps) => React.JSX.Element = ({
  items,
}: TvccItemListProps) => {
  return (
    <Row className="justify-content-start g-3 py-4">
      <Col>
        <TvccHeading title="Rekomendasi TVCC" />
        <Swiper
          slidesPerView={1.5}
          spaceBetween={20}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
          }}
          className="mySwiper  position-relative pt-4 "
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <TvccItem {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Col>
    </Row>
  );
};

export default TvccItemList;
