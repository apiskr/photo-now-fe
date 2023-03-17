import React from "react";
import { Typography } from "@mui/material";
import { appColor } from "../constants/appColor";
import { Empty, FolderImage } from "../atoms";

export const InputUploadImage = () => {
  // [Todo] 잘못된 이미지가 올라온 경우, 이미지 업로드에 실패한 경우
  // 업로드 중이라면 로딩중
  // [Error] CSS 작업 다시
  // 갤러리 접근 허용을 물어봐야 하나?
  const [uploadedFile, setUploadedFile] = React.useState<File | null>(null);

  const setValidFile = (fileList: FileList | null) => {
    if (!fileList || fileList?.length === 0) return;

    setUploadedFile(fileList[0]);
  };

  return (
    <label
      style={{
        outline: `4px dotted ${appColor.border}`,
        borderRadius: 20,
        width: 200,
        height: 300,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {!!uploadedFile ? <AfterUploadUI file={uploadedFile} /> : <PreUploadUI />}
      <input type="file" hidden onChange={(e) => setValidFile(e.target.files)} />
    </label>
  );
};

const PreUploadUI = () => {
  return (
    <>
      <FolderImage />
      <Typography variant="body1" color={appColor.border}>
        Click!
      </Typography>
      <Empty height="1rem" />
    </>
  );
};

const AfterUploadUI = ({ file }: { file: File }) => {
  const src = URL.createObjectURL(file);
  return (
    <>
      <img src={src} alt={file.name} />
    </>
  );
};
