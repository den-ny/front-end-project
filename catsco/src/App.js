import { Link, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <div>
      <h1>Catsco!</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/nav">Categories</Link>
      </nav>
      <main>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nav" element={<Nav />} /> 
      </Routes>
      </main>
    </div>
  );
}

export default App;
