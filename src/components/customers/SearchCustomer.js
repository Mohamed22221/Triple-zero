import React ,{useState} from 'react'
import styled from "styled-components"
import { AiOutlineSearch } from 'react-icons/ai';
const SearchCustomer = ({setSortSearch ,searchSort}) => {
    // value inbut finction
    const HandelValue = (e) =>{
        setSortSearch(e.target.value)
    }
  return (
    <StyleSearchCustomer>
              <input type="search" placeholder='أبحث عن اسم العميل' 
              onChange={HandelValue}  />
            <AiOutlineSearch className='icon-search'  />
    </StyleSearchCustomer>
  )
}
const StyleSearchCustomer = styled.form`
position: relative;
margin-left: 20px;
@media (max-width:1160px) {  
            margin: 10px;
           
        }
    input{
        all:unset ;
        background-color: var(--white-color);
        padding: 7px 50px 7px 15px;
        width: 250px;
        border-radius: 7px;
        &::placeholder{
            color: var(--font);
        }
        @media (max-width:460px) {  
            width: 180px;
           
        }
    }
    .icon-search{
        position: absolute;
        right: 9px;
        top: 7px;
        font-size: 26px;
        color: var(--font);
        cursor: pointer;
    }

`
export default SearchCustomer