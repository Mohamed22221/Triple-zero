import React from 'react'
import { useParams } from 'react-router'
import styled from "styled-components"
import AboutClint from './AboutClint'
import HeaderButton from './HeaderButton'
import TabelClient from './TabelClient'
import { useSelector } from 'react-redux'

const ClintInformation = ({HandelShowCustomer,HandelStopCustomer }) => {
    const UserData = useSelector((state) => state.clint.DataUser)
    const Params = useParams()
    const ParamsId = `${Params.clintid}`
   
  return (
    <MainStyleClint>
         
      {UserData.filter((item => item.name === ParamsId)).map(user =>{
          return (
        <ItemStyleClint key={user.idUser} >

          <HeaderButton
        HandelShowCustomer={HandelShowCustomer}
        HandelStopCustomer={HandelStopCustomer}
        logo={user.logo} 
        name={user.name} 
        dateSubscription={user.dateSubscription} 
        compony={user.compony}  />
        <AboutClint
        id={user.id} 
        logo={user.logo}
        idUser={user.idUser} 
        name={user.name} 
        dateSubscription={user.dateSubscription} 
        compony={user.compony}
        />
        <TabelClient
        logo={user.logo} 
        name={user.name} 
        idUser={user.idUser}
        dateSubscription={user.dateSubscription} 
        duration={user.duration}
        paymentDate={user.paymentDate}
        price={user.price}
        state={user.state}
        clintemail={user.clintemail}
        websitelink={user.websitelink}
        tradetype={user.tradetype}
        currencypaid={user.currencypaid}
        />

        
        
    </ItemStyleClint>  
          )
      })}
   

    
    </MainStyleClint>
  )
}
const MainStyleClint = styled.div`
width: 100%;

`
const ItemStyleClint = styled.div`
`

export default ClintInformation