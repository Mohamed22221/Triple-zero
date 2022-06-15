import React, {useState} from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from "./../bars/SideBar";
const SidebarLayout = () => {

    return (
        <>
          <SideBar  />
          <Outlet />
        </>

    )
};

export default SidebarLayout