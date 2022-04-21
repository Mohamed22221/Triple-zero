import React from 'react'
import {  HiDocumentDuplicate } from 'react-icons/hi';
import styled from "styled-components"
const BlackList = () => {
  return (
    <StyleBlackList>
        <HiDocumentDuplicate className='HiDocumentDuplicate' />
        <p>القائمه السوداء</p>
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
p{
    padding-right: 15px;
}
`
export default BlackList