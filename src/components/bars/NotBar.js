import React, {useState} from 'react';
import { Outlet } from 'react-router-dom';
import OverLay from '../glopal/OverLay';
import SideBar from "./../bars/SideBar";
import OverLay from "./../glopal/OverLay";
const SidebarLayout = () => {

    return (
        <>
        <OverLay/>
          <SideBar  />
          <OverLay />
          <Outlet />
        </>

    )
};

export default SidebarLayout