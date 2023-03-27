import { Route, Routes as ReactRoutes } from "react-router-dom";

// Pages
import { Main } from "../pages/Main";
import { Upload } from "../pages/Upload";
import { Qrcode } from "../pages/Qrcode";

export const AppRoutes = () => {
  return (
    <>
      <ReactRoutes>
        <Route path="/" element={<Main />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/qrcode" element={<Qrcode />} />
      </ReactRoutes>
    </>
  );
};
