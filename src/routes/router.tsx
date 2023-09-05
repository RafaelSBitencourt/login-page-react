import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/login";

export const autheticated = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <HomePage />,
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
