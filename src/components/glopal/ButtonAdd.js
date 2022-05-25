import React from 'react'
import styled from "styled-components"
import { MdPersonAddAlt } from 'react-icons/md';
const ButtonAdd = ({AddUser}) => {
  
  return (
    <StyleButtonAdd >
      <MdPersonAddAlt className='MdPersonAddAlt' />
      <span onClick={AddUser} > أضافه عميل </span>
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
display: flex;
justify-content: space-evenly;
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