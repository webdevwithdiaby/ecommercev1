import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';

import Header from './components/header/header.component';

import HomePage from './pages/home/home.component';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box as="main" maxW="1140px" mx="auto">
        <HomePage />
      </Box>
    </ChakraProvider>
  );
}

export default App;
