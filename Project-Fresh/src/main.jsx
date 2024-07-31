import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// Import for Bootstrap library
import "bootstrap/dist/css/bootstrap.min.css";
// Import Css baseline
import { CssBaseline } from "@mui/material";
// Import Css baseline
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <CssBaseline />
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
