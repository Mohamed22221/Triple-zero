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
                    <input type="date"  />
                 </div> 
                
            </StyleSmaleDiv>
            <StyleSmaleDiv>
                <div className='one-input'>
                    <StyleLabel>اضف شعار للعميل</StyleLabel>
                    <input type="file" />
                </div>
                <div className='one-input'> 
                    <StyleLabel>مده الاشتراك <span>*</span></StyleLabel>
                    <input type="number"  />
                 </div> 
            </StyleSmaleDiv>
            <StyleSmaleDiv>
                <div className='one-input'>
                    <StyleLabel>اسم العميل <span>*</span></StyleLabel>
                    <input type="text" placeholder='اكتب اسم العميل' />
                </div>
                <div className='one-input'> 
                    <StyleLabel>اسم الشركه <span>*</span></StyleLabel>
                    <input type="text" placeholder='اكتب اسم الشركه'/>
                 </div> 
            </StyleSmaleDiv>
            <StyleSmaleDiv>
                <div className='one-input'>
                    <StyleLabel>نوع تجاره العميل <span>*</span></StyleLabel>
                    <input type="text" placeholder='اكتب نوع التجاره' />
                    <StyleLabel>ايميل العميل <span>*</span></StyleLabel>
                    <input type="email" placeholder='اكتب اميل العميل'/>
                    <StyleLabel> رابط الموقع <span>*</span></StyleLabel>
                    <input type="text" placeholder='اكتب رابط الموقع' />
               </div> 
            </StyleSmaleDiv>
            <StyleSmaleDiv>
                <div className='one-input'>
                    <StyleLabel> العمله <span>*</span></StyleLabel>
                    <select className="currency" id="cars" form="carform" >
                    <option value="volvo">Egy</option>
                    <option value="saab">Kut</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                    </select>
                </div>
                <div className='one-input'> 
                    <StyleLabel>سعر الاشتراك <span>*</span></StyleLabel>
                    <input type="text" placeholder='اكتب سعر الاشتراك'/>
                 </div> 
            </StyleSmaleDiv>

        </StyleForm>
    </StyleMainInput>
  )
}
const StyleMainInput = styled.div`
overflow-y: auto;
overflow-x: hidden;
padding: 15px 0;

::-webkit-scrollbar {
  width: 0px;
}
`
const StyleForm = styled.form`

`
const StyleLabel= styled.label`
font-weight: bold;
span{
    color: var(--danger-color);
}
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
    input {
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

input,.currency{
    width: 230px;
    margin: 8px 0 8px 10px;
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
input[type=file] {
background-color: var(--secound-color);
color: white;
opacity: 0.9;
}
//class
.one-input{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}
.currency{
    font-weight: bold;
}



`


export default InputCustomer