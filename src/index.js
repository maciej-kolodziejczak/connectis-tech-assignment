import "normalize.css";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { DataProvider } from "./state/data";
import { ErrorBoundary } from "./components/ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <DataProvider>
        <App />
      </DataProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
