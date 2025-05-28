import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
// import './styles/global.css'; // Import Tailwind's global styles
// Create the root element and render the app
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
  <Router>
    <App />
  </Router>
  </BrowserRouter>
);
