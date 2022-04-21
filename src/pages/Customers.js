import React from 'react'
import styled from "styled-components"
import TopBar from '../components/bars/TopBar'
import TabelAllUsers from '../components/customers/TabelAllUsers'
import {MarginPages} from '../styles/MarginPages'

const Customers = ({HandelShow}) => {

  
  return (
    <MarginPages>
        <TopBar title={"العملاء"} HandelShow={HandelShow} />
        <TabelAllUsers />
    </MarginPages>
  )
}

const StyleFlex = styled.div`

`
export default Customers