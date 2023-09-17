import { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import {
  LoginRequest,
  getUserLocalStorage,
  setUserLocalStorage,
} from "./utils";

export const AuthContext = createContext<IContext>({} as IContext);

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const checkUser = getUserLocalStorage();
    if (checkUser) {
      setUser(checkUser);
    }
  }, []);

  async function authenticate(email: string, password: string) {
    const response = await LoginRequest(email, password)
      .then((res) => {
        setUser({ token: res.token, email });
        setUserLocalStorage({ token: res.token, email });
        return "Success";
      })
      .catch((e) => {
        throw e;
      });
    return response;
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
