import React from "react";
import { useAuth } from "../../context/Auth/useAuth";
import { RouterProvider } from "react-router-dom";
import { unautheticated } from "../../routes/router";

export function ProtectedLayout({ children }: { children: JSX.Element }) {
  const auth = useAuth();

  return auth.email ? children : <RouterProvider router={unautheticated} />;
}
