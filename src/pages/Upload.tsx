import React from "react";
import { PageLayout } from "../components/templates/PageLayout";
import { TitleLogo } from "../components/molecules/TitleLogo";
import { Typography } from "@mui/material";

export const Upload = () => {
  return (
    <PageLayout>
      <PageLayout.Title>
        <TitleLogo />
      </PageLayout.Title>
      <PageLayout.Body>
        <Typography>출력하고 싶은 사진을</Typography>
        <Typography>골라보세요.</Typography>
      </PageLayout.Body>
    </PageLayout>
  );
};

// [Todo] ErrorBoundary 사용해보기
// 다양한 에러에 대해 대비하고 에러 처리의 책임을 따로 빼어 관리해보자
