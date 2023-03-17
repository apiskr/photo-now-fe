/**
 * Plz, manage the image file here.
 * 이렇게 사용하는게 좋을까
 */
import mainModels from "../../assets/MainModels.png";
import titleLogo from "../../assets/TitleLogo.png";
import folderImage from "../../assets/FOLDER.png";
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

export const FolderImage = () => {
  return <img src={folderImage} style={{ width: "30%" }} alt="folderImage" />;
};
