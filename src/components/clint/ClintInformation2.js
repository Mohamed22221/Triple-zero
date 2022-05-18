import React from 'react'
import { useParams } from 'react-router'
import styled from "styled-components"
import AboutClint from './AboutClint'
import HeaderButton from './HeaderButton'
import TabelClient from './TabelClient'
import { useSelector } from 'react-redux'

const ClintInformation2 = ({HandelShowCustomer,HandelStopCustomer }) => {
    const UserData = useSelector((state) => state.clint.DataUser)
    const Params = useParams()
    const ParamsId = `${Params.clintid}`
   
  return (

    <MainStyleClint>
        <ItemStyleClint key='{user.idUser}' >
            <AboutClint
              id='{user.id} '
              logo='{user.logo}'
              idUser='{user.idUser} '
              name='{user.name} '
              dateSubscription='{user.dateSubscription} '
              compony='{user.compony}'
            />
      </ItemStyleClint>  
    </MainStyleClint>
  )
}
const MainStyleClint = styled.div`
width: 100%;

`
const ItemStyleClint = styled.div`
`

export default ClintInformation2