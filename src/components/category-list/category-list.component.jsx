import React from 'react';

import Category from '../category/category.component';

import { Grid } from '@chakra-ui/react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCategories } from '../../redux/category/category.selector';

const CategoryList = ({ categories }) => {
  return (
    <Grid
      gap={3}
      gridTemplateColumns="repeat(auto-fit,minmax(320px,1fr))"
      justifyItems="center"
    >
      {categories.map(cat => (
        <Category key={cat.id} category={cat} />
      ))}
    </Grid>
  );
};

const mapStateToProps = () =>
  createStructuredSelector({
    categories: selectCategories,
  });

export default connect(mapStateToProps)(CategoryList);
