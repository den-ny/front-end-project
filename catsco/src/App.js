import { Routes, Route } from "react-router-dom";
import Cart from "./Screens/Cart.jsx";
import Home from "./Screens/Home.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;