import React, { useState } from 'react'
import styled from "styled-components"
import TopBar from '../components/bars/TopBar'
import AddManager from '../components/managers/AddManager'
import TabelManagers from '../components/managers/TabelManagers'
import {MarginPages} from '../styles/MarginPages'

const Managers = ({HandelShow ,HandelShowCustomer }) => {
  const [searchSort , setSortSearch] = useState("") 
  return (
    <MarginPages>
    <TopBar title={"المديرين"} HandelShow={HandelShow} />
    <StyleFlex>
        <TabelManagers searchSort={searchSort} setSortSearch={setSortSearch} />
        
       
    </StyleFlex>
  </MarginPages>
  )
}
const StyleFlex = styled.div`
display: flex;
justify-content: space-between;
@media (max-width:910px) {
  flex-direction: column;
}
`
export default Managers