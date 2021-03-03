import React from 'react';

import { Box, MenuItem,Button } from '@chakra-ui/react';
import CartItem from '../cart-item/cart-item.component';

const CartItemList = ({ cartItems }) => {
  return (
    <Box h="200px" overflowY="scroll">
      {cartItems.map(item => (
        <MenuItem key={item.id}>
          <CartItem item={item} />
        </MenuItem>
      ))}
      <Box textAlign='center' >
        <Button mt={3} colorScheme='teal' variant='outline' > Go to checkout </Button>
      </Box>
    </Box>
  );
};

export default CartItemList;
