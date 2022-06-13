import { AiOutlineClose } from 'react-icons/ai';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import FormStop from './FormStop';
import SliderClint from '../glopal/SliderClint';
import { useSelector } from 'react-redux';
import SendSuccess from '../glopal/SendSuccess';

const StopClint = ({showStopClint }) => {
  const toogleslider= useSelector((state) => state.ShowAndHide.value.stop)
  const [stoped , setStoped] = useState(true)

  return (
    <StyleyStopClint toogleslider={toogleslider ? "true" : 'false'}   >
        { stoped == true ?
      <div>
     <SliderClint title="ايقاف العميل">
        <FormStop setStoped={setStoped}/>
     </SliderClint>
     </div>
      : <SendSuccess Operationtitle="تم توقف العميل بنجاح"    />} 
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
transform: ${(props) => JSON.parse(props.toogleslider) ? 'translateX(550px)  ' : '  translateX(590px)  '};


`



export default StopClint