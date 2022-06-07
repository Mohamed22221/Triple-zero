import React from 'react'
import styled from "styled-components"
import OtherClint from './OtherClint'
import { AiOutlineCopy } from 'react-icons/ai';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const TabelClient = (props) => {
    const { isOnline , name , idUser ,id, number , telephone , paymentDate ,
          state , clintemail , websitelink  ,created_at  } = props
    
  return (
      
<StyleTabel>

    <OtherClint 
     clintemail={clintemail}
     websitelink={websitelink} 
     state={state}
     isOnline={isOnline}
     created_at={created_at}
     
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
position: relative;
td:first-child{
    display: flex;
    cursor: pointer;
    justify-content: center;
    text-align: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    @media (max-width:750px ) {
        
    }
    .copy{
       
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