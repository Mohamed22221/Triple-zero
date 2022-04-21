import React from 'react'
import styled from "styled-components"
import TopBar from '../components/bars/TopBar'
import TabelAllUsers from '../components/customers/TabelAllUsers'
import TabelUsers from '../components/home/TabelUsers'
import {MarginPages} from '../styles/MarginPages'

const Customers = ({HandelShow}) => {

  
  return (
    <MarginPages>
        <TopBar title={"العملاء"} HandelShow={HandelShow} />
        <StyleFlex>
        <TabelAllUsers />
        </StyleFlex>
    </MarginPages>
  )
}

const StyleFlex = styled.div`

`
export default Customers