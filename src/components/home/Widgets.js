import React from 'react'
import styled from "styled-components"
import alert from "../../photo/icons/alert.svg"
import Customer from "../../photo/icons/customerswedget.svg"
import requests from "../../photo/icons/requestswedget.svg"
import delevery from "../../photo/icons/deleverywedget.svg"



import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineArrowUp } from 'react-icons/ai';



const Widgets = () => {
  return (
    <StyleWedget>
        <StyleItemWedgetAlert>
        <img src={alert}></img>
        <h4>تنبيه تاخير الدفع</h4>
        <span>2</span>
        </StyleItemWedgetAlert>
        <StyleItemWedgetAbout>
            <WedgetAboutRight>
            <img src={Customer}></img>
            <p>عدد العملاء</p>
            <h2>250</h2>
            </WedgetAboutRight>
            <WedgetAboutLeft>
            <BsThreeDotsVertical className='BsThreeDotsVertical' />
            <p>زياده %23<AiOutlineArrowUp className='AiOutlineArrowUp'/></p>
            </WedgetAboutLeft>
        </StyleItemWedgetAbout>
        <StyleItemWedgetAbout>
            <WedgetAboutRight>
            <img src={requests}></img>
            <p>عدد الطلبات</p>
            <h2>450</h2>
            </WedgetAboutRight>
            <WedgetAboutLeft>
            <BsThreeDotsVertical className='BsThreeDotsVertical' />
            <p>زياده %35<AiOutlineArrowUp className='AiOutlineArrowUp'/></p>
            </WedgetAboutLeft>
        </StyleItemWedgetAbout>
        <StyleItemWedgetAbout>
            <WedgetAboutRight>
            <img src={delevery}></img>
            <p>عدد السائقين</p>
            <h2>70</h2>
            </WedgetAboutRight>
            <WedgetAboutLeft>
            <BsThreeDotsVertical className='BsThreeDotsVertical' />
            <p>زياده %10<AiOutlineArrowUp className='AiOutlineArrowUp'/></p>
            </WedgetAboutLeft>
        </StyleItemWedgetAbout>
    </StyleWedget>
  )
}

//style Wedget
const StyleWedget = styled.div`
margin-top: 33px;
width: 25%;
@media (max-width:910px) {
  display:grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  gap:0 10px ;
  width:100% ;
}
@media (max-width:760px) {
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  width:100% ;
  margin-top: 15px;
}
`
const StyleItemWedgetAlert = styled.div`
position: relative;
background-color: white;
padding: 13px;
display: flex;
align-items: center;
border-radius: 10px;
margin: 10px 0;
h4{
    margin-right: 40px;
    font-size: 20px;
}
span{
    padding: 0px 9px;
    border-radius:50% ;
    color: white;
    background-color: var(--danger-color);
    position: absolute;
    top: -10px;
    left: -8px;
}


`
const StyleItemWedgetAbout = styled.div`
background-color: white;
padding: 35px;
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 10px;
margin: 22px 0;
`

const WedgetAboutRight = styled.div`
display: flex;
flex-direction: column;
align-items: center;
img{
    padding-bottom: 20px;
}
p{
    font-size: 14px;
    color: var(--font);
    font-weight: bold;
}
h2{
    line-height: 30px;
}

`
const WedgetAboutLeft = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: space-between;
.BsThreeDotsVertical{
    font-size: 25px;
    margin-bottom: 30px ;
    cursor: pointer;
}
p{
    margin-top: 20px;
    display: flex;
    align-items: center;
    color: var(--succes-color);
}

`



export default Widgets
