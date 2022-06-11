import React from 'react'
import styled from "styled-components"
import { AiFillStar } from 'react-icons/ai';
import request from '../../../photo/icons/requestswedget.svg'
import delevery from '../../../photo/icons/deleverywedget.svg'
import Logo3 from "../../../photo/slogan/user-avatar.svg"
const AboutClint = (props) => {
    const {id,ar_title , en_title ,logo ,drivers_count ,telephone ,idUser } = props

  return (
    <MainStyleAbout key={id}>
      <MainRightAbout>
      <div className='photo-logo'>
        <img src={Logo3} alt="logo" />
      </div>
      <div className='apout'>
        
        <h5>  الاسم بالانجليزي : {en_title}</h5>
        <h5>  الاسم بالعربي : {ar_title}</h5>

        <p>العدد : {drivers_count}</p>
        

       {/* <Link to={`/EditUser/${nameAr}`}><button>تعديل العميل</button></Link> */}
      </div>
      </MainRightAbout>
      <MainLiftAbout>
      <div className='item-wedget'>
        <div className='header-wedget'>
          <AiFillStar className='icon-wedget' />
          <p>نوع الاشتراك</p>
        </div>
        <div className='type'>
          <h2 className='text-white'>Basic</h2>
        </div>
      </div>
      <div className='item-wedget'>
        <div className='header-wedget'>
          <img src={request} />
          <p>عدد الطلبات</p>
        </div>
        <div className='type'>
          <h2>350</h2>
        </div>
      </div>
      <div className='item-wedget'>
        <div className='header-wedget'>
        <img src={delevery} />
          <p>عدد السائقين</p>
        </div>
        <div className='type'>
          <h2>250</h2>
        </div>
      </div>

      </MainLiftAbout>
    </MainStyleAbout>
  )
}
const MainStyleAbout =  styled.div` 
display: flex;
justify-content: space-between;
padding: 30px;
border-bottom:1px solid var(--font-opacity) ;
@media (max-width:688px ) {
    flex-direction: column;
  }
`
const MainRightAbout =  styled.div`
display: flex;
align-items: center;
@media (max-width:688px ) {
    justify-content: space-between;
  }
.photo-logo{
  img{
    width: 160px;
    @media (max-width:688px ) {
    width: 110px;
  }
  }

}
.apout{
  margin-right: 15px ;
  p ,h5 {
    padding: 4px 0;
    color: var(--font);
  }
  h5{
    font-size: 17px;
  }

  @media (max-width:550px ) {
    p {
      font-size: 14px;
    }
  }
  button{
    all: unset;
    border: 1px solid var(--font-opacity);
    border-radius: 7px;
    padding: 4px 12px;
    margin-top: 6px;
    color: var(--font);  
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
  }
  
}
`
const MainLiftAbout =  styled.div`
display: flex;
align-items: center;
  @media (max-width:1000px ) {
   flex-direction: column;
  }
  @media (max-width:550px ) {
    width: 100%;
    margin: 30px 0;
  }
.item-wedget{
  margin: 8px 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  width: 250px;
  height: 150px;
  .icon-wedget , img{
    margin-left: 18px;
  }
  
  h2{
    font-size: 27px;
    
  }
  @media (max-width:1486px ) {
    width: 170px;
  }
  @media (max-width:1000px ) {
    width: 250px;
  }
  @media (max-width:550px ) {
    width: 100%;
    
  }
  :first-child{
    background-color: var(--secound-color);
    color: white;
    .icon-wedget{
      font-size: 50px;
      background-color: #ffffff24 ;
      border-radius: 50%;
      padding: 10px;
    }
  }
  :last-child , :nth-child(2) {
    background-color: white;
    p{
    color: var(--primary-color);
  }
  }
  .header-wedget{
    display: flex;
    align-items: center;
  }

  
}
`
export default AboutClint