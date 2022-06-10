import React, {useState} from 'react';
import Clint from '../components/clint/Clint';
// import ClintInformation2 from '../components/clint/ClintInformation2_R_R';
import WrapperContainer from '../components/clint/Wrapper';
import styled from "styled-components"
import { Link } from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { AiOutlineCopy } from 'react-icons/ai';
import { FiPause } from 'react-icons/fi';
// import OtherClint from './OtherClint'
import ButtonComponent from '../Shared/Components/Button/Button';
import TabelAllUsersMyAccount from '../components/MyAccount/TabelAllUsers';
import ButtonOutLine from '../Shared/Components/ButtonOutLine/ButtonOutLine';
import { AddManager} from '../store/StateSlice';
import { useDispatch } from 'react-redux';


const Account = ({HandelShowCustomer}) => {
    // <DeleteClint showCustomer={showCustomer} HandelClose={HandelClose} />
    // <StopClint  HandelClose={HandelClose} showStopClint={showStopClint} />
    // <ClintInformation2 HandelShowCustomer='true' HandelStopCustomer='true'  />
    const [searchSort, setSortSearch] = useState("")
    const dispatch = useDispatch()
    const AddManagers = () =>{
      dispatch(AddManager(true))
      
  }
    return (
        <>
           <WrapperContainer>
            <MainRightAbout>
                    <MainStyleAbout>
                        <div className='photo-logo'>
                            <img src='/Triple-zero/static/media/slogan1.89168f3a4d64b5c6f242bf8161fc6ddb.svg' alt='kld' />
                        </div>
                        <div className='apout'>
                            <h3>compony</h3>
                            <p>name</p>
                            <p>تاريخ الاشتراك : dateSubscription</p>
                            <Link to={`/EditUser/`}><button>تعديل العميل</button></Link>

                        </div>
                    </MainStyleAbout>    
                          <div>
                            <ButtonComponent text='إضافة مدير ' onClick={AddManagers} Icon={FiPause} type='primary' />                                  
                            <Link className='btn-outline btn-outline-dark' to="/Managers">سجل المديرين  </Link>

                          </div>    
                </MainRightAbout>
                
                
                <TabelAllUsersMyAccount  searchSort={searchSort} setSortSearch={setSortSearch} HandelShowCustomer={HandelShowCustomer}   />
            </WrapperContainer>
            
            
        </>
    );
}



const MainRightAbout = styled.div `
// background: red;
justify-content: space-between;
border-bottom: 1px solid var(--font-opacity);
display: flex;
align-items: center;
@media (max-width:688px ) {
    justify-content: space-between;
  }
.photo-logo{
  img{
    width: 160px;
    @media (max-width:688px ) {
    width: 110px;
  }
  }

}
.apout{
  margin-right: 15px ;
  p {
    padding: 4px 0;
    color: var(--font);
  }
  @media (max-width:550px ) {
    p {
      font-size: 14px;
    }
  }
  button{
    all: unset;
    border: 1px solid var(--font-opacity);
    border-radius: 7px;
    padding: 4px 12px;
    margin-top: 6px;
    color: var(--font);  
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
  }
  
}
`

const MainStyleAbout = styled.div ` 
display: flex;
justify-content: space-between;
padding: 30px;
// border-bottom:1px solid var(--font-opacity) ;
@media (max-width:688px ) {
    flex-direction: column;
  }
`

const StyleTabel = styled.div `
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
const Tabel = styled.table `
width: 100%;
text-align :center ;
border-spacing: 0px 20px;
padding: 10px 0;

`
const Thead = styled.thead `
background-color:var(--secound-color);
color: white;
`
const TrHead = styled.tr `

th{
    padding: 10px 30px;
    @media (max-width:720px) {
     font-size: 13px;
     padding: 10px 40px;
    }
}

`
const Tbody = styled.tbody `
background-color: white;

`
const TrBody = styled.tr `
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

const StyleBlackList = styled.div `
display: flex;
align-items: center;
justify-content: space-between;
padding: 8px 10px ;
border: 1px solid var(--font);
border-radius: 8px;
cursor: pointer;
color: var(--font);
.HiDocumentDuplicate{
    font-size: 30px;
}
a{
  color: var(--font);
}
p{
    padding-right: 15px;
}
`

export default Account;
