import { Container, Box, Text, Stack } from '@chakra-ui/react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Container maxW="max-content" centerContent bg="#fff" color="black">
        <Box display={{ base: 'none', md: 'block' }} padding="4">
          There are many benefits to a joint design and development system. Not
          only does it bring benefits to the design team, but it also brings
          benefits to engineering teams. It makes sure that our experiences have
          a consistent look and feel, not just in our design specs, but in
          production.
        </Box>

        <Stack spacing={3} marginTop={3} marginBottom={10}>
          <Text fontSize="6xl">(6xl) In love with React & Next</Text>
          <Text fontSize="5xl">(5xl) In love with React & Next</Text>
          <Text fontSize="4xl">(4xl) In love with React & Next</Text>
          <Text fontSize="3xl">(3xl) In love with React & Next</Text>
          <Text fontSize="2xl">(2xl) In love with React & Next</Text>
          <Text fontSize="xl">(xl) In love with React & Next</Text>
          <Text fontSize="lg">(lg) In love with React & Next</Text>
          <Text fontSize="md">(md) In love with React & Next</Text>
          <Text fontSize="sm">(sm) In love with React & Next</Text>
          <Text fontSize="xs">(xs) In love with React & Next</Text>
        </Stack>

        <Link href="/about">Go To About Page</Link>
      </Container>
    </>
  );
}
