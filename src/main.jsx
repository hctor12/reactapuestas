import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./components/Router";

createRoot(document.getElementById("root")).render(
  <>
    <Router />
  </>
);
