import React from "react";
import { Button } from "@mui/material";
import { MainModels } from "../components/molecules/MainModels";
import { TitleTypography } from "../components/molecules/TitleTypography";

export const Main = () => {
  return (
    <>
      <MainModels />
      <TitleTypography />
      <Button variant="contained">시작하기</Button>
    </>
  );
};
