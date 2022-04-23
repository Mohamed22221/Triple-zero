import React ,{useState} from 'react'
import styled from "styled-components"

const SortBy = () => {
  //active and unactive click span
  const [active, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!active);
  }
  return (
    <StyleSortBy    >
      <span  >ترتيب حسب : </span>
      <span className={active? ' active' : ''} onClick={toggleClass} > الاسم </span><button ></button>
      <span className={active? ' active' : ''} onClick={toggleClass}  >الحالة </span>
      <span>تاريخ الدفع </span>
      <span>المده </span>
    </StyleSortBy>
  )
}
const StyleSortBy = styled.div`
.active{
  color: var(--primary-color);
}
span{
  margin-left: 11px;
  color: var(--font);
  &:not(:first-child){
    cursor: pointer;
  }
  &:first-child{
    font-weight: bold;
  }

}

`


export default SortBy