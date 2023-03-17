import titleLogo from "../../assets/TitleLogo.png";
import { sizes } from "../constants/sizes";

export const TitleLogo = () => {
  return (
    <img src={titleLogo} style={{ width: "60%", maxWidth: sizes.pageMaxWidth }} alt="titleLogo" />
  );
};
