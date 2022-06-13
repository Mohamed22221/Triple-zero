import React from 'react'
import styled from "styled-components"
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const ButtonReturn = ({ title }) => {
  return (
    <Link to={title} >
      <MainReturnClints>
        <span>رجوع</span>
        <span className='icon-return'><BiArrowBack className='icon-button' /></span>
      </MainReturnClints>
    </Link>
  )
}
const MainReturnClints = styled.div`
display: flex;
justify-content: center;
align-items: center;
// padding: 10px;

span ,.icon-button , a{
    color: var(--font);
    cursor: pointer;
}
span.icon-return{
    display: flex;
    align-items: center;
    margin: 4px 6px 0 11px;
    
    .icon-button{
        font-size: 24px;
        font-weight: bold;
    }
}

`
export default ButtonReturn