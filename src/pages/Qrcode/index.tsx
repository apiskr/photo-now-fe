import React from "react";
import { PageLayout } from "../../components/templates/PageLayout";
import { TitleLogo, Empty } from "../../components/atoms";
import { Typography } from "@mui/material";
import { MainCtaBtn } from "../../components/molecules/MainCtaBtn";
import { InputUploadImage } from "../../components/organisms/InputUploadImage";

export const Qrcode = () => {
  // [Todo] querystring 따서 요청하기 -> 없으면 bad request나 접근 권한 x로 가이드
  return (
    <PageLayout>
      <PageLayout.Title>
        <TitleLogo />
      </PageLayout.Title>
      <PageLayout.Body>
        <Typography>출력하고 싶은 사진을</Typography>
        <Typography>골라보세요.</Typography>
        <Empty height="2rem" />
        <InputUploadImage />
      </PageLayout.Body>
      <PageLayout.MainCta>
        <MainCtaBtn onClick={() => {}}>업로드 하기</MainCtaBtn>
      </PageLayout.MainCta>
    </PageLayout>
  );
};
