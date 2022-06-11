import React, { useState } from 'react'
import styled from "styled-components"
import TopBar from '../components/bars/TopBar'
// import AddManager from '../components/Managers/AddManager'
import TabelManagers from '../components/Managers/TabelAllUsers'
import {MarginPages} from '../styles/MarginPages'

const Managers = ({HandelShow }) => {
  const [searchSort , setSortSearch] = useState("") 
  return (
    <MarginPages>
    <TopBar title={"المشرفين"} HandelShow={HandelShow} />
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