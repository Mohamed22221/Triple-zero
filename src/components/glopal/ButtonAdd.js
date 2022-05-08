import React from 'react'
import styled from "styled-components"
import { MdPersonAddAlt } from 'react-icons/md';
const ButtonAdd = ({AddUser}) => {
  
  return (
    <StyleButtonAdd >
    <MdPersonAddAlt className='MdPersonAddAlt' />
    <p onClick={AddUser}>أضافه عميل</p>
    </StyleButtonAdd>
  )
}
const StyleButtonAdd = styled.div`
display: flex;
align-items: center;
background-color: var(--primary-color);
padding: 8px 20px;
width: 166px;
text-align: center;
cursor: pointer;
color: white;
border-radius: 7px;
transition: 0.6s;
:hover{
  opacity: 0.7;
}
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
export default ButtonAdd