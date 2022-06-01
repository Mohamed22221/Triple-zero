import React from 'react'
import styled from "styled-components"
import TopBar from '../components/bars/TopBar'
import TabelDrivers from '../components/drivers/TabelDrivers'
import {MarginPages} from '../styles/MarginPages'

const Drivers = ({HandelShow}) => {
  return (
    <MarginPages>
    <TopBar title={"السواقين"} HandelShow={HandelShow} />
    <StyleFlex>
        <TabelDrivers />
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
export default Drivers