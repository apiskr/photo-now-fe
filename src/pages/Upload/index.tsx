import React from "react";
import { PageLayout } from "../../components/templates/PageLayout";
import { TitleLogo } from "../../components/atoms";
import { Typography } from "@mui/material";
import { Empty } from "../../components/atoms";
import { MainCtaBtn } from "../../components/molecules/MainCtaBtn";
import { InputUploadImage } from "../../components/organisms/InputUploadImage";
import { useUpload } from "./hook";
import { Loading } from "../../components/molecules/Loading";

export const Upload = () => {
  const { mutation, uploadedFile, setUploadedFile } = useUpload();

  return (
    <PageLayout>
      <PageLayout.Title>
        <TitleLogo />
      </PageLayout.Title>
      <PageLayout.Body>
        <PageLayout.Absolute>{mutation.isLoading && <Loading />}</PageLayout.Absolute>
        <Typography>출력하고 싶은 사진을</Typography>
        <Typography>골라보세요.</Typography>
        <Empty height="2rem" />
        <form>
          <InputUploadImage uploadedFile={uploadedFile} setUploadedFile={setUploadedFile} />
        </form>
      </PageLayout.Body>
      <PageLayout.MainCta>
        <MainCtaBtn
          type="submit"
          onClick={(e) => mutation.mutate({ photoFile: uploadedFile, password: 1234 })}
        >
          업로드 하기
        </MainCtaBtn>
      </PageLayout.MainCta>
    </PageLayout>
  );
};
