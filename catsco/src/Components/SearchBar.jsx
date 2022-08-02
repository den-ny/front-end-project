import { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react';
import Results from './Results.jsx'
import Products from "./products/products.jsx";

function SearchBar(bagel) {
  const [searchTerm, setSearchTerm] = useState('')
  const [f, setF] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        `https://cat-co.herokuapp.com/api/products?name=${searchTerm}`
      );
      setF(response.data);
      <Results item={f} />
    };
    getProducts();
  }, [searchTerm]);
  console.log(f)
  // (<Results f={f} qwe={true} />)

  return (
    <div id='search-bar-container'>
      <form>
        <input
          id='search-box'
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}
        />

        <button id='search-button' type='submit'>Search</button>
      </form>
      {/* 
      not working
      <div>
        <Results item={f} />
      </div> */}

    </div>
  )
}

export default SearchBar
