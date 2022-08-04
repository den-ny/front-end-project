import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios"
import { Grid } from '@material-ui/core';
import Chad from '../Components/cart/styles';
import { Link } from 'react-router-dom';

export default function Cart() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        "https://cat-co.herokuapp.com/api/cart"
      );
      setProducts(response.data);
      let cartTotal = 0
      response.data.forEach((item) => {
        cartTotal += item.totalPrice
      })
      setTotal(cartTotal)
    };
    getProducts();
  }, []);

  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const addCartItems = ({ _id, price }) => {
    const cart = (JSON.parse(localStorage.getItem('cart')) || []);
    let quantity = 1
    console.log(cart)
    // const cart = products
    let foundItem = false;
    cart.forEach(item => {
      if (item._id === _id) {
        item.quantity += quantity;
        foundItem = true;
      }
    }
    );
    if (!foundItem) {
      cart.push({ _id, quantity, price });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    setCartItems(cart);
  }

  return (
    <main>
      <Link to="/"><button id="home">Home</button></Link>
      <Grid container justify='center' spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Chad product={product} addCartItems={addCartItems} />
          </Grid>
        ))}
      </Grid>
      <h1>
        Cart Total: ${total}
      </h1>

    </main>
  )
}