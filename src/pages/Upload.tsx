import React from "react";
import { PageLayout } from "../components/templates/PageLayout";
import { TitleLogo } from "../components/molecules/TitleLogo";

export const Upload = () => {
  return (
    <PageLayout>
      <PageLayout.Title>
        <TitleLogo />
      </PageLayout.Title>
    </PageLayout>
  );
};

// [Todo] ErrorBoundary 사용해보기
// 다양한 에러에 대해 대비하고 에러 처리의 책임을 따로 빼어 관리해보자
