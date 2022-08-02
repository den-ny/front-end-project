import { useState, useEffect } from "react";
import axios from "axios";
// import Categories from "./Components/Category";
import "./App.css";
import Products from "./Components/products/products.jsx";
import SearchBar from "./Components/SearchBar.jsx";
import Results from "./Components/Results.jsx"

const App = () => {
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
    if (category === 'cartpage') {
      setDisplay(false)
      setGoToCart(true)
    } else {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filteredProducts);
      setDisplay(true);
    }
  };
  const [results, setResults] = useState(false);

  return (
    <div className="App">
      <header><h1>Catco</h1></header>
      <SearchBar />

      <div></div>
      <nav className="navContainer">
        <button onClick={handleClick} id="bed">Furniture</button>
        <button onClick={handleClick} id="fish">Food</button>
        <button onClick={handleClick} id="yarn">Toys</button>
        <button onClick={handleClick} id="shoes">Accessories</button>
        <button onClick={handleClick} id="toilet">Litter</button>
        <button onClick={handleClick} id="cart">CartPage</button>
      </nav>
      <div>
        {display ? <Products products={filteredProducts} /> : null}

        <Results />

      </div>
    </div>
  );
};

export default App;
