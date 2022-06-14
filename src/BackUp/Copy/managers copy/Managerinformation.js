import React ,{useEffect} from 'react'
import { useParams  } from 'react-router'
import styled from "styled-components"
import AboutClint from './AboutClint'

import TabelClient from './TabelClient'
import { useDispatch, useSelector } from 'react-redux'
import {getClientDetails} from '../../store/ClintSlice2'
import { SendClint } from '../../store/ClintSlice2';
import HeaderButton from './HeaderButton'

const ClintInformation = ({HandelShowCustomer,HandelStopCustomer ,clientDetails }) => {


  // console.log('clientDetails', clientDetails.id);

    
  return (
    <MainStyleClint>
         
      
         
        <ItemStyleClint key={clientDetails.idUser} >

        <HeaderButton
            HandelShowCustomer={HandelShowCustomer}
            HandelStopCustomer={HandelStopCustomer}
            logo={clientDetails.logo} 
            name={clientDetails.name} 

            id={clientDetails.id} 
            status={clientDetails.status} 
            />
            <AboutClint
              id={clientDetails.id} 
              logo={clientDetails.photo}
              nameEn={clientDetails.name} 
           
            />
           <TabelClient
            id={clientDetails.id}
            idUser={clientDetails.user_id}
            state={clientDetails.status}
            clintemail={clientDetails.email}
            isOnline={clientDetails.isOnline}
            created_at={clientDetails.created_at}
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