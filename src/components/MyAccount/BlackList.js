import React from 'react'
import {  HiDocumentDuplicate } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import styled from "styled-components"
const BlackList = () => {
  return (
    <StyleBlackList>
        <HiDocumentDuplicate className='HiDocumentDuplicate' />
        <Link to="/Customers/blackList"><p>القائمه السوداء</p></Link>
    </StyleBlackList>
  )
}
const StyleBlackList = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 8px 10px ;
border: 1px solid var(--font);
border-radius: 8px;
cursor: pointer;
color: var(--font);
.HiDocumentDuplicate{
    font-size: 30px;
}
a{
  color: var(--font);
}
p{
    padding-right: 15px;
}
`
export default BlackList