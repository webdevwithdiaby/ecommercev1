import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';

import Header from './components/header/header.component';

import HomePage from './pages/home/home.component';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Box as="main" maxW="1140px" mx="auto" py={8} >
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route/>
          </Switch>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
