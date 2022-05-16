import React from 'react'
import styled from "styled-components"

const MassegeEmbty = () => {
  return (
    <MainMassegeEmbty>
        
        <h3>السجل فارغ</h3>
    </MainMassegeEmbty>
  )
}

const MainMassegeEmbty = styled.div`
margin: 70px;
display: flex;
flex-direction: column;
align-items:center;
img{
    width: 150px;
    opacity: 0.7;
}
h3{
    color: var(--font);
    margin: 20px 0;
}
`
export default MassegeEmbty