import { AiOutlineClose } from 'react-icons/ai';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import FormStop from './FormStop';

const StopClint = ({showStopClint ,HandelClose}) => {
    
  return (
    <StyleyStopClint showStopClint={showStopClint} >
    
    <div>
     <HeaderStopClint>
        <h2>اٍيقاف مؤقت</h2>
        <AiOutlineClose className='icon-close' onClick={HandelClose}  />
     </HeaderStopClint>
     <FormStop />
    
     </div>
    
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
transform: ${({showStopClint}) => showStopClint ? 'translateX(0)' : 'translateX(590px)'};

`
const HeaderStopClint = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

.icon-close{
  font-size: 28px;
  cursor: pointer;
}

`
export default StopClint