import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import "macro-css";
import ItemsProvider from "./contexts/itemsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <ItemsProvider>
      <App />
    </ItemsProvider>
  </Router>
);
