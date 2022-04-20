import React from 'react'
import styled from "styled-components"
import UserData from '../../data/UsersData'
const TabelUsers = () => {
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
                <th>المده</th>
                <th>تاريخ الدفع</th>
                <th>الحاله</th>
            </TrHead>
        </Thead>
        <Tbody>
        {UserData.slice(-0 , 7).map((user , index) =>{
            return (
                <TrBody key={index}>
                    <td><img src={user.logo} alt="logo" /></td>
                    <td>{user.idUser}</td>
                    <td>{user.name}</td>
                    <td>{user.dateSubscription}</td>
                    <td>{user.price}</td>
                    <td>{user.duration}</td>
                    <td>{user.paymentDate}</td>
                    <td>{user.state}</td>
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
@media (max-width: 985px) {
    
    

}
`
const Tabel = styled.table`
    text-align: center;
    border: 0px;
    border-spacing: 0px 25px;
    width: 65%;
    align-items: center;
    margin-top: 60px;
    @media (max-width:770px ) {
     margin-top: 20px;   
    }
`
const Thead = styled.thead`

`
const TrHead = styled.tr`
th{
    padding: 10px 30px;
   
}
`
const Tbody = styled.tbody`

    border-radius: 10px;

`
const TrBody= styled.tr`

td {
    background-color: white;
    border:0;
    
    img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        padding: 10px 5px;

    }
}

`
export default TabelUsers