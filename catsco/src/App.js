import { Link, Routes, Route } from "react-router-dom";
import React from "react";
import Categories from "./Categories";
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
      <h1>Catsco!</h1>
      </div>
      <main>
        <Categories />
      <Routes>
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/food" element={<Food />} />
          <Route path="/toys" element={<Toys />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/litter" element={<Litter />} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
