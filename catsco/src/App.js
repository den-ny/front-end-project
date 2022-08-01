import { Link, Routes, Route } from "react-router-dom";
import React from "react";
import Categories from "./Components/Category";
import './App.css';
import Products from './Components/Product/Products';

const App = () => {
  return (
    <div className="App">
      <div>
        <Products />

      </div>
      <main>
        <Categories />
        {/* <Routes>
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/food" element={<Food />} />
          <Route path="/toys" element={<Toys />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/litter" element={<Litter />} />
      </Routes> */}
      </main>
    </div>
  )
}

export default App;