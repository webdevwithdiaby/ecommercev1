import React, { useEffect } from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';

import Header from './components/header/header.component';

import HomePage from './pages/home/home.component';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { auth, createUserProfileDoc } from './firebase/firebase.utils';

import ShopPage from './pages/shop/shop.component';
import SigninPage from './pages/signin/sigin.component';
import ContactPage from './pages/contact/contact.component';
import SignUpPage from './pages/signup/signup.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import { setCurrentUser } from './redux/user/user.actions';

function App({ currentUser, setCurrentUser }) {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        //User is signed in
        const userRef = await createUserProfileDoc(user);

        //set currentUser
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: userRef.id,
            ...snapshot.data(),
          });
        });
      } else {
        // User is signed out
        setCurrentUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [setCurrentUser]);
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Box as="main" maxW="1140px" mx="auto" p={8} px={3}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route
              path="/signup"
              render={props =>
                currentUser != null ? (
                  <Redirect to="/" />
                ) : (
                  <SignUpPage {...props} />
                )
              }
            />
            <Route
              path="/signin"
              render={props =>
                currentUser != null ? (
                  <Redirect to="/" />
                ) : (
                  <SigninPage {...props} />
                )
              }
            />
            <Route path="/contact" component={ContactPage} />
          </Switch>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
