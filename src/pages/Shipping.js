import React, { useState } from 'react'
import styled from "styled-components"
import TopBar from '../components/bars/TopBar'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom';
// import AddShipping from '../components/Shipping/AddShipping'
import TabelShipping from '../components/Shipping/TabelAllUsers'
import { MarginPages } from '../styles/MarginPages'
const Shipping = ({ HandelShow }) => {
  const [searchSort, setSortSearch] = useState("")
  const location = useLocation();
  const UserData = useSelector(state => state.shipping.shipping)
  const UserDataBlackList = UserData.filter(statusItem => statusItem.status == 0)

  const pathname = location.pathname.includes('black-list')

  return (
    <MarginPages>
      <TopBar title={" الشحن"} HandelShow={HandelShow} />
      <StyleFlex>
        {/* <TabelShipping UserData={UserData} searchSort={searchSort} setSortSearch={setSortSearch} /> */}
        <TabelShipping UserData={!pathname ? UserData : UserDataBlackList} searchSort={searchSort} setSortSearch={setSortSearch} />

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
export default Shipping