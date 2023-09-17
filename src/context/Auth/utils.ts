import { Api } from "../../services/api";
import { IUser } from "./types";

export function setUserLocalStorage(user: IUser) {
  localStorage.setItem("auth", JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem("auth") || null;
  if (json) {
    return JSON.parse(json);
  }
}

export async function LoginRequest(email: string, password: string) {
  const request = await Api.post("login", { email, password }).catch((e) => {
    throw e;
  });
  return request.data;
}
