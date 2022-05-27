import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai';
const SliderClint = (props) => {

  return (
    <StyleSliderClint>

       <HeaderSliderClint>
          <h2>حذف العميل</h2>
          <AiOutlineClose className='icon-close'/>
       </HeaderSliderClint>
       {props.children}

    </StyleSliderClint>
  )
}
const StyleSliderClint = styled.div`
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