import axios from "axios";

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

const $host = axios.create({
  baseUrl: process.env.REACT_APP_API_URL,
});

const $authHost = axios.create({ baseUrl: process.env.REACT_APP_API_URL });

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
