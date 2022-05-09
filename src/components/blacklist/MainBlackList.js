import React from 'react'
import styled from "styled-components"
import { MarginPages } from '../../styles/MarginPages'
const MainBlackList = () => {
  return (
    <MarginPages>
    <StyleFlex>Mainsssssssssssssssssssssssssssssssssssssssss</StyleFlex>
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
export default MainBlackList