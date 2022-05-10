import React from 'react'
import styled from "styled-components"
import { AiOutlineDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addClintBlackList } from '../../store/ClintSlice';
const ButtonDelete = ({values,nameclint,logo,dateSubscription}) => {
  const dispatch = useDispatch()
   //get value inbut
  const HandelClick = () =>{
    dispatch(addClintBlackList({
    userid:values.id,
    name:nameclint,
    logo:logo,
    ReasonDelete:values.ReasonDelete,
    DeleteDate:values.DeleteDate,
    state:values.state,
    dateSubscription:dateSubscription
    }))
    }
  return (
    <StyleButtonDelete onClick={HandelClick} >
      <button> <AiOutlineDelete className='MdPersonAddAlt' />حذف العميل</button>
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
padding: 8px 25px;
text-align: center;
cursor: pointer;
color: white;
border-radius: 7px;
transition: 0.6s;
:hover{
  opacity: 0.7;
}
.MdPersonAddAlt{
    font-size: 25px;
    margin-left: 10px;
}

}



p{
    padding: 0 10px ;
}


`
export default ButtonDelete