import React ,{useState ,useEffect} from 'react'
import styled from "styled-components"
import { AiOutlineClose } from 'react-icons/ai';
import ButtonAdd from '../glopal/ButtonAdd';
import InputCustomer from './InputCustomer';
import { addClint } from '../../store/ClintSlice';
import {  useDispatch ,useSelector } from 'react-redux'
import ShortUniqueId from 'short-unique-id'
import AddedClint from './AddedClint';

const ClintForm = ({showCustomer ,HandelClose , show,setShow}) => {
  //get date today
  const today = new Date();
  const date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
  //redux toolkit
  const dispatch = useDispatch()
  //uniqe id
    const uid = new ShortUniqueId({ length: 6 });
  //values input
    const [values , setValues] = useState({
      logo: ``  ,
      idUser :`#${uid()}`,
      name : "  جاسم فيصل",
      compony:"easy media" ,
      dateSubscription: date,
      price: "1500",
      duration: "3" ,
      paymentDate: date,
      clintemail : "info@easymedia.agency" ,
      websitelink : "www.easymedia.agency" ,
      state : "نشط" ,
      currencypaid : "مصري"  
  })
  // click add customer
  const AddUser = () =>{
    dispatch(addClint({
      logo: values.logo ,
      idUser : values.idUser ,
      name : values.name,
      compony:values.compony ,
      dateSubscription:values.dateSubscription,
      price: values.price,
      duration: values.duration ,
      paymentDate: values.dateSubscription,
      clintemail : values.clintemail ,
      websitelink : values.websitelink ,
      state : values.state ,
      currencypaid : values.currencypaid  
    }))
    setShow(true)
  }
  return (
    <StyleForm showCustomer={showCustomer}>
      {show === true ? <AddedClint HandelClose={HandelClose} name={values.name} /> :
      <div className='style-form'>
      <StyleHeader>
          <h2>أضافه عميل جديد</h2>
          <AiOutlineClose className='icon-close' onClick={HandelClose} />
      </StyleHeader>
       <InputCustomer values={values} setValues={setValues}  /> 
      <StyleFotter>
      <ButtonAdd AddUser={AddUser} />
      <span>تريد المساعدة ؟ <a href='#'>اضغط هنا</a></span>
      </StyleFotter> 
      </div>
      }
      </StyleForm>
  )
}
const StyleForm = styled.div`
.style-form{
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
}
padding: 35px;
position: fixed;
top: 0;
bottom: 0;
right: 0;
width: 550px;
background-color: white;
z-index: 101;
transition: 0.5s ease;
@media (max-width:625px ) {
  width: 100%;
}
transform: ${({showCustomer}) => showCustomer ? 'translateX(0)' : 'translateX(590px)'};

`
const StyleHeader= styled.div`
display: flex;
align-items: center;
justify-content: space-between;
.icon-close{
  font-size: 28px;
  cursor: pointer;
}
h2{
  font-weight: bold;
}
`
const StyleFotter= styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
span{
  font-size: 15px;
  padding: 5px 0;
}
a{
  color: var(--primary-color);
}
`
export default ClintForm