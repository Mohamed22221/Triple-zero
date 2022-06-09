import React, { useState } from 'react'
import styled from "styled-components"
import TopBar from '../components/bars/TopBar'
import TabelCurrency from '../components/Currency/TabelCurrency'
import {MarginPages} from '../styles/MarginPages'

const Currencies = ({HandelShow ,HandelShowCustomer }) => {
  const [searchSort , setSortSearch] = useState("") 
  return (
    <MarginPages>
    <TopBar title={"العملات"} HandelShow={HandelShow} />
    <StyleFlex>
        <TabelCurrency searchSort={searchSort} setSortSearch={setSortSearch} />
         
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


export default Currencies