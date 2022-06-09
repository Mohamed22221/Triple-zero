import React , {useState ,useEffect} from 'react'
import styled from "styled-components"
import TopBar from '../components/bars/TopBar'
import ClintForm from '../components/customers/ClintForm'
import TabelAllUsers from '../components/customers/TabelAllUsers'
import GlopalTabel from '../components/glopal/GlopalTabel'
import {MarginPages} from '../styles/MarginPages'
import { useSelector, useDispatch } from 'react-redux'

const Customers = ({HandelShow ,HandelShowCustomer ,showCustomer ,HandelClose ,show,setShow }
  
  ) => {

  //sort search
  const [searchSort , setSortSearch] = useState("") 
  const UserData = useSelector((state) => state.clint.DataUser)

  return (
    <MarginPages>
        <TopBar title={"المطاعم"} HandelShow={HandelShow} />
        
        <TabelAllUsers searchSort={searchSort} setSortSearch={setSortSearch} HandelShowCustomer={HandelShowCustomer}  />
        
    </MarginPages>
  )
}

const StyleFlex = styled.div`

`
export default Customers