import { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react';
import Results from './Results.jsx'
import Products from "./products/products.jsx";
import { useForm } from "react-hook-form";

function SearchBar(bagel) {
  const [result, setResult] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [f, setF] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        `https://cat-co.herokuapp.com/api/products?name=${searchTerm}`
      );
      // setF(response.data);
      console.log(response.data)
    };
    getProducts();
  }, []);
  console.log(f)
  // (<Results f={f} qwe={true} />)
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    const input = (e.target[0].value);
    // console.log("dsadsa")
    setSearchTerm(input)

    // console.log(typeof input)
  }
  // const onError = (errors, e) => console.log(errors, e.target);
  // console.log(f)
  return (

    <div id='search-bar-container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <form onSubmit={handleClick}> */}
        <input
          id='search-box'
          // onChange={(e) => {
          //   setSearchTerm(e.target.value)
          // }}
          placeholder="search for product" />

        <button id='search-button' type='submit'>Search</button>
      </form>


      <div className="hidden">
        {/* <Results f={f} qwe={true} /> */}

        {/* (<Results f={f} qwe={true} />) */}
        <Products products={f} />
        {/* (<Results f={f} qwe={true} />) */}
      </div>

    </div>
  )
}

export default SearchBar
