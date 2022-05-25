import React ,{useState ,useEffect} from 'react'
import styled from "styled-components"
import logo from "../../photo/glopal/logo.svg"
import logout from "../../photo/icons/logout.svg"
import { AiOutlineAppstore  } from 'react-icons/ai';
import {  BsPerson } from 'react-icons/bs';
import {  NavLink, useLocation } from 'react-router-dom'
import {  MdOutlineSettings } from 'react-icons/md';
import {  MdSupervisorAccount } from 'react-icons/md';
const SideBar = ({showBar,HandelClose }) => {
    let location = useLocation();
    const [stateNav , setStateNav] = useState({
        activeNav : null ,
        NavBar : [
            {
                id:1 ,
                name : "الرئيسية" ,
                link: "/Triple-zero" ,
                icon: AiOutlineAppstore,
            
            },
            {
                id:2 ,
                name : "العملاء" ,
                link: "/Customers" ,
                icon: MdSupervisorAccount,
            
            },
            {
                id:3 ,
                name : "حسابي" ,
                link: "/account",
                icon: BsPerson,
            
            },
            {
                id:4 ,
                name : "الأعدادات" ,
                link: "/setting" ,
                icon: MdOutlineSettings,
            
            },
        ]

    })
      //start Active Class and state sort
  useEffect(() => {
    setStateNav(
      {...stateNav ,activeSort:stateNav.NavBar[0] }
    )
  }, [setStateNav ])
   
  const HandelIndex = (index , item) =>{
    setStateNav(
      {...stateNav ,activeSort:stateNav.NavBar[index] }
    )
    // //start Active Class and state sort
    
    
  }
  const HandelClassName= (index) =>{
    if(stateNav.NavBar[index] ==stateNav.activeSort ){
      return "item-widget"
    }else{
      return "item-widget"
    }
  }
//end Active Class

  return (
     
    <StyleSideBar showBar={showBar}    >
        <StyleTop >
        <div className='img-logo'>
            <img src={logo} />
        </div>
        <div className='widget'>
            <ul >
            {stateNav.NavBar.map((item ,index) =>{
                return (
                    <NavLink key={item.id} to={item.link} onClick={HandelClose} exact activeClassName="active" >
                    <div className={HandelClassName(index)} onClick={()=>HandelIndex(index)} exact activeClassName="active">
                        <item.icon className='icon-name' />
                        <li>{item.name}</li>
                    </div>
                    </NavLink>
                )
            })}
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
@media (max-width:1180px ) {
transform: ${({showBar}) => showBar ? 'translateX(0)' : 'translateX(290px)'};
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
     .item-widget{
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
            background-color:  var(--background-opacity) ;
            li{
                color: var(--primary-color);
            }
            .icon-name {
                color: var(--primary-color);
            }
        }
    }
    .active{
        background-color:  var(--background-opacity) !important ; 
        li{
                color: var(--primary-color);
            }
            .icon-name {
                color: var(--primary-color);
            }
        }
        

    
    ul a{
        color: white;

    }
    ul li{
        transition: 0.6s;
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