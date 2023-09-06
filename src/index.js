import "normalize.css";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { DataProvider } from "./state/data";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);
