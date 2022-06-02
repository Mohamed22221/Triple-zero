import React from 'react'
import styled from "styled-components"
import { AiOutlineDelete } from 'react-icons/ai';
import { useDispatch ,useSelector } from 'react-redux';
import { addClintBlackList } from '../../store/ClintSlice2';
import { Link } from 'react-router-dom';
const ButtonDelete = ({values,nameclint,state,logo,dateSubscription,setDeleted,Disapeld,price,duration,paymentDate,clintemail,websitelink,tradetype,currencypaid,compony}) => {
  const dispatch = useDispatch()
 
   //get value inbut
  const HandelClick = () =>{
   
      dispatch(addClintBlackList({
        //delete Data
        userid:values.id,
        name:nameclint,
        logo:logo,
        ReasonDelete:values.ReasonDelete,
        DeleteDate:values.DeleteDate,
        state2:values.state2,
        state:state,
        dateSubscription:dateSubscription,
        price:price,
        duration:duration,
        paymentDate:paymentDate,
        clintemail:clintemail,
        tradetype:tradetype,
        currencypaid:currencypaid,
        compony:compony,
        websitelink:websitelink
        
        }))
        setDeleted(false)
    }

  return (
   <StyleButtonDelete onClick={HandelClick}  >
      <button  disabled={Disapeld}>حذف العميل</button>
    </StyleButtonDelete>
  )
}
const StyleButtonDelete = styled.div`
display: flex;
justify-content: center;
button{
all: unset;
display: flex;
align-items: center;
background-color: var(--danger-color);
margin: 8px 10px ;
padding: 12px 25px;
text-align: center;
:disabled{
  opacity: 0.4;
  cursor: no-drop;
}
:enabled{
  :hover{
  opacity: 0.7;
}
}
cursor: pointer;
color: white;
border-radius: 7px;
transition: 0.6s;

.MdPersonAddAlt{
    font-size: 25px;
    margin-left: 10px;
    cursor: not-allowed;
}

}
p{
    padding: 0 10px ;
}


`
export default ButtonDelete