import React from "react";
import { Button, Typography } from "@mui/material";
import { MainModels } from "../components/molecules/MainModels";
import { PageLayout } from "../components/templates/PageLayout";
import { Empty, TitleTypography } from "../components/atoms";
import { breakPoints } from "../components/constants/breakPoints";
import { useNavigate } from "react-router-dom";

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
        <Button
          variant="contained"
          sx={{ width: 300, height: 50 }}
          onClick={() => navigate("/upload")}
        >
          시작하기
        </Button>
      </PageLayout.MainCta>
    </PageLayout>
  );
};
