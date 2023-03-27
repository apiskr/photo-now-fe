import { http } from "./core";

const ROUTE = "qrcode";

// [Temp]
export const getQrcode = async () => {
  return await http.get(`/${ROUTE}`);
};

export const createQrcode = async (uploadFile: File) => {
  const formData = new FormData();
  formData.append("files", uploadFile);
  return await http.post(`/${ROUTE}`, {}, { headers: { "Content-Type": "multipart/form-data" } });
};
