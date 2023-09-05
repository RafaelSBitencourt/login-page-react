import { useAuth } from "../../context/Auth/useAuth";
import { RouterProvider } from "react-router-dom";
import { unautheticated } from "../../routes/router";

export function ProtectedLayout({ children }: { children: JSX.Element }) {
  const auth = useAuth();

  return auth.token ? children : <RouterProvider router={unautheticated} />;
}
