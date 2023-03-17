import React from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MainModels } from "../components/molecules/MainModels";
import { PageLayout } from "../components/templates/PageLayout";
import { Empty, TitleTypography } from "../components/atoms";
import { breakPoints } from "../components/constants/breakPoints";
import { MainCtaBtn } from "../components/molecules/MainCtaBtn";

export const Main = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <PageLayout.Body>
        <Empty height={`${breakPoints.lg / window.screen.width}rem`} />
        <MainModels />
        <TitleTypography />
        <Empty height="2rem" />
        <Typography>소중한 추억을</Typography>
        <Typography>직접 출력해보아요</Typography>
      </PageLayout.Body>
      <PageLayout.MainCta>
        <MainCtaBtn onClick={() => navigate("/upload")}>시작하기</MainCtaBtn>
      </PageLayout.MainCta>
    </PageLayout>
  );
};
