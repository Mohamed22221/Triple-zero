import React from 'react'
import { useParams } from 'react-router'
import styled from "styled-components"
import AboutClint from './AboutClint'
import HeaderButton from './HeaderButton'
import TabelClient from './TabelClient'
import { useSelector } from 'react-redux'

const ClintInformation = ({HandelShowCustomer,HandelStopCustomer }) => {
    
    const clientDetails = useSelector(state => state.clients2.clients2)
    const Params = useParams()
    const ParamsId = `${Params.clintid}`
    
  return (
    <MainStyleClint>
         
      {clientDetails.filter((item => item.en_name === ParamsId)).map(user =>{
          return (
        <ItemStyleClint key={user.idUser} >

          <HeaderButton
            HandelShowCustomer={HandelShowCustomer}
            HandelStopCustomer={HandelStopCustomer}
            logo={user.logo} 
            name={user.en_name} 
            mobile={user.mobile} 
            compony={user.compony}  />
            <AboutClint
              id={user.user_id} 
              logo={user.photo}
              idUser={user.user_id} 
              name={user.en_name} 
              mobile={user.mobile} 
              telephone={user.telephone}
            />
           <TabelClient
            logo={user.photo} 
            name={user.en_name} 
            idUser={user.user_id}
            number={user.mobile} 
            telephone={user.telephone}
            state={user.status}
            clintemail={user.email}
            websitelink={user.address}
            tradetype={user.email}
            currencypaid={user.status}
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