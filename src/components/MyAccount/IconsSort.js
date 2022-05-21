import React from 'react'
import {  AiOutlineBars } from 'react-icons/ai';
import { AiOutlineAppstore  } from 'react-icons/ai';

import styled from "styled-components"
const IconsSort = () => {
  return (
    <StyleIconsSort>
        <AiOutlineBars className='sort-icon' />
        <AiOutlineAppstore className='sort-icon' />
    </StyleIconsSort>
  )
}
const StyleIconsSort = styled.div`
    border-radius: 10px;
    background-color: white;
    padding: 0px 10px;
.sort-icon{
    font-size: 38px;
    margin: 5px 0 0 0;
    padding: 0 5px;
    cursor: pointer;
    color: var(--font);
    &:first-child{
        color: var(--primary-color);
    }
}

`
export default IconsSort