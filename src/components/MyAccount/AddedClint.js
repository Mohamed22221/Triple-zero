import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import gif from "../../photo/glopal/gif.gif"
const AddedClint = ({HandelClose , name}) => {
    
  return (
    <StyleyAddedClint>
        <img src={gif} />
        <h2>تم اضافه {name} بنجاح</h2>
        <p>يمكنك تعديل بيانات العميل من حساب العميل</p>
        <button onClick={HandelClose} >المتابعه</button>
        <Link to={`/Customers/clint/${name}`} onClick={HandelClose}>بيانات العميل</Link>
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
    width: 350px;
    @media screen {
    width: 250px;
    }

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

  
` 
export default AddedClint