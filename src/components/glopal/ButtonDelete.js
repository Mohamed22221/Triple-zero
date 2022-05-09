import React from 'react'
import styled from "styled-components"
import { MdPersonAddAlt } from 'react-icons/md';
const ButtonDelete = ({HandelShowCustomer}) => {
  return (
    <StyleButtonDelete >
      <button> <MdPersonAddAlt className='MdPersonAddAlt' />حذف العميل</button>

    </StyleButtonDelete>
  )
}
const StyleButtonDelete = styled.div`
display: flex;
justify-content: center;
button{
all: unset;
display: flex;
align-items: center;
background-color: var(--danger-color);
margin: 8px 10px ;
padding: 8px 25px;
text-align: center;
cursor: pointer;
color: white;
border-radius: 7px;
transition: 0.6s;
:hover{
  opacity: 0.7;
}
.MdPersonAddAlt{
    font-size: 25px;
    margin-left: 10px;
}

}



p{
    padding: 0 10px ;
}


`
export default ButtonDelete