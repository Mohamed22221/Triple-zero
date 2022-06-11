import React, {useEffect} from 'react'
import styled from "styled-components"
import TopBar from '../bars/TopBar'
import {MarginPages} from '../../styles/MarginPages'
import ClintInformation from './ClintInformation'

import { useSelector, useDispatch } from 'react-redux'
import {getShippingDetails} from '../../store/ShippingSlice'
import { useParams } from 'react-router'


const Clint = ({HandelShow , showCustomer ,HandelShowCustomer ,HandelClose ,HandelStopCustomer ,showStopClint }) => {
    const dispatch = useDispatch()
    let { id } = useParams();
    useEffect(() => {
        dispatch(getShippingDetails(id))
    }, [getShippingDetails])
  
    //TODO: clientDetails
    const clientDetails = useSelector(state => state.shipping.ShippingDetailsDetails)
  return (
    <MarginPages>
    <TopBar title={"الشركه"} HandelShow={HandelShow} />
    
    <StyleFlex>
     <ClintInformation HandelShowCustomer={HandelShowCustomer} HandelStopCustomer={HandelStopCustomer} clientDetails={clientDetails}  />

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
export default Clint