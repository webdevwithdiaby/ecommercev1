import React, { useState } from 'react';

import { googleSignIn, auth } from '../../firebase/firebase.utils';

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

const SigninPage = ({ history }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const onSubmit = async e => {
    e.preventDefault();

    try {
      const { email, password } = credentials;
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }

    //clear fields
    setCredentials({
      email: '',
      password: '',
    });
  };

  const handleChange = e => {
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
          <Heading>Sign in</Heading>
        </Box>
        <Box my={3} textAlign="left">
          <form onSubmit={onSubmit}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="test@test.com"
                required
                name="email"
                value={credentials.email}
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </FormControl>
            <Button width="full" mt={3} type="submit" colorScheme="teal">
              Sign In
            </Button>
            <Box textAlign="center" mt={2}>
              <Text>or</Text>
            </Box>
            <Button
              width="full"
              mt={2}
              colorScheme="teal"
              variant="outline"
              onClick={googleSignIn}
            >
              Sign In with google
            </Button>
            <HStack mt={2} spacing={3}>
              <Text>Don't have an account</Text>
              <Button
                colorScheme="teal"
                variant="link"
                onClick={() => history.push('/signup')}
              >
                SIGN UP
              </Button>
            </HStack>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default SigninPage;
