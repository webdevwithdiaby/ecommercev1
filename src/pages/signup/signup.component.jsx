import React from 'react';

import {withRouter} from 'react-router-dom';

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

const SignUpPage = ({history}) => {
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
          <form>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="John Smith" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="test@test.com" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="*******" />
            </FormControl>
            <Button width="full" mt={3} type="submit" colorScheme="teal">
              Sign Up
            </Button>
            <HStack mt={2} spacing={3}>
              <Text>already have an account</Text>
              <Button colorScheme="teal" variant="link" onClick={() => history.push('/signin') } >
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
