import SideBar from "./components/bars/SideBar";
import Home from "./pages/Home"
import styled from "styled-components"
import React ,{useState} from 'react'
import { BrowserRouter ,Routes ,Route } from "react-router-dom";
import OverLay from "./components/glopal/OverLay";
import Customers from "./pages/Customers";
import Clint from "./components/clint/Clint";
import MainBlackList from "./components/blacklist/MainBlackList";
import EditUser from "./components/clint/EditUser";
import Account from "./pages/Account";
function App() {
  const [showBar , setShowBar] = useState(false) //side par
  const [showCustomer , setshowCustomer] = useState(false) // add clint
  const [showStopClint , setShowStopClint] = useState(false) // stop clint
  const [show , setShow] = useState(false) // added clint massige

  const HandelShow = () =>{
    setShowBar(!showBar)
  }
  const HandelShowCustomer = () =>{
    setshowCustomer(true)
  }
  const HandelStopCustomer = () =>{
    setShowStopClint(true)
  }
  const HandelClose = () =>{
    setShowBar(false)
    setshowCustomer(false)
    setShowStopClint(false)
    setShow(false)
  }
  return (
    <StyleApp>
      <BrowserRouter>
      <SideBar showBar={showBar} HandelClose={HandelClose}    />
      <OverLay HandelClose={HandelClose} showBar={showBar} showCustomer={showCustomer} showStopClint={showStopClint} />
      <Routes>
        <Route path="/" element={<Home HandelShow={HandelShow}  />} />
        <Route path="Triple-zero" element={<Home HandelShow={HandelShow}  />} />
        <Route path="Customers" element={<Customers
          HandelShow={HandelShow}
          showBar={showBar}
          HandelShowCustomer={HandelShowCustomer}
          showCustomer={showCustomer}
          showStopClint={showStopClint}
          HandelClose={HandelClose}
          show={show}
          setShow={setShow}
          />} />
      
        <Route path="/Customers/BlackList" element={<MainBlackList HandelShow={HandelShow} />} />
        <Route path="/Customers/clint" element={<Clint HandelShow={HandelShow}
        showCustomer={showCustomer} 
        HandelShowCustomer={HandelShowCustomer}
        HandelStopCustomer={HandelStopCustomer}
        showStopClint={showStopClint}
        HandelClose={HandelClose}  />} >
          <Route path=":clintid" element={<Clint 
          HandelShow={HandelShow} 
          HandelShowCustomer={HandelShowCustomer}
          HandelStopCustomer={HandelStopCustomer}
          HandelClose={HandelClose}  />} >
        
        </Route>

        </Route>

        <Route path="/account" element={<Account
          HandelShow={HandelShow} 
          HandelShowCustomer={HandelShowCustomer}
          HandelStopCustomer={HandelStopCustomer}
          HandelClose={HandelClose}  />} >
        
        </Route>
        
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
