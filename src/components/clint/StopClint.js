import { AiOutlineClose } from 'react-icons/ai';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import FormStop from './FormStop';
import SliderClint from '../glopal/SliderClint';
import { useSelector } from 'react-redux';

const StopClint = ({showStopClint }) => {
  const ToogleSlider = useSelector((state) => state.ShowAndHide.value.stop)
  return (
    <StyleyStopClint ToogleSlider={ToogleSlider}   >
     <SliderClint title="ايقاف العميل">
        <FormStop />
     </SliderClint>
  </StyleyStopClint>
  )
}
const StyleyStopClint = styled.div`
overflow: auto;
padding: 35px;
position: fixed;
top: 0;
bottom: 0;
right: 0;
width: 550px;
height: 100%;
background-color: white;
z-index: 101;
transition: 0.5s ease;
@media (max-width:625px ) {
  width: 100%;
}
transform: ${(props) => props.ToogleSlider ? 'translateX(0)  ' : '  translateX(590px)  '};


`



export default StopClint