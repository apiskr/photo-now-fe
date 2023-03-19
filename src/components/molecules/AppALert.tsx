import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { AlertColor } from "@mui/material/Alert";

type Props = {
  children?: React.ReactNode;
  isOpen: boolean;
  setIsOpen: () => void;
  severity?: AlertColor;
};

// [Todo] AppAlert 확장할 일 있다면 Snackbar Alert 기존 props 받게 하기
export const AppAlert = ({ children, isOpen, setIsOpen, severity }: Props) => {
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      onClose={() => setIsOpen()}
    >
      <Alert variant="filled" severity={severity} onClose={() => setIsOpen()}>
        {children}
      </Alert>
    </Snackbar>
  );
};
