import React from 'react'
import styled from "styled-components"
import { AiOutlineMail } from 'react-icons/ai';
import { BsLink } from 'react-icons/bs';
import { RiTrademarkLine } from 'react-icons/ri';
import { BsCurrencyDollar } from 'react-icons/bs';






const OtherClint = (props) => {
const {clintemail , websitelink ,tradetype ,currencypaid  } = props
  return (
    <MainStyleOther>
     <div className='item-wedget'>
        <div className='header-wedget'>
          <AiOutlineMail className='icon-wedget' />
          <p>اميل العميل</p>
        </div>
        <div className='type'>
          <h3>{clintemail}</h3>
        </div>
      </div>
      <div className='item-wedget'>
        <div className='header-wedget'>
          <BsLink className='icon-wedget' />
          <p>موقع العميل</p>
        </div>
        <div className='type'>
          <h3><a href={`${websitelink}`} target="_blank" >{websitelink}</a></h3>
        </div>
      </div>
      <div className='item-wedget'>
        <div className='header-wedget'>
          <RiTrademarkLine className='icon-wedget' />
          <p>نوع تجاره العميل</p>
        </div>
        <div className='type'>
          <h3>{tradetype}</h3>
        </div>
      </div>
      <div className='item-wedget'>
        <div className='header-wedget'>
          <BsCurrencyDollar className='icon-wedget' />
          <p>العمله المدفوع بها</p>
        </div>
        <div className='type'>
          <h3>{currencypaid}</h3>
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
  h3 {
      a{color: black;}
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