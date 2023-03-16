import React from "react";
import styled from "@emotion/styled";
import { getChildrenByName } from "../../lib/utils/getChildrenByName";
import { isEmpty } from "../../lib/utils/isEmpty";
import { Empty } from "../atoms";
import { sizes } from "../constants/sizes";

const Layout = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: sizes.pageMaxWidth,
  margin: "auto",
});

const Btn = styled("div")({
  position: "absolute",
  bottom: 50,
});

type Props = { children: React.ReactNode };

const Main = ({ children }: Props) => {
  const [TitleComponenets] = getChildrenByName(children, "Title");
  const arrayBodyComponenets = getChildrenByName(children, "Body");
  const arrayMainCtaComponenets = getChildrenByName(children, "MainCta");

  return (
    <Layout>
      <Empty height="1rem" />
      {!!TitleComponenets && TitleComponenets}
      <Empty height="1rem" />
      {isEmpty(arrayBodyComponenets) || arrayBodyComponenets}
      <Empty height="2rem" />
      {isEmpty(arrayMainCtaComponenets) || <Btn>{arrayMainCtaComponenets}</Btn>}
    </Layout>
  );
};

const Title = ({ children }: Props) => {
  return <>{children}</>;
};

const Body = ({ children }: Props) => {
  return <>{children}</>;
};

const MainCta = ({ children }: Props) => {
  return <>{children}</>;
};

export const PageLayout = Object.assign(Main, { Title, Body, MainCta });
