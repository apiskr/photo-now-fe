import React from "react";
import { Button, Typography } from "@mui/material";
import { MainModels } from "../components/molecules/MainModels";
import { TitleTypography } from "../components/molecules/TitleTypography";
import { PageLayout } from "../components/templates/PageLayout";
import { Empty } from "../components/atoms";
import { breakPoints } from "../components/constants/breakPoints";

export const Main = () => {
  return (
    <PageLayout>
      <PageLayout.Body>
        <Empty height={`${breakPoints.lg / window.screen.width}rem`} />
        <MainModels />
        <TitleTypography />
        <Typography>소중한 추억을</Typography>
        <Typography>출력해드려요</Typography>
      </PageLayout.Body>
      <PageLayout.MainCta>
        <Button variant="contained" sx={{ width: 300, height: 50 }}>
          시작하기
        </Button>
      </PageLayout.MainCta>
    </PageLayout>
  );
};
