import React,{useEffect} from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritePage from "./pages/FavoritePage";
import NavigationMenu from "./components/NavigationMenu";
import ReactGA  from "react-ga4";


const trackingId = "G-9K26F699D5";
ReactGA.initialize(trackingId);
function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send("pageview", { page: location.pathname + location.search });
  }, [location]);
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
