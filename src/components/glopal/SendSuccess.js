import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import gif from "../../photo/glopal/gif.gif"
import { HideSlider } from '../../store/StateSlice'
const SendSuccess = ({Operationtitle }) => {
    const dispatch = useDispatch()
    const HandelClose = () =>{
        dispatch(HideSlider())
    }
  return (
    <StyleSuccessClint>
        <img src={gif} />
        <h2>{Operationtitle}</h2>
        <p>يمكنك الرجوع لبيانات العميل مره اخري من القائمه السوداء</p>
        <button onClick={HandelClose}>المتابعه</button>
        <Link to="/Customers/blackList" onClick={HandelClose}>القائمه السوداء</Link>
    </StyleSuccessClint>
  )
}
const StyleSuccessClint = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
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
    padding: 4px 0;
    text-align: center;
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
export default SendSuccess