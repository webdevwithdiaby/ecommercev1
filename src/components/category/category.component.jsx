import React from 'react';

import { Box, Flex, Badge, Text, Image, Button } from '@chakra-ui/react';

const Ctegory = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <Box p="5" maxW="320px" borderWidth="1px">
      <Image borderRadius="md" src={imageUrl} />
      <Flex align="baseline" mt={2}>
        <Badge colorScheme="pink">CATEGORY</Badge>
        <Text
          ml={2}
          textTransform="uppercase"
          fontSize="sm"
          fontWeight="bold"
          color="pink.800"
        >
          {title}
        </Text>
      </Flex>
      {/*<Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
        American shoes 2021
  </Text>*/}
      <Box textAlign="center" mt={2}>
        <Button colorScheme="teal" variant="ghost">
          SHOP NOW
        </Button>
      </Box>
    </Box>
  );
};

export default Ctegory;
