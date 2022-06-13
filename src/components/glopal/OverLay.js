import React from 'react'
import styled from "styled-components"
import { useDispatch, useSelector } from 'react-redux';
import { HideSlider, ShowSlider } from '../../store/StateSlice';



const OverLay = ({setShowBar ,showBar }) => {
  const toogleslider= useSelector((state) => state.ShowAndHide.value.overLay)
  
  const dispatch = useDispatch()

  const HandelCloseOverLay = () =>{
    dispatch(HideSlider())
    // setShowBar(false)
  }
  return (
    <StyleOverLay id='overLay' onClick={HandelCloseOverLay} showBar={showBar} toogleslider={toogleslider ? "true" : 'false'}></StyleOverLay>
  )
}
const StyleOverLay = styled.div`
background-color: black;
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
opacity: 0.3;
display: ${props =>  props.showBar  ?  "block" : JSON.parse(props.toogleslider) ? "block" : "none"};
z-index: 99;
cursor: pointer;

`
export default OverLay