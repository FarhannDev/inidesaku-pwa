import { Col, Row } from 'react-bootstrap';
import ProgramFeaturedItem from './ProgramFeaturedItem';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '@/styles/custom-swiper-navigation.css';

import { Navigation } from 'swiper/modules';

type ProgramFeaturedListSlideProps = { programs: ProgramFeature[] };

export default function ProgramFeaturedListSlide({
  programs,
}: ProgramFeaturedListSlideProps) {
  return (
    <Row className="justify-content-start g-3 py-4">
      <Col>
        <div>
          <Swiper
            slidesPerView={1.5}
            spaceBetween={10}
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
            className="mySwiper  position-relative "
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
