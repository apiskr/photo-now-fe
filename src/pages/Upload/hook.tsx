import React from "react";
import { useMutation } from "@tanstack/react-query";
import { CreateQrcodeProps, qrcode } from "../../apis/qrcode";
import { useNavigate } from "react-router-dom";

export const useUpload = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: ({ photoFile, password }: CreateQrcodeProps) =>
      qrcode.createQrcode({ photoFile, password }),
    onSuccess: (res) => {
      console.log("usemutation", res.data);
      // [Todo] res.data를 저장해야 겠네 -> 조타이 사용하기
      navigate("/qrcode");
    },
  });

  // [Todo] 파일 상태 관리하기
  const [uploadedFile, setUploadedFile] = React.useState<File | null>(null);

  React.useEffect(() => {}, [mutation.isLoading]);

  return { mutation, uploadedFile, setUploadedFile };
};
