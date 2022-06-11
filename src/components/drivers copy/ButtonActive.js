import React from 'react'
import styled from "styled-components"
import { GoPrimitiveDot } from 'react-icons/go';
import { Link } from 'react-router-dom';
const ButtonActive = () => {
  return (
      <>
        <Link to="ActiveDrivers">
            <MainButttonActive>
                 <GoPrimitiveDot />
                 <h6> السائقين النشطاء</h6>
            </MainButttonActive>
        </Link>
    </>
  )
}
const MainButttonActive = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
background-color: white;
padding: 12px 20px;
border: 1px solid;
border-radius: 5px;
color: var(--font);
svg{
    color:green;
    font-size: 22px;
    margin-left: 5px;
}
`
export default ButtonActive