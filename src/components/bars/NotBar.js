import React, {useState} from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from "./../bars/SideBar";
const SidebarLayout = () => {
     const [showBar, setShowBar] = useState(false) //side par
     const [showCustomer, setshowCustomer] = useState(false) // add clint
     const [showStopClint, setShowStopClint] = useState(false) // stop clint
     const [show, setShow] = useState(false) // added clint massige


    const HandelClose = () => {
        setShowBar(false)
        setshowCustomer(false)
        setShowStopClint(false)
        setShow(false)
    }
    return (
        <>
          <SideBar showBar={showBar} HandelClose={HandelClose} />
          <Outlet />
        </>

    )
};

export default SidebarLayout