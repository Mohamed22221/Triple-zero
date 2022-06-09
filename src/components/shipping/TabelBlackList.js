import React , {useState ,useEffect} from 'react'
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import {getShipping} from './../../store/ShippingSlice'
import { Link } from "react-router-dom";
// import Logo3 from "../photo/slogan/slogan2.svg"

import Logo3 from "../../photo/slogan/user-avatar.svg"

const TabelBlackList = ({ }) => {
    
    const UserData = useSelector(state => state.shipping.shipping)
    const dispatch = useDispatch();
    useEffect(() => {
    //    getDrivers()
    dispatch(getShipping())
    }, [dispatch])

    //sort tabel 
    const [sortedField, setSortedField] = useState([]);
    useEffect(() => {
        setSortedField(UserData)
    }, [UserData, setSortedField])

  return (
  <MainTabel>

    <Tabel>
        <Thead>
            <TrHead>
                <th >الشعار</th>
                <th >ID</th>
                <th> الأسم بالانجليزي</th>
                <th>رقم التلفون</th>
                <th>الاميل</th>
                

                <th>حاله الدفع</th>
               
                <th>الخيارات</th>
            </TrHead>
        </Thead>
        <Tbody>
        {sortedField.filter((item) => item.status === 0 && item).map((user , index) =>{
            return (
                <TrBody key={index}>
                    <td><Link className='my-2' to={`/ShippingCompanies/clint/${user.id}`}><img src={Logo3} alt="logo" /></Link></td>
                    <td>
                        <Link className='text-link' to={`/ShippingCompanies/clint/${user.id}`}>{user.id}#</Link>
                    </td>
                    <td>
                        <span>{user.en_name}</span>
                    </td>

                    <td>
                        <span>{user.mobile}</span>
                    </td>
                    <td>
                        <span>{user.email}</span>
                    </td>


                    <td ><span className={user.status === 1 ? "green" : "red"}>{user.status === 1 ? "تم الدفع" : "لم يدفع" }</span></td>
                  

                    <td >
                     <BiDotsHorizontalRounded className='BiDotsHorizontalRounded'/>
                     <div className='select-clint'>
                     <Link to={`/ShippingCompanies/clint/${user.id}`}> التفاصيل</Link>
                     <Link to={`/ShippingCompanies/clint/${user.id}`}>بيانات العميل</Link>
                     </div>
                    </td>
                </TrBody>
            )
        })}
        </Tbody>
    </Tabel>

  </MainTabel> 
  )
}
const MainTabel = styled.div`
    overflow-x: auto;
     width:100% ;
     height: 84vh;
    padding:  50px;
    

    @media (max-width:1180px) {
        padding: 0 0px;
    }
     &::-webkit-scrollbar{
        width: 0;   
    }


`
const Tabel = styled.table`
    text-align: center;
    border: 0px;
    border-spacing: 0px 20px;
    align-items: center;
    width:100% ;
    margin: 0;
    padding: 0;
    @media (max-width:1180px) {
        padding: 0 10px;
    }
    @media (max-width:770px ) {
     margin-top: 10px;
     padding: 0 0px;
    }
  

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
    border-radius: 10px;
    
`
const TrBody= styled.tr`
padding: 10px 5px;
border-top: 10px solid #ebebebe6;

td {
    background-color: white;    
    
    color: var(--font);
    font-size: 17px;
    &:first-child{
        border-radius: 0px 10px 10px 0;
    }
    &:last-child{
        border-radius: 10px 0px 0px 10px;
    }
    img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    .BiDotsHorizontalRounded{
        margin-top: 10px;
        font-size: 30px;
        cursor: pointer;

    }
    @media (max-width:720px) {
     font-size: 15px;
     
    }
}
td:last-child{
    position: relative;
    &:hover{
        .select-clint{
            transform: scale(1);
            transform-origin: 0 100% 100% 100% ;
        }  
    }
    .select-clint{
        box-shadow: -2px 5px 13px -4px rgba(0,0,0,0.46);
        -webkit-box-shadow: -2px 5px 13px -4px rgba(0,0,0,0.40);
        -moz-box-shadow: -2px 5px 13px -4px rgba(0,0,0,0.30);
        position: absolute;
        transform: scale(0);
        transform-origin: 20% 40%;
        left: 20px;
        top: 40px;
        z-index: 4;
        width: 100px;
        display: flex;
        flex-direction: column;
        background-color: white;
        transition: 0.4s;    
        a{
            font-size: 14px;
            font-weight: bold;
            color: var(--font);
            cursor: pointer;
            padding: 5px 0;
            &:nth-child(1){
                border-bottom: 1px solid black;
            }

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
.green{
    color: var(--succes-color);
    font-weight: bold;
    background-color: #00800015;
    padding: 10px;
    border-radius:30px ;
}

`




export default TabelBlackList