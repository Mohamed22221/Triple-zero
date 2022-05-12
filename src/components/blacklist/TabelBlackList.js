import React ,{useState,useEffect} from 'react'
import styled from "styled-components"



const TabelBlackList = ({searchSort,sortedField }) => {
  return (
    <StyleTabel>

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
        <Tbody>
        {sortedField.filter((item)=>{
            if (searchSort === "") {
                return item
            } else if (item.name.includes(searchSort)) {
                return item
            }
        }).map(item =>{
                return (
            <TrBody key={item.name} >
                <td><img src={item.logo} /></td>
                <td>{item.userid}</td>
                <td><p className={item.state === "محذوف" ? "red" : "orange"}>{item.state}</p></td>
                <td>{item.name}</td>
                <td>{item.dateSubscription}</td>
                <td>{item.DeleteDate}</td>
                <td>{item.ReasonDelete}</td>  
                <td><button className='return'>اعاده التفعيل</button></td> 
                <td><button className='delete'>الحذف للابد</button></td>   
            </TrBody>
            )
            })}

        </Tbody>
    </Tabel>
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