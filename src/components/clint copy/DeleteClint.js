import React, { useState } from 'react'
import styled from 'styled-components'
import FormDelete from './FormDelete';
import SliderClint from '../glopal/SliderClint';
import { useSelector } from 'react-redux';
import SendSuccess from '../glopal/SendSuccess';
const DeleteClint = () => {

 const [deleted , setDeleted] = useState(true)
 const toogleslider= useSelector((state) => state.ShowAndHide.value.delete)
  return (
    
    <StyleyDeleteClint toogleslider={toogleslider ? "true" : 'false'} >
      { deleted == true ?
      <div>
        <SliderClint title="حذف العميل">
        <FormDelete setDeleted={setDeleted} />
        </SliderClint>
       
       </div>
      : <SendSuccess Operationtitle="تم حذف العميل بنجاح"  />} 
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
transform: ${(props) => JSON.parse(props.toogleslider) ? 'translateX(0)  ' : '  translateX(590px)  '};


`


export default DeleteClint