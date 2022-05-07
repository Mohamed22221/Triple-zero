import React from 'react'
import { useParams } from 'react-router'
import styled from "styled-components"
import UserData from '../../data/UsersData'
import AboutClint from './AboutClint'
import HeaderButton from './HeaderButton'
const ClintInformation = () => {
    const Params = useParams()
    const ParamsId = `${Params.clintid}`
   
  return (
    <MainStyleClint>
        <HeaderButton />
        {UserData.filter((item => item.name === ParamsId)).map(user =>{
        return (
            <ItemStyleClint key={user.id}>
                <AboutClint 
                logo={user.logo} 
                name={user.name} 
                idUser={user.idUser}
                dateSubscription={user.dateSubscription} 
                duration={user.duration}
                paymentDate={user.paymentDate}
                state={user.state}
                />
            </ItemStyleClint>
            
        )
    })}
    </MainStyleClint>
  )
}
const MainStyleClint = styled.div`
width: 100%;
height: 85vh;
border: 1px solid var(--font-opacity);
border-radius: 50px;
@media (max-width: 550px ) {
    height: 100%; 
}
`
const ItemStyleClint = styled.div`
`

export default ClintInformation