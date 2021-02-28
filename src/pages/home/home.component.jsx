import React from 'react';

import { Box } from '@chakra-ui/react';

import Hero from '../../components/hero/hero.component';

import CategoryList from '../../components/category-list/category-list.component';

const HomePage = () => {
  return (
    <Box>
      <Hero />
      <CategoryList />
    </Box>
  );
};

export default HomePage;
