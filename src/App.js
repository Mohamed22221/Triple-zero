import SideBar from "./components/bars/SideBar";
import Home from "./pages/Home"
import styled from "styled-components"
import React ,{Fragment, useState} from 'react'
import { BrowserRouter ,Routes ,Route } from "react-router-dom";
import OverLay from "./components/glopal/OverLay";
import Customers from "./pages/Customers";
import Clint from "./components/clint/Clint";
import MainBlackList from "./components/blacklist/MainBlackList";
import EditUser from "./components/clint/EditUser";
import Account from "./pages/Account";
import './styles/glopal-style.scss'

import Setting from "./pages/Setting";
import Login from "./pages/Login";
import Register from "./pages/Register";
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

  // <Fragment>
  //       {window.location.pathname !== "login" ? <SideBar showBar={showBar} HandelClose={HandelClose} /> : window.location.pathname !== "register" ? <SideBar showBar={showBar} HandelClose={HandelClose} /> : null  }
  //       if (window.location.pathname !== "login" || window.location.pathname !== "register") {
  //          <SideBar showBar={showBar} HandelClose={HandelClose} />
  //         }  else{
  //         null
  //       }
  //     </Fragment>
      
 
  return (
    <StyleApp>
      <BrowserRouter>
<<<<<<< HEAD
      <SideBar showBar={showBar} HandelClose={HandelClose}    />
      <OverLay HandelClose={HandelClose} showBar={showBar} setShowBar={setShowBar} />
=======
      
      {window.location.pathname ==  "/register" ? null : window.location.pathname ==  "/login" ? null : <SideBar showBar={showBar} HandelClose={HandelClose} /> }


      <OverLay HandelClose={HandelClose} showBar={showBar} showCustomer={showCustomer} showStopClint={showStopClint} />
>>>>>>> a3e4929c1d3286e497a8af3ead231d9fb5c9570b
      <Routes>
        <Route path="/" element={<Home HandelShow={HandelShow}  />} />
        <Route path="Triple-zero" element={<Home HandelShow={HandelShow}  />} />
        <Route path="Customers" element={<Customers
          HandelShow={HandelShow}
          showBar={showBar}
          HandelClose={HandelClose}
          show={show}
          setShow={setShow}
          />} />
      
        <Route path="/Customers/BlackList" element={<MainBlackList HandelShow={HandelShow} />} />
        <Route path="/Customers/clint" element={<Clint HandelShow={HandelShow}  HandelClose={HandelClose}  />} >
          <Route path=":clintid" element={<Clint 
          HandelShow={HandelShow} 
          HandelClose={HandelClose}  />} >
        
        </Route>

        </Route>

        <Route path="/account" element={<Account
          HandelShow={HandelShow} 
          HandelClose={HandelClose}  />} >

        </Route>
        <Route path="/setting" element={<Setting />} />
<<<<<<< HEAD
=======
        <Route path="/login" element={<Login /> } />
        <Route path="/register" element={<Register />} />
        
>>>>>>> a3e4929c1d3286e497a8af3ead231d9fb5c9570b
        <Route path="/EditUser" element={<EditUser HandelShow={HandelShow}/>} >
        <Route path="/EditUser/:userid" element={<EditUser />} />
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
