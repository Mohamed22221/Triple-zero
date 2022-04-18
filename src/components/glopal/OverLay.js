import React from 'react'
import styled from "styled-components"

const OverLay = ({HandelClose ,showBar}) => {
  return (
    <StyleOverLay onClick={HandelClose} showBar={showBar}></StyleOverLay>
  )
}
const StyleOverLay = styled.div`
background-color: black;

position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
transition: 0.5s;
opacity: 0.3;
display: ${props => props.showBar ? "block" : "none"};
z-index: 99;

`
export default OverLay