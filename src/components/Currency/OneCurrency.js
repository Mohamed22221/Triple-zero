import React, {useEffect} from 'react'
import styled from "styled-components"
import TopBar from '../bars/TopBar'
import {MarginPages} from '../../styles/MarginPages'
import Currencyinformation from './Currencyinformation'

import { useSelector, useDispatch } from 'react-redux'
import {getCurrencyDetails} from '../../store/CurrencySlice'
import { useParams } from 'react-router'


const OneCurrency = ({HandelShow , showCustomer ,HandelShowCustomer ,HandelClose ,HandelStopCustomer ,showStopClint }) => {
    const dispatch = useDispatch()
    let { clintid } = useParams();
    useEffect(() => {
        dispatch(getCurrencyDetails(clintid))
    }, [getCurrencyDetails])
  
    //TODO: clientDetails
    const clientDetails = useSelector(state => state.currency.CurrencyDetails)
  return (
    <MarginPages>
    <TopBar title={"المدير"} HandelShow={HandelShow} />
    
    <StyleFlex>
     <Currencyinformation HandelShowCustomer={HandelShowCustomer} HandelStopCustomer={HandelStopCustomer} clientDetails={clientDetails}  />

    </StyleFlex>
    
    </MarginPages>
  
  )
}

const StyleFlex = styled.div`
display: flex;
justify-content: space-between;
margin-top: 33px;
width: 100%;
border: 1px solid var(--background-opacity);
border-radius: 40px;
@media (max-width:910px) {
  flex-direction: column;
  margin-top: 13px;
}
`
export default OneCurrency