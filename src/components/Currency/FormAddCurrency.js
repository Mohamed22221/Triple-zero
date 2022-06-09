
import {  useDispatch ,useSelector } from 'react-redux'
import ShortUniqueId from 'short-unique-id'
import React ,{useState ,useEffect} from 'react'
import styled from "styled-components"
import { SendManager } from '../../store/ManagersSlice';
import { MdPersonAddAlt } from 'react-icons/md';
import { HideSlider } from '../../store/StateSlice';
import swal from 'sweetalert';


const FormAddCurrency = ({setDeleted}) => {

  const dispatch = useDispatch()
  //uniqe id
    const uid = new ShortUniqueId({ length: 6 });
  //values input

  const initialState = {
   
    en_title: "",
    ar_title: "",
    symbol : "" ,
    exchange_rate:"",
    sequence: "",

  }
  

const [values, setValues] = useState(initialState)
console.log(values)
  // click add Manager
  const AddUser = () =>{
    dispatch(SendManager(values))
     .unwrap()
    .then(() => {
      setValues(initialState)
      dispatch(HideSlider())
      swal("تم تنفيذ الامر بنجاح", {
        icon: "success",
        button: 'موافق',
      });
    }).catch(() => {
      swal("عفوا لم يتم تنفيذ الامر", {
        icon: "error",
        button: 'موافق'
      });

    })


    setDeleted(false)
   
}
  return (
    <StyleMainInput>
    <StyleForm>


        <StyleSmaleDiv>
            <div className='one-input'>
                <StyleLabel>الأسم بالانجليزي  <span>*</span></StyleLabel>
                <input type="text" placeholder='اكتب اسم العمله بالانجليزي' value={values.en_title} onChange={(e) =>setValues({...values , en_title:e.target.value}) } />
                <StyleLabel> الاسم بالعربي <span>*</span></StyleLabel>
                <input type="email" placeholder='اكتب اسم العمله بالعربي ' value={values.ar_title} onChange={(e) =>setValues({...values , ar_title:e.target.value}) }/>
                <StyleLabel>رمز العمله<span>*</span></StyleLabel>
                <select value={values.symbol} onChange={(e) =>setValues({...values , symbol:e.target.value}) } className="currency">
                  <option value="EGP">EGP</option>
                  <option value="KWD">KWD</option>
                  <option value="USD">USD</option>
                </select>
                <StyleLabel>سعر الصرف<span>*</span></StyleLabel>
                <input type="text" placeholder='اكتب سعر الصرف ' value={values.exchange_rate} onChange={(e) =>setValues({...values , exchange_rate:e.target.value}) }  />
                <StyleLabel>رقم تسلسل<span>*</span></StyleLabel>
                <input type="email" placeholder='اكتب رقم تسلسل  ' value={values.sequence} onChange={(e) =>setValues({...values , sequence:e.target.value}) }/>

           </div> 
        </StyleSmaleDiv>

    </StyleForm>
        <StyleButtonAdd onClick={AddUser} >
      <MdPersonAddAlt className='MdPersonAddAlt' />
      <span > أضافه مدير </span>
    </StyleButtonAdd>
</StyleMainInput>
  )
}
const StyleMainInput = styled.div`
overflow-y: auto;
overflow-x: hidden;
padding: 20px 0;
margin-top: 30px;
display: flex;
flex-direction: column;
align-items: center;

::-webkit-scrollbar {
  width: 0px;
}
`
const StyleForm = styled.form`

`
const StyleLabel= styled.label`
font-weight: bold;
span{
    color: var(--danger-color);
}
`
const StyleSmaleDiv = styled.div`
display: flex;
align-items: center;
@media (max-width:550px ) {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
}

&:nth-child(4){
    input {
    width: 470px;
    @media (max-width:550px ) {
    width:290px;
    padding: 10px 30px;
    }
    @media (max-width:370px ) {
    width:220px;
    padding: 10px 30px;
}

    }
}

input,.currency{
    font-size: 14px;
    width: 430px;
    margin: 8px 0 8px 10px;
    padding: 8px 12px;
    border: 1px solid var(--font-opacity);
    border-radius: 20px;
@media (max-width:550px ) {
    width:290px;
    padding: 10px 30px;
}
@media (max-width:370px ) {
    width:220px;
    padding: 10px 30px;
}
}
input[type=file] {
background-color: var(--secound-color);
color: white;
opacity: 0.9;
}
//class
.one-input{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}
.currency{
    font-weight: bold;
}



`


const StyleButtonAdd = styled.div`
display: flex;
align-items: center;
background-color: var(--primary-color);
padding: 8px 20px;
width: 166px;
text-align: center;
cursor: pointer;
color: white;
margin-top: 20px;
border-radius: 7px;
transition: 0.6s;
display: flex;
justify-content: space-evenly;
:hover{
  opacity: 0.7;
}
p{
    padding: 0 10px ;
}
.MdPersonAddAlt{
    font-size: 25px;
}
@media (max-width:1160px) {  
margin: 10px;
           
}
`
export default FormAddCurrency