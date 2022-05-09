import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import succes from "../../photo/glopal/succes.jpg"
import { useSelector, useDispatch } from 'react-redux'
const AddedClint = ({HandelClose , name}) => {
    
  return (
    <StyleyAddedClint>
        <img src={succes} />
        <h2>تم اضافه {name} بنجاح</h2>
        <p>يمكنك تعديل بيانات العميل من حساب العميل</p>
        <button onClick={HandelClose} >المتابعه</button>
        <Link to={`/clint/${name}`} onClick={HandelClose}>بيانات العميل</Link>
    </StyleyAddedClint>
  )
}
const StyleyAddedClint  = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
position: relative;
img{
    width: 100%;
    @media screen {
    width: 250px;
    }
  animation-name: MoveUpDown;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  position: absolute;
}

h2{
margin-top:14px ;
}
p{
    color: var(--font);
    font-weight: bold;
    font-size: 15px;
}
button{
    all: unset;
    cursor: pointer;
    border-radius: 8px;
    padding: 10px 50px;
    background-color: var(--secound-color);
    margin-top: 40px;
    color: white;
    font-weight: bold;
    font-size: 17px;
    
}
a{
    color: black;
    text-decoration: underline;
    padding: 10px;
}
@keyframes MoveUpDown {
    0% , 100% {
    transform: translateY(-190px);
  
  }

  50%  {
    transform: translateY(-180px) ;
    
  }
}
  
` 
export default AddedClint