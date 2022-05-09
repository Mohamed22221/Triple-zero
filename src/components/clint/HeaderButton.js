import React from 'react'
import styled from "styled-components"
import { FiPause } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from "react-router-dom";



const HeaderButton = ({HandelShowCustomer ,logo,name,dateSubscription,compony}) => {
  return (
    <MainHeaderClint>
        <MainButtonClint>
            <button ><FiPause className='icon-button' />أقاف مؤقت</button>
            <button  onClick={HandelShowCustomer} ><AiOutlineDelete className='icon-button' />حذف العميل</button>
        </MainButtonClint>
        <Link to="/Customers">
        <MainReturnClints>
         <span>رجوع</span>
         <a><BiArrowBack className='icon-button' /></a>
        </MainReturnClints>
        </Link>
        
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
export default HeaderButton