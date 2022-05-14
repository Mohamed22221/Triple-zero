import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import styled from "styled-components"
import ButtonStop from './ButtonStop'


const FormStop= ({setDeleted}) => {
     //go to user id
    const UserData = useSelector((state) => state.clint.DataUser)
    const Params = useParams()
    const ParamsId = `${Params.clintid}` 

  return (
    <MainFormDelete>
        {UserData.filter((item => item.name === ParamsId)).map(user  =>{
            return (
            <div key={user.name}>
        <AboutClint >
                <div className='item-clint' >
                    <p className='title'>العميل المراد اٍيقافه :</p>
                    <div className='img-clint'>
                        <img src={user.logo} alt="logo"/>
                        <div className='information'>
                            <h5>{user.compony}</h5>
                            <p >{user.name}</p>
                            <p>تاريخ الاشتراك : {user.dateSubscription}</p>
                        </div>
                    </div>
                </div>   
                 
        </AboutClint>
        <FormClint>
        <form>
            <label>سبب الاٍقاف</label>
            <textarea placeholder='الرجاء كتابه سبب الاٍقاف'  />
            <p className='title'>مده الاٍقاف</p>
            <div className='date' >
            <label>من :</label>
            <input type="date"  />
            <label>الي :</label>
            <input type="date"  />
            </div>
            <label>كود التحقق</label>
            <input placeholder='الرجاء كتابه [id] الخاص بالعميل'   />
        </form>
        </FormClint>
        <StyleFotter>
        <p > *هذه العمليه ستؤدي الي اٍقاف العميل بصوره تامه ولاكن ستتبقي معلومات الحساب</p>
        <ButtonStop />
       </StyleFotter>
        </div>
        )
        })}
    </MainFormDelete>
  )
}

const MainFormDelete = styled.div`
overflow-y: auto;
display: flex;
justify-content: center;
    p.title{
        margin: 25px 0 ;
        font-weight: bold;
    }
`
const AboutClint = styled.div`
.item-clint{
    margin-top: 60px;
  .img-clint{
    display: flex;
    align-items: center;
    img{
        width: 85px;
    }
    .information{
        margin-right: 8px;
        font-size: 15px;
        p{
            font-size: 13px;
            color: var(--font);
        }
    }
}  
}

`
const FormClint = styled.div`

form{
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    label{
        font-weight: bold;
        margin: 8px 0;
    }
    input , textarea {
        padding: 8px;
        border: 1px solid var(--font-opacity);
        border-radius: 12px;
    }
    textarea{
        height: 120px;
        @media (max-width:550px ) {
            height: 100px;
        }
    }
    .date{
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media (max-width:500px) {
  flex-direction: column;
}
        input{
            padding: 10px 30px;
        }
    }
}
`
const StyleFotter= styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
text-align: center;
margin-top: 20px;
p{
    margin: 15px 0;
  width: 90%;
  font-size: 15px;
  padding: 5px 0;
  font-weight: bold;
}

`
export default FormStop