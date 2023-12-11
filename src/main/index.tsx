import { AppThemeProvider } from "@/presentation/contexts";
import Login from "@/presentation/pages/login/login";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppThemeProvider>
      <Login />
    </AppThemeProvider>
  </React.StrictMode>
);
