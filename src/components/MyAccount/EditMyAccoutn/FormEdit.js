import React, { useState } from 'react'
import styled from "styled-components"
import { FaUserEdit } from 'react-icons/fa';
import { postFromData } from './../../../api/axios'


const FormEdit = ({ dataMyAccount }) => {


  const ImgeHandeler = (e) => {
    const Reader = new FileReader()
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setValues({ ...values, photo: Reader.result })
      }
    }
    Reader.readAsDataURL(e.target.files[0])
  }

  const [values, setValues] = useState({
    id: dataMyAccount.id,
    email: dataMyAccount.email,
    name: dataMyAccount.name,
    photo: null,
  })

  const HandelChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    const valuesData = {}
    valuesData['id'] = values.id
    valuesData['email'] = values.email
    valuesData['name'] = values.name
    if (values.photo != null) {
      valuesData['photo'] = values.photo
    }


    // console.log('valuesData', valuesData);
    postFromData('admins/profile/update', valuesData)
      .then((res) => {
        const userData = JSON.stringify({ user: res.data })
        localStorage.setItem('authData', userData)
      })
      .catch(err => console.log('err', err))


  }

  const tesW = (e) => {
    e.preventDefault()
    // console.log('djklf');
  }



  return (
    <StyleMainInput>
      <h2>تعديل البيانات</h2>
      <StyleForm>

        <form>
          <div className='display-input' >
            <div className='input'>
              <label className='disabled'> #</label>
              <input className='disabled' disabled value={values.id} />
            </div>
            <div className='input'>
              <label className='disabled'> الايميل</label>
              <input className='disabled' disabled value={values.email} />
            </div>
            <div className='input'>
              <label>شعار  <span>*</span></label>
              <input type="file" onChange={ImgeHandeler} />
            </div>
            <div className='input'>
              <label>الاسم <span>*</span></label>
              <input type="text" name='name' value={values.name} onChange={HandelChange} />
            </div>

          </div>
          <div className='edit mb-3'>
            <button onClick={handelSubmit} className='btn btn-dark' > <span>تعديل</span> <FaUserEdit /></button>
          </div>
        </form>


        {/* <div>
          <div className='display-input' >
            <div className='input'>
              <label className='disabled'>رقم العميل <span>*</span></label>
              <input className='disabled' value='{values.idUser}' />
            </div>
            <div className='input'>
              <label className='disabled'>تاريخ الاشتراك <span>*</span></label>
              <input className='disabled' value='{user.dateSubscription}' type="date" disabled />
            </div>
            <div className='input'>
              <label>شعار العميل <span>*</span></label>
              <input type="file" onChange={ImgeHandeler} />
            </div>
            <div className='input'>
              <label>مده الاشتراك<span>*</span></label>
              <input type="number" value='{values.duration}' onChange={(e) => setValues({ ...values, duration: e.target.value })} />
            </div>
            <div className='input'>
              <label>اسم العميل <span>*</span></label>
              <input type="text" placeholder='عدل اسم العميل' value='{values.name}' onChange={(e) => setValues({ ...values, name: e.target.value })} />
            </div>
            <div className='input'>
              <label>اسم الشركة <span>*</span></label>
              <input type="text" placeholder='عدل اسم الشركة' value='{values.compony}' onChange={(e) => setValues({ ...values, compony: e.target.value })} />
            </div>
            <div className='input'>
              <label>الحالة <span>*</span></label>
              <input type="text" placeholder='عدل الحالة' value='{values.state}' onChange={(e) => setValues({ ...values, state: e.target.value })} />
            </div>
            <div className='input'>
              <label>ايميل العميل <span>*</span></label>
              <input type="email" placeholder='عدل اميل العميل' value='{values.clintemail}' onChange={(e) => setValues({ ...values, clintemail: e.target.value })} />
            </div>
            <div className='input'>
              <label>رابط الموقع <span>*</span></label>
              <input type="text" placeholder='عدل رابط الموقع' value='{values.websitelink}' onChange={(e) => setValues({ ...values, websitelink: e.target.value })} />
            </div>
            <div className='input'>
              <label> سعر الاشتراك <span>*</span></label>
              <input type="text" placeholder='عدل سعر الاشتراك' value='{values.price}' onChange={(e) => setValues({ ...values, price: e.target.value })} />
            </div>
            <div className='input'>
              <label>العمله <span>*</span></label>
              <select className="currency" id="cars" form="carform" value='{values.currencypaid}' onChange={(e) => setValues({ ...values, currencypaid: e.target.value })} >
                <option value="مصري">مصري</option>
                <option value="كويتي">كويتي</option>
              </select>
            </div>
          </div>
          <div className='edit'>
            <button onClick={HandelChange} ><Link to={`/Customers/clint/$'{values.name}'`}><FaUserEdit />تعديل</Link></button>
          </div>
        </div> */}

        {/* {UserData.filter((item) => item.en_name === ParamsId).map((user => {
          return (
            <div key={user.idUser}>
              <div className='display-input' >
                <div className='input'>
                  <label className='disabled'>رقم العميل <span>*</span></label>
                  <input className='disabled' value={values.idUser} />
                </div>
                <div className='input'>
                  <label className='disabled'>تاريخ الاشتراك <span>*</span></label>
                  <input className='disabled' value={user.dateSubscription} type="date" disabled />
                </div>
                <div className='input'>
                  <label>شعار العميل <span>*</span></label>
                  <input type="file" onChange={ImgeHandeler} />
                </div>
                <div className='input'>
                  <label>مده الاشتراك<span>*</span></label>
                  <input type="number" value={values.duration} onChange={(e) => setValues({ ...values, duration: e.target.value })} />
                </div>
                <div className='input'>
                  <label>اسم العميل <span>*</span></label>
                  <input type="text" placeholder='عدل اسم العميل' value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} />
                </div>
                <div className='input'>
                  <label>اسم الشركة <span>*</span></label>
                  <input type="text" placeholder='عدل اسم الشركة' value={values.compony} onChange={(e) => setValues({ ...values, compony: e.target.value })} />
                </div>
                <div className='input'>
                  <label>الحالة <span>*</span></label>
                  <input type="text" placeholder='عدل الحالة' value={values.state} onChange={(e) => setValues({ ...values, state: e.target.value })} />
                </div>
                <div className='input'>
                  <label>ايميل العميل <span>*</span></label>
                  <input type="email" placeholder='عدل اميل العميل' value={values.clintemail} onChange={(e) => setValues({ ...values, clintemail: e.target.value })} />
                </div>
                <div className='input'>
                  <label>رابط الموقع <span>*</span></label>
                  <input type="text" placeholder='عدل رابط الموقع' value={values.websitelink} onChange={(e) => setValues({ ...values, websitelink: e.target.value })} />
                </div>
                <div className='input'>
                  <label> سعر الاشتراك <span>*</span></label>
                  <input type="text" placeholder='عدل سعر الاشتراك' value={values.price} onChange={(e) => setValues({ ...values, price: e.target.value })} />
                </div>
                <div className='input'>
                  <label>العمله <span>*</span></label>
                  <select className="currency" id="cars" form="carform" value={values.currencypaid} onChange={(e) => setValues({ ...values, currencypaid: e.target.value })} >
                    <option value="مصري">مصري</option>
                    <option value="كويتي">كويتي</option>
                  </select>
                </div>
              </div>
              <div className='edit'>
                <button onClick={HandelChange} ><Link to={`/Customers/clint/${values.name}`}><FaUserEdit />تعديل</Link></button>
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
  // button{
  //   all: unset;
    
  //   font-weight: bold;
  //   border-radius: 5px;
  //   cursor: pointer;
  //   background-color: var(--secound-color);
  //   transition: 0.6s;
  //   :hover{
  //     opacity: 0.6;
  //   }

  // }
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