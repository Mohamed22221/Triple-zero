import React from 'react'
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai';
import ButtonDelete from '../glopal/ButtonDelete';
import FormDelete from './FormDelete';
const DeleteClint = ({showCustomer ,HandelClose}) => {
  return (
    <StyleyDeleteClint showCustomer={showCustomer}>
       <HeaderDeleteClint>
          <h2>حذف العميل</h2>
          <AiOutlineClose className='icon-close' onClick={HandelClose} />
       </HeaderDeleteClint>
       <FormDelete />
       <StyleFotter>
        <p> *هذه العمليه ستؤدي الي حذف العميل بصوره تامه ولاكن ستتبقي معلومات الحساب</p>
       <ButtonDelete />
       </StyleFotter>
       
    </StyleyDeleteClint>
  )
}
const StyleyDeleteClint = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
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
const StyleFotter= styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
text-align: center;

p{
    margin: 15px 0;
  width: 90%;
  font-size: 15px;
  padding: 5px 0;
  font-weight: bold;
}

`

export default DeleteClint