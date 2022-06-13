
import React, { useState } from 'react'
import styled from "styled-components"
import { MarginPages } from '../../styles/MarginPages'
import TopBar from '../bars/TopBar'

import TabelBlackList from './TabelBlackList'
const DisActiveBlackList = () => {
  return (
    
        
        <MarginPages>
        <TopBar title={"القائمه السوداء"}  />
            <StyleFlex>
              <TabelBlackList />
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


export default DisActiveBlackList