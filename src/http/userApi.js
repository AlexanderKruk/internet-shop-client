import { $host, $authHost } from "./";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
  const { data } = await $host.post(
    `${process.env.REACT_APP_API_URL}/api/user/registration`,
    { email, password, role: "ADMIN" }
  );
  localStorage.setItem("token", data);
  return jwt_decode(data);
};

export const login = async (email, password) => {
  const { data } = await $host.post(
    `${process.env.REACT_APP_API_URL}/api/user/login`,
    { email, password, role: "ADMIN" }
  );
  localStorage.setItem("token", data);
  return jwt_decode(data);
};

export const checkToken = async () => {
  const { data } = await $authHost.get(
    `${process.env.REACT_APP_API_URL}/api/user/auth`,
    {}
  );
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};
