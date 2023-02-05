import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import AuthProvider from "./context/AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Toaster position="top-right" />
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
