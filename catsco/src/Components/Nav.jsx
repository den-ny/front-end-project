import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Products from "../Components/products/products.jsx";
import axios from 'axios'
import SearchBar from "../Components/SearchBar.jsx"

const Nav = ({ usage, setUsage }) => {
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
    setUsage(false)
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
      <nav className="navContainer">
        <button onClick={handleClick} id="bed">Furniture</button>
        <button onClick={handleClick} id="fish">Food</button>
        <button onClick={handleClick} id="yarn">Toys</button>
        <button onClick={handleClick} id="shoes">Accessories</button>
        <button onClick={handleClick} id="toilet">Litter</button>
        {/* <Link to="/cart"><button onClick={handleCartClick} id="cart">CartPage</button></Link> */}
        <Link to="/cart"><button id="cart">CartPage</button></Link>
        {/* <button>Go to Cart</button> */}
        {/* </Link> */}
      </nav>
      <div>
        {display ? !usage ? <Products products={filteredProducts} /> : null : null}
        {/* {display ? <Products products={cartPage} /> : null} */}
        {/* <SearchBar set={false} /> */}
      </div>
    </div>
  )
}

export default Nav