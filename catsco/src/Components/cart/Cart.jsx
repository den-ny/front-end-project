import React from 'react';
import Products from '../products/products.jsx';
import useStyles from './styles';
import { useState } from 'react';

export default function Cart() {
  const classes = useStyles();
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  
  const addCartItems = ({ id, quantity = 1 }) => {
    const cart = (JSON.parse(localStorage.getItem('cart')) || []);
    let foundItem = false;
    cart.forEach(item => {
      if (item.id === id) {
        item.quantity += quantity;
        foundItem = true;
      }
    }
    );
    if (!foundItem)
      cart.push({ id, quantity });
    localStorage.setItem('cart', JSON.stringify(cart));
    setCartItems(cart);
  }
  
  return (
    <main>
      {/* <Grid container justify='center' spacing={4}>
        {cartItems.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Products product={product} addCartItems={addCartItems} />
          </Grid>
        ))}
      </Grid> */}
      <h1>We made it!</h1>
    </main>
  )
}