import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './ProductInfo.jsx';

const Raul = ({ products }) => {
  const [cartItems, setCartItems] = React.useState(JSON.parse(localStorage.getItem('cart')) || [])
  const addCartItems = ({ id, quantity = 1 }) => {
    const cart = (JSON.parse(localStorage.getItem('cart')) || [])
    let foundItem = false
    cart.forEach(item => {
      if (item.id === id) {
        item.quantity += quantity
        foundItem = true
      }
    })
    if (!foundItem)
      cart.push({ id, quantity })
    localStorage.setItem('cart', JSON.stringify(cart))
    setCartItems(cart)
  }
  return (

    <main>
      <Grid container justify='center' spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} addCartItems={addCartItems} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Raul;