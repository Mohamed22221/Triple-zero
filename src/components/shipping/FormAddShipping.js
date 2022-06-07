
import {  useDispatch ,useSelector } from 'react-redux'
import ShortUniqueId from 'short-unique-id'
import React ,{useState ,useEffect} from 'react'
import styled from "styled-components"
import { SendShipping } from '../../store/ShippingSlice';
import { MdPersonAddAlt } from 'react-icons/md';


const FormAddShipping = ({setDeleted}) => {
    const ImgeHandeler = (e) =>{
        const Reader = new FileReader()
        Reader.onload = () =>{
            if (Reader.readyState === 2) {
                setValues({...values , photo: e.target.files[0] }) 
                console.log('e.target.files[0]:::::1111111', e.target.files[0]);
                console.log('e.target.files[0]:::::1111111', Reader.result);
            }
        }
        console.log('e.target.files[0]', e.target.files[0]);
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
      photo: null,
      user_id :`#${uid()}`,
      en_name : "mohamed",
      ar_name : "محمد" ,
      mobile:"012211",
      address: "cairo",
      email : "hamdy@gmail" ,
      status : 1 ,
     
      
  })
  // click add customer
  const AddUser = () =>{
    dispatch(SendShipping({
      photo: values.photo,
      user_id : 2 ,
      //quote_id :null ,
      en_name : values.en_name,
      ar_name : values.ar_name,
      mobile: "025412121",
      address: values.address,
      email : values.email ,
      status : values.status ,
      lon:-5650,
      lat:2365,
      password: '12345678',
      status: 1 ,
      quote_id:null


    }))
    setDeleted(false)
   
}
  return (
    <StyleMainInput>
    <StyleForm>
        <StyleSmaleDiv>
            <div className='one-input  '>
                <StyleLabel>رقم العميل</StyleLabel>
                <input type="text" placeholder='#As578' value={values.user_id} disabled     />
            </div>

            
        </StyleSmaleDiv>
        <StyleSmaleDiv>
            <div className='one-input'>
                <StyleLabel>اضف شعار للعميل</StyleLabel>
                <input type="file" onChange={ImgeHandeler} />
            </div>

        </StyleSmaleDiv>
        <StyleSmaleDiv>
            <div className='one-input'>
                <StyleLabel>الاسم بالانجليزي <span>*</span></StyleLabel>
                <input type="text" placeholder='اكتب الاسم بالانجليزي' value={values.en_name} onChange={(e) =>setValues({...values , en_name:e.target.value}) } />
            </div>
            <div className='one-input'>
                <StyleLabel>الاسم بالعربي <span>*</span></StyleLabel>
                <input type="text" placeholder='اكتب الاسم بالعربي' value={values.ar_name} onChange={(e) =>setValues({...values , ar_name:e.target.value}) } />
            </div>
             
        </StyleSmaleDiv>
        <StyleSmaleDiv>
            <div className='one-input'>
                <StyleLabel>رقم التلفون <span>*</span></StyleLabel>
                <input type="number" required placeholder='اكتب رقم التلفون'  value={values.mobile} onChange={(e) =>setValues({...values , mobile:e.target.value}) }/>
                <StyleLabel>ايميل العميل <span>*</span></StyleLabel>
                <input type="email" placeholder='اكتب اميل العميل' value={values.email} onChange={(e) =>setValues({...values , email:e.target.value}) }/>
                <StyleLabel>  العنوان <span>*</span></StyleLabel>
                <input type="text" placeholder='اكتب العنوان ' value={values.address} onChange={(e) =>setValues({...values , address:e.target.value}) } />
                <StyleLabel>حاله الدفع<span>*</span></StyleLabel>
                <input type="text" placeholder='اكتب حاله الدفع' value={values.status} onChange={(e) =>setValues({...values , status:e.target.value}) }  />

           </div> 
        </StyleSmaleDiv>

    </StyleForm>
        <StyleButtonAdd onClick={AddUser} >
      <MdPersonAddAlt className='MdPersonAddAlt' />
      <span > أضافه عميل </span>
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
&:first-child{
    opacity: 0.6;
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
    width: 230px;
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
export default FormAddShipping