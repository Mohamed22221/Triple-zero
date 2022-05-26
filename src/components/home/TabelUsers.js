import React from 'react'
import styled from "styled-components"
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
const TabelUsers = () => {
    const UserData = useSelector((state) => state.clint.DataUser)
  return (
  <MainTabel>
    <Tabel>
        <Thead>
            <TrHead>
                <th>الشعار</th>
                <th>ID</th>
                <th>الأسم</th>
                <th>تاريخ الاشتراك</th>
                <th>السعر</th>
                <th>المدة</th>
                <th>تاريخ الدفع</th>
                <th>الحاله</th>
                <th>الخيارات</th>
            </TrHead>
        </Thead>
        <Tbody>
        {UserData.slice(0 , 7 ).map((user , index) =>{
            return (
                <TrBody key={index}>
                    
                    <td><Link to={`/Customers/clint/${user.name}`}><img src={user.logo} alt="logo" /> </Link></td>
                   
                    <td>{user.idUser}</td>
                    <td>{user.name}</td>
                    <td>{user.dateSubscription}</td>
                    <td>{user.price}</td>
                    <td>{user.duration} اشهر</td>
                    <td>{user.paymentDate} </td>
                    <td ><span className={user.state === "تم الدفع" ? "green" : "red"}>{user.state}</span></td>
                    <td >
                     <BiDotsHorizontalRounded className='BiDotsHorizontalRounded'/>
                     <div className='select-clint'>
                     <Link to={`/Customers/clint/${user.name}`}>التفاصيل</Link>
                     <Link to={`/Customers/clint/${user.name}`}>بيانات العميل</Link>
                     </div>
                    </td>
                </TrBody>
            )
        })}
        </Tbody>
    </Tabel>
    <MoreTabel >
     <h5>250 عميل</h5>
     <Link to="/Customers">المزيد<BsArrowLeftShort className='BsArrowLeftShort'/></Link>
    </MoreTabel>
  </MainTabel> 
  )
}
const MainTabel = styled.div`
overflow-x: auto;
width: 73%;
@media (max-width:910px ) {
     width:100% ;
}
`
const Tabel = styled.table`
    text-align: center;
    border: 0px;
    border-spacing: 0px 28px;
    align-items: center;
    margin-top: 22px;
    width:100% ;
    @media (max-width:770px ) {
     margin-top: 10px;
     width:100% ;
    }

`
const Thead = styled.thead`

`
const TrHead = styled.tr`
    background-color: var(--secound-color);
    color: white;

th{
    padding: 12px 30px;
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
    border:0;
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
        margin: 5px;
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
const MoreTabel = styled.div`
margin-top: 15px;
display: flex;
justify-content: space-between;
width: 100%;
padding: 7px 20px ;
background-color: white;
h4{
    font-weight: bold;
    color: var(--font);
}
a{
    display: flex;
    align-items: center;
    cursor: pointer;
    color: black;
}
.BsArrowLeftShort{
    font-size: 28px;
    margin-top: 2px;
}
@media (max-width:770px ) {
     width:100% ;
    }

`
export default TabelUsers