import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import styled from "styled-components"
import { FiPause } from 'react-icons/fi';
import { addClintBlackList } from '../../store/ClintSlice'

const FormStop= ({setStoped}) => {
     //go to user id
     const clientDetails = useSelector(state => state.clients2.clientDetails)
    
    const dispatch = useDispatch() 
    const [disapeld , setDesapeld] = useState(true) 

    //get value inbut
    const [values , setValues] = useState({
        id:"",
        logo:"" ,
        state2:"ايقاف موقت",
        name:"",
        ReasonDelete:"",
        DeleteDate:"",
        ToDeleteData:""
       })
       console.log(values)
  // sent data blacklist 
    const HandelDataStop = (user,e) =>{
        dispatch(addClintBlackList({
            userid:values.id,
            name:clientDetails.name,
            logo:clientDetails.logo,
            ReasonDelete:values.ReasonDelete,
            DeleteDate:values.DeleteDate,
            state2:values.state2,
            state:clientDetails.state,
            dateSubscription:clientDetails.dateSubscription,
            price:clientDetails.price,
            duration:clientDetails.duration,
            paymentDate:clientDetails.paymentDate,
            clintemail:clientDetails.clintemail,
            tradetype:clientDetails.tradetype,
            currencypaid:clientDetails.currencypaid,
            compony:clientDetails.compony,
            websitelink:clientDetails.websitelink
            
            }))
            setStoped(false)

    }
    // disapeld and enabled button
    const HandelChangeDisapeld = (e ) => {
        if( e.target.value.length >= 4){
            setDesapeld(false)
        }else{
            setDesapeld(true)
        }
        setValues({...values , id:e.target.value}) 
    }
    console.log(values)
  return (
    <MainFormDelete>

          
        <AboutClint >
                <div className='item-clint' >
                    <p className='title'>العميل المراد اٍيقافه :</p>
                    <div className='img-clint'>
                        <img src={clientDetails.logo} alt="logo" />
                        <div className='information'>
                            <h5>{clientDetails.compony}</h5>
                            <p >{clientDetails.en_name}</p>
                            <p>تاريخ الاشتراك : {clientDetails.dateSubscription}</p>
                        </div>
                    </div>
                </div>   
                 
        </AboutClint>
        <FormClint>
        <form>
            <label>سبب الاٍقاف</label>
            <textarea placeholder='الرجاء كتابه سبب الاٍقاف' value={values.ReasonDelete} onChange={(e)=>setValues({...values , ReasonDelete:e.target.value})}  />
            <p className='title'>مده الاٍقاف</p>
            <div className='date' >
            <label>من :</label>
            <input type="date"  value={values.DeleteDate} onChange={(e)=>setValues({...values , DeleteDate:e.target.value})}  />
            <label>الي :</label>
            <input type="date" value={values.ToDeleteData} onChange={(e)=>setValues({...values , ToDeleteData:e.target.value})} />
            </div>
            <label>كود التحقق</label>
            <input placeholder='الرجاء كتابه [id] الخاص بالعميل' value={values.id} onChange={HandelChangeDisapeld}      />
        </form>
        </FormClint>
        <StyleFotter>
        <p > *هذه العمليه ستؤدي الي اٍقاف العميل بصوره تامه ولاكن ستتبقي معلومات الحساب</p>
        <MainButtonClint onClick={()=>HandelDataStop(clientDetails)}>
        <button disabled={disapeld} ><FiPause className='icon-button' />اٍقاف مؤقت</button>
         </MainButtonClint>
       </StyleFotter>
        
    
    </MainFormDelete>
  )
}

const MainFormDelete = styled.div`
overflow-y: auto;
display: flex;
flex-direction: column;
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
const MainButtonClint = styled.div`
display: flex;
button {
    all: unset;
    display: flex;
    align-items: center;
    color: white;
    margin: 8px 10px ;
    padding: 8px 25px;
    border-radius: 8px;
    cursor: pointer;
    :disabled{
        opacity: 0.5;
        cursor: no-drop;
    }
    :enabled{
        opacity: 1;
        cursor: pointer;
    }
    :first-child{
        background-color: var(--primary-color);
    }
    .icon-button{
        margin: 0 5px;
        font-size: 24px;
    }

}
@media (max-width:550px) {
    flex-direction: column;
    button{
        margin: 8px 5px ;
        padding: 8px 15px;
    }

    }
    

`
export default FormStop