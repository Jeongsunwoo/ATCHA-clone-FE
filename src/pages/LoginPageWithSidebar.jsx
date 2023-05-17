import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Sidebar from "../components/Layout/Sidebar";

function LoginPageWithSidebar() {
  return (
    <>
      <Sidebar /> {/* Sidebar를 항상 렌더링 */}
      <Route path="/login" element={<LoginPage />} /> {/* LoginPage 렌더링 */}
    </>
  );
}

export default LoginPageWithSidebar;
