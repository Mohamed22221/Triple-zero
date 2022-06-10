import React from 'react';
import { useLocation } from 'react-router-dom';
import ButtonAdd from './ButtonAdd';
import BlackList from './BtnBlackList';
import { AiOutlineBars } from 'react-icons/ai';
import { AiOutlineAppstore } from 'react-icons/ai';
import SearchCustomer from './Search';
import SortBy from './SortBy';
import ButtonReturn from '../glopal/ButtonReturn';




const SortTabel = (props) => {
  const { HandelShowCustomer, setSortSearch, searchSort, setSortedField, sortData, sortID, sortName, sortDuration, sortpaymentDate, listView, setListView } = props
  const location = useLocation();


  return (
    <div className='style-main-sort'>
      {
        location.pathname.includes('black-list') ? null : <BlackList />
      }

      <div className='style-icons-sort'>
        <AiOutlineBars className={`sort-icon ${listView ? 'active': '' }`} onClick={() => setListView(true)}  />
        <AiOutlineAppstore className={`sort-icon ${!listView ? 'active' : ''}`} onClick={() => setListView(false)} />
      </div>
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
        titleName={"تاريخ الدفع"}
        titleDuration={"المده"}
      />
      {location.pathname.includes('black-list') ? <ButtonReturn title='/restaurants' /> :
        <ButtonAdd
          HandelShowCustomer={HandelShowCustomer}
        />
      }
    </div>
  )
}



export default SortTabel