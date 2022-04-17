import React ,{useState} from 'react'
import styled from "styled-components"
import logo from "../../photo/glopal/logo.svg"
import home from "../../photo/icons/home.svg"
import customers from "../../photo/icons/customers.svg"
import arithmetic from "../../photo/icons/arithmetic.svg"
import settings from "../../photo/icons/settings.svg"
import logout from "../../photo/icons/logout.svg"
import { AiOutlineAppstore  } from 'react-icons/ai';
import {  BsPerson } from 'react-icons/bs';
import {  MdOutlineSettings } from 'react-icons/md';
import {  MdSupervisorAccount } from 'react-icons/md';







const SideBar = ({toogleBar,HandelClose}) => {
    const  [activeLink ,setActive] = useState("item-widget") 
    const activeFunction = () =>{
       setActive("active")
    }
  return (
     
    <StyleSideBar toogleBar={toogleBar}   >
        <StyleTop >
        <div className='img-logo'>
            <img src={logo} />
            <h4>TRIPLE ZERO</h4>
        </div>
        <div className='widget'>
            <ul >
            <a  onClick={HandelClose}   >
                <div className= "item-widget"    >
                    <AiOutlineAppstore className='icon-name'/>
                    <li >الرئيسيه</li>
                </div>
            </a>
            <a  onClick={HandelClose}   >
                <div className="item-widget"  >
                    <MdSupervisorAccount className='icon-name' />
                    <li>العملاء</li>
                </div>
            </a>
                <div className='item-widget'>
                <BsPerson className='icon-name'/>
                    <li> حسابي</li>
                </div>
                <div className='item-widget'>
                    <MdOutlineSettings className='icon-name' />
                    <li>الاعدادات</li>
                </div>              
            </ul>
        </div>
        </StyleTop>
        <Stylebutton>
            <img src={logout} />
            <li>تسجيل الخروج</li>
        </Stylebutton>
    </StyleSideBar>
    
  )
}
// style StyleSideBar--
const StyleSideBar = styled.div`
position: fixed;
right: 0;
top: 0;
bottom: 0;
display: flex;
flex-direction: column;
justify-content:space-between;
padding: 20px 0;
align-items: center;
width: 230px;
z-index: 100;
transition: 0.7s;
background-color: var(--secound-color);
color: white;
overflow: hidden;
-webkit-box-shadow: -4px 5px 24px -13px rgba(105,105,105,1);
-moz-box-shadow: -4px 5px 24px -13px rgba(105,105,105,1);
box-shadow: -4px 5px 24px -13px rgba(105,105,105,1);
@media (max-width:720px ) {
transform: ${({toogleBar}) => toogleBar ? 'translateX(0)' : 'translateX(290px)'};
}


`
const StyleTop = styled.div`
//logo 
.img-logo{
display:flex ;
justify-content: center;
align-items: center;
position: relative;
flex-direction: column;
img{

transition: 0.7s; 
}
span img{
    width: 5px;
}

}


//ul icon 
.widget{
    margin-top: 80px;
    transition:0.7s;
    display: flex;
    justify-content: center;
    ul .item-widget{
        display: flex;
        align-items: center;
        cursor: pointer;
        margin: 10px 0;
        transition: 0.6s;
        padding: 15px 90px ;
        .icon-name{
           font-size:28px;
           transition: 0.6s;
        }
        &:hover{
            background-color: var(--background-opacity);
            li{
                color: var(--primary-color);
            }
            .icon-name {
                color: var(--primary-color);
            }
        }
    }
    ul a{
        
        background-color: black !important;

    }
    ul li{
        transition: 0.6s;
        color:white;
        font-size: 17px;
        margin-right: 10px;  
    }
}
`

const Stylebutton = styled.div`
display: flex;
padding: 20px;
margin-bottom: 18px;
cursor: pointer;
li{
    padding-right:12px ;
}
`
export default SideBar