import { Box, Grid, Heading } from '@chakra-ui/react';
import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ collection }) => {
  return (
    <Box w="100%">
      <Heading as="h2" fontSize={26} mb={2}>
        {' '}
        {collection.title}{' '}
      </Heading>
      <Grid gridTemplateColumns="repeat(auto-fit,minmax(250px,1fr))">
        {collection.items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </Grid>
    </Box>
  );
};

export default CollectionPreview;
