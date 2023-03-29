import { http } from "./core";

const ROUTE = "qrcode";

// [Temp]
export const getQrcode = async () => {
  return await http.get(`/${ROUTE}`);
};

export type CreateQrcodeProps = { photoFile: File | null; password: number };
export const createQrcode = async ({ photoFile, password }: CreateQrcodeProps) => {
  // [Todo] 에러 인터페이스 만들기
  if (!photoFile || String(password).length !== 4) throw new Error();

  const formData = new FormData();
  formData.append("files", photoFile);
  return await http.post(
    `/${ROUTE}`,
    { photo: photoFile, password: password },
    // { photo: formData, password: password },
    { headers: { "Content-Type": "multipart/form-data" } }
  );
};

export const qrcode = { getQrcode, createQrcode };
