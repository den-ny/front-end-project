import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import useStyles from '../products/styles';
import axios from "axios"

const Chad = ({ product, addCartItems, deleteIcon }) => {
  const classes = useStyles();
  const [config, setConfig] = useState({});
  const deleteConfig = {
    method: 'delete',
    url: 'http://cat-co.herokuapp.com/api/cart/',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({ "productNumber": product.productNumber })
  };

  const increaseItemConfig = {
    method: 'put',
    url: 'http://cat-co.herokuapp.com/api/cart/',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({
      "productNumber": product.productNumber,
      "quantity": product.quantity + 1,
      "price": product.price
    })
  };

  const decreaseItemConfig = {
    method: 'put',
    url: 'http://cat-co.herokuapp.com/api/cart/',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({
      "productNumber": product.productNumber,
      "quantity": product.quantity - 1,
      "price": product.price
    })
  };

  useEffect(() => {
    const crud = async (config) => {
      await axios(config)
        .catch(error => console.error(error))
    }
    crud(config)
  }, [config])

  return (
    <Card className={classes.root}>
      <CardMedia classname={classes.media} image='' title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant='h5' gutterBottom>
            {product.productName}
          </Typography>
          <Typography variant='h5' >
            ${product.totalPrice}
          </Typography>
        </div>
        <Typography>
          <img src={product.photoSrc} />
        </Typography>
        <Typography variant='h5' color='textSecondary'>
          <IconButton onClick={() => {
            if (product.quantity <= 1)
              setConfig(deleteConfig)
            else
              setConfig(decreaseItemConfig)
          }} color='secondary' aria-label='decrease quantity'>
            <RemoveIcon />
          </IconButton>
          {product.quantity}
          <IconButton onClick={() => {
            setConfig(increaseItemConfig)
          }} color='secondary' aria-label='increase quantity'>
            <AddIcon />
          </IconButton>
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton onClick={() => {
          setConfig(deleteConfig)
        }} color='secondary' aria-label='delete from shopping cart'>
          <DeleteForeverOutlinedIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Chad;