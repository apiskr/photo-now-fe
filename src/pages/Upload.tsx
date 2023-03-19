import React from "react";
import { PageLayout } from "../components/templates/PageLayout";
import { TitleLogo } from "../components/atoms";
import { Typography } from "@mui/material";
import { Empty } from "../components/atoms";
import { MainCtaBtn } from "../components/molecules/MainCtaBtn";
import { InputUploadImage } from "../components/organisms/InputUploadImage";

export const Upload = () => {
  return (
    <PageLayout>
      <PageLayout.Title>
        <TitleLogo />
      </PageLayout.Title>
      <PageLayout.Body>
        {/* [Todo] notistack을 통해서 alert 쌓을 수 있음 */}

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
