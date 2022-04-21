import React from 'react'
import styled from "styled-components"
import { MdPersonAddAlt } from 'react-icons/md';
const AddClint = () => {
  return (
    <StyleAddClint>
        <MdPersonAddAlt className='MdPersonAddAlt' />
        <p>أضافه عميل</p>
    </StyleAddClint>
  )
}
const StyleAddClint = styled.div`
display: flex;
align-items: center;
background-color: var(--primary-color);
padding: 8px 20px;
cursor: pointer;
color: white;
border-radius: 7px;
p{
    padding: 0 10px ;
}
.MdPersonAddAlt{
    font-size: 25px;
}
@media (max-width:1160px) {  
            margin: 10px;
           
}
`


export default AddClint