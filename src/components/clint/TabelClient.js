import React from 'react'
import styled from "styled-components"
import OtherClint from './OtherClint'
import { AiOutlineCopy } from 'react-icons/ai';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const TabelClient = (props) => {
    const {  name , idUser , price , duration , paymentDate ,
          state , clintemail , websitelink  ,currencypaid  } = props
    
  return (
      
<StyleTabel>
    <Tabel>
        <Thead>
            <TrHead>
                <th >ID</th>
                <th>الأسم</th>
                <th>تاريخ الاشتراك</th>
                <th>السعر</th>
                <th>المدة</th>
                <th>تاريخ الدفع</th>
                <th>الحاله</th>
            </TrHead>
        </Thead>
        <Tbody>
            <TrBody >
                <CopyToClipboard text={idUser}>
                <td><p><AiOutlineCopy className='copy' /></p>{idUser}</td>
                
                </CopyToClipboard>
                <td>{name}</td>
                <td>{paymentDate}</td>
                <td>{price}</td>
                <td>{duration} اشهر</td>
                <td>{paymentDate}</td>
                <td><p className={state === "تم الدفع" ? "green" : "red"}>{state}</p></td>
            </TrBody>
        </Tbody>
    </Tabel>
    <OtherClint 
    clintemail={clintemail}
     websitelink={websitelink} 
     currencypaid={currencypaid}
     />
</StyleTabel>
  )
}
const StyleTabel = styled.div`
    padding: 33px;
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
td:first-child{
    display: flex;
    cursor: pointer;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-top: 8px;
    .copy{
        margin-top: 5px;
    }
    :hover{
        .copy{
            color: var(--primary-color);
        }
    }
    p{
        margin-left: 4px;
    }

}
td{
    padding: 15px;
    color: var(--font);
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
export default TabelClient