import { Link } from "react-router-dom";
import { fetchMovies } from "../services/API";
import { useEffect } from "react";

function NavigationMenu() {
  
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
