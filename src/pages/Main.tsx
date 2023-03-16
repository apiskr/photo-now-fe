import React from "react";
import { Button } from "@mui/material";
import { MainModels } from "../components/molecules/MainModels";
import { TitleTypography } from "../components/molecules/TitleTypography";
import { PageLayout } from "../components/templates/PageLayout";

export const Main = () => {
  return (
    <PageLayout>
      <PageLayout.Body>
        <MainModels />
        <TitleTypography />
      </PageLayout.Body>
      <PageLayout.MainCta>
        <Button variant="contained" sx={{ width: 300, height: 50 }}>
          시작하기
        </Button>
      </PageLayout.MainCta>
    </PageLayout>
  );
};
