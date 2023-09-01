import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App.js";
import { AuthProvider } from "./context/Auth/index";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
