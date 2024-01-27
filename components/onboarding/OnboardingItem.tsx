'use client';
import { Box, Container, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/onboarding.module.css';

type OnboardingItemProps = {
  title: string;
  description: string;
  images: string;
};

export default function OnboardingItem({
  title,
  description,
  images,
}: OnboardingItemProps) {
  return (
    <>
      <Box maxW="md" overflow="hidden">
        <Container centerContent>
          <Box
            display="flex"
            justifyContent="center"
            alignContent="center"
            w="100%"
            h={248}
          >
            <Image
              src={images}
              width={350}
              height={248}
              alt="onboarding-slide"
              quality={75}
              priority
            />
          </Box>
          <Box marginTop={16} w="100%" h={200}>
            <Text
              fontSize="large"
              fontWeight={500}
              textAlign="center"
              color="#667085"
              lineHeight="26px"
              marginBottom={3}
            >
              {title}
            </Text>
            <Text
              fontSize="medium"
              fontWeight={400}
              textAlign="center"
              color="#8A94A6"
              lineHeight="24px"
              letterSpacing="0.08px"
            >
              {description}
            </Text>
          </Box>

          <Box position="relative" width="100%">
            <VStack spacing={3} align="stretch">
              <Link
                href="/sign"
                aria-label="masuk"
                title="masuk"
                className={styles.onboardingLoginBtn}
              >
                Masuk
              </Link>
              <Link
                href="/signup"
                aria-label="masuk"
                title="masuk"
                className={styles.onboardingRegisterBtn}
              >
                Daftar
              </Link>

              <Link
                href="/"
                aria-label="masuk sebagai tamu"
                title="masuk sebagai tamu"
                className={styles.onboardingGuestBtn}
              >
                Masuk Sebagai Tamu
              </Link>
            </VStack>
          </Box>
        </Container>
      </Box>
    </>
  );
}
