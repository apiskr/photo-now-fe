import React from "react";
import { PageLayout } from "../../components/templates/PageLayout";
import { TitleLogo, Empty } from "../../components/atoms";
import { Typography } from "@mui/material";

export const Qrcode = () => {
  // [Todo] querystring 따서 요청하기 -> 없으면 bad request나 접근 권한 x로 가이드
  React.useLayoutEffect(() => {}, []);
  // 여기서는 qrcode를 보여줌

  return (
    <PageLayout>
      <PageLayout.Title>
        <TitleLogo />
      </PageLayout.Title>
      <PageLayout.Body>
        <Typography>Qrcode 입니다</Typography>
        <Empty height="2rem" />
      </PageLayout.Body>
      <PageLayout.MainCta>ㄴㄴㄴ</PageLayout.MainCta>
    </PageLayout>
  );
};
