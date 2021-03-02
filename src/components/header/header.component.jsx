import React from 'react';

import { HiOutlineShoppingBag } from 'react-icons/hi';

import {
  Box,
  Flex,
  Button,
  HStack,
  VStack,
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
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  /*MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,*/
} from '@chakra-ui/react';

import { ColorModeSwitcher } from '../../ColorModeSwitcher';

import { RiMenu2Fill } from 'react-icons/ri';

import { FaSignOutAlt } from 'react-icons/fa';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import {
  selectCartItems,
  selectCartItemsCount,
} from '../../redux/cart/cart.selectors';

import { auth } from '../../firebase/firebase.utils';

const Header = ({ history, currentUser, cartItems, cartItemsCount }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex minH="8vh" align="center" boxShadow="md" py={3} px={2}>
      <Flex flexBasis="1140px" maxW="1140px" mx="auto" justify="space-between">
        <HStack spacing={2}>
          <Box>
            <Button
              colorScheme="teal"
              variant="ghost"
              ref={btnRef}
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
                      {currentUser === null ? (
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
                      ) : (
                        <IconButton
                          colorScheme="teal"
                          icon={
                            <FaSignOutAlt
                              onClick={() => {
                                auth.signOut();
                                onClose();
                              }}
                            />
                          }
                        />
                      )}
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
            <Button
              colorScheme="teal"
              variant="link"
              onClick={() => history.push('/shop')}
            >
              SHOP
            </Button>
            <Button
              colorScheme="teal"
              variant="link"
              onClick={() => history.push('/contact')}
            >
              CONTACT
            </Button>
            <Button
              colorScheme="teal"
              variant="link"
              onClick={() => history.push('/signin')}
            >
              SIGNIN
            </Button>
          </HStack>
          <ColorModeSwitcher />
          <Flex align="center" justify="center" position="relative">
            <Menu>
              <MenuButton
                as={IconButton}
                colorScheme="teal"
                variant="ghost"
                fontSize="38px"
                icon={<HiOutlineShoppingBag />}
              ></MenuButton>
              <MenuList>
                {cartItems.map(item => (
                  <MenuItem key={item.id}>
                    {' '}
                    {`${item.name} x ${item.quantity}`}{' '}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            {/*<Image boxSize="24px" src={shopbag} />*/}
            <Text
              fontSize={10}
              position="absolute"
              top="65%"
              left="50%"
              transform="translate(-50%,-50%)"
            >
              {cartItemsCount}
            </Text>
          </Flex>
        </HStack>
      </Flex>
    </Flex>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItems: selectCartItems,
  cartItemsCount: selectCartItemsCount,
});

export default withRouter(connect(mapStateToProps)(Header));
