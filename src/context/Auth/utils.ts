import { Api } from "../../services/api";
import { IUser } from "./types";

export function setUserLocalStorage(user: IUser) {
  localStorage.setItem("auht", JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem("auth") || null;
  return json ? JSON.parse(json) : "";
}

export async function LoginRequest(email: string, password: string) {
  try {
    const request = await Api.post("login", { email, password });
    return request.data;
  } catch (error) {
    return error;
  }
}
