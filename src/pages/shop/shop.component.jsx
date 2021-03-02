import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { selectShopCollections } from '../../redux/shop/shop.selectors';

import { VStack } from '@chakra-ui/react';

const ShopPage = ({ collections }) => {
  return (
    <VStack spacing={4}>
      {collections.map(col => (
        <CollectionPreview key={col.id} collection={col} />
      ))}
    </VStack>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(ShopPage);
