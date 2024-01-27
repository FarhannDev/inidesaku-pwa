'use client';
import OnboardingItem from './OnboardingItem';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '@/styles/onboarding.css';
import { Pagination } from 'swiper/modules';

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
        modules={[Pagination]}
        className="mySwiper"
      >
        {onboarding.map((onboard, index) => (
          <SwiperSlide key={index}>
            <OnboardingItem {...onboard} />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>

      {/* {onboarding.map((onboard, index) => (
        <OnboardingItem key={index} {...onboard} />
      ))} */}
    </>
  );
}
