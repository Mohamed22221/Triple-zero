import React from 'react'
import styled from "styled-components"
import TopBar from '../bars/TopBar'
import {MarginPages} from '../../styles/MarginPages'
import ClintInformation from './ClintInformation'
import DeleteClint from './DeleteClint'
import StopClint from './StopClint'


const Clint = ({HandelShow , showCustomer ,HandelShowCustomer ,HandelClose ,HandelStopCustomer ,showStopClint }) => {
  return (
    <MarginPages>
    <TopBar title={"العميل"} HandelShow={HandelShow} />
    
    <StyleFlex>
     <ClintInformation HandelShowCustomer={HandelShowCustomer} HandelStopCustomer={HandelStopCustomer}  />
     <DeleteClint showCustomer={showCustomer} HandelClose={HandelClose} />
     <StopClint  HandelClose={HandelClose} showStopClint={showStopClint} />
    </StyleFlex>
    
    </MarginPages>
  
  )
}

const StyleFlex = styled.div`
display: flex;
justify-content: space-between;
margin-top: 33px;
width: 100%;
border: 1px solid var(--background-opacity);
border-radius: 40px;
@media (max-width:910px) {
  flex-direction: column;
  margin-top: 13px;
}
`
export default Clint