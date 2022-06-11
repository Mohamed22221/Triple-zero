import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import InputCustomer from './Inputs'
import { useDispatch, useSelector } from 'react-redux'
import SliderClint from '../glopal/SliderClint';
import { MdPersonAddAlt } from 'react-icons/md';
import swal from 'sweetalert';
import { HideSlider } from '../../store/StateSlice';
import { SendQuote } from '../../store/QuotesSlice';

const ClintForm = ({ setShow }) => {
  const toogleslider = useSelector((state) => state.ShowAndHide.value.quotes)

  //get date today
  const today = new Date();
  const date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
  //redux toolkit
  const dispatch = useDispatch()

  const initialState = {
    en_title: '',
    ar_title: '',
    en_desc: "",
    ar_desc: "",
    sequence: '',
    cost: '',
    months: "",

  }

  const [values, setValues] = useState(initialState)
  const AddUser = () => {
    dispatch(SendQuote(values))
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
    <StyleForm toogleslider={toogleslider}>
      <div className='style-form' toogleslider={toogleslider}>
        <SliderClint title="اضافه اقتباس"   >
          <InputCustomer values={values} setValues={setValues} />
        </SliderClint>
        <StyleFotter>
          <button onClick={AddUser} className="btn btn-main">
            <MdPersonAddAlt className='MdPersonAddAlt' />
            <span>اضافه اقتباس</span>
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
transform: ${(props) => props.toogleslider ? 'translateX(0)  ' : '  translateX(590px)  '};

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