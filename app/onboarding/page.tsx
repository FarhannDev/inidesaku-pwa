'use client';

import OnboardingList from '@/components/onboarding/OnboardingList';
import { onboardingSlide } from '@/utils/data/localDataOnboarding';

export default function Onboarding() {
  return <OnboardingList onboarding={onboardingSlide} />;
}
