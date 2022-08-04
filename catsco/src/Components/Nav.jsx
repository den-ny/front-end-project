import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Products from "./ProductsCategory.jsx";
import axios from 'axios'

const Nav = ({ usage, setUsage }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [display, setDisplay] = useState(false);

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

  return (
    <div>
      <nav className="navContainer">
        <button onClick={handleClick} id="bed">Furniture</button>
        <button onClick={handleClick} id="fish">Food</button>
        <button onClick={handleClick} id="yarn">Toys</button>
        <button onClick={handleClick} id="shoes">Accessories</button>
        <button onClick={handleClick} id="toilet">Litter</button>

        <Link to="/cart"><button id="cart">Cart</button></Link>

      </nav>
      <div>
        {display ? !usage ? <Products products={filteredProducts} /> : null : null}

      </div>
    </div>
  )
}

export default Nav