import React ,{useState} from 'react'

import styled from "styled-components"

const InputCustomer = ({values , setValues}) => {
const ImgeHandeler = (e) =>{
    const Reader = new FileReader()
    Reader.onload = () =>{
        if (Reader.readyState === 2) {
            setValues({...values , photo: Reader.result }) 
        }
    }
    console.log('e.target.files[0]', e.target.files[0]);
    Reader.readAsDataURL(e.target.files[0])
}
   
  return (
    <StyleMainInput>
        <StyleForm>
            <StyleSmaleDiv>
                <div className='one-input  '>
                    <StyleLabel>رقم العميل</StyleLabel>
                    <input type="text" placeholder='#As578' value={values.user_id} disabled     />
                </div>

                
            </StyleSmaleDiv>
            <StyleSmaleDiv>
                <div className='one-input'>
                    <StyleLabel>اضف شعار للعميل</StyleLabel>
                    <input type="file" onChange={ImgeHandeler} />
                </div>

            </StyleSmaleDiv>
            <StyleSmaleDiv>
                <div className='one-input'>
                    <StyleLabel>اسم العميل <span>*</span></StyleLabel>
                    <input type="text" placeholder='اكتب اسم العميل' value={values.en_name} onChange={(e) =>setValues({...values , en_name:e.target.value}) } />
                </div>
                <div className='one-input'> 
                    <StyleLabel>رقم التلفون <span>*</span></StyleLabel>
                    <input type="text" placeholder='اكتب رقم التلفون' value={values.mobile} onChange={(e) =>setValues({...values , mobile:e.target.value}) }/>
                 </div> 
            </StyleSmaleDiv>
            <StyleSmaleDiv>
                <div className='one-input'>
                    <StyleLabel>رقم اخر <span>*</span></StyleLabel>
                    <input type="text" placeholder='اكتب رقم اخر' value={values.telephone} onChange={(e) =>setValues({...values , telephone:e.target.value}) }/>

                    <StyleLabel>ايميل العميل <span>*</span></StyleLabel>
                    <input type="email" placeholder='اكتب اميل العميل' value={values.email} onChange={(e) =>setValues({...values , email:e.target.value}) }/>
                    <StyleLabel>حاله الدفع<span>*</span></StyleLabel>
                    <input type="text" placeholder='اكتب حاله الدفع' value={values.status} onChange={(e) =>setValues({...values , status:e.target.value}) }  />
                    <StyleLabel>  العنوان <span>*</span></StyleLabel>
                    <input type="text" placeholder='اكتب العنوان الموقع' value={values.address} onChange={(e) =>setValues({...values , address:e.target.value}) } />

               </div> 
            </StyleSmaleDiv>

        </StyleForm>

    </StyleMainInput>
  )
}
const StyleMainInput = styled.div`
overflow-y: auto;
overflow-x: hidden;
padding: 20px 0;
margin-top: 30px;

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
    font-size: 14px;
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