import {
  Box,
  Image,
  Flex,
  Button,
  HStack,
  Badge,
  Text,
} from '@chakra-ui/react';
import React from 'react';

import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addToCart }) => {
  return (
    <Box maxW="320px" borderWidth="1px" p={5}>
      <Flex direction="column" justify="space-between" h="100%">
        <Image src={item.imageUrl} h="300px" mb={2} />
        <HStack my={2}>
          <Badge> {item.name} </Badge>
          <Text> {`$${item.price}`} </Text>
        </HStack>
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={() => addToCart(item)}
        >
          Add To cart
        </Button>
      </Flex>
    </Box>
  );
};

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
