import { Link } from "react-router-dom";

function NavigationMenu() {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">My Movie App</h1>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </Link>
          <Link
            to="/favorites"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavigationMenu;
