import React, { useEffect } from 'react'
import styled from "styled-components"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import pattern from "../../photo/glopal/pattern-1.png"
import EditUser from './EditUser'
import {  editClint } from '../../store/ClintSlice';

const PrecedentClint = () => {
  const clientDetails = useSelector(state => state.clients2.clients2)
  const Params = useParams()
  const ParamsId = `${Params.userid}`
 //values input

  const dispatch = useDispatch()

  return (
    <MainStylePrecedent>
      <h2>البيانات القديمه</h2>
      {clientDetails.filter((item)=>item.en_name === ParamsId).map((user =>{
        return (
          <div className='main-cart' key={user.idUser}>
            <div className='header-cart'>
              <div className='img'>
                <img src={user.logo} alt="logo" />
                <p>{user.idUser}</p>
              </div>
            </div>
            <div className='item-apout'>
              <div className='item'>
                <h3>الاسم : <span>{user.name}</span></h3>
              </div>
              <div className='item'>
                <h3>الشركه : <span>{user.compony}</span></h3>
              </div>
              <div className='item'>
                <h3>تاريخ الاشتراك : <span>{user.dateSubscription}</span></h3>
              </div>
              <div className='item'>
                <h3>تاريخ الدفع : <span>{user.paymentDate}</span></h3>
              </div>
              <div className='item'>
                <h3>اميل العميل : <span>{user.clintemail}</span></h3>
              </div>
              <div className='item'>
                <h3>موقع العميل : <span>{user.websitelink}</span></h3>
              </div>
              <div className='item'>
                <h3> الحاله : <span>{user.state}</span></h3>
              </div>
              <div className='item'>
                <h3> السعر : <span>{user.price}</span></h3>
              </div>
              <div className='item'>
                <h3> العمله المدفوع بها : <span>{user.currencypaid}</span></h3>
              </div>
              <div className='item'>
                <h3>   المده : <span>{user.duration} اشهر</span></h3>
              </div>
            </div>
          </div>
        )
      }))}

      
    </MainStylePrecedent>
  )
}
const MainStylePrecedent = styled.div`
width: 50%;
background-color: var(--secound-color);
border-radius: 0 10px 10px 0;
padding: 20px 20px 0 20px;
color: white;
position: relative;
z-index: 1;
overflow: auto;

//scroll
::-webkit-scrollbar {
  width: 5px;
}
 
::-webkit-scrollbar-track {
  background-color: var(--background-opacity);
}
 
::-webkit-scrollbar-thumb {
  background-color: var(--secound-color);
  outline: 1px solid slategrey;
}
&::before{
   position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-image: url(${pattern});
    content: "";
    z-index: -1;
    opacity: 1;
    border-top-right-radius: 6px;
}
@media (max-width:950px) {
    width: 100%;
    border-radius: 10px 10px 0 0;
    height: 100%;
}
h2{
  text-align: center;
  position: relative;
  &::before{
    position: absolute;
    content: "";
    transform: rotate(2deg);
    width: 150px;
    height: 6%;
    bottom: -4px;
    background-color: var(--primary-color);
  }
}
.main-cart{
  .header-cart{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    img{
      width: 160px;
      height: 160px;
      border-radius: 4%;
    }
    p{
      text-align: center;
    }
  }
  .item-apout{
    margin: 20px 0 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    text-align: center;
    height: 100%;
    @media (max-width: 1493px) {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    
    .item{
      background-color: #7070702e;
      margin: 8px 8px;
      padding: 16px 14px;
      transition: 0.5s;
      border-radius: 4px;
      :hover{
        background-color: var(--primary-color);
      }
      h3{
        font-size: 16px;
        
        span{
          
        }
      }
    }
  }

}
`
export default PrecedentClint