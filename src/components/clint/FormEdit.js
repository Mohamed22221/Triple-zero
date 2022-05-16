import React ,{useState,useEffect} from 'react'
import styled  from "styled-components"
import {  editClint } from '../../store/ClintSlice';
import {  useDispatch ,useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {  useToasts } from 'react-toast-notifications';
const FormEdit = () => {
  const UserData = useSelector((state) => state.clint.DataUser)
  const Params = useParams()
  const ParamsId = `${Params.userid}`
  const id= UserData.filter((item)=>item.name === ParamsId).map((user => user.idUser))
  const dateSubscription= UserData.filter((item)=>item.name === ParamsId).map((user => user.dateSubscription))
  const ReasonDelete= UserData.filter((item)=>item.name === ParamsId).map((user => user.ReasonDelete))
  const DeleteDate= UserData.filter((item)=>item.name === ParamsId).map((user => user.DeleteDate))
  const { addToast } = useToasts();
 //redux toolkit
 const dispatch = useDispatch()

 //values input
   const [values , setValues] = useState({
     logo:"" , 
     idUser :id[0],
     name :"محمد سيد" ,
     compony:"العربي" ,
     dateSubscription: dateSubscription[0],
     price: "1900",
     duration: "3" ,
     paymentDate: dateSubscription[0],
     clintemail : "hamdymedo525@gmail.com" ,
     websitelink : "https://www.youtube.com/" ,
     state : "لم يدفع" ,
     currencypaid : "المصري",
     ReasonDelete:ReasonDelete[0] ,
     DeleteDate: DeleteDate[0],
 })

 
 //HandelChange function 
  const HandelChange = (e) =>{
    e.preventDefault()
    dispatch(editClint({
      logo: values.logo ,
      idUser :values.idUser,
      name : values.name,
      compony:values.compony ,
      dateSubscription:values.dateSubscription,
      price: values.price,
      duration: values.duration ,
      paymentDate: values.dateSubscription,
      clintemail : values.clintemail ,
      websitelink : values.websitelink ,
      state : values.state ,
      currencypaid : values.currencypaid,
      ReasonDelete:values.ReasonDelete ,
      DeleteDate:values.DeleteDate
         
    }))
    addToast(`تم اجراء التعديلات بنجاح` , { appearance: 'success' });
  }

 // click add customer
 const ImgeHandeler = (e) =>{
  const Reader = new FileReader()
  Reader.onload = () =>{
      if (Reader.readyState === 2) {
          setValues({...values , logo: Reader.result }) 
      }
  }
  Reader.readAsDataURL(e.target.files[0])
}
  return (
    <StyleMainInput>
      <h2>تعديل البيانات</h2>
      <StyleForm>
      {UserData.filter((item)=>item.name === ParamsId).map((user =>{
        return (
          <div>
        <div className='display-input' key={user.idUser}>
            <div className='input'>
              <label className='disabled'>رقم العميل <span>*</span></label>
              <input className='disabled' value={values.idUser}    />
            </div>
            <div className='input'>
              <label className='disabled'>تاريخ الاشتراك <span>*</span></label>
              <input className='disabled' value={user.dateSubscription} type="date" disabled />
            </div>
            <div className='input'>
              <label>شعار العميل <span>*</span></label>
              <input type="file" onChange={ImgeHandeler}  />
            </div>
            <div className='input'>
              <label>مده الاشتراك<span>*</span></label>
              <input type="number"  value={values.duration}  onChange={(e) =>setValues({...values , duration:e.target.value}) } />
            </div>
            <div className='input'>
              <label>اسم العميل <span>*</span></label>
              <input type="text" placeholder='عدل اسم العميل' value={values.name} onChange={(e) =>setValues({...values , name:e.target.value}) } />
            </div>
            <div className='input'>
              <label>اسم الشركه <span>*</span></label>
              <input type="text" placeholder='عدل اسم الشركه'  value={values.compony} onChange={(e) =>setValues({...values , compony:e.target.value}) }/>
            </div>
            <div className='input'>
              <label>حاله الدفع <span>*</span></label>
              <input type="text" placeholder='عدل حاله الدفع' value={values.state} onChange={(e) =>setValues({...values , state:e.target.value}) } />
            </div>
            <div className='input'>
              <label>ايميل العميل <span>*</span></label>
              <input type="email" placeholder='عدل اميل العميل' value={values.clintemail} onChange={(e) =>setValues({...values , clintemail:e.target.value}) } />
            </div>
            <div className='input'>
              <label>رابط الموقع <span>*</span></label>
              <input type="text" placeholder='عدل رابط الموقع' value={values.websitelink} onChange={(e) =>setValues({...values , websitelink:e.target.value}) }/>
            </div>
            <div className='input'>
              <label> سعر الاشتراك <span>*</span></label>
              <input type="text" placeholder='عدل سعر الاشتراك' value={values.price} onChange={(e) =>setValues({...values , price:e.target.value}) } />
            </div>
            <div className='input'>
              <label>العمله <span>*</span></label>
              <select className="currency" id="cars" form="carform" value={values.currencypaid} onChange={(e) =>setValues({...values , currencypaid:e.target.value}) } >
                    <option value="مصري">مصري</option>
                    <option value="كويتي">كويتي</option>
              </select>
            </div>
        </div>
        <div className='edit'>
        <button onClick={HandelChange} ><Link to={`/clint/${values.name}`}>تعديل</Link></button>
        </div>
         </div>
          )
        }))}

        
        
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
  margin: 20px 0 10px;
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
.edit{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px 0 0 0;
  button{
    all: unset;
    padding: 10px 50px;
    font-weight: bold;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    background-color: var(--secound-color);
    transition: 0.6s;
    :hover{
      opacity: 0.6;
    }
  }
}
`
const StyleForm = styled.form`
margin: 10px 20px;
.display-input{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  @media (max-width:1500px ) {
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  }
    
    gap: 15px;
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
        padding: 7px 12px;
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