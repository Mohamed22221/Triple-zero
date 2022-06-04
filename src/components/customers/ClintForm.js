import React ,{useState ,useEffect} from 'react'
import styled from "styled-components"
import { AiOutlineClose } from 'react-icons/ai';
import ButtonAdd from '../glopal/ButtonAdd';
import InputCustomer from './InputCustomer';
import { SendClint } from '../../store/ClintSlice2';
import {  useDispatch ,useSelector } from 'react-redux'
import ShortUniqueId from 'short-unique-id'
import AddedClint from './AddedClint';
import SliderClint from '../glopal/SliderClint';
import { MdPersonAddAlt } from 'react-icons/md';

const ClintForm = ({showCustomer ,HandelClose , show,setShow}) => {
  const ToogleSlider = useSelector((state) => state.ShowAndHide.value.add)

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
      en_name : "  جاسم فيصل",
      mobile:"easy media" ,
      telephone: "",
      address: "",
      email : "info@easymedia.agency" ,
      status : 1 ,
      
  })
  // click add customer
  const AddUser = () =>{
    dispatch(SendClint({
      photo: values.photo,
      user_id : 1 ,
      // quote_id :null ,
      en_name : 'values.en_name11',
      ar_name : 'values.en_name11',
      mobile: '01236543333332542331',
      telephone:'332434333343444',
      address: values.address,
      email : values.email ,
      status : values.status ,
      lon:-5650,
      lat:2365,
      password: '12345678',
      status: 1
    }))
    setShow(true)
  }
  return (
    <StyleForm showCustomer={showCustomer} ToogleSlider={ToogleSlider}>
      {show === true ? <AddedClint HandelClose={HandelClose} name={values.name} /> :
      <div className='style-form' ToogleSlider={ToogleSlider}>
        <SliderClint title="اضافه عميل"   >
        <InputCustomer values={values} setValues={setValues}  /> 
        </SliderClint>
      <StyleFotter>
        <div className="button">
        <MdPersonAddAlt className='MdPersonAddAlt' />
        <button onClick={AddUser}>اضافه عميل</button>
        </div>

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
padding: 10px 0;
overflow: auto;

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
transform: ${(props) => props.ToogleSlider ? 'translateX(0)  ' : '  translateX(590px)  '};

`

const StyleFotter= styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
.button{
  display: flex;
align-items: center;
background-color: var(--primary-color);
padding: 8px 20px;
width: 166px;
text-align: center;
cursor: pointer;
color: white;
border-radius: 7px;
transition: 0.6s;
display: flex;
justify-content: space-evenly;
:hover{
  opacity: 0.7;
}
}
button{
    padding: 0 10px ;
    color: white;
}
.MdPersonAddAlt{
    font-size: 25px;
}
@media (max-width:1160px) {  
margin: 10px;
           
}

span{
  font-size: 15px;
  padding: 5px 0;
}
a{
  color: var(--primary-color);
}

`
export default ClintForm