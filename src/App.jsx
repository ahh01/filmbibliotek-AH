import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritePage from "./pages/FavoritePage";
import NavigationMenu from "./components/NavigationMenu";

function App() {
  return (
  
      <div>
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="favorites" element={<FavoritePage />} />
          
        </Routes>
      </div>
  
  );
}

export default App;


