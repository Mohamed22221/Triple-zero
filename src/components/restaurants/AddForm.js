import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import InputCustomer from './Inputs'
import { SendClint } from '../../store/ClintSlice2';
import { useDispatch, useSelector } from 'react-redux'
import SliderClint from '../glopal/SliderClint';
import { MdPersonAddAlt } from 'react-icons/md';
import swal from 'sweetalert';
import { HideSlider } from '../../store/StateSlice';

const ClintForm = ({ showCustomer, HandelClose, show, setShow }) => {
  const toogleslider = useSelector((state) => state.ShowAndHide.value.add)

  //get date today
  const today = new Date();
  const date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
  //redux toolkit
  const dispatch = useDispatch()

  const initialState = {
    photo: null,
    user_id: 2,
    en_name: "",
    ar_name: "",
    mobile: '',
    telephone: '',
    address: "",
    email: "",
    status: 1,
    password: '',
    lon:0,
    lat:0,
  }

  const [values, setValues] = useState(initialState)
  const AddUser = () => {
    dispatch(SendClint(values))
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

    setShow(true)
  }
  return (
    <StyleForm showCustomer={showCustomer} toogleslider={toogleslider ? "true" : 'false'}>
      <div className='style-form' toogleslider={toogleslider ? "true" : 'false'}>
        <SliderClint title="اضافه مطعم"   >
          <InputCustomer values={values} setValues={setValues} />
        </SliderClint>
        <StyleFotter>
          <button onClick={AddUser} className="btn btn-main">
            <MdPersonAddAlt className='MdPersonAddAlt' />
            <span>اضافه مطعم</span>
          </button>

          <span>تريد المساعدة ؟ <a href='#'>اضغط هنا</a></span>
        </StyleFotter>
      </div>
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
transform: ${(props) => JSON.parse(props.toogleslider) ? 'translateX(0)  ' : '  translateX(590px)  '};

`

const StyleFotter = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;


.MdPersonAddAlt{
    font-size: 25px;
}
@media (max-width:1160px) {  
margin: 10px;
           
}

a{
  color: var(--primary-color);
}

`
export default ClintForm