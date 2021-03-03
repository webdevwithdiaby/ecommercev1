import { Box, Image, HStack, Text } from '@chakra-ui/react';
import React from 'react';

const CartItem = ({ item }) => {
  return (
    <HStack spacing={2}>
      <Image src={item.imageUrl} w="60px" />
      <Box>
        <Text mb={2}> {item.name} </Text>
        <Text> {`${item.quantity} x ${item.price}`} </Text>
      </Box>
    </HStack>
  );
};

export default CartItem;
