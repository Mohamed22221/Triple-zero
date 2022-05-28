import React, { useState } from 'react'
import styled from "styled-components"
import { FiPause } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';

import ButtonReturn from '../glopal/ButtonReturn';
import { useDispatch } from 'react-redux';
import { ShowStop } from '../../store/StateSlice';
import { ShowDelete } from '../../store/StateSlice';




const HeaderButton = ({HandelShowCustomer }) => {
   const dispatch = useDispatch()
  return (
    <MainHeaderClint>
        <MainButtonClint>
            <button onClick={() => dispatch(ShowStop(true)) }><FiPause className='icon-button' />أقاف مؤقت</button>
            <button  onClick={() =>dispatch(ShowDelete(true))} ><AiOutlineDelete className='icon-button' />حذف العميل</button>
        </MainButtonClint>
        <ButtonReturn />
        
    </MainHeaderClint>
  )
}
const MainHeaderClint = styled.div`
padding: 20px;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom:1px solid var(--font-opacity) ;

`
const MainButtonClint = styled.div`
display: flex;
button {
    all: unset;
    display: flex;
    align-items: center;
    color: white;
    margin: 8px 10px ;
    padding: 8px 25px;
    border-radius: 8px;
    cursor: pointer;
    :first-child{
        background-color: var(--primary-color);
    }
    :last-child{
        background-color: var(--danger-color);
    }
    .icon-button{
        margin: 0 5px;
        font-size: 24px;
    }

}
@media (max-width:550px) {
    flex-direction: column;
    button{
        margin: 8px 5px ;
        padding: 8px 15px;
    }

    }
`

export default HeaderButton