import SideBar from "./components/bars/SideBar";
import Home from "./pages/Home"
import styled from "styled-components"
import React ,{useState} from 'react'
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
      <SideBar showBar={showBar} HandelClose={HandelClose}   />
      <OverLay HandelClose={HandelClose} showBar={showBar}/>
      <Home HandelShow={HandelShow}  />
    </StyleApp>

  );
}
const StyleApp = styled.div`
display: flex;
width: 100%;

`
export default App;
