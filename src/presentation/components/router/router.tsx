import Login from "@/presentation/pages/login/login";
import React from "react";
import { Route, Routes } from "react-router-dom";

export const HOME = "/home/";
export const LOGIN = "/login/";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={LOGIN} element={<Login />} />
    </Routes>
  );
};
