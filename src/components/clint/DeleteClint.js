import React, { useState } from 'react'
import styled from 'styled-components'
import FormDelete from './FormDelete';
import DeletedClint from './DeletedClint';
import SliderClint from '../glopal/SliderClint';
import { useSelector } from 'react-redux';
const DeleteClint = ({showCustomer ,HandelClose}) => {

 const [deleted , setDeleted] = useState(true)
 const ToogleSlider = useSelector((state) => state.ShowAndHide.value.delete)
  return (
    
    <StyleyDeleteClint ToogleSlider={ToogleSlider} >
      { deleted == true ?
      <div>
        <SliderClint title="حذف العميل">
        <FormDelete setDeleted={setDeleted} />
        </SliderClint>
       
       </div>
      : <DeletedClint HandelClose={HandelClose} />} 
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
transform: ${(props) => props.ToogleSlider ? 'translateX(0)  ' : '  translateX(590px)  '};


`


export default DeleteClint