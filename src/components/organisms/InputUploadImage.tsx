import React from "react";
import { Typography } from "@mui/material";
import { appColor } from "../constants/appColor";
import { Empty, FolderImage } from "../atoms";
import { sizes } from "../constants/sizes";

export const InputUploadImage = () => {
  // [Todo] 잘못된 이미지가 올라온 경우, 이미지 업로드에 실패한 경우
  const [uploadedFile, setUploadedFile] = React.useState<File | null>(null);

  const setValidFile = (fileList: FileList | null): void => {
    if (!fileList || fileList?.length === 0) return;
    if (/image*/.test(fileList[0].type)) setUploadedFile(fileList[0]);
    else throw new Error();
  };

  return (
    <label
      style={{
        outline: !!uploadedFile ? `1px solid black` : `4px dotted ${appColor.border}`,
        borderRadius: !!uploadedFile ? 0 : 20,
        width: sizes.inputUploadImage.outerWidth,
        height: sizes.inputUploadImage.outerHeight,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: !!uploadedFile ? "0px 5px 5px rgba(0, 0, 0, 0.25)" : "",
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
    // [Todo] 이미지 필터, 테마 적용 후 보여주어야 함 -> 스노우 방식
    <>
      <div
        style={{
          width: sizes.inputUploadImage.innerWidth,
          height: sizes.inputUploadImage.innerHeight,
        }}
      >
        <img src={src} alt={file.name} style={{ width: "100%" }} />
      </div>
      <Empty height="2rem" />
      <div style={{ width: "80%", display: "flex", justifyContent: "end" }}>
        <Typography style={{ fontWeight: 800 }}>Hello</Typography>
      </div>
    </>
  );
};
