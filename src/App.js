import SideBar from "./components/bars/SideBar";
import Home from "./pages/Home"
import styled from "styled-components"
import React ,{useState} from 'react'
import { BrowserRouter ,Routes ,Route } from "react-router-dom";
import OverLay from "./components/glopal/OverLay";
import Customers from "./pages/Customers";
function App() {
  //nav Bar Toggle and add customer
  const [showBar , setShowBar] = useState(false)
  const [showCustomer , setshowCustomer] = useState(false)

  const HandelShow = () =>{
    setShowBar(!showBar)
  }
  const HandelShowCustomer = () =>{
    setshowCustomer(true)
  }
  const HandelClose = () =>{
    setShowBar(false)
    setshowCustomer(false)
  }
  return (
    <StyleApp>
      <BrowserRouter>
      <SideBar showBar={showBar} HandelClose={HandelClose}    />
      <OverLay HandelClose={HandelClose} showBar={showBar} showCustomer={showCustomer}/>
      <Routes>
      <Route path="/" element={<Home HandelShow={HandelShow}  />} />
      <Route path="Triple-zero" element={<Home HandelShow={HandelShow}  />} />
      <Route path="Customers" element={<Customers HandelShow={HandelShow} showBar={showBar} HandelShowCustomer={HandelShowCustomer} showCustomer={showCustomer} HandelClose={HandelClose}  />} />
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
