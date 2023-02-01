import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import AuthProvider from "./context/AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Toaster position="top-right" />
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
