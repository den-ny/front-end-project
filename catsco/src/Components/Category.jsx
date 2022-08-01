import React, { useEffect, useState } from "react";
import axios from "axios";
import Products from '../Components/products/products.jsx';

function Category(props) {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      const response = await axios.get(' https://cat-co.herokuapp.com/api/products/all')
      setCategory(response.data[0])
    }
    getCategory()
  }, []);


  return (
    <div className="category">
      <h1>{category.category}</h1>
    </div>
  );
}

export default Category