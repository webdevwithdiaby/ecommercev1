import React from 'react';

import {
  Box,
  Flex,
  Button,
  HStack,
  Text,
  Heading,
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

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex minH="8vh" align="center" boxShadow="md" py={3} px={2}>
      <Flex flexBasis="1140px" maxW="1140px" mx="auto" justify="space-between">
        <HStack spacing={5}>
          <Box>
            <Button
              ref={btnRef}
              colorScheme="teal"
              variant="ghost"
              onClick={onOpen}
              display={{ base: 'block', md: 'none' }}
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
                  <DrawerHeader>ShapShap</DrawerHeader>

                  <DrawerBody>
                    <Text>Body goes here</Text>
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
            <Heading as="h1">ShapShap</Heading>
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
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;
