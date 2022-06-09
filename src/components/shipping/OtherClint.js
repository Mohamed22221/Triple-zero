import React from 'react'
import styled from "styled-components"
import { AiOutlineMail } from 'react-icons/ai';
import { BsLink } from 'react-icons/bs';
import { BsCurrencyDollar } from 'react-icons/bs';

const OtherClint = (props) => {
const {clintemail , isOnline  ,state ,created_at  } = props
  return (
    <MainStyleOther>
     <div className='item-wedget'>
        <div className='header-wedget'>
          <AiOutlineMail className='icon-wedget' />
          <p>اميل العميل</p>
        </div>
        <div className='type'>
          <h6>{clintemail}</h6>
        </div>
      </div>

      <div className='item-wedget'>
        <div className='header-wedget'>
          <BsCurrencyDollar className='icon-wedget' />
          <p>حاله الدفع</p>
        </div>
        <div className='type'>
          <h6>{state === 1 ? "نشط" : "غير نشظ"}</h6>
        </div>
      </div>

      <div className='item-wedget'>
        <div className='header-wedget'>
          <BsCurrencyDollar className='icon-wedget' />
          <p>تاريخ الانشاء</p>
        </div>
        <div className='type'>
          <h6>{created_at }</h6>
        </div>
      </div>
    </MainStyleOther>
  )
}
const MainStyleOther = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
.item-wedget{
  margin: 8px 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  width: 280px;
  background-color: white;
  .icon-wedget {
    margin-left: 18px;
  }
  p{
    color: var(--primary-color);
  }
  h6 {
    font-weight: bold;
      a{color: black}
  }
  .icon-wedget{
      font-size: 50px;
      background-color: #ffa5001a  ;
      border-radius: 50%;
      padding: 10px;
      color: var(--primary-color);
    }
}
.header-wedget{
    display: flex;
    align-items: center;
  }

`
export default OtherClint