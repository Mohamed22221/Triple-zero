import React ,{useState} from 'react'
import styled from "styled-components"
import LoginManager from "./loginManager"
import { AiOutlineSearch } from 'react-icons/ai';
import { MdAddBox } from 'react-icons/md';
import { BsArrowClockwise } from 'react-icons/bs';
import { BsTextParagraph } from 'react-icons/bs';
import { useSelector } from 'react-redux'

import { Link } from "react-router-dom";


const TopBar = ({title ,HandelShow}) => {
    const UserData = useSelector((state) => state.clint.DataUser)
     //filter search 
    const [filterSearch , setfilterSearch] = useState([])
    const handelChange = (e) => {
        const valueInput = e.target.value 
        const NewData =UserData.filter((item) =>{
            return (
                item.name.includes(valueInput)
            )
        })
        if (valueInput === "") {
            setfilterSearch([])
        } else {
            setfilterSearch(NewData)
        }
    }
    const handelLink = () =>{
        setfilterSearch([])
    }
   
  return (
    <StyleTopBar>
        <StyleRightTopBar>
        <div className='title-page'><h2>{title}</h2></div>
        <form className='search'>
            <input type="search" placeholder='أبحث عن اسم العميل' onChange={handelChange} />
            <AiOutlineSearch className='icon-search' />
            <div className='filter-Search'>
            {filterSearch.map((item , index) =>{
                return (
                    <div className='click-Search' key={index}>
                        <Link to={`/Customers/clint/${item.name}`} onClick={handelLink}><p>{item.name}</p> </Link>
                    </div>

                )
            })}
            </div>
        </form>

        <div className='icons-topbar'>
        <BsArrowClockwise className='icon-topbar' />
        <MdAddBox className='icon-topbar' />
        </div>
        </StyleRightTopBar>
        <StyleLeftTopBar>
            <LoginManager />
            <BsTextParagraph className='icon-topbar' onClick={HandelShow} />
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
            @media (max-width:460px) {  
            width: 100px;
            font-size: 12px;
        }
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
        top: 50%;
        transform: translateY(-50%);
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
        @media (max-width:375px) {
            font-size: 24px;
            margin: 0 2px;
    }
    }

}
.filter-Search{
    position: absolute;
    background-color: white;
    width: 100%;
    z-index: 10;
    border-radius:0 0px 10px 10px;
    box-shadow: -2px 5px 13px -4px rgba(0,0,0,0.46);
    -webkit-box-shadow: -2px 5px 13px -4px rgba(0,0,0,0.40);
    -moz-box-shadow: -2px 5px 13px -4px rgba(0,0,0,0.30);

    .click-Search{
        padding: 8px 20px;
        transition: 0.2s;
        :hover{
                background-color: var(--font-opacity);
                
            }
        a{
            color: black;

        }
    }


}
`

const StyleLeftTopBar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
.icon-topbar{
    z-index: 10;
    font-size: 35px;
    width: 40px;
    margin: 10px;
    cursor: pointer;
    display: none;
    @media (max-width: 1180px) {
        display:block
}
}
`
export default TopBar