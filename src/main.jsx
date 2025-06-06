import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux"; 
import TagManager from "react-gtm-module";
import store from "./store.js";
import "./index.css";
import App from "./App.jsx";



const tagManagerArgs = {
  gtmId: "GTM-WNKMZW5N",
};
TagManager.initialize(tagManagerArgs);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <Router>
      <App />
    </Router>
   </Provider>
  </StrictMode>
);
