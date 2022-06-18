import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from "./../bars/SideBar";
import OverLay from "./../../components/glopal/OverLay";
const SidebarLayout = () => {

  return (
    <>
      <OverLay />
      <SideBar />
      <Outlet />
    </>

  )
};

export default SidebarLayout