import React from 'react'
import { Link } from 'react-router-dom';

function Categories() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/furniture">Furniture</Link>
        </li>
        <li>
          <Link to="/toys">Toys</Link>
        </li>
        <li>
          <Link to="/food">Food</Link>
        </li>
        <li>
          <Link to="/litter">Litter</Link>
        </li>
        <li>
          <Link to="/accessories">Accessories</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Categories;