import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/login";

export const autheticated = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);

export const unautheticated = createBrowserRouter([
  {
    path: "*",
    element: <LoginPage />,
  },
]);
