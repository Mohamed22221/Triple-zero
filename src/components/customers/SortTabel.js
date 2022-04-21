import React from 'react'
import styled from "styled-components"
import AddClint from './AddClint'
import BlackList from './BlackList'
import IconsSort from './IconsSort'
import SearchCustomer from './SearchCustomer'
import SortBy from './SortBy'
const SortTabel = () => {
  return (
    <StyleMainSort>
        <BlackList />
        <IconsSort />
        <SearchCustomer />
        <SortBy />
        <AddClint />
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
border-bottom:0 ;
padding: 18px 0;
`


export default SortTabel