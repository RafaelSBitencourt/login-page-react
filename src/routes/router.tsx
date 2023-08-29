import React from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "../app/App";
import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <LoginPage /> },
      { path: "/home", element: <HomePage /> },
    ],
  },
]);
