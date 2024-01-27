import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  ...extendTheme,
  fonts: {
    body: "'Open Sans', sans-serif",
    heading: "'Poppins', sans-serif",
  },
});
