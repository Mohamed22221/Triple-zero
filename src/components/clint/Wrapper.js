import React from 'react'
import styled from "styled-components"
import TopBar from '../bars/TopBar'
import {MarginPages} from '../../styles/MarginPages'
import ClintInformation from './ClintInformation'
import DeleteClint from './DeleteClint'
import StopClint from './StopClint'


const WrapperContainer = ({children, HandelShow , showCustomer ,HandelShowCustomer ,HandelClose ,HandelStopCustomer ,showStopClint }) => {
  // <ClintInformation HandelShowCustomer={HandelShowCustomer} HandelStopCustomer={HandelStopCustomer}  />
  // <DeleteClint showCustomer={showCustomer} HandelClose={HandelClose} />
  // <StopClint  HandelClose={HandelClose} showStopClint={showStopClint} />
  return (
    <MarginPages>
      <TopBar title={"المطاعم"} HandelShow={HandelShow} />
      
      
      <StyleFlex>
        {children}

      </StyleFlex>
    
    </MarginPages>
  
  )
}

const StyleFlex = styled.div`


margin-top: 33px;
width: 100%;
border: 1px solid var(--background-opacity);
border-radius: 40px;
@media (max-width:910px) {
 
}
`
export default WrapperContainer