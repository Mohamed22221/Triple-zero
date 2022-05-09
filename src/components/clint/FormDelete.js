import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import styled from "styled-components"
const FormDelete = () => {
    const UserData = useSelector((state) => state.clint)
    const Params = useParams()
    const ParamsId = `${Params.clintid}`
  return (
    <MainFormDelete>
        <AboutClint>
        {UserData.filter((item => item.name === ParamsId)).map(user  =>{
            return (
                <div className='item-clint' key={user.id}>
                    <p className='title'>العميل المراد حذفه :</p>
                    <div className='img-clint'>
                        <img src={user.logo} alt="logo"/>
                        <div className='information'>
                            <h5>{user.compony}</h5>
                            <p>{user.name}</p>
                            <p>تاريخ الاشتراك : {user.dateSubscription}</p>
                        </div>
                    </div>
                </div>   
            )
 
        })}
        </AboutClint>
        <FormClint>
        <form>
            <label>سبب الحذف</label>
            <textarea placeholder='الرجاء كتابه سبب الحذف' />
            <label>كود التحقق</label>
            <input placeholder='الرجاء كتابه [id] الخاص بالعميل ' />
        </form>

        </FormClint>
    </MainFormDelete>
  )
}
const MainFormDelete = styled.div`
overflow-y: auto;
    p.title{
        margin: 25px 0 ;
        font-weight: bold;
    }
`
const AboutClint = styled.div`
.item-clint{

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
export default FormDelete