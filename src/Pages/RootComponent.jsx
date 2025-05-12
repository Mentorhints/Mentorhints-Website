import React from "react";
import { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/FooterRedesign/FooterRedesign";
import SidebarMenu from "../Components/Navbar/Navbar1";
import { ScreenSizeContext } from "../ScreenSizeContext.jsx";

const RootComponent = () => {
  const { isDesktop } = useContext(ScreenSizeContext);
  const location = useLocation();
  const isFormPage = location.pathname === "/form";
  return (
    <>
      {!isFormPage && (isDesktop ? <Navbar /> : <SidebarMenu />)}
      <Outlet />
      {!isFormPage && <Footer />}
    </>
  );
};

export default RootComponent;
