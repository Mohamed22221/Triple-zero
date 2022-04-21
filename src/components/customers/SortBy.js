import React from 'react'
import styled from "styled-components"

const SortBy = () => {
  return (
    <StyleSortBy>
      <span>ترتيب حسب : </span>
      <span> الاسم </span>
      <span>الحالة </span>
      <span>تاريخ الدفع </span>
      <span>المده </span>
    </StyleSortBy>
  )
}
const StyleSortBy = styled.div`
span{
  margin-left: 11px;
  color: var(--font);
  &:not(:first-child){
    cursor: pointer;
  }
  &:first-child{
    font-weight: bold;
  }
  &:nth-child(2){
    color: var(--primary-color);
  }
}

`


export default SortBy