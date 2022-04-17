import React ,{useState} from 'react'
import styled from "styled-components"
import LoginManager from "./loginManager"
import { AiOutlineSearch } from 'react-icons/ai';
import { MdAddBox } from 'react-icons/md';
import { BsArrowClockwise } from 'react-icons/bs';



const TopBar = ({title}) => {
  return (
    <StyleTopBar>
        <StyleRightTopBar>
        <div className='title-page'><h2>{title}</h2></div>
        <form className='search'>
            <input type="search" placeholder='أبحث عن اسم العميل' />
            <AiOutlineSearch className='icon-search' />
        </form>
        <div className='icons-topbar'>
        <BsArrowClockwise className='icon-topbar' />
        <MdAddBox className='icon-topbar' />
        </div>
        </StyleRightTopBar>
        <StyleLeftTopBar>
            <LoginManager />
        </StyleLeftTopBar>
        
    </StyleTopBar>
  )
}
const StyleTopBar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width:1114px) {
flex-direction: column;
justify-content: center;

}
`
const StyleRightTopBar = styled.div`
display: flex;
align-items: center;

.title-page h2{
    font-weight:bold ;
    font-size: 32px;
    padding-left: 25px;
    @media (max-width:460px) {  
        font-size: 19px;
    }
    @media (max-width:368px) {
        font-size: 16px;
    }
}
.search {
position: relative;
margin-left: 20px;
    input{
        all:unset ;
        background-color: var(--white-color);
        padding: 7px 50px 7px 15px;
        width: 750px;
        border-radius: 7px;
        &::placeholder{
            color: var(--font);
        }
        @media (max-width:1610px) {
            width: 550px;
        }
        @media (max-width:1410px) {
            width: 350px;
        }
        @media (max-width:1220px) {
            width: 250px;
        }
        @media (max-width:1115px) {
            width: 150px;
        }
        @media (max-width:460px) {  
            width: 100px;
        }
        @media (max-width:368px) {
            width: 90px;
    }
    }
    .icon-search{
        position: absolute;
        right: 9px;
        top: 8px;
        font-size: 26px;
        color: var(--font);
        cursor: pointer;

    }
}
.icons-topbar{
    display: flex;
    cursor: pointer;
    .icon-topbar{
        font-size: 30px;
        margin: 0 5px;
        @media (max-width:368px) {
            font-size: 23px;
            margin: 0 2px;
    }
    }

}
`

const StyleLeftTopBar = styled.div`
display: flex;
justify-content: space-between;
`
export default TopBar