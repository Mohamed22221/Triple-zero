import React from 'react'
import styled from "styled-components"
import { AiOutlineClose } from 'react-icons/ai';
import ButtonAdd from '../glopal/ButtonAdd';
import InputCustomer from './InputCustomer';

const ClintForm = ({showCustomer ,HandelClose}) => {
  return (
    <StyleForm showCustomer={showCustomer}>
      <StyleHeader>
          <h2>أضافه عميل جديد</h2>
          <AiOutlineClose className='icon-close' onClick={HandelClose} />
      </StyleHeader>
      <InputCustomer />
      <StyleFotter>
      <ButtonAdd />
      <span>تريد المساعدة ؟ <a href='#'>اضغط هنا</a></span>
      </StyleFotter>
      </StyleForm>
  )
}
const StyleForm = styled.div`
padding: 35px;
position: fixed;
top: 0;
bottom: 0;
right: 0;
display: flex;
flex-direction: column;
justify-content: space-between;
width: 550px;
height: 100%;
background-color: white;
z-index: 101;
transition: 0.5s ease;
@media (max-width:767px ) {
  width: 100%;
}
transform: ${({showCustomer}) => showCustomer ? 'translateX(0)' : 'translateX(590px)'};
`
const StyleHeader= styled.div`
display: flex;
align-items: center;
justify-content: space-between;
.icon-close{
  font-size: 28px;
  cursor: pointer;
}
h2{
  font-weight: bold;
}
`
const StyleFotter= styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
span{
  font-size: 15px;
  padding: 5px 0;
}
a{
  color: var(--primary-color);
}
`
export default ClintForm