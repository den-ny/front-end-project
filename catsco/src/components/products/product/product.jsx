import React from 'react'
import { card, cardMedia, cardContent, cardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';


const Product = ({ product }) => {
  const classes = useStyles();

  return (
    <card className={classes.root}>
      <cardMedia classname={classes.media} image='' title={product.name} />
      <cardContent>
        <div className={classes.cardContent}>
          <Typography variant='h5' gutterBottom>
            {product.name}
          </Typography>
          <Typography variant='h5' >
            {product.price}
          </Typography>
        </div>
        <Typography variant='h2' color='textSecondary'>
          {product.description}
        </Typography>
      </cardContent>
      <cardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label='add to cart'>
          <addShoppingCart />
        </IconButton>
      </cardActions>
    </card>
  )
}

export default Product;