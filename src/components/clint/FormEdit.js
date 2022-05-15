import React ,{useState} from 'react'
import styled  from "styled-components"
import { addClint } from '../../store/ClintSlice';
import {  useDispatch ,useSelector } from 'react-redux'
import ShortUniqueId from 'short-unique-id'
const FormEdit = () => {
  const ImgeHandeler = (e) =>{
    const Reader = new FileReader()
    Reader.onload = () =>{
        if (Reader.readyState === 2) {
            setValues({...values , logo: Reader.result }) 
        }
    }
    Reader.readAsDataURL(e.target.files[0])
}
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
     name : "",
     compony:" " ,
     dateSubscription: date,
     price: "",
     duration: "" ,
     paymentDate: date,
     clintemail : "i" ,
     websitelink : "" ,
     state : "" ,
     currencypaid : ""  
 })
 // click add customer

  return (
    <StyleMainInput>
      <h2>تعديل البيانات</h2>
      <StyleForm>
        <div className='display-input'>
            <div className='input'>
              <label className='disabled'>رقم العميل <span>*</span></label>
              <input className='disabled' value={values.idUser} disabled />
            </div>
            <div className='input'>
              <label className='disabled'>تاريخ الاشتراك <span>*</span></label>
              <input className='disabled' type="date" disabled />
            </div>
            <div className='input'>
              <label>شعار العميل <span>*</span></label>
              <input type="file"  />
            </div>
            <div className='input'>
              <label>مده الاشتراك<span>*</span></label>
              <input type="number" value="3" />
            </div>
            <div className='input'>
              <label>اسم العميل <span>*</span></label>
              <input type="text" placeholder='عدل اسم العميل' />
            </div>
            <div className='input'>
              <label>اسم الشركه <span>*</span></label>
              <input type="text" placeholder='عدل اسم الشركه'/>
            </div>
            <div className='input'>
              <label>حاله الدفع <span>*</span></label>
              <input type="text" placeholder='عدل حاله الدفع' />
            </div>
            <div className='input'>
              <label>ايميل العميل <span>*</span></label>
              <input type="email" placeholder='عدل اميل العميل' />
            </div>
            <div className='input'>
              <label>رابط الموقع <span>*</span></label>
              <input type="text" placeholder='عدل رابط الموقع' />
            </div>
            <div className='input'>
              <label> سعر الاشتراك <span>*</span></label>
              <input type="text" placeholder='عدل سعر الاشتراك' />
            </div>
            <div className='input'>
              <label>العمله <span>*</span></label>
              <select className="currency" id="cars" form="carform" value={values.currencypaid} onChange={(e) =>setValues({...values , currencypaid:e.target.value}) } >
                    <option value="مصري">مصري</option>
                    <option value="كويتي">كويتي</option>
              </select>
            </div>
            
        </div>
      </StyleForm>
    </StyleMainInput>

  )
}
const StyleMainInput = styled.div`
width: 50%;
border-radius: 10px 0px 0px 10px;
display: flex;
flex-direction: column;
overflow: auto;
//scroll
::-webkit-scrollbar {
  width: 5px;
}
 
::-webkit-scrollbar-track {
  background-color: var(--background-opacity);
}
 
::-webkit-scrollbar-thumb {
  background-color: var(--secound-color);
  outline: 1px solid slategrey;
}
@media (max-width: 780px) {
  overflow: hidden;
}

h2{
  text-align: center;
  position: relative;
  margin: 20px;
  &::before{
    position: absolute;
    content: "";
    transform: rotate(2deg);
    width: 150px;
    height: 6%;
    bottom: -4px;
    background-color: var(--primary-color);
  }
}

@media (max-width:950px) {
  width: 100%;
  height: 100%;
}
@media (max-width:950px) {
  margin: 10px 0;
}
`
const StyleForm = styled.form`
margin: 20px;
.display-input{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  @media (max-width:1500px ) {
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  }
    
    gap: 20px;
    margin-top: 18px;
    .input{
      display: flex;
      flex-direction: column;
      input[type="file"] {
          padding: 6px 12px;
          background-color: var(--secound-color);
          color: white;
        }
      .disabled{
          opacity: 0.6;
        }
      input,.currency{
        padding: 8px 12px;
        border-radius: 20px;
        border: 1px solid var(--font-opacity);

      }
      label{
        padding: 8px 0;
        font-weight: bold;
        span{
          color: var(--danger-color);
        }
      }
    }
}
`


export default FormEdit