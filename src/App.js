import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';

import Header from './components/header/header.component';

import HomePage from './pages/home/home.component';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ShopPage from './pages/shop/shop.component';
import SigninPage from './pages/signin/sigin.component';
import ContactPage from './pages/contact/contact.component';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Box as="main" maxW="1140px" mx="auto" pt={24} pb={8} px={3}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SigninPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
