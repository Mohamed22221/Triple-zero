import React from 'react'
import styled from "styled-components"
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const ButtonReturn = () => {
  return (
    <Link to="/Customers">
    <MainReturnClints>
     <span>رجوع</span>
     <a><BiArrowBack className='icon-button' /></a>
    </MainReturnClints>
    </Link>
  )
}
const MainReturnClints = styled.div`
display: flex;
justify-content: center;
padding: 10px;

span ,.icon-button , a{
    color: var(--font);
    cursor: pointer;
}
a{
    display: flex;
    align-items: center;
    .icon-button{
        margin: 4px 11px;
        font-size: 24px;
        font-weight: bold;
    }
}

`
export default ButtonReturn