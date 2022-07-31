import React from 'react';
import {Grid} from '@material-ui/core';

import Products from './product/product';

const products = [
  { id: 1, name: 'furniture', description: 'Bed', price: '$10' },
  { id: 2, name: 'toys', description: 'ball', price: '$5' },

]


const Products = () => {
  return (
  
  <main>
    <grid container justify='center' spacing={4}>
      {products.map((product) => (
        <grid item key={product.id}> xs={12} sm={6} md{4} lg{3}
          <product />
        </grid>
      ))}
    </grid>
    </main>
  )
}

export default Products;