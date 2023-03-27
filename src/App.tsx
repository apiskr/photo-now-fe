import React from "react";
import { AppRoutes } from "./components/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from "./components/providers/MuiThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Router>
        <QueryClientProvider client={queryClient}>
          <MuiThemeProvider>
            <AppRoutes />
          </MuiThemeProvider>
        </QueryClientProvider>
      </Router>
    </>
  );
}

export default App;
