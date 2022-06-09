import React from 'react'
import styled from "styled-components"
import { MdPersonAddAlt } from 'react-icons/md';
import ButtonAdd from './ButtonAdd';
const AddClint = ({HandelShowCustomer }) => {
  return (
    <StyleAddClint onClick={HandelShowCustomer}>
      <ButtonAdd />
    </StyleAddClint>
  )
}
const StyleAddClint = styled.div`
`


export default AddClint