import React, { useState }  from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import styled from "styled-components"
import { removeClint, ReturnClint } from '../../store/ClintSlice'
import MassegeEmbty from '../glopal/MassegeEmbty'
import {  useToasts } from 'react-toast-notifications';



const TabelBlackList = ({searchSort,sortedField }) => {
    const { addToast } = useToasts();
    // delete clint
    const Dispatch = useDispatch()
    const DeleteClint = (item) =>{
        Dispatch(
            removeClint({
                userid:item.userid
            })
        )
        addToast(` تم حذف ${item.name} ` , { appearance: 'error' });
        serShowAlert(true)
    }
    //return and push user Data 
    const HandelReturn = (item) =>{
        Dispatch(
            ReturnClint({
                id: 15,
                idUser : item.userid,
                name :item.name,
                dateSubscription: item.dateSubscription,
                price: item.price,
                duration: item.duration,
                paymentDate: item.paymentDate,
                state: item.state,
                clintemail : item.clintemail ,
                websitelink : item.websitelink  ,
                tradetype : item.tradetype ,
                currencypaid : item.currencypaid ,
                compony:item.compony,
                ReasonDelete:item.ReasonDelete ,
                DeleteDate: item.DeleteDate,
            })

        )
        addToast(` تم استرجاع ا ${item.name} الي قائمه العملاء` , { appearance: 'success' });
    }
    // alert delete clint
    const [showAlert , serShowAlert] = useState(true)
    const Handelshow = () =>{
        serShowAlert(false)
    }
    const HandelClose = () =>{
        serShowAlert(true)
    }
    
  return (
    <StyleTabel showAlert={showAlert}>
    {sortedField.length <= 0 ? <MassegeEmbty /> :
    <div>

     <Tabel>

        <Thead>
            <TrHead>
                <th >الشعار</th>
                <th >ID</th>
                <th>الحاله</th>
                <th>الأسم</th>
                <th>تاريخ الاشتراك</th>
                <th>تاريخ الحذف</th>
                <th>سبب الحذف</th>
                <th>اعاده التفعيل</th>
                <th>الحذف</th>
            </TrHead>
        </Thead>
        {sortedField.filter((item)=>{
            if (searchSort === "") {
                return item
            } else if (item.name.includes(searchSort)) {
                return item
            }
        }).map(item =>{
                return (
        <Tbody key={item.userid}>
            <div className='Alert'>
            <h3>هل انت متأكد من حذف {item.name}؟</h3>
            <p>ستؤدي هذه العمليه الي حذف جميل بيانات العميل بشكل نهائي</p>
            <div>
                <button onClick={()=>DeleteClint(item)}>تاكيد</button>
                <button onClick={HandelClose}>الغاء</button>
            </div>
            </div>
            <TrBody key={item.name} >
                <td><img src={item.logo} /></td>
                <td>{item.userid}</td>
                <td><p className={item.state2 === "محذوف" ? "red" : "orange"}>{item.state2}</p></td>
                <td>{item.name}</td>
                <td>{item.dateSubscription}</td>
                <td>{item.DeleteDate}</td>
                <td>{item.ReasonDelete}</td>  
                <td><button className='return' onClick={()=>HandelReturn(item)}>اعاده التفعيل</button></td> 
                <td><button className='delete' onClick={Handelshow} >الحذف للابد</button></td>   
            </TrBody>

        </Tbody>
            )
        })}
        
    </Tabel>

    </div>
    }
    </StyleTabel>
  )
}
const StyleTabel = styled.div`
    padding: 0px 0px;
    overflow-x: auto;
     width:100% ;
    @media (max-width:1180px) {
        padding: 0 0px;
    }
     &::-webkit-scrollbar{
        width: 0;   
    }
    .Alert{
        position: fixed;
        top: ${props => props.showAlert ? "-420px" : "10px"} ;
        transition: 0.4s;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
        width: 380px;
        padding: 10px;
        background-color:var(--secound-color) ;
        border-bottom:4px solid var(--primary-color) ;
        border-radius: 8px;
        color: white;
        z-index: 100;
        @media (max-width:500px) {
            width: 90%;
            h3{
                font-size: 16px;
            }
            p{
                font-size: 8px;
            }
        }
        p{
            font-size: 13px;
            padding :5px;
            color: var(--font);
        }
        button{
            all: unset;
            padding: 5px 25px;
            margin:5px 10px ;
            cursor: pointer;
            border-radius: 4px;
            transition: 0.5s;
            :hover{
            opacity: 0.7;
            }
            :first-child{
                background-color: var(--succes-color);
            }
            :last-child{
                background-color: var(--danger-color) ;
            }

        }

    }


`
const Tabel = styled.table`
width: 100%;
text-align :center ;
border-spacing: 0px 20px;
padding: 10px 0;

`
const Thead = styled.thead`
background-color:var(--secound-color);
color: white;
`
const TrHead = styled.tr`

th{
    padding: 10px 30px;
    @media (max-width:720px) {
     font-size: 13px;
     padding: 10px 40px;
    }
}

`
const Tbody = styled.tbody`
background-color: white;

`
const TrBody = styled.tr`
td{
    padding: 15px;
    color: var(--font);
    img{
        width: 60px;
        border-radius: 50%;
    }
    button{
        all: unset;
        cursor: pointer;
        padding: 8px 22px;
        border: 1px solid;
        border-radius: 8px;
        font-weight: bold;
        transition: 0.5s;
    }
    .return{
        color: var(--succes-color);
        &:hover{
            background-color: var(--succes-color);;
            color: white;
        }
    }
    .delete{
        color: var(--danger-color);
        &:hover{
            background-color: var(--danger-color);;
            color: white;
        }
    }
}
.red{
    color: var(--danger-color);
    font-weight: bold;
    background-color: #ff000015;
    padding: 10px;
    border-radius:30px ;
        
    }
.orange{
    color: var(--succes-color);
    font-weight: bold;
    background-color: #00800015;
    padding: 10px;
    border-radius:30px ;
}
`

export default TabelBlackList