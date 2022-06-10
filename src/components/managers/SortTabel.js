import React from 'react'
import styled from "styled-components"
import IconsSort from '../restaurants/IconsSort'
import ButtonAdd from './ButtonAdd'



import SearchCustomer from './SearchCustomer'
import SortBy from './SortBy'
const SortTabel = (props) => {
  const { setSortSearch ,searchSort ,setSortedField ,sortData, sortID ,sortName ,sortDuration ,sortpaymentDate } = props
  return (
    <StyleMainSort>
        <IconsSort />
        <SearchCustomer 
        searchSort={searchSort}
        setSortSearch={setSortSearch} 
        />
        <SortBy 
        setSortedField={setSortedField} 
        sortData={sortData}
        sortID={sortID}
        sortName={sortName} 
        sortDuration={sortDuration} 
        sortpaymentDate={sortpaymentDate}
        titleName={"الايميل"}
       
        />
        <ButtonAdd />

    </StyleMainSort>
  )
}
const StyleMainSort = styled.div`
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
`


export default SortTabel