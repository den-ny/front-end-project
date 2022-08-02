import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Products from "../Components/products/products.jsx";
import SearchBar from "../Components/SearchBar.jsx";
import axios from 'axios'

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [display, setDisplay] = useState(false);
  const [goToCart, setGoToCart] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        "https://cat-co.herokuapp.com/api/products/all"
      );
      setProducts(response.data);
      setFilteredProducts(response.data);
    };
    getProducts();
  }, []);

  const handleClick = (e) => {
    const category = e.target.innerText.toLowerCase();
      
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filteredProducts);
      setDisplay(true);
  
  };

  const handleCartClick = (e) => {
    // window.location(/cart.html)
    setGoToCart(true);
  };

  return (
    <div>
      <header><h1>Catco</h1></header>
      <form>
        <SearchBar />
      </form>
      <nav className="navContainer">
        <button onClick={handleClick} id="bed">Furniture</button>
        <button onClick={handleClick} id="fish">Food</button>
        <button onClick={handleClick} id="yarn">Toys</button>
        <button onClick={handleClick} id="shoes">Accessories</button>
        <button onClick={handleClick} id="toilet">Litter</button>
        {/* <button onClick={handleCartClick} id="cart">CartPage</button> */}
        <Link >
          <button>Go to Cart</button>
        </Link>
      </nav>
      <div>
        {display ? <Products products={filteredProducts} /> : null}
        {/* {display ? <Products products={cartPage} /> : null} */}

      </div>
    </div>
  );
}