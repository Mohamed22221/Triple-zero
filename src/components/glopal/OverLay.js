import React from 'react'
import styled from "styled-components"

const OverLay = ({HandelClose ,showBar , showCustomer}) => {
  return (
    <StyleOverLay onClick={HandelClose} showBar={showBar} showCustomer={showCustomer}></StyleOverLay>
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
display: ${props =>  props.showBar  ?   "block" : props.showCustomer ? "block" : "none"};
z-index: 99;
cursor: pointer;

`
export default OverLay