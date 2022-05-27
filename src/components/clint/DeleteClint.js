import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai';
import FormDelete from './FormDelete';
import DeletedClint from './DeletedClint';
const DeleteClint = ({showCustomer ,HandelClose}) => {

 const [deleted , setDeleted] = useState(true)
  return (
    
    <StyleyDeleteClint showCustomer={showCustomer}>
      { deleted == true ?
      <div>
       <HeaderDeleteClint>
          <h2>حذف العميل</h2>
          <AiOutlineClose className='icon-close' onClick={HandelClose} />
       </HeaderDeleteClint>
      // <FormDelete setDeleted={setDeleted} />
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
transform: ${({showCustomer}) => showCustomer ? 'translateX(0)' : 'translateX(590px)'};
`
const HeaderDeleteClint = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
.icon-close{
  font-size: 28px;
  cursor: pointer;
}

`


export default DeleteClint