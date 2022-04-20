import SideBar from "./components/bars/SideBar";
import Home from "./pages/Home"
import styled from "styled-components"
import React ,{useState} from 'react'
import { BrowserRouter ,Routes ,Route } from "react-router-dom";
import OverLay from "./components/glopal/OverLay";
function App() {
  const [showBar , setShowBar] = useState(false)
 

  const HandelShow = () =>{
    setShowBar(!showBar)
  }
  const HandelClose = () =>{
    setShowBar(false)
  }
  return (
    <StyleApp>
      <BrowserRouter>
      <SideBar showBar={showBar} HandelClose={HandelClose}   />
      <OverLay HandelClose={HandelClose} showBar={showBar}/>
      <Routes>
      <Route path="/" element={<Home HandelShow={HandelShow}  />} />
      <Route path="Triple-zero" element={<Home HandelShow={HandelShow}  />} />
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
