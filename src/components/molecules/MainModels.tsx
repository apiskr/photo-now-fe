import mainModels from "../../assets/MainModels.png";
import { sizes } from "../constants/sizes";

export const MainModels = () => {
  return (
    <img src={mainModels} style={{ width: "90%", maxWidth: sizes.pageMaxWidth }} alt="mainModels" />
  );
};
