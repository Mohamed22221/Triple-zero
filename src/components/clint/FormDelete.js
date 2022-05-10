import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import styled from "styled-components"
import ButtonDelete from '../glopal/ButtonDelete'

const FormDelete = ({setDeleted}) => {
     //go to user id
    const UserData = useSelector((state) => state.clint.DataUser)
    const Params = useParams()
    const ParamsId = `${Params.clintid}` 
    //get date today
    const today = new Date();
    const date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
     //get value inbut
    const [values , setValues] = useState({
     id:"",
     logo:"" ,
     state:"محذوف",
     name:"",
     ReasonDelete:"",
     DeleteDate:date,
    })

  return (
    <MainFormDelete>
        {UserData.filter((item => item.name === ParamsId)).map(user  =>{
            return (
            <div>
        <AboutClint>
                <div className='item-clint' key={user.id}>
                    <p className='title'>العميل المراد حذفه :</p>
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
            <label>سبب الحذف</label>
            <textarea placeholder='الرجاء كتابه سبب الحذف' value={values.ReasonDelete} onChange={(e) => setValues({...values , ReasonDelete:e.target.value})} />
            <label>كود التحقق</label>
            <input placeholder='الرجاء كتابه [id] الخاص بالعميل' value={values.id} onChange={(e) => setValues({...values , id:e.target.value})} />
        </form>
        
        </FormClint>
        <StyleFotter>
        <p> *هذه العمليه ستؤدي الي حذف العميل بصوره تامه ولاكن ستتبقي معلومات الحساب</p>
        <ButtonDelete  nameclint={user.name} logo={user.logo} dateSubscription={user.dateSubscription} values={values} setValues={setValues} setDeleted={setDeleted}  />

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

}
`
const StyleFotter= styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
text-align: center;
margin-top: 80px;


p{
    margin: 15px 0;
  width: 90%;
  font-size: 15px;
  padding: 5px 0;
  font-weight: bold;
}

`
export default FormDelete