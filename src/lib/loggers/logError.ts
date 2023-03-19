import React from "react";
export const logError = (error: Error, errorInfo: React.ErrorInfo) => {
  console.log(`Error : ${error} \n info : ${errorInfo}`);
};
