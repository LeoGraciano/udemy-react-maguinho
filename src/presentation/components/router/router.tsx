import { LoginAssociate } from "@/presentation/pages/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export const HOME = "/home";
export const LOGIN = "/login";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${LOGIN}`} element={<LoginAssociate />} />
      </Routes>
    </BrowserRouter>
  );
};
