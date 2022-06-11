import React, {useEffect} from 'react';
import styled from "styled-components";
import TopBar from '../../bars/TopBar';
import {MarginPages} from '../../../styles/MarginPages';
import ClintInformation from './Information';
import { useSelector, useDispatch } from 'react-redux';
import {getShippingDetails} from '../../../store/ShippingSlice';
import { useParams } from 'react-router';


const Clint = ({HandelShow }) => {
  const dispatch = useDispatch()
  let { shippingId } = useParams();
  useEffect(() => {
      dispatch(getShippingDetails(shippingId))
  }, [getShippingDetails])

  //TODO: clientDetails
  const clientDetails = useSelector(state => state.shipping.ShippingDetailsDetails)
  return (
    <MarginPages>
    <TopBar title={"المطعم"} HandelShow={HandelShow} />
    
    <StyleFlex>
     <ClintInformation clientDetails={clientDetails}  />
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