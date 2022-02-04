import { $host, $authHost } from "./";

export const createType = async (name) => {
  const { data } = await $authHost.post(
    `${process.env.REACT_APP_API_URL}/api/type`,
    { name }
  );
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get(
    `${process.env.REACT_APP_API_URL}/api/type`,
    {}
  );
  return data;
};

export const createBrand = async (name) => {
  const { data } = await $authHost.post(
    `${process.env.REACT_APP_API_URL}/api/brand`,
    { name }
  );
  return data;
};

export const fetchBrands = async () => {
  const { data } = await $host.get(
    `${process.env.REACT_APP_API_URL}/api/brand`,
    {}
  );
  return data;
};

export const createDevice = async (device) => {
  const { data } = await $authHost.post(
    `${process.env.REACT_APP_API_URL}/api/device`,
    device
  );
  return data;
};

export const fetchDevices = async (typeId, brandId, page, limit) => {
  const { data } = await $host.get(
    `${process.env.REACT_APP_API_URL}/api/device`,
    { params: { typeId, brandId, page, limit } }
  );
  return data;
};

export const fetchOneDevice = async (id, userId) => {
  const { data } = await $host.get(
    `${process.env.REACT_APP_API_URL}/api/device/${id}`,
    { params: { userId } }
  );
  return data;
};

export const createRate = async (rate, deviceId, userId) => {
  const { data } = await $authHost.post(
    `${process.env.REACT_APP_API_URL}/api/rating`,
    { rate, deviceId, userId }
  );
  return data;
};

export const addToCart = async (deviceId) => {
  const { data } = await $authHost.post(
    `${process.env.REACT_APP_API_URL}/api/basket`,
    { deviceId }
  );
  return data;
};

export const fetchCart = async () => {
  const { data } = await $authHost.get(
    `${process.env.REACT_APP_API_URL}/api/basket`,
    {}
  );
  return data;
};
