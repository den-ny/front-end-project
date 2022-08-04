import { useState, useEffect } from 'react'
import axios from "axios";
import Products from "./ProductsCategory.jsx";
import { useForm } from "react-hook-form";
import Nav from '../Components/Nav.jsx'

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('_')
  const [filter, setFilter] = useState([]);
  const [usage, setUsage] = useState(false)

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        `https://cat-co.herokuapp.com/api/products?name=${searchTerm}`
      );
      if (typeof response.data !== 'string')
        setFilter(response.data)
      else
        setFilter([])
    };
    getProducts();
  }, [searchTerm]);


  const { handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    const input = (e.target[0].value);

    //edge case
    if (input.length !== 0) {
      setSearchTerm(input)
      setUsage(true)
    }
    else
      setUsage(false)
  }

  return (
    <div id='search-bar-container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          id='search-box'
          placeholder="search for product" />
        <button id='search-button' type='submit'>Search</button>
      </form>

      <Nav usage={usage} setUsage={setUsage} />
      {usage ? <Products products={filter} /> : null}
    </div>
  )
}

export default SearchBar
