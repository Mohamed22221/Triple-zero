import React, {useEffect} from 'react';
import styled from "styled-components";
import TopBar from '../../bars/TopBar';
import {MarginPages} from '../../../styles/MarginPages';
import ClintInformation from './Information';
import { useSelector, useDispatch } from 'react-redux';
import { getDriverDetails } from '../../../store/DriverSlice';
import { useParams } from 'react-router';


const Clint = ({HandelShow }) => {
  const dispatch = useDispatch()
  let { driverId } = useParams();
  useEffect(() => {
    dispatch(getDriverDetails(driverId))
  }, [getDriverDetails])

  //TODO: clientDetails
  const clientDetails = useSelector(state => state.drivers.driverDetails)
  
  // console.log('clientDetails____1', clientDetails);
  return (
    <MarginPages>
    <TopBar title={"السائق"} HandelShow={HandelShow} />
    
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