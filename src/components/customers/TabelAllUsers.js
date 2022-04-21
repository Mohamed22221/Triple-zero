import React from 'react'
import styled from "styled-components"
import UserData from '../../data/UsersData'
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import SortTabel from './SortTabel';
const TabelAllUsers = ({searchSort , setSortSearch}) => {
    
  return (
  <MainTabel>
      <SortTabel setSortSearch={setSortSearch} searchSort={searchSort}  />
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
                <td>الخيارات</td>
            </TrHead>
        </Thead>
        <Tbody>
        {UserData.filter((item)=>{

            if (searchSort === "") {
                return item
            } else if (item.name.includes(searchSort)) {
                return item
            }
        }).map((user , index) =>{
            return (
                <TrBody key={index}>
                    <td><img src={user.logo} alt="logo" /></td>
                    <td>{user.idUser}</td>
                    <td>{user.name}</td>
                    <td>{user.dateSubscription}</td>
                    <td>{user.price}</td>
                    <td>{user.duration}</td>
                    <td>{user.paymentDate}</td>
                    <td className={user.state === "تم الدفع" ? "green" : "red"}>{user.state}</td>
                    <td >
                     <BiDotsHorizontalRounded className='BiDotsHorizontalRounded'/>
                     <div className='select-clint'>
                     <a>التفاصيل</a>
                     <a>بيانات العميل</a>
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
     height: 80vh;
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

td {
    background-color: white;
    border:0;
    color: var(--font);
    font-size: 17px;
    img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        padding: 10px 5px;

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
    
        
    }
.green{
    color: var(--succes-color);
    font-weight: bold;
}

`


export default TabelAllUsers