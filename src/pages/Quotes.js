import React, { useState } from 'react'
import styled from "styled-components"
import TopBar from '../components/bars/TopBar'
import TabelShipping from '../components/Quotes/TabelAllUsers'
import { MarginPages } from '../styles/MarginPages'
const Shipping = ({ HandelShow }) => {
  const [searchSort, setSortSearch] = useState("")
  return (
    <MarginPages>
      <TopBar title={" الاقتباسات"} HandelShow={HandelShow} />
      <StyleFlex>
        <TabelShipping searchSort={searchSort} setSortSearch={setSortSearch} />

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
export default Shipping