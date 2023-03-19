import { http } from "./core";

const ROUTE = "qrcode";

// [Temp]
export const getQrcode = async () => {
  return await http.get(`/${ROUTE}`);
};

export const createQrcode = async () => {
  return await http.post(`/${ROUTE}`);
};
