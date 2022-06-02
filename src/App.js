import SideBar from "./components/bars/SideBar";
import Home from "./pages/Home"
import styled from "styled-components"
import React ,{Fragment, useState} from 'react'
import RequireAuth from './components/Auth/RequireAuth';
import { BrowserRouter ,Routes ,Route } from "react-router-dom";
import OverLay from "./components/glopal/OverLay";
import Customers from "./pages/Customers";
import Clint from "./components/clint/Clint";
import MainBlackList from "./components/blacklist/MainBlackList";
import EditUser from "./components/clint/EditUser";
import Restaurants from "./pages/Restaurants";
import './styles/glopal-style.scss'

import Setting from "./pages/Setting";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SidebarLayout from "./components/bars/NotBar";
import ProtectedRoutesAdmin from "./components/Auth/ProtectedRoutes";
import Shipping from "./pages/Shipping";
import Drivers from "./pages/Drivers";
function App() {
  const [showBar , setShowBar] = useState(false) //side par
  const [show , setShow] = useState(false) // added clint massige

  const HandelShow = () =>{
    setShowBar(!showBar)
  }

  const HandelClose = () =>{
    setShowBar(false)
    setShow(false)
  }
  

  

  const ROLES = {
    'User': 2001,
    'Editor': 1984,
    'Admin': 5150
  }
      
 
  // {window.location.pathname ==  "/register" ? null : window.location.pathname ==  "/login" ? null : <SideBar showBar={showBar} HandelClose={HandelClose} /> }
  return (
    <StyleApp>
      <BrowserRouter>
      <OverLay HandelClose={HandelClose} showBar={showBar}  />
      
      <Routes>
        {/* public routes */}
        <Route path="/login" element={<Login /> } />
        <Route path="/register" element={<Register />} />
        
        <Route element={<ProtectedRoutesAdmin />}>
          <Route element={<SidebarLayout />}>
          {/* User routes */}
            <Route path="/" element={<Home HandelShow={HandelShow}  />} />
            <Route path="Triple-zero" element={<Home HandelShow={HandelShow}  />} />
            <Route path="/Customers" element={<Restaurants
              HandelShow={HandelShow} 
              HandelClose={HandelClose}  />} />
              <Route path="/setting" element={<Setting />} />

            <Route path="Restaurants" element={<Customers
              HandelShow={HandelShow}
              showBar={showBar}
              HandelClose={HandelClose}
              show={show}
              setShow={setShow}
              />} />
              <Route path="ShippingCompanies" element={<Shipping HandelShow={HandelShow} />}/>
              <Route path="Drivers" element={<Drivers HandelShow={HandelShow} />}/>

            <Route path="/Restaurants/BlackList" element={<MainBlackList HandelShow={HandelShow} />} />
            <Route path="/Restaurants/clint" element={<Clint HandelShow={HandelShow}
              HandelClose={HandelClose}  />} >
                <Route path=":clintid" element={<Clint 
                HandelShow={HandelShow} 
                HandelClose={HandelClose}  />} >
              </Route>
          
            </Route>
            <Route path="/EditUser" element={<EditUser HandelShow={HandelShow}/>} >
              <Route path="/EditUser/:userid" element={<EditUser />} />
            </Route>

          </Route>
        
        </Route>
          
        

       
       
       
      </Routes>
      </BrowserRouter>
    </StyleApp>

  );
}
const StyleApp = styled.div`
display: flex;
width: 100%;

`
export default App;
