import mainModels from "../../assets/MainModels.png";
import { breakPoints } from "../constants/breakPoints";

export const MainModels = () => {
  return (
    <img src={mainModels} style={{ width: "90%", maxWidth: breakPoints.sm }} alt="mainModels" />
  );
};
