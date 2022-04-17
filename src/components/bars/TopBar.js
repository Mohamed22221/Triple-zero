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
`
const StyleRightTopBar = styled.div`
display: flex;
align-items: center;

.title-page h2{
    font-weight:bold ;
    font-size: 32px;
    padding-left: 25px;
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
    }
}
`

const StyleLeftTopBar = styled.div`
display: flex;
justify-content: space-between;
`
export default TopBar