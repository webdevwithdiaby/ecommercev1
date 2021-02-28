import React from 'react';

import shopbag from '../../assets/shopping-bag.svg';

import {
  Box,
  Flex,
  Button,
  HStack,
  VStack,
  Text,
  Heading,
  Image,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';

import { ColorModeSwitcher } from '../../ColorModeSwitcher';

import { RiMenu2Fill } from 'react-icons/ri';

import { withRouter } from 'react-router-dom';

const Header = ({ history }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex
      minH="8vh"
      align="center"
      boxShadow="md"
      py={3}
      px={2}
      
    >
      <Flex flexBasis="1140px" maxW="1140px" mx="auto" justify="space-between">
        <HStack spacing={2}>
          <Box>
            <Button
              ref={btnRef}
              colorScheme="teal"
              variant="ghost"
              onClick={onOpen}
              display={{ base: 'block', md: 'none' }}
              fontSize={22}
            >
              <RiMenu2Fill />
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay>
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>
                    <Heading
                      as="h1"
                      cursor="pointer"
                      onClick={() => {
                        history.push('/');
                        onClose();
                      }}
                    >
                      Shapshap
                    </Heading>
                  </DrawerHeader>

                  <DrawerBody>
                    <VStack spacing={3}>
                      <Button
                        colorScheme="teal"
                        variant="link"
                        width="100%"
                        borderBottomWidth="1px"
                        py={3}
                        ref={btnRef}
                        onClick={() => {
                          onClose();
                          history.push('/shop');
                        }}
                      >
                        SHOP
                      </Button>
                      <Button
                        colorScheme="teal"
                        variant="link"
                        width="100%"
                        borderBottomWidth="1px"
                        py={3}
                        ref={btnRef}
                        onClick={() => {
                          onClose();
                          history.push('/contact');
                        }}
                      >
                        CONTACT
                      </Button>
                      <Button
                        colorScheme="teal"
                        width="100%"
                        py={3}
                        ref={btnRef}
                        onClick={() => {
                          onClose();
                          history.push('/signin');
                        }}
                      >
                        SIGNIN
                      </Button>
                    </VStack>
                  </DrawerBody>

                  <DrawerFooter>
                    <Text>Footer goes here</Text>
                  </DrawerFooter>
                </DrawerContent>
              </DrawerOverlay>
            </Drawer>
          </Box>
          <Box d="flex" alignItems="center">
            {/*<Image src={logo} cursor="pointer" />*/}
            <Heading as="h1" cursor="pointer" onClick={() => history.push('/')}>
              ShapShap
            </Heading>
          </Box>
        </HStack>
        <HStack spacing={3}>
          <HStack spacing={3} display={{ base: 'none', md: 'block' }}>
            <Button colorScheme="teal" variant="link">
              SHOP
            </Button>
            <Button colorScheme="teal" variant="link">
              CONTACT
            </Button>
            <Button colorScheme="teal" variant="link">
              SIGNIN
            </Button>
          </HStack>
          <ColorModeSwitcher />
          <Flex align="center" justify="center" position="relative">
            <Image boxSize="24px" src={shopbag} />
            <Text
              fontSize={10}
              position="absolute"
              top="70%"
              left="50%"
              transform="translate(-50%,-50%)"
            >
              0
            </Text>
          </Flex>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default withRouter(Header);
