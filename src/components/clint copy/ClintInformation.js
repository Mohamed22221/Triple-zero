import React ,{useEffect} from 'react'
import { useParams  } from 'react-router'
import styled from "styled-components"
import AboutClint from './AboutClint'
import HeaderButton from './HeaderButton'
import TabelClient from './TabelClient'
import { useDispatch, useSelector } from 'react-redux'
import {getClientDetails} from './../../store/ClintSlice2'
import { SendClint } from '../../store/ClintSlice2';

const ClintInformation = ({HandelShowCustomer,HandelStopCustomer ,clientDetails }) => {


  console.log('clientDetails', clientDetails.id);

    
  return (
    <MainStyleClint>
         
      
         
        <ItemStyleClint key={clientDetails.idUser} >

          <HeaderButton
            HandelShowCustomer={HandelShowCustomer}
            HandelStopCustomer={HandelStopCustomer}
            logo={clientDetails.logo} 
            name={clientDetails.en_name} 
            mobile={clientDetails.mobile} 
            compony={clientDetails.compony} 
            id={clientDetails.id} 
            status={clientDetails.status} 
            />
            <AboutClint
              id={clientDetails.user_id} 
              logo={clientDetails.photo}
              idUser={clientDetails.user_id} 
              nameEn={clientDetails.en_name} 
              nameAr={clientDetails.ar_name} 

              mobile={clientDetails.mobile} 
              telephone={clientDetails.telephone}
            />
           <TabelClient
            logo={clientDetails.photo} 
            id={clientDetails.id}
            name={clientDetails.en_name} 
            idUser={clientDetails.user_id}
            number={clientDetails.mobile} 
            telephone={clientDetails.telephone}
            state={clientDetails.status}
            clintemail={clientDetails.email}
            websitelink={clientDetails.address}
            tradetype={clientDetails.email}
            currencypaid={clientDetails.status}
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

export default ClintInformation