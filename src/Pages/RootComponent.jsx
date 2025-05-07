import React from "react";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/FooterRedesign/FooterRedesign";
import SidebarMenu from "../Components/Navbar/Navbar1";
import { ScreenSizeContext } from "../ScreenSizeContext.jsx";
import MainForm from "../Components/FormPage/MainForm.jsx";

const RootComponent = () => {
  const { isDesktop } = useContext(ScreenSizeContext);
  return (
    <>
      <MainForm />
      {/* {isDesktop ? <Navbar /> : <SidebarMenu />}
      <Outlet />
      <Footer /> */}
    </>
  );
};

export default RootComponent;
