import React, { useEffect, useState } from "react";
import axios from "axios";
import Products from './Products';

function Category(props) {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      const response = await axios.get('API')
      setCategory(response.data)
    }
    getCategory()
  }, []);
  

  return (
    <div className="category">
      <h1>{category.category}</h1>
      {loading ? <p>Loading...</p> : <Products products={products} />}
    </div>
  );
}