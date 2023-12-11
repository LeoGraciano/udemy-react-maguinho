import { AppThemeProvider, DrawerProvider } from "@/presentation/contexts";
import Login from "@/presentation/pages/login/login";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppThemeProvider>
      <DrawerProvider>
        <Login />
      </DrawerProvider>
    </AppThemeProvider>
  </React.StrictMode>
);
