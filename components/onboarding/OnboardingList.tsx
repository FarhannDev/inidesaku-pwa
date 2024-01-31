'use client';
import OnboardingItem from './OnboardingItem';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '@/styles/onboarding.css';
import { Pagination, Autoplay } from 'swiper/modules';

type OnboardingListProps = { onboarding: Onboarding[] };

export default function OnboardingList({ onboarding }: OnboardingListProps) {
  return (
    <Swiper
      slidesPerView={1}
      centeredSlides={true}
      spaceBetween={10}
      grabCursor={true}
      pagination={{
        el: '.swiper-pagination',
        clickable: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper py-5 "
    >
      {onboarding.map((onboard, index) => (
        <SwiperSlide key={index}>
          <OnboardingItem {...onboard} />
        </SwiperSlide>
      ))}
      <div className="swiper-pagination "></div>
    </Swiper>
  );
}
