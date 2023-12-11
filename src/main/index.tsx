import { AppRouter } from "@/presentation/components/router";
import { AppThemeProvider } from "@/presentation/contexts";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppThemeProvider>
      <AppRouter />
    </AppThemeProvider>
  </React.StrictMode>
);
