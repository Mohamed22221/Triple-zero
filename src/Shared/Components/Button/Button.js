import React from 'react'
import { FiPause } from 'react-icons/fi';
import styled from "styled-components"
import './Button.css'
const ButtonComponent = ({text, type, onClick, Icon}) => {
  return (
    <MainButtonClint>
        <button onClick={onClick} className={type}><Icon className='icon-button' />{text}</button>
    </MainButtonClint>
  )
}
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
        // background-color: var(--primary-color);
    }
    .icon-button{
        margin: 0 5px;
        font-size: 24px;
    }
    
    &.primary {
        background-color: var(--primary-color);
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
export default ButtonComponent