import React , {useState ,useEffect} from 'react'
import styled from "styled-components"
import TopBar from '../components/bars/TopBar'
import ClintForm from '../components/customers/ClintForm'
import TabelAllUsers from '../components/customers/TabelAllUsers'
import {MarginPages} from '../styles/MarginPages'

const Customers = ({HandelShow ,HandelShowCustomer ,showCustomer ,HandelClose}) => {
  //sort search
  const [searchSort , setSortSearch] = useState("") 

  return (
    <MarginPages>
        <TopBar title={"العملاء"} HandelShow={HandelShow} />
        <ClintForm showCustomer={showCustomer} HandelClose={HandelClose} />
        <TabelAllUsers searchSort={searchSort} setSortSearch={setSortSearch} HandelShowCustomer={HandelShowCustomer}  />
    </MarginPages>
  )
}

const StyleFlex = styled.div`

`
export default Customers