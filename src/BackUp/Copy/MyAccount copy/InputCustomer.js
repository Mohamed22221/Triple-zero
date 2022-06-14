import React ,{useState} from 'react'

import styled from "styled-components"

const InputCustomer = ({values , setValues}) => {
const ImgeHandeler = (e) =>{
    const Reader = new FileReader()
    Reader.onload = () =>{
        if (Reader.readyState === 2) {
            setValues({...values , logo: Reader.result }) 
        }
    }
    Reader.readAsDataURL(e.target.files[0])
}
   
  return (
    <StyleMainInput>
        <StyleForm>
            <StyleSmaleDiv>
                <div className='one-input  '>
                    <StyleLabel>رقم العميل</StyleLabel>
                    <input type="text" placeholder='#As578' value={values.idUser} disabled     />
                </div>
                <div className='one-input'> 
                    <StyleLabel>تاريخ الاشتراك</StyleLabel>
                    <input type="text"  value={values.dateSubscription} disabled  />
                 </div> 
                
            </StyleSmaleDiv>
            <StyleSmaleDiv>
                <div className='one-input'>
                    <StyleLabel>اضف شعار للعميل</StyleLabel>
                    <input type="file" onChange={ImgeHandeler} />
                </div>
                <div className='one-input'> 
                    <StyleLabel>مده الاشتراك <span>*</span></StyleLabel>
                    <input type="number" value={values.duration}  onChange={(e) =>setValues({...values , duration:e.target.value}) } />
                 </div> 
            </StyleSmaleDiv>
            <StyleSmaleDiv>
                <div className='one-input'>
                    <StyleLabel>اسم العميل <span>*</span></StyleLabel>
                    <input type="text" placeholder='اكتب اسم العميل' value={values.name} onChange={(e) =>setValues({...values , name:e.target.value}) } />
                </div>
                <div className='one-input'> 
                    <StyleLabel>اسم الشركة <span>*</span></StyleLabel>
                    <input type="text" placeholder='اكتب اسم الشركة' value={values.compony} onChange={(e) =>setValues({...values , compony:e.target.value}) }/>
                 </div> 
            </StyleSmaleDiv>
            <StyleSmaleDiv>
                <div className='one-input'>
                    <StyleLabel>الحالة<span>*</span></StyleLabel>
                    <input type="text" placeholder='اكتب نوع التجاره' value={values.state} onChange={(e) =>setValues({...values , state:e.target.value}) }  />
                    <StyleLabel>ايميل العميل <span>*</span></StyleLabel>
                    <input type="email" placeholder='اكتب اميل العميل' value={values.clintemail} onChange={(e) =>setValues({...values , clintemail:e.target.value}) }/>
                    <StyleLabel> رابط الموقع <span>*</span></StyleLabel>
                    <input type="text" placeholder='اكتب رابط الموقع' value={values.websitelink} onChange={(e) =>setValues({...values , websitelink:e.target.value}) } />

               </div> 
            </StyleSmaleDiv>
            <StyleSmaleDiv>
                <div className='one-input'>
                    <StyleLabel> العمله <span>*</span></StyleLabel>
                    <select className="currency" id="cars" form="carform" value={values.currencypaid} onChange={(e) =>setValues({...values , currencypaid:e.target.value}) } >
                    <option value="مصري">مصري</option>
                    <option value="كويتي">كويتي</option>
                    </select>
                </div>
                <div className='one-input'> 
                    <StyleLabel>سعر الاشتراك <span>*</span></StyleLabel>
                    <input type="text" placeholder='اكتب سعر الاشتراك' value={values.price} onChange={(e) =>setValues({...values , price:e.target.value}) } />
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