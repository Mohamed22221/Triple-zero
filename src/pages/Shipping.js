import React from 'react'
import styled from "styled-components"
import TopBar from '../components/bars/TopBar'
import TabelShipping from '../components/shipping/TabelShipping'
import {MarginPages} from '../styles/MarginPages'
const Shipping = ({HandelShow}) => {
  return (
    <MarginPages>
        <TopBar title={" الشحن"} HandelShow={HandelShow} />
        <StyleFlex>
            <TabelShipping />
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