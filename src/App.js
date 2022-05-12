import SideBar from "./components/bars/SideBar";
import Home from "./pages/Home"
import styled from "styled-components"
import React ,{useState} from 'react'
import { BrowserRouter ,Routes ,Route } from "react-router-dom";
import OverLay from "./components/glopal/OverLay";
import Customers from "./pages/Customers";
import Clint from "./components/clint/Clint";
import BlackList from "./components/customers/BlackList";
import MainBlackList from "./components/blacklist/MainBlackList";
function App() {
  const [showBar , setShowBar] = useState(false) //side par
  const [showCustomer , setshowCustomer] = useState(false) // add clint
  const [show , setShow] = useState(false) // added clint massige

  const HandelShow = () =>{
    setShowBar(!showBar)
  }
  const HandelShowCustomer = () =>{
    setshowCustomer(true)
  }
  const HandelClose = () =>{
    setShowBar(false)
    setshowCustomer(false)
    setShow(false)
  }
  return (
    <StyleApp>
      <BrowserRouter>
      <SideBar showBar={showBar} HandelClose={HandelClose}    />
      <OverLay HandelClose={HandelClose} showBar={showBar} showCustomer={showCustomer}/>
      <Routes>
      <Route path="/" element={<Home HandelShow={HandelShow}  />} />
      <Route path="Triple-zero" element={<Home HandelShow={HandelShow}  />} />
      <Route path="Customers" element={<Customers
       HandelShow={HandelShow}
       showBar={showBar}
       HandelShowCustomer={HandelShowCustomer}
       showCustomer={showCustomer}
       HandelClose={HandelClose}
       show={show}
       setShow={setShow}
        />} />
        <Route path="/Customers/BlackList" element={<MainBlackList HandelShow={HandelShow} />} />
      <Route path="/clint" element={<Clint HandelShow={HandelShow}
       showCustomer={showCustomer} 
       HandelShowCustomer={HandelShowCustomer}
       HandelClose={HandelClose}  />} >
        <Route path=":clintid" element={<Clint 
        HandelShow={HandelShow} 
        HandelShowCustomer={HandelShowCustomer}
        HandelClose={HandelClose}  />} />
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
