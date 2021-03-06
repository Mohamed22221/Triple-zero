import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import { editClint } from '../../store/ClintSlice';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { FaUserEdit } from 'react-icons/fa';

const FormEdit = () => {
  const UserData = useSelector(state => state.clients2.clients2)

  const Params = useParams()
  const ParamsId = `${Params.userid}`
  const id = UserData.filter((item) => item.id === ParamsId).map((user => user.idUser))
  const dateSubscription = UserData.filter((item) => item.id === ParamsId).map((user => user.dateSubscription))
  const ReasonDelete = UserData.filter((item) => item.id === ParamsId).map((user => user.ReasonDelete))
  const DeleteDate = UserData.filter((item) => item.id === ParamsId).map((user => user.DeleteDate))
  const compony = UserData.filter((item) => item.id === ParamsId).map((user => user.compony))
  const name = UserData.filter((item) => item.id === ParamsId).map((user => user.name))
  const price = UserData.filter((item) => item.id === ParamsId).map((user => user.price))
  const duration = UserData.filter((item) => item.id === ParamsId).map((user => user.duration))
  const clintemail = UserData.filter((item) => item.id === ParamsId).map((user => user.clintemail))
  const websitelink = UserData.filter((item) => item.id === ParamsId).map((user => user.websitelink))
  const state = UserData.filter((item) => item.id === ParamsId).map((user => user.state))
  const currencypaid = UserData.filter((item) => item.id === ParamsId).map((user => user.currencypaid))
  const logo = UserData.filter((item) => item.id === ParamsId).map((user => user.logo))

  const { addToast } = useToasts();
  //redux toolkit
  const dispatch = useDispatch()

  //values input
  const [values, setValues] = useState({
    logo: logo[0],
    idUser: id[0],
    name: name[0],
    compony: compony[0],
    dateSubscription: dateSubscription[0],
    price: price[0],
    duration: duration[0],
    paymentDate: dateSubscription[0],
    clintemail: clintemail[0],
    websitelink: websitelink[0],
    state: state[0],
    currencypaid: currencypaid[0],
    ReasonDelete: ReasonDelete[0],
    DeleteDate: DeleteDate[0],
  })


  //HandelChange function 
  const HandelChange = (e) => {
    e.preventDefault()
    dispatch(editClint({
      logo: values.logo,
      idUser: values.idUser,
      name: values.name,
      compony: values.compony,
      dateSubscription: values.dateSubscription,
      price: values.price,
      duration: values.duration,
      paymentDate: values.dateSubscription,
      clintemail: values.clintemail,
      websitelink: values.websitelink,
      state: values.state,
      currencypaid: values.currencypaid,
      ReasonDelete: values.ReasonDelete,
      DeleteDate: values.DeleteDate

    }))
    addToast(`???? ?????????? ?????????????????? ??????????`, { appearance: 'success' });
  }

  // click add customer
  const ImgeHandeler = (e) => {
    const Reader = new FileReader()
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setValues({ ...values, logo: Reader.result })
      }
    }
    Reader.readAsDataURL(e.target.files[0])
  }
  return (
    <StyleMainInput>
      <h2>?????????? ????????????????</h2>
      <StyleForm>

        <div>
          <div className='display-input' >
            <div className='input'>
              <label className='disabled'>?????? ???????????? <span>*</span></label>
              <input className='disabled' value='{values.idUser}' />
            </div>
            <div className='input'>
              <label className='disabled'>?????????? ???????????????? <span>*</span></label>
              <input className='disabled' value='{user.dateSubscription}' type="date" disabled />
            </div>
            <div className='input'>
              <label>???????? ???????????? <span>*</span></label>
              <input type="file" onChange={ImgeHandeler} />
            </div>
            <div className='input'>
              <label>?????? ????????????????<span>*</span></label>
              <input type="number" value='{values.duration}' onChange={(e) => setValues({ ...values, duration: e.target.value })} />
            </div>
            <div className='input'>
              <label>?????? ???????????? <span>*</span></label>
              <input type="text" placeholder='?????? ?????? ????????????' value='{values.name}' onChange={(e) => setValues({ ...values, name: e.target.value })} />
            </div>
            <div className='input'>
              <label>?????? ???????????? <span>*</span></label>
              <input type="text" placeholder='?????? ?????? ????????????' value='{values.compony}' onChange={(e) => setValues({ ...values, compony: e.target.value })} />
            </div>
            <div className='input'>
              <label>???????????? <span>*</span></label>
              <input type="text" placeholder='?????? ????????????' value='{values.state}' onChange={(e) => setValues({ ...values, state: e.target.value })} />
            </div>
            <div className='input'>
              <label>?????????? ???????????? <span>*</span></label>
              <input type="email" placeholder='?????? ???????? ????????????' value='{values.clintemail}' onChange={(e) => setValues({ ...values, clintemail: e.target.value })} />
            </div>
            <div className='input'>
              <label>???????? ???????????? <span>*</span></label>
              <input type="text" placeholder='?????? ???????? ????????????' value='{values.websitelink}' onChange={(e) => setValues({ ...values, websitelink: e.target.value })} />
            </div>
            <div className='input'>
              <label> ?????? ???????????????? <span>*</span></label>
              <input type="text" placeholder='?????? ?????? ????????????????' value='{values.price}' onChange={(e) => setValues({ ...values, price: e.target.value })} />
            </div>
            <div className='input'>
              <label>???????????? <span>*</span></label>
              <select className="currency" id="cars" form="carform" value='{values.currencypaid}' onChange={(e) => setValues({ ...values, currencypaid: e.target.value })} >
                <option value="????????">????????</option>
                <option value="??????????">??????????</option>
              </select>
            </div>
          </div>
          <div className='edit'>
            <button onClick={HandelChange} ><Link to={`/Customers/clint/$'{values.name}'`}><FaUserEdit />??????????</Link></button>
          </div>
        </div>

        {/* {UserData.filter((item) => item.en_name === ParamsId).map((user => {
          return (
            <div key={user.idUser}>
              <div className='display-input' >
                <div className='input'>
                  <label className='disabled'>?????? ???????????? <span>*</span></label>
                  <input className='disabled' value={values.idUser} />
                </div>
                <div className='input'>
                  <label className='disabled'>?????????? ???????????????? <span>*</span></label>
                  <input className='disabled' value={user.dateSubscription} type="date" disabled />
                </div>
                <div className='input'>
                  <label>???????? ???????????? <span>*</span></label>
                  <input type="file" onChange={ImgeHandeler} />
                </div>
                <div className='input'>
                  <label>?????? ????????????????<span>*</span></label>
                  <input type="number" value={values.duration} onChange={(e) => setValues({ ...values, duration: e.target.value })} />
                </div>
                <div className='input'>
                  <label>?????? ???????????? <span>*</span></label>
                  <input type="text" placeholder='?????? ?????? ????????????' value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} />
                </div>
                <div className='input'>
                  <label>?????? ???????????? <span>*</span></label>
                  <input type="text" placeholder='?????? ?????? ????????????' value={values.compony} onChange={(e) => setValues({ ...values, compony: e.target.value })} />
                </div>
                <div className='input'>
                  <label>???????????? <span>*</span></label>
                  <input type="text" placeholder='?????? ????????????' value={values.state} onChange={(e) => setValues({ ...values, state: e.target.value })} />
                </div>
                <div className='input'>
                  <label>?????????? ???????????? <span>*</span></label>
                  <input type="email" placeholder='?????? ???????? ????????????' value={values.clintemail} onChange={(e) => setValues({ ...values, clintemail: e.target.value })} />
                </div>
                <div className='input'>
                  <label>???????? ???????????? <span>*</span></label>
                  <input type="text" placeholder='?????? ???????? ????????????' value={values.websitelink} onChange={(e) => setValues({ ...values, websitelink: e.target.value })} />
                </div>
                <div className='input'>
                  <label> ?????? ???????????????? <span>*</span></label>
                  <input type="text" placeholder='?????? ?????? ????????????????' value={values.price} onChange={(e) => setValues({ ...values, price: e.target.value })} />
                </div>
                <div className='input'>
                  <label>???????????? <span>*</span></label>
                  <select className="currency" id="cars" form="carform" value={values.currencypaid} onChange={(e) => setValues({ ...values, currencypaid: e.target.value })} >
                    <option value="????????">????????</option>
                    <option value="??????????">??????????</option>
                  </select>
                </div>
              </div>
              <div className='edit'>
                <button onClick={HandelChange} ><Link to={`/Customers/clint/${values.name}`}><FaUserEdit />??????????</Link></button>
              </div>
            </div>
          )
        }))} */}



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
@media (max-width: 780px) {
  
  height: 100%;
}
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
  margin: 10px 0;
}

.edit{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px 0 0 0;
  button{
    all: unset;
    
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    background-color: var(--secound-color);
    transition: 0.6s;
    :hover{
      opacity: 0.6;
    }

  }
  a{
      color: white;
      display: flex;
      align-items: center;
      padding: 10px 50px;
      svg{
        margin-left: 10px;
        font-size: 25px;
      }
    }
}
`
const StyleForm = styled.form`
margin: 10px 20px;
.display-input{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  height: 100%;
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