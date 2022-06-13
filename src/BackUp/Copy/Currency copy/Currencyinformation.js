import React ,{useEffect} from 'react'
import styled from "styled-components"
import AboutCurrency from './AboutCurrency'
import TabelClient from './TabelClient'
import HeaderButton from './HeaderButton'

const Currencyinformation = ({HandelShowCustomer,HandelStopCustomer ,clientDetails }) => {


  console.log('clientDetails', clientDetails.id);

    
  return (
    <MainStyleClint>

        <ItemStyleClint key={clientDetails.id} >
        <HeaderButton
            HandelShowCustomer={HandelShowCustomer}
            HandelStopCustomer={HandelStopCustomer}
            logo={clientDetails.logo} 
            name={clientDetails.en_title} 
            id={clientDetails.id} 
            status={clientDetails.status} 
            />
            <AboutCurrency
              id={clientDetails.id} 
              nameEn={clientDetails.en_title} 
              nameAr={clientDetails.ar_title} 

           
            />
           <TabelClient
            id={clientDetails.id}
            symbol={clientDetails.symbol}
            exchange_rate={clientDetails.exchange_rate}

            sequence={clientDetails.sequence}
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

export default Currencyinformation