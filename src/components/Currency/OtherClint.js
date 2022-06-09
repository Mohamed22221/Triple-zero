import React from 'react'
import styled from "styled-components"
import { AiOutlineMail } from 'react-icons/ai';
import { BsLink } from 'react-icons/bs';
import { BsCurrencyDollar } from 'react-icons/bs';

const OtherClint = (props) => {
const {symbol , exchange_rate  ,sequence   } = props
  return (
    <MainStyleOther>
     <div className='item-wedget'>
        <div className='header-wedget'>
          <AiOutlineMail className='icon-wedget' />
          <p>رمز العمله</p>
        </div>
        <div className='type'>
          <h6>{symbol}</h6>
        </div>
      </div>

      <div className='item-wedget'>
        <div className='header-wedget'>
          <BsCurrencyDollar className='icon-wedget' />
          <p>سعر الصرف</p>
        </div>
        <div className='type'>
          <h6>{exchange_rate}</h6>
        </div>
      </div>

      <div className='item-wedget'>
        <div className='header-wedget'>
          <BsCurrencyDollar className='icon-wedget' />
          <p>التسلسل</p>
        </div>
        <div className='type'>
          <h6>{sequence }</h6>
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