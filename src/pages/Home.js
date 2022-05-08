import React from 'react'
import styled from "styled-components"
import TopBar from '../components/bars/TopBar'
import TabelUsers from '../components/home/TabelUsers'
import Widgets from '../components/home/Widgets'
import {MarginPages} from '../styles/MarginPages'

const Home = ({HandelShow}) => {

  
  return (
    <MarginPages>
        <TopBar title={"الرئيسية"} HandelShow={HandelShow} />
        <StyleFlex>
        <TabelUsers  />
        <Widgets />
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
export default Home