import React from 'react'
import styled from "styled-components"
const InputCustomer = () => {
  return (
    <StyleMainInput>
        <StyleForm>
            <StyleSmaleDiv>
                <div className='one-input  '>
                    <StyleLabel>رقم العميل</StyleLabel>
                    <input type="text" placeholder='#An152sa'  />
                </div>
                <div className='one-input'> 
                    <StyleLabel>تاريخ الاشتراك</StyleLabel>
                    <input type="date"  placeholder='#An152sa' />
                 </div> 
                
            </StyleSmaleDiv>
            <StyleSmaleDiv>
                <div className='one-input'>
                    <StyleLabel>اضف شعار للعميل</StyleLabel>
                    <input type="file" />
                </div>
                <div className='one-input'> 
                    <StyleLabel>مده الاشتراك*</StyleLabel>
                    <input type="number" />
                 </div> 
            </StyleSmaleDiv>
            <StyleSmaleDiv>
                <div className='one-input'>
                    <StyleLabel>اسم العميل*</StyleLabel>
                    <input type="text" placeholder='اكتب اسم العميل' />
                </div>
                <div className='one-input'> 
                    <StyleLabel>اسم الشركه*</StyleLabel>
                    <input type="text" placeholder='اكتب اسم الشركه'/>
                 </div> 
            </StyleSmaleDiv>
            <StyleSmaleDiv>
                <div className='one-input'>
                    <StyleLabel>نوع تجاره العميل *</StyleLabel>
                    <input type="text" placeholder='اكتب نوع التجاره' />
                    <StyleLabel>ايميل العميل *</StyleLabel>
                    <input type="email" placeholder='اكتب اميل العميل'/>
                    <StyleLabel> رابط الموقع</StyleLabel>
                    <input type="text" placeholder='اكتب رابط الموقع' />
               </div> 
            </StyleSmaleDiv>
            <StyleSmaleDiv>
                <div className='one-input'>
                    <StyleLabel> العمله*</StyleLabel>
                    <select name="cars" id="cars" form="carform" >
                    <option value="volvo">Egy</option>
                    <option value="saab">Kut</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                    </select>
                </div>
                <div className='one-input'> 
                    <StyleLabel>سعر الاشتراك*</StyleLabel>
                    <input type="text" placeholder='اكتب سعر الاشتراك'/>
                 </div> 
            </StyleSmaleDiv>

        </StyleForm>
    </StyleMainInput>
  )
}
const StyleMainInput = styled.div`
overflow-y: auto;
padding: 25px 0;
::-webkit-scrollbar {
  width: 0px;
}
`
const StyleForm = styled.form`
 
`
const StyleLabel= styled.label`
font-weight: bold;

`
const StyleSmaleDiv = styled.div`
display: flex;
align-items: center;
@media (max-width:550px ) {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
}
&:first-child{
    opacity: 0.6;
}
&:nth-child(4){
    input{
    width: 470px;
     @media (max-width:550px ) {
    width:290px;
    padding: 10px 30px;
    }
    @media (max-width:370px ) {
    width:220px;
    padding: 10px 30px;
}

    }
}

input{
    width: 230px;
    margin: 10px 0 10px 10px;
    padding: 8px 12px;
    border: 1px solid var(--font-opacity);
    border-radius: 20px;

@media (max-width:550px ) {
    width:290px;
    padding: 10px 30px;
}
@media (max-width:370px ) {
    width:220px;
    padding: 10px 30px;
}
}
.one-input{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}

`


export default InputCustomer