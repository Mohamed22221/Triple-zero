import React, {useState} from 'react';
import { Outlet } from 'react-router-dom';
import OverLay from '../glopal/OverLay';
import SideBar from "./../bars/SideBar";
const SidebarLayout = () => {

    return (
        <>
          <SideBar  />
          <OverLay />
          <Outlet />
        </>

    )
};

export default SidebarLayout