import axios, { AxiosInstance } from "axios";

export const Api: AxiosInstance = axios.create({
  baseURL: "https://reqres.in/api/",
});
