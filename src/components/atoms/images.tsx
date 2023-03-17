/**
 * Plz, manage the image file here.
 */
import mainModels from "../../assets/MainModels.png";
import titleLogo from "../../assets/TitleLogo.png";
import { sizes } from "../constants/sizes";

export { ReactComponent as TitleTypography } from "../../assets/Photo now.svg";

export const MainModels = () => {
  return (
    <img src={mainModels} style={{ width: "90%", maxWidth: sizes.pageMaxWidth }} alt="mainModels" />
  );
};

export const TitleLogo = () => {
  return (
    <img src={titleLogo} style={{ width: "60%", maxWidth: sizes.pageMaxWidth }} alt="titleLogo" />
  );
};
