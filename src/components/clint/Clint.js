import React from 'react'
import styled from "styled-components"
import TopBar from '../bars/TopBar'
import {MarginPages} from '../../styles/MarginPages'
import ClintInformation from './ClintInformation'
import DeleteClint from './DeleteClint'


const Clint = ({HandelShow , showCustomer ,HandelShowCustomer ,HandelClose }) => {
  return (
    <MarginPages>
    <TopBar title={"العميل"} HandelShow={HandelShow} />
    <StyleFlex>
     <ClintInformation HandelShowCustomer={HandelShowCustomer}  />
     <DeleteClint showCustomer={showCustomer} HandelClose={HandelClose} />
    </StyleFlex>
    </MarginPages>
  )
}

const StyleFlex = styled.div`
display: flex;
justify-content: space-between;
margin-top: 33px;
width: 100%;
@media (max-width:910px) {
  flex-direction: column;
  margin-top: 13px;
}
`
export default Clint