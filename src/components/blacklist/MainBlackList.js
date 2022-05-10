import React from 'react'
import styled from "styled-components"
import { MarginPages } from '../../styles/MarginPages'
import TopBar from '../bars/TopBar'
import IconsSort from '../customers/IconsSort'
import SearchCustomer from '../customers/SearchCustomer'
import SortBy from '../customers/SortBy'
import { BiArrowBack } from 'react-icons/bi';
import ButtonReturn from '../glopal/ButtonReturn'
import TabelBlackList from './TabelBlackList'

const MainBlackList = () => {
  return (
    <MarginPages>
     <TopBar title="العملاء "  /> 
    <StyleFlex>
      <StyleHeader>
        <h3>القائمه السوداء</h3>
        <IconsSort />
        <SearchCustomer />
        <SortBy />
        <ButtonReturn />
      </StyleHeader>
      <TabelBlackList />
    </StyleFlex>
    </MarginPages>
  )
}
const StyleFlex = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
padding: 50px ;
@media (max-width:910px) {
  flex-direction: column;
  padding: 5px ;
}

`
const StyleHeader = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-evenly;
box-shadow: 1px 8px 19px 4px rgba(141,141,141,0.48);
-webkit-box-shadow: 1px 8px 19px 4px rgba(141,141,141,0.48);
-moz-box-shadow: 1px 8px 19px 4px rgba(141,141,141,0.48);
@media (max-width: 770px ) {
box-shadow:0px 0 0 0 ;
-webkit-box-shadow: 0 0 0 0;
-moz-box-shadow: 0 0 0 0;
}
border-bottom:0 ;
padding: 18px 0;
width: 100%;

`


export default MainBlackList