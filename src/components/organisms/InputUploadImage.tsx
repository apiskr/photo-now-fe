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
    // [Todo] 업로드에 따라 라벨 스타일도 변경 필요
    <label
      style={{
        outline: !!uploadedFile ? `1px solid black` : `4px dotted ${appColor.border}`,
        borderRadius: !!uploadedFile ? 0 : 20,
        width: 200,
        height: 300,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: !!uploadedFile ? "0px 10px 5px rgba(0, 0, 0, 0.25)" : "",
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
    // [Todo] 이미지 필터, 테마 적용 후 보여주어야 함
    <>
      <div style={{ width: 180 }}>
        <img src={src} alt={file.name} style={{ width: "100%" }} />
      </div>
      <Empty height="2rem" />
      <div style={{ width: "80%", display: "flex", justifyContent: "end" }}>
        {/* [Todo] 파일 이름 ellipse 하기 */}
        {/* <Typography>{file.name}</Typography> */}
        <Typography style={{ fontWeight: 800 }}>Hello</Typography>
      </div>
    </>
  );
};
