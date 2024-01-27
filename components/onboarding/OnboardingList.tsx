'use client';
import OnboardingItem from './OnboardingItem';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '@/styles/onboarding.css';
import { Pagination, Autoplay } from 'swiper/modules';

type OnboardingListProps = { onboarding: OnboardingType[] };

export default function OnboardingList({ onboarding }: OnboardingListProps) {
  return (
    <>
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
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper "
      >
        {onboarding.map((onboard, index) => (
          <SwiperSlide key={index}>
            <OnboardingItem {...onboard} />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
      {/* 
      {onboarding.slice(0, 1).map((onboard, index) => (
        <OnboardingItem key={index} {...onboard} />
      ))} */}
    </>
  );
}
