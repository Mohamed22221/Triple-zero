import React, { useState } from 'react'
import styled from 'styled-components'

import SliderClint from '../glopal/SliderClint';
import { useSelector } from 'react-redux';
import SendSuccess from '../glopal/SendSuccess';
import FormAddShipping from './FormAddShipping';
const AddShipping = (props) => {

 const [deleted , setDeleted] = useState(true)
 const ToogleSlider = useSelector((state) => state.ShowAndHide.value.add)
  return (
    
    <StyleyDeleteClint ToogleSlider={ToogleSlider} >
      { deleted == true ?
      <div>
        <SliderClint title="اضافه شركه شحن">
        <FormAddShipping setDeleted={setDeleted} />
        </SliderClint>
       
       </div>
      : <SendSuccess Operationtitle="تم اضافه شركه شحن بنجاح"  />} 
    </StyleyDeleteClint>
  )
}
const StyleyDeleteClint = styled.div`

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
transform: ${(props) => props.ToogleSlider ? 'translateX(0px)  ' : '  translateX(590px)  '};


`
export default AddShipping