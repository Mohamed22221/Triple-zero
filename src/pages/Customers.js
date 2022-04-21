import React , {useState} from 'react'
import styled from "styled-components"
import TopBar from '../components/bars/TopBar'
import TabelAllUsers from '../components/customers/TabelAllUsers'
import {MarginPages} from '../styles/MarginPages'

const Customers = ({HandelShow}) => {
  //sort search
  const [searchSort , setSortSearch] = useState("") 
  
  return (
    <MarginPages>
        <TopBar title={"العملاء"} HandelShow={HandelShow} />
        <TabelAllUsers searchSort={searchSort} setSortSearch={setSortSearch} />
    </MarginPages>
  )
}

const StyleFlex = styled.div`

`
export default Customers