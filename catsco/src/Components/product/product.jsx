import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import useStyles from '../products/styles';
import { Link } from 'react-router-dom';
import Cart from "../../Components/cart/Cart"
import axios from "axios"

const Product = ({ product, addCartItems }) => {
  const classes = useStyles();

  const config = {
    method: 'post',
    url: 'http://cat-co.herokuapp.com/api/cart/',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(product)
  };
  const addToCart = async () => {
    await axios(config)
      .then(res => console.log(JSON.stringify(res.data))) //for dev, remove pls
      .catch(error => console.error(error))
  }

  return (
    <Card className={classes.root}>
      <CardMedia classname={classes.media} image='' title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant='h5' gutterBottom>
            {product.productName}
          </Typography>
          <Typography variant='h5' >
            ${product.price}
          </Typography>
        </div>
        <Typography>
          <img src={product.photoSrc} />
        </Typography>
        <Typography variant='h6' color='textSecondary'>
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton onClick={() => {
          addToCart()
        }} color='secondary' aria-label='add to shopping cart'>
          <AddShoppingCartIcon />
        </IconButton>

      </CardActions>
    </Card>
  )
}

export default Product;