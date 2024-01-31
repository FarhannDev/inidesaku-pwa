import { Col, Row } from 'react-bootstrap';
import ProgramFeaturedItem from './ProgramFeaturedItem';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '@/styles/custom-swiper-navigation.css';

import { Navigation } from 'swiper/modules';

type ProgramFeaturedListProps = { programs: ProgramFeature[] };

export default function ProgramFeaturedList({
  programs,
}: ProgramFeaturedListProps) {
  return (
    <Row className="justify-content-start g-3 ">
      <Col>
        <div>
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
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation]}
            className="mySwiper pt-4 position-relative "
          >
            {programs.map((program) => (
              <SwiperSlide key={program.id}>
                <ProgramFeaturedItem {...program} />
              </SwiperSlide>
            ))}

            <div className="custom-navigation">
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </Swiper>
        </div>
      </Col>
    </Row>
  );
}
