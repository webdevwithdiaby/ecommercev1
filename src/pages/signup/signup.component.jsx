import React, { useState } from 'react';

import { withRouter } from 'react-router-dom';

import { auth, createUserProfileDoc } from '../../firebase/firebase.utils';

import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  HStack,
} from '@chakra-ui/react';

const SignUpPage = ({ history }) => {
  const [credentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
  });

  const onSubmit = async e => {
    e.preventDefault();

    try {
      const { displayName, email, password } = credentials;
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfileDoc(user, { displayName });
    } catch (error) {
      console.log('Error occured', error);
    }

    //clear fields
    setCredentials({
      displayName: '',
      email: '',
      password: '',
    });
  };

  const onChange = e => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Box textAlign="center">
          <Heading>Sign up</Heading>
        </Box>
        <Box my={3} textAlign="left">
          <form onSubmit={onSubmit}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="John Smith"
                required
                name="displayName"
                value={credentials.displayName}
                onChange={onChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="test@test.com"
                required
                name="email"
                value={credentials.email}
                onChange={onChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="*******"
                required
                name="password"
                value={credentials.password}
                onChange={onChange}
              />
            </FormControl>
            <Button width="full" mt={3} type="submit" colorScheme="teal">
              Sign Up
            </Button>
            <HStack mt={2} spacing={3}>
              <Text>already have an account</Text>
              <Button
                colorScheme="teal"
                variant="link"
                onClick={() => history.push('/signin')}
              >
                SIGN IN
              </Button>
            </HStack>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default withRouter(SignUpPage);
