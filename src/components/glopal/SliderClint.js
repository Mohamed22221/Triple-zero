import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { HideSlider } from '../../store/StateSlice';
const SliderClint = (props) => {
  

  // Close the slide by clicking on the icon-close
  
  const dispatch = useDispatch()
  const CloseSlider = () =>{
    dispatch(HideSlider(false))
  }
  return (
    <StyleSliderClint   >

       <HeaderSliderClint >
          <h3>{props.title}</h3>
          <AiOutlineClose onClick={CloseSlider} className='icon-close'/>
       </HeaderSliderClint>
        {props.children}

    </StyleSliderClint>
  )
}
const StyleSliderClint = styled.div`


`
const HeaderSliderClint = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
.icon-close{
  font-size: 28px;
  cursor: pointer;
}

`
export default SliderClint