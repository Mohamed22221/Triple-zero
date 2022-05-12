import React,{useState ,useEffect} from 'react'
import styled from "styled-components"
import { MarginPages } from '../../styles/MarginPages'
import TopBar from '../bars/TopBar'
import IconsSort from '../customers/IconsSort'
import SearchCustomer from '../customers/SearchCustomer'
import SortBy from '../customers/SortBy'
import ButtonReturn from '../glopal/ButtonReturn'
import TabelBlackList from './TabelBlackList'
import { useSelector } from 'react-redux'

const MainBlackList = ({HandelShow }) => {
  const DataBlackList = useSelector((state) => state.clint.blackList)
  const [searchSort , setSortSearch] = useState("") 
          //sort tabel 
          const [sortedField, setSortedField] = useState([]);
          useEffect(() => {
              setSortedField(sortName)
          }, [setSortedField ,DataBlackList])
      
          const sortData = [...DataBlackList].sort((a , b)=>{
              return a.state > b.state ? 1 : -1;
          })
          const sortName = [...DataBlackList].sort((a , b)=>{
              return a.name < b.name ? 1 : -1;
          })
          const sortDuration = [...DataBlackList].sort((a , b)=>{
              return a.duration > b.duration ? 1 : -1;
          })
          const sortpaymentDate = [...DataBlackList].sort((a , b)=>{
              const dateA = new Date(a.paymentDate), dateB = new Date(b.paymentDate)
              return dateB - dateA
          })
  return (
    <MarginPages>
     <TopBar title="العملاء " HandelShow={HandelShow}  /> 
    <StyleFlex>
      <StyleHeader>
        <h3>القائمه السوداء</h3>
        <IconsSort />
        <SearchCustomer  searchSort={searchSort} setSortSearch={setSortSearch}  />
        <SortBy 
        titleName={"تاريخ الحذف"}
        titleDuration={"تاريخ الاشتراك"}
        setSortedField={setSortedField} 
        sortData={sortData}
        sortName={sortName} 
        sortDuration={sortDuration} 
        sortpaymentDate={sortpaymentDate} 
        />
        <ButtonReturn />
      </StyleHeader>
      <TabelBlackList searchSort={searchSort} setSortSearch={setSortSearch} sortedField={sortedField}  />
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