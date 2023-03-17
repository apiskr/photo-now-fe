import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { appColor } from "../constants/appColor";
import { sizes } from "../constants/sizes";

export const InputUploadImage = () => {
  // [Todo] 잘못된 이미지가 올라온 경우, 이미지 업로드에 실패한 경우
  // 업로드를 받고, 업로드를 받은게 있다면 그 UI를 보여줌
  // 업로드 중이라면 로딩중
  // [Error] PC 버전에서 Input Area가 버튼과 겹침
  return (
    <label
      style={{
        outline: `4px dotted ${appColor.grey2}`,
        borderRadius: 20,
        width: "60%",
        maxWidth: sizes.pageMaxWidth,
        paddingBottom: "90%",
      }}
    >
      {/* 이미지 로고 */}
      <CtaUploadFromGallery>
        <Typography variant="body2">이미지를 업로드해주세요.</Typography>
      </CtaUploadFromGallery>
      <input type="file" hidden />
    </label>
  );
};

const CtaUploadFromGallery = styled("div")({
  width: "100%",
  height: "100%",
});
